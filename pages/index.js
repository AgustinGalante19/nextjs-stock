import { useState } from 'react'
import * as cookie from 'cookie';
import Layout from '../components/Layout';
import Header from '../components/Header';
import AuthHeader from '../components/AuthHeader';

const index = ({ user, isLoading }) => {
    const [loading, setLoading] = useState(isLoading);
    /* return (
        <Layout username={user.name}>
            {
                loading ? (
                    <h1>loading...</h1>
                ) : (
                    user ? (
                        <AuthHeader username={user.name} />
                    ) : (
                        <Header />
                    )
                )

            }
        </Layout>
    ) */
    return (
        user ? (
            <Layout username={user.name}>
                {
                    loading ? (
                        <h1>loading...</h1>
                    ) : (
                        <AuthHeader username={user.name} />
                    )
                }
            </Layout>
        ) : (
            <Layout>
                <Header />
            </Layout>
        )
    )
}

export default index;

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