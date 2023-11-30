import "./Css/App.css";
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
      </Routes>
    </>
  );
}

export default App;
