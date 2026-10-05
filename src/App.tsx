import { NavLink, Route, Routes, Link } from "react-router-dom";

import Acceuil from "./Page/Acceuil";
import Competences from "./Page/Competences";
import Contact from "./Page/Contact";
import Experience from "./Page/Experience";
import Projet from "./Page/Projet";

import "./App.css";

const App = () => {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo-initials" aria-label="Accueil">
          KL
        </Link>

        <nav className="navbar">
          <NavLink to="/competences" className="nav-link">
            Compétences
          </NavLink>

          <NavLink to="/experiences" className="nav-link">
            Expérience
          </NavLink>

          <NavLink to="/projets" className="nav-link">
            Projet
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/projets" element={<Projet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Acceuil />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
