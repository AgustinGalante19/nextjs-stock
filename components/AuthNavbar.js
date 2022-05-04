/* import Link from 'next/link';
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

export default AuthNavbar; */

import Link from 'next/link';
import { Navbar, Container } from 'react-bootstrap';
import { FiUser, FiDatabase } from "react-icons/fi"
import { BsTable } from 'react-icons/bs'

const AuthNavbar = ({ username }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active fs-5" aria-current="page"> <BsTable /> StockMaster</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/products/">
                                <a className="nav-link active fs-5" aria-current="page"> <FiDatabase /> Stock</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                username ? (
                                    <Link href="/user/me">
                                        <a className="nav-link active fs-5" aria-current="page">
                                            <FiUser /> {username}
                                        </a>
                                    </Link>
                                ) : (
                                    <p className="nav-link active fs-5" aria-current="page">
                                        <FiUser /> loading...
                                    </p>
                                )
                            }
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default AuthNavbar;