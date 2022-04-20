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