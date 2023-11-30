import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";

export default function Accueil() {
  return (
    <div className="img-accueil">
      <Carousel keyboard={true}>
        <Carousel.Item interval={5000}>
          <img className="accueil" src="/images/accueil1.jpg" alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="accueil" src="/images/accueil2.jpg" alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="accueil" src="/images/accueil3.jpg" alt="slide 3" />
        </Carousel.Item>
      </Carousel>
      <h1 className="choco">CHOCO PAP</h1>
      <button className="boutonPrincipal">
        <NavLink className="boutonText" to="/shop">
          VOIR LA BOUTIQUE
        </NavLink>
      </button>
    </div>
  );
}
