import "./Css/App.css";
import Boutique from "./Pages/Boutique";
import Menu from "./Composants/Menu";
import Footer from "./Composants/Footer";
import Accueil from "./Pages/Accueil";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./Pages/DescriptionProduit";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/shop" element={<Boutique />} />
        <Route path="/product/:produitNom" element={<Description />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
