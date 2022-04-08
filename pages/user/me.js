import Layout from '../../components/Layout';

import Custom404 from '../404';
import ProfileCard from '../../components/PorifleCard';
import * as cookie from 'cookie'

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
        const { user } = cookie.parse(cookies);
        const res = await fetch(process.env.NEXT_PUBLIC_GET_DATA,
            {
                headers: {
                    "auth-token": user
                }
            });

        const userdata = await res.json();
        return {
            props: {
                user: userdata,
                isLoading: false
            }
        }
    }

    return {
        props: {
            user: null,
            isLoading: true
        }
    }
}