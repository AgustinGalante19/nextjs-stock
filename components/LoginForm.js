import { useState } from 'react'
import Link from 'next/link';
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

const LoginForm = () => {

    const [cookie, setCookie] = useCookies(["user"]);
    const [errormessage, setErrormessage] = useState(null);
    const router = useRouter();

    const handleSignIn = async event => {
        setErrormessage(null);
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const res = await axios.post(process.env.NEXT_PUBLIC_LOGIN, { username, password });

        console.log(res.status)

        if (res.status == 200) {
            setCookie("user", res.data.token, {
                path: "/",
                maxAge: 3600 * 24 * 7,
                sameSite: true
            });
            window.location.href = "/";
            /* router.push("/"); */
        } else if (res.status == 203) {
            if (res.data.password == false) {
                const message = "Invalid password.";
                setErrormessage(message);
            }
            if (res.data.username == false) {
                const message = "Invalid username.";
                setErrormessage(message);
            }
        } else if (res.status === 400) {
            const message = "Probably invalid characters in username or password.";
            setErrormessage(message);
        }
    }

    return (
        <div>
            {
                errormessage ? (
                    <div className="alert alert-danger" role="alert">
                        {errormessage}
                    </div>
                ) : null
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
    )
}

export default LoginForm