import { Link } from "react-router-dom";
import { PanierContext } from "./PanierContext";
import { useContext } from "react";

export default function Produit(props) {
  //Eviter la répétition de props.info
  const { produitNom, produitImage, prix, rating } = props.info;
  const { itemPanier, setItemPanier } = useContext(PanierContext);

  const handleAdd = () => {
    // Vérifiez si le produit est déjà dans le panier
    const produitExist = itemPanier.find(
      (produit) => produit.id === props.info.id
    );

    if (produitExist) {
      // Si le produit existe, mettre à jour la quantité
      const nouveauPanier = itemPanier.map((produit) =>
        produit.id === props.info.id
          ? { ...produit, quantite: produit.quantite + 1 }
          : produit
      );
      setItemPanier(nouveauPanier);
    } else {
      // Sinon, ajouter le produit avec une quantité de 1
      setItemPanier([...itemPanier, { ...props.info, quantite: 1 }]);
    }
  };

  return (
    <div>
      <Link to={`/product/${produitNom}`}>
        <img className="produit" src={produitImage} alt="produit2"></img>
      </Link>
      <div className="descProduit">
        <h4>{produitNom}</h4>
        <p>{prix} €</p>
        <p>Note: {rating}</p>
        <button className="shadow" onClick={handleAdd}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
