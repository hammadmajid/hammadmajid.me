<h1 align="center">hammadmajid.com</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/0494b548-1fbc-47af-be8f-39292f79f182/deploy-status)](https://app.netlify.com/sites/hammadmajid/deploys) [![CodeFactor](https://www.codefactor.io/repository/github/hammadmajid/hammadmajid.com/badge)](https://www.codefactor.io/repository/github/hammadmajid/hammadmajid.com) ![Lines of code](https://img.shields.io/tokei/lines/github/hammadmajid/hammadmajid.com?label=Lines%20of%20code) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/hammadmajid/hammadmajid.com?color=%23ff545f&label=Commit%20activity)

This repository contains the souce code for [hammadmajid.com](https://hammadmajid.com) website.

## Licence

The souce code in this repository is licensed under the **MIT License**. You may copy, distribute, and modify it under the terms of the license contained in the file `./LICENSE`.

## Setup

Install pnpm, node and git before you continue the below steps.

```sh
# Clone the repo
git clone https://github.com/hammadmajid/website.astro

# Install the dependencies
pnpm install

# Build for production
pnpm build

# Stat a dev server
pnpm dev
```

### Dependencies

Here is the list of all the dependecies and thier purpose:

| Name | Description | 
| :--- | :---- | 
| Astro.js | All-in-one web framework | 
| TailwindCSS | A utitility first CSS framework |
| Swup | Page transition library |
| Cypress | Javascript componenet testing and E2E testing framework |
| @astrojs/partytown | Lazy-loaded library to help relocate resource intensive scripts into a web worker |
| @astrojs/prefetch | Prefetch's page links when they visible on screen |
| @astrojs/netlify | Netlify adapter for Astro.js |
| @astrojs/sitemap | Generates sitemap at build time |
| @astrojs/svelte | Enables server-side rendering and client-side hydration for your Svelte components |

## Contributors guidelines

If you're looking for a way to contribute, you can scan through the [existing issues](https://github.com/hammadmajid/hammadmajid.com/issues/) for something to work on.
See the [contributing guide](./CONTRIBUTING.md) for detailed instructions on how to get started with this project.

## Code of Conduct

This project has adopted the **Contributor Covenant Code of Conduct**. For any questions or comment you can contact at [mail@hammadmajid.com](mailto:mail@hammadmajid.com).

---
<sub>Made with ❤️ by <a href="https://github.com/hammadmajid">Hammad Majid</a> and *you*.</a>
