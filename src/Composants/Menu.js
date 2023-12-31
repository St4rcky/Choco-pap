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
  //variables pour Offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Fonction bouton supprimer dans panier
  const handleDelete = (id) => {
    const panierCopie = [...itemPanier];
    const updatedPanier = panierCopie.filter((keep) => keep.id !== id);
    setItemPanier(updatedPanier);
  };

  // Réinitialise le panier en le mettant à un tableau vide
  const handleResetPanier = () => {
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

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
          />
          <Navbar.Collapse className="navBarOpen" id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="" className="menuNav">
                Accueil
              </NavLink>
              <NavLink to="/shop" className="menuNav">
                Boutique
              </NavLink>

              <p>
                <span onClick={handleShow} className="panier visible menuNav">
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
        <Offcanvas.Header className="offcanvasHeader">
          <button onClick={handleClose} className="offcanvasCloseButton">
            &#10006;
          </button>
          <Offcanvas.Title className="offcanvasTitre">PANIER</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="hautPanier">
            {itemPanier.map((produit) => (
              <Panier
                key={produit.id}
                data={produit}
                panierDelete={handleDelete}
              />
            ))}
          </div>
          <div className="basPanier">
            <p className="totalPanier">TOTAL : {prixTotal} €</p>
            <button className="btnPanier" onClick={handleResetPanier}>
              REINITIALISER LE PANIER
            </button>
            <button className="btnPanier">VALIDER LE PANIER</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
