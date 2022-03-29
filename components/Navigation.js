import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Link href="/">
                    <a className="navbar-brand text-white">Stock Master</a>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link active" aria-current="page">Login</a>
                            </Link>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation;

/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand text-white">Stock Master</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <li className="nav-item">
                            <Link href="/login">
                                <a className="nav-link active" aria-current="page">Login</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */