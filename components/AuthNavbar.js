import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';

const AuthNavbar = ({ username }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link href="/">
                    <a className="navbar-brand text-white">Stock Master</a>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li className="nav-item">
                            <Link href="/products/">
                                <a className="nav-link active" aria-current="page">Stock</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                username ? (
                                    <Link href="/user/me">
                                        <a className="nav-link active" aria-current="page">{username}</a>
                                    </Link>
                                ) : (
                                    <p className="nav-link active" aria-current="page">loading...</p>
                                )
                            }
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default AuthNavbar

/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand text-white">Stock Master</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li className="nav-item">
                            <Link href="/products/">
                                <a className="nav-link active" aria-current="page">Stock</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                username ? (
                                    <Link href="/user/me">
                                        <a className="nav-link active" aria-current="page">{username}</a>
                                    </Link>

                                ) : (
                                    <p className="nav-link active" aria-current="page">loading...</p>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */