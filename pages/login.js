import Link from 'next/link';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import Custom404 from './404';


const login = ({ user }) => {

    const [cookie, setCookie] = useCookies(["user"]);
    const router = useRouter();


    const handleSignIn = async event => {
        event.preventDefault();

        try {
            //todo: validar datos
            const username = event.target.username.value;
            const password = event.target.password.value;
            console.log(username, password)
            await axios.post(process.env.NEXT_PUBLIC_LOGIN, { username, password })
                .then(response => {

                    setCookie("user", response.data.token, {
                        path: "/",
                        maxAge: 3600 * 24 * 7,
                        sameSite: true
                    });
                    router.push("/");
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        !user ? (
            <Layout>
                <div className="container form-container">
                    <form onSubmit={handleSignIn}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">Username</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder="username"
                                aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="password"
                                autoComplete="on" required />
                        </div>
                        <button type="submit" className="btn btn-modify">Login</button>
                        <Link href="/register">
                            <a style={{ display: 'block' }}>Don't have an account yet?</a>
                        </Link>
                    </form>
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