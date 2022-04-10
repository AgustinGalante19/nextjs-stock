import Link from 'next/link';
import { useContext } from 'react';
import { userContext } from '../context/User/UserContext';

const AuthHeader = () => {

    const { user } = useContext(userContext);
    return (
        user ? (
            <header className="container">
                <div className="home-card" style={{ overflowX: "auto" }}>
                    <h1 className="saludo">Hi! {user.name}.
                    </h1>
                    <p className="welcome">Welcome to Stock Master.</p>

                    <hr />
                    <p>This application offers you a stock storage for anything.</p>
                    <Link href="/user/me">
                        <a className="btn-2">Profile</a>
                    </Link>
                </div>
            </header>
        ): (
            <header className="container">
                loading...
            </header>
        )
    )
}

export default AuthHeader;