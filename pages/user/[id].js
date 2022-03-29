import Layout from '../../components/Layout';
import * as cookie from 'cookie';
import Custom404 from '../404';

const profile = ({ user }) => {
    return (
        user ? (
            <Layout username={user.username}>
                {
                    !user ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="contenedor">
                            <div className="col contenedor-profile py-4">
                                <p className="profile-text-header">Name</p>
                                <p className="profile-text">{user.name}</p>
                                <hr />
                                <p className="profile-text-header">Last name</p>
                                <p className="profile-text">{user.lastname}</p>
                                <hr />
                                <p className="profile-text-header">Email</p>
                                <p className="profile-text">{user.email}</p>
                                <hr />
                                <p className="profile-text-header">Description</p>
                                <p>soon...</p>
                            </div>
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
    const { id } = context.params;
    if (cookies) {
        const parsedCookies = cookie.parse(cookies);
        const res = await fetch(process.env.NEXT_PUBLIC_GET_USER + "/" + id, {
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