import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Panier from "./Panier";
import { PanierContext } from "./PanierContext";
import { useContext } from "react";

export default function Menu() {
  const [show, setShow] = useState(false);

  const { itemPanier, setItemPanier } = useContext(PanierContext);
  const totalArticles = itemPanier.reduce(
    (total, produit) => total + produit.quantite,
    0
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = (id) => {
    const panierCopie = [...itemPanier];
    const updatedPanier = panierCopie.filter((keep) => keep.id !== id);
    setItemPanier(updatedPanier);
  };

  const handleResetPanier = () => {
    // Réinitialise le panier en le mettant à un tableau vide
    setItemPanier([]);
  };
  const prixTotal = itemPanier.reduce((total, produit) => {
    return total + produit.prix * produit.quantite;
  }, 0);

  return (
    <>
      <Navbar className="header" expand="sm">
        <Container className="menu">
          <div>
            <Navbar.Brand>
              <img className="logo" src="/images/logo.png" alt="logo" />
            </Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="poupette" id="basic-navbar-nav">
            <Nav className="me-auto poups">
              <NavLink to="" className="test">
                Accueil
              </NavLink>
              <NavLink to="/shop" className="test">
                Boutique
              </NavLink>

              <p>
                <span onClick={handleShow} className="panier visible test">
                  Panier
                </span>
                <span className="panier" onClick={handleShow}>
                  {" "}
                  {totalArticles}{" "}
                </span>{" "}
                <img
                  onClick={handleShow}
                  className="panier"
                  src="/images/chariot.png"
                  alt="panier"
                />
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        className="offcanvas-custom-width"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>PANIER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {itemPanier.map((produit) => (
            <Panier
              key={produit.id}
              data={produit}
              panierDelete={handleDelete}
            />
          ))}
          <p>TOTAL : {prixTotal} €</p>
          <button onClick={handleResetPanier}>REINITIALISER LE PANIER</button>
          <button>VALIDER LE PANIER</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
