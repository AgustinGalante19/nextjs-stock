import { Navbar, Container } from 'react-bootstrap';

const LoadingNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-sm-1"></span>
                    </h5>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default LoadingNavbar;

/* <h5 className="card-title placeholder-glow">
            <span className="placeholder col-sm-1"></span>
          </h5> */