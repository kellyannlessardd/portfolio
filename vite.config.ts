import { defineConfig } from "vitest/config"; //Changer avec l'aide de IA lorsque j'avai des erreur de tests.
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
