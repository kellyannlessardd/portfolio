// Contenue a l'interieur de la test écrit par Kelly-Ann Lessard. Modifier avec l'aide de IA lorsque j'avai des erreur de tests.

import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Acceuil from "../src/Page/Acceuil";

it("affiche la page d'accueil", () => {
  render(<Acceuil />);

  expect(screen.getByText("Kelly-Ann")).toBeTruthy();
});
