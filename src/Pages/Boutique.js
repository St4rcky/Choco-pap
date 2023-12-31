import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { produits } from "../Composants/ListProduits";
import Produit from "../Composants/Produit";

export default function Boutique() {
  // États initiaux de mes filtres
  const [isCategorieOpen, setIsCategorieOpen] = useState(false);
  const [isPrixOpen, setIsPrixOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const categorieMenu = isCategorieOpen ? "show-categorie" : "hide-categorie";
  const prixMenu = isPrixOpen ? "show-categorie" : "hide-categorie";
  const notesMenu = isNotesOpen ? "show-categorie" : "hide-categorie";

  const [minPrix, setMinPrix] = useState(0);
  const [maxPrix, setMaxPrix] = useState(Infinity);

  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

  // État pour les catégories sélectionnées
  const [selectedCategories, setSelectedCategories] = useState(["tous"]);

  const categories = [
    "Chocolat blanc",
    "Chocolat au lait",
    "Chocolat noir",
    "Noix/Noisette",
    "Fruit",
    "Caramel",
    "Liqueur",
  ];

  // Fonction de filtre
  const filtreProduits = () => {
    let filtre = produits;

    // Applique le filtre de catégories si au moins une catégorie est sélectionnée
    if (selectedCategories.length > 0 && !selectedCategories.includes("tous")) {
      filtre = filtre.filter((produit) =>
        selectedCategories.some((selectedCat) =>
          produit.categorie.includes(selectedCat)
        )
      );
    }

    // Applique le filtre de prix
    if (minPrix) {
      filtre = filtre.filter((produit) => produit.prix >= minPrix);
    }
    if (maxPrix) {
      filtre = filtre.filter((produit) => produit.prix <= maxPrix);
    }
    if (minRating) {
      filtre = filtre.filter((produit) => produit.rating >= minRating);
    }
    if (maxRating) {
      filtre = filtre.filter((produit) => produit.rating <= maxRating);
    }

    return filtre;
  };

  // Gestionnaire de changement pour les cases à cocher
  const handleCheckboxChange = (e) => {
    const category = e.target.id;

    if (category === "tous") {
      // Si "tous" est déjà sélectionné, désélectionne toutes les catégories
      if (selectedCategories.includes("tous")) {
        setSelectedCategories([]);
      } else {
        // Sinon, sélectionne "tous" et désélectionne les autres catégories
        setSelectedCategories(["tous"]);
        // Désélectionne explicitement les autres catégories
        categories.forEach((cat) => {
          document.getElementById(cat).checked = false;
        });
      }
    } else {
      // Si une autre catégorie est sélectionnée, ajuste la logique existante
      if (selectedCategories.includes("tous")) {
        setSelectedCategories([category]);
        // Désélectionne explicitement "tous"
        document.getElementById("tous").checked = false;
      } else {
        if (selectedCategories.includes(category)) {
          setSelectedCategories(
            selectedCategories.filter((cat) => cat !== category)
          );
        } else {
          setSelectedCategories([category, ...selectedCategories]);
        }
      }
    }

    // Vérifie si toutes les catégories individuelles sont décochées
    const allCategoriesUnchecked = categories.every(
      (cat) => !document.getElementById(cat).checked
    );

    // Si toutes les catégories individuelles sont décochées, sélectionne "tous"
    if (allCategoriesUnchecked) {
      setSelectedCategories(["tous"]);
      // Coche explicitement la case à cocher "tous"
      document.getElementById("tous").checked = true;
    }
  };

  return (
    <Container fluid>
      <h1 className="boutique">BOUTIQUE</h1>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <section className="filtreSection">
            <h2 className="titreFiltre">FILTRE</h2>
            <h3 className="filtreTexte">
              Catégories{" "}
              <span
                className="ouvrirFermer"
                onClick={() => setIsCategorieOpen(!isCategorieOpen)}
              >
                {isCategorieOpen ? "-" : "+"}
              </span>
            </h3>
            <form className={`siOuvert ${categorieMenu}`}>
              <input
                onChange={(e) => handleCheckboxChange(e)}
                type="checkbox"
                id="tous"
                name="tous"
                checked={selectedCategories.includes("tous")}
              />{" "}
              <label htmlFor="tous">Tous</label>
              <br />
              {categories.map((categorie) => (
                <div key={categorie}>
                  <input
                    onChange={(e) => handleCheckboxChange(e)}
                    type="checkbox"
                    id={categorie}
                  />{" "}
                  <label htmlFor={categorie}>{categorie}</label>
                  <br />
                </div>
              ))}
              <br />
            </form>
            <h3 className="filtreTexte">
              Prix{" "}
              <span
                className="ouvrirFermer"
                onClick={() => setIsPrixOpen(!isPrixOpen)}
              >
                {isPrixOpen ? "-" : "+"}
              </span>
            </h3>
            <form className={`siOuvert ${prixMenu}`}>
              <label htmlFor="prixMin">Prix min</label>
              <input
                onChange={(e) => setMinPrix(Number(e.target.value))}
                type="number"
                id="prixMin"
                name="prixMin"
                min="1"
                max="99"
                placeholder="1€"
                className="prixMin"
              />
              <br />
              <label htmlFor="prixMax">Prix max</label>
              <input
                onChange={(e) => setMaxPrix(Number(e.target.value))}
                type="number"
                id="prixMax"
                name="prixMax"
                min="1"
                max="99"
                placeholder="99€"
                className="prixMax"
              />
              <br />
            </form>
            <h3 className="filtreTexte">
              Notes{" "}
              <span
                className="ouvrirFermer"
                onClick={() => setIsNotesOpen(!isNotesOpen)}
              >
                {isNotesOpen ? "-" : "+"}
              </span>
            </h3>
            <form className={`siOuvert ${notesMenu}`}>
              <label htmlFor="noteMin">Note min</label>{" "}
              <select
                onChange={(e) => setMinRating(Number(e.target.value))}
                id="noteMin"
              >
                <option defaultValue="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <br />
              <label htmlFor="noteMax">Note max </label>{" "}
              <select
                onChange={(e) => setMaxRating(Number(e.target.value))}
                defaultValue="5"
                id="noteMax"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option defaultValue="5">5</option>
              </select>
              <br />
            </form>
          </section>
        </Col>
        <Col>
          <Row>
            {filtreProduits(produits).map((produit, index, array) => (
              <Col key={produit.id} xs={12} sm={6} md={4} xl={3}>
                <Produit info={produit} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
