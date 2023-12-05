import "./Css/App.css";
import Boutique from "./Pages/Boutique";
import Menu from "./Composants/Menu";
import Accueil from "./Pages/Accueil";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/shop" element={<Boutique />} />
      </Routes>
    </>
  );
}

export default App;
