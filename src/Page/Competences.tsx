// Const de compétences créer pendant le cours SED2515. Aide de Prof. Slii
// Contenue a l'interieur de la section "competences-Section" écrit par Kelly-Ann Lessard.
const Competences = () => {
  return (
    <section className="competences-section">
      <header>
        <p>MES COMPÉTENCES</p>

        <h1>Compétences</h1>

        <p>
          Un ensemble de compétences développées à travers mes études,
          mes projets et mes expériences professionnelles.
        </p>
      </header>

      <div>
        <article>
          <h2>Design</h2>
          <ul>
            <li>Design multidisciplinaire</li>
            <li>Dessin technique</li>
            <li>Théorie des couleurs</li>
            <li>Design d'intérieur</li>
            <li>Design centré sur l'utilisateur</li>
          </ul>
        </article>

        <article>
          <h2>Outils numériques</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript / TypeScript</li>
            <li>Python</li>
            <li>QGIS</li>
            <li>ArcGIS</li>
            <li>Visualisation de données</li>
          </ul>
        </article>

        <article>
          <h2>Communication</h2>
          <ul>
            <li>Travail d'équipe</li>
            <li>Leadership</li>
            <li>Communication</li>
            <li>Organisation</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Competences;
