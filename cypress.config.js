import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'ayg98x',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
