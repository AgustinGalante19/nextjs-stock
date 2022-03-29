import Link from 'next/link';

const AuthHeader = (props) => {
    return (
        <header className="container">
            <div className="home-card" style={{ overflowX: "auto" }}>
                <h1 className="saludo">Hi! {props.username}.
                </h1>
                <p className="welcome">Welcome to Stock Master.</p>

                <hr />
                <p>This application offers you a stock storage for anything.</p>
                <Link href="/user/me">
                    <a className="btn-2">Profile</a>
                </Link>
            </div>
        </header>
    )
}

export default AuthHeader;