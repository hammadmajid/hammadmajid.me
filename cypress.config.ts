import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "361bhh",
  e2e: {
    baseUrl: "http://localhost:3000/",
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
