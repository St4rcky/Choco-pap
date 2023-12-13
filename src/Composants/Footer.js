export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <h2>Choco Pap</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni
          cum modi odio optio temporibus eum corrupti laudantium.
        </p>
      </div>
      <div className="info">
        <h2>Contact</h2>
        <p className="inline">Adresse : 51 rue du chocolat 75000 Paris</p>
        <p>Téléphone : 01 23 45 67 89</p>
        <p className="inline">Horaires : 9h00-17h00 du Lundi au Vendredi</p>
      </div>
      <div className="logoReseaux">
        <img src="/images/facebook.png" alt="Logo Facebook" />
        <img src="/images/instagram.png" alt="Logo Instagram" />
        <img src="/images/twitter.png" alt="Logo Twitter" />
      </div>
    </div>
  );
}
