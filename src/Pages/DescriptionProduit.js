import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { produits } from "../Composants/ListProduits";
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { PanierContext } from "../Composants/PanierContext";

export default function Description() {
  // Récupérer les paramètres de l'URL
  const { produitNom } = useParams();

  // Rechercher le produit correspondant dans la liste des produits
  const produit = produits.find((prod) => prod.produitNom === produitNom);

  const { itemPanier, setItemPanier } = useContext(PanierContext);
  const [quantite, setQuantite] = useState(1);

  const handleQuantiteChange = (e) => {
    const nouvelleQuantite = parseInt(e.target.value, 10);
    setQuantite(isNaN(nouvelleQuantite) ? 1 : nouvelleQuantite);
  };

  const handleAjouterAuPanier = () => {
    const produitAvecQuantite = {
      ...produit,
      quantite: quantite,
    };

    // Vérifier si le produit est déjà dans le panier
    const produitExistant = itemPanier.find((item) => item.id === produit.id);

    if (produitExistant) {
      // Si le produit existe, mettre à jour la quantité
      const nouveauPanier = itemPanier.map((item) =>
        item.id === produitExistant.id
          ? { ...item, quantite: item.quantite + quantite }
          : item
      );
      setItemPanier(nouveauPanier);
    } else {
      // Si le produit n'existe pas, l'ajouter au panier
      setItemPanier([...itemPanier, produitAvecQuantite]);
    }
  };

  if (!produit) {
    return <p>Produit non trouvé</p>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={{ span: 3, offset: 1 }}>
          <img src={produit.produitImage} alt={produit.produitNom} />
        </Col>
        <Col xs={12} md={6} lg={{ span: 4, offset: 2 }}>
          <h1>{produit.produitNom}</h1>
          <p>{produit.prix} €</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            architecto, provident odit corporis earum quia fugiat quibusdam
            alias non possimus illum ducimus! Odio commodi laboriosam eum,
            necessitatibus dolores cumque nesciunt ratione dolorem, odit
            perspiciatis eius nemo!
          </p>
          <Row>
            <Col md={3}>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantite}
                onChange={handleQuantiteChange}
              />
            </Col>
            <Col md={8}>
              <button onClick={handleAjouterAuPanier}>AJOUTER AU PANIER</button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="ingredients-section">
        <h2>Ingrédients</h2>
        <p className="last-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
          temporibus suscipit corrupti possimus a ex illo dignissimos vero rerum
          velit, distinctio repellat voluptatum assumenda ut qui, dolorum
          exercitationem neque optio ea repellendus magnam. Beatae architecto
          quisquam cumque harum cum? Ab, dolor recusandae distinctio
          consequuntur maiores tenetur illo quis, ipsa obcaecati inventore
          veritatis.
        </p>
      </div>
    </Container>
  );
}
