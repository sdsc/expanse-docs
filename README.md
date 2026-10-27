# Expanse User Guide

A Docusaurus rebuild of the [SDSC Expanse User Guide](https://www.sdsc.edu/systems/expanse/user_guide.html),
with all original content preserved and reorganized into a searchable docs site styled with
[SDSC branding](https://www.sdsc.edu/about/brand.html) (navy `#182B49`, gold `#C69214`, Teko + Source Sans 3).

**Live site:** https://sdsc.github.io/expanse-docs/

## Search

The site ships with full-text search in the navbar
([@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)):
a fully offline search index built at deploy time, no external service
(no Algolia account or crawler needed). The index covers all 14 guide pages.

## Contents

All 14 sections of the original guide, organized by topic:

| Area | Pages |
| --- | --- |
| Overview | Technical Summary |
| Getting Started | System Access, Account Management |
| Software Environment | Modules, Compiling Codes |
| Running Jobs | Job Charging, Running Jobs, Using GPU Nodes |
| Data & Storage | Data Movement, Storage |
| Advanced Resources | Expanse AI Resource, Composable Systems, Software |
| Reference | Citations & Publications |

## Contributing

Every page has an **Edit this page on GitHub** button that opens the source file
for editing. Content fixes are welcome — the source lives in [`docs/`](docs/).

## Development

```bash
npm install
npm run start    # dev server at http://localhost:3000
npm run build    # production build in build/
npm run serve    # serve the production build locally
```

## Deployment

Pushing to `main` triggers the [deploy workflow](.github/workflows/deploy.yml)
which builds the site and publishes it to the `gh-pages` branch (served by
GitHub Pages). A separate [Lighthouse workflow](.github/workflows/lighthouse.yml)
audits every page for accessibility (all pages currently score **100**).

Every pull request automatically gets a temporary preview at
`https://sdsc.github.io/expanse-docs/pr-preview/pr-<number>/`, posted
as a comment on the PR. The preview updates on each push and is removed when
the PR is closed or merged ([preview workflow](.github/workflows/pr-preview.yml)).
Preview removal does not wait for the GitHub Pages build (it would race with
the main-branch deploy triggered by the same merge).
