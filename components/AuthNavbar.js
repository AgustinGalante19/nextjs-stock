import { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import Link from 'next/link'

/* class AuthNavbar extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            token: cookies.get("user") || false,
        }
    }

    async componentDidMount() {
        axios.get(process.env.NEXT_PUBLIC_GET_DATA, {
            headers: {
                "auth-token": this.state.token
            }
        })
            .then((response) => {
                this.setState({ user: response.data })
            })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                    this.state.user ? (
                                        <Link href="/profile">
                                            <a className="nav-link active" aria-current="page">{this.state.user.username}</a>
                                        </Link>

                                    ) : (
                                        <p className="nav-link active" aria-current="page">loading...</p>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withCookies(AuthNavbar); */

const AuthNavbar = ({ username }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                    <Link href="/profile">
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
        </nav>
    )
}

export default AuthNavbar