import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Menu() {
  return (
    <>
      <Navbar expand="sm">
        <Container className="menu">
          <div>
            <Navbar.Brand>
              <img className="logo" src="/images/logo.png" alt="logo" />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="" className="lienMenu">
                Accueil
              </NavLink>
              <NavLink to="/shop" className="lienMenu">
                Boutique
              </NavLink>

              <p>
                <span className="visible">Panier </span>

                <img
                  className="panier"
                  src="/images/chariot.png"
                  alt="panier"
                />
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
