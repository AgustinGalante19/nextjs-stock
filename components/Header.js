import Link from 'next/link';

const Header = () => {
    return (
        <header className="container">
            <div className="home-card">
                <h1>Welcome to Stock Master</h1>
                <hr />
                <p>This application offers you a stock storage for anything.</p>
                <Link href="/login">
                    <a className="btn-2">Login</a>
                </Link>
            </div>
        </header>
    )
}

export default Header