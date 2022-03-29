import Layout from '../../components/Layout';
import * as cookie from 'cookie';

import Custom404 from '../404';
import ProfileCard from '../../components/PorifleCard';


const profile = ({ user }) => {



    return (
        user ? (
            <Layout username={user.username}>
                {
                    !user ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="container">
                            <ProfileCard
                                name={user.name}
                                lastname={user.lastname}
                                username={user.username}
                                email={user.email}
                            />
                        </div>
                    )
                }
            </Layout>
        ) : (
            <Custom404 />
        )
    )
}

export default profile;

export async function getServerSideProps(context) {

    const cookies = context.req.headers.cookie;
    if (cookies) {
        const parsedCookies = cookie.parse(cookies);
        const res = await fetch(process.env.NEXT_PUBLIC_GET_DATA, {
            headers: {
                "auth-token": parsedCookies.user
            }
        });
        const user = await res.json();

        return {
            props: {
                user
            }
        }
    }
    return {
        props: {
            user: null
        }
    }
}