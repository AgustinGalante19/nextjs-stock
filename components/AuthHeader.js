import Link from 'next/link';

const AuthHeader = (props) => {
    return (
        <header className="container">
            <div className="home-card">
                <h1>
                    Hi! {props.username}.<span className="welcome">Welcome to Stock Master.</span>
                </h1>

                <hr />
                <p>This application offers you a stock storage for anything.</p>
                <Link href="/profile">
                    <a className="btn-2">Profile</a>
                </Link>
            </div>
        </header>
    )
}

export default AuthHeader;