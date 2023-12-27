import { useContext, useState } from "react";
import { PanierContext } from "./PanierContext";

export default function Panier(props) {
  //éviter la répétition de props.data
  const { produitImage, produitNom, prix, id } = props.data;

  const { itemPanier, setItemPanier } = useContext(PanierContext);
  const [quantite, setQuantite] = useState(props.data.quantite);

  const handleQuantiteChange = (e) => {
    const nouvelleQuantite = parseInt(e.target.value, 10);

    if (!isNaN(nouvelleQuantite) && nouvelleQuantite >= 0) {
      setQuantite(nouvelleQuantite);

      // Mettre à jour le panier global en copiant et en modifiant le produit
      const nouveauPanier = itemPanier.map((produit) =>
        produit.id === id ? { ...produit, quantite: nouvelleQuantite } : produit
      );

      setItemPanier(nouveauPanier);
    }
  };

  return (
    <div className="stylePanier">
      <p className="redButton" onClick={() => props.panierDelete(id)}>
        &times;
      </p>
      <img className="imgPanier" src={produitImage} alt="produit" />
      <div className="descPanier">
        <p>{produitNom}</p>
        <p>{prix} €</p>
        <input
          className="inputPanier"
          type="number"
          value={quantite}
          onChange={handleQuantiteChange}
        />
      </div>
    </div>
  );
}
