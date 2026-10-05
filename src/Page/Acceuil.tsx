// Const de Acceuil créer pendant le cours SED2515. Aide de Prof. Slii
// Contenue a l'interieur de la section "Acceuil-Section" écrit par Kelly-Ann Lessard.

const Acceuil = () => {           
  return (
    <section className="home">
      <p className="home-intro">ÉTUDIANTE EN DESIGN MULTIDISCIPLINAIRE</p>

      <h1>Kelly-Ann</h1>

      <p className="home-description">
        Je m'intéresse à la relation entre les personnes, les espaces et les
        systèmes qui façonnent nos expériences quotidiennes.
      </p>

      <a href="/projets" className="home-button">
        Voir mes projets →
      </a>
    </section>
  );
};

export default Acceuil;
