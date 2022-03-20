import Layout from '../components/Layout';
import ProfileCard from '../components/ProfileCard';
import * as cookie from 'cookie';
import Custom404 from './404';

const profile = ({ user }) => {
    return (
        user ? (
            <Layout username={user.username}>

                {
                    !user ? (
                        <p>Loading...</p>
                    ) : (
                        <ProfileCard
                            id={user._id}
                            username={user.username}
                            email={user.email}
                        />

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