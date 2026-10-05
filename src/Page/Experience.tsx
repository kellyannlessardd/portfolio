// Const de Experiencecréer pendant le cours SED2515. Aide de Prof. Slii
// Contenue a l'interieur de la section "Experience-Section" écrit par Kelly-Ann Lessard.

const Experience = () => {
  return (
    <section className="experience-section">
      <header>
        <p>MON PARCOURS PROFESSIONNEL</p>

        <h1>Expérience</h1>

        <p>
          Mes expériences professionnelles m'ont permis de développer mes
          compétences en design, en communication et en organisation.
        </p>
      </header>

      <article>
        <h2>Stage en design</h2>
        <p>Preston Hardware — Ottawa</p>

        <p>
          Participation à différents projets de design, visites de sites et
          collaboration avec des professionnels du domaine.
        </p>

        <p>
          Cette expérience m'a permis de découvrir davantage le processus de
          conception et le travail dans un environnement professionnel.
        </p>
      </article>

      <article>
        <h2>Conseillère en peinture</h2>
        <p>Orleans Preston Paint Center</p>

        <p>
          Service à la clientèle, consultation en couleur, préparation de
          commandes, réception et organisation des produits ainsi que gestion
          des transactions quotidiennes.
        </p>

        <p>
          Cette expérience m'a permis de développer mon sens de l'organisation,
          ma communication et mes connaissances en théorie des couleurs.
        </p>
      </article>
      <section className="cv">
        <h2>Mon CV</h2>

       <iframe      // Section CV faite avec l'aide de IA. Aider pour afficher le CV.
         src="/Kelly-AnnLessardResume2026.pdf"
          title="CV de Kelly-Ann"
       ></iframe>

      </section>
    </section>
  );
};

export default Experience;
