import Link from 'next/link';
import { useContext } from 'react';
import { userContext } from '../context/User/UserContext';

const AuthHeader = () => {

    const { user } = useContext(userContext);
    return (
        user ? (
            <header className="container">
                <div className="home-card" style={{ overflowX: "auto" }}>
                    <p className="saludo">Hi! {user.name}.</p>
                    <h1 className='welcome'>Welcome to Stock Master.</h1>
                    <hr />
                    <p>This application offers you a stock storage for anything.</p>
                    <Link href="/user/me">
                        <a className="btn-2">Profile</a>
                    </Link>
                </div>
            </header>
        ) : (
            <header className="container">
                loading...
            </header>
        )
    )
}

export default AuthHeader;