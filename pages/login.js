import { useState } from 'react'
import Link from 'next/link';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Custom404 from './404';


const login = ({ user }) => {

    const [cookie, setCookie] = useCookies(["user"]);
    const router = useRouter();

    const [errormessage, setErrormessage] = useState("");


    const handleSignIn = async event => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const res = await axios.post(process.env.NEXT_PUBLIC_LOGIN, { username, password });
        if (res.status == 200) {
            setCookie("user", res.data.token, {
                path: "/",
                maxAge: 3600 * 24 * 7,
                sameSite: true
            });
            router.push("/");
        } else if (res.status == 203) {
            if (res.data.password == false) {
                const message = "Invalid password.";
                setErrormessage(message);
            }
            if (res.data.username == false) {
                const message = "Invalid username.";
                setErrormessage(message);
            }
        }
    }

    return (
        !user ? (
            <Layout>
                <div className="container">
                    <div className="row align-items-center py-4">
                        <div className="col form-user">
                            {
                                errormessage == "Invalid username." ? (
                                    <div className="alert alert-danger" role="alert">
                                        {errormessage}
                                    </div>
                                ) : errormessage == "Invalid password." ? (
                                    <div className="alert alert-danger drop-an" role="alert">
                                        {errormessage}
                                    </div>
                                ) : ""
                            }
                            <form onSubmit={handleSignIn}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="username"
                                        aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="password"
                                        autoComplete="on" required />
                                </div>
                                <button type="submit" className="btn btn-modify">Login</button>
                                <Link href="/register">
                                    <a style={{ display: 'block' }}>Don't have an account yet?</a>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        ) : (
            <Custom404 />
        )
    )
}

export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    if (cookies) {
        return {
            props: {
                user: true
            }
        }
    }
    return {
        props: {
            user: null
        }
    }
}

export default login;