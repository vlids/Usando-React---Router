import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar variant="dark">
        <Container className="justify-content-start bg-color pt-3">
            <Link to="/" className='text-dark text-decoration-none ms-3 fs-2'>
              Home
            </Link>
            <Link to="/contacto" className='text-dark text-decoration-none ms-3 fs-2 ps-3'>
              Contacto
            </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;