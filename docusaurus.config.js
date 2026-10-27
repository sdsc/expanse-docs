// @ts-check
// `npm run start` — dev server
// `npm run build` — production build into `build/`
// `npm run serve` — serve the production build locally

import { themes as prismThemes } from "prism-react-renderer";
import { visit } from "unist-util-visit";

// PR preview builds serve the site under /pr-preview/pr-<number>/, so the
// base URL is overridable at build time (see .github/workflows/pr-preview.yml).
const baseUrl = process.env.BASE_URL || "/expanse-docs/";

/**
 * Wrap markdown tables in a scrollable div so wide tables scroll
 * horizontally instead of overflowing the page (keeps native table
 * semantics for screen readers).
 */
const rehypeWrapTables = () => (tree) => {
  visit(tree, (node, index, parent) => {
    if (
      node.type === "element" &&
      node.tagName === "table" &&
      parent &&
      !(
        parent.type === "element" &&
        parent.tagName === "div" &&
        parent.properties?.className?.includes("table-wrapper")
      )
    ) {
      parent.children[index] = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-wrapper"] },
        children: [node],
      };
    }
  });
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Expanse User Guide",
  tagline: "Documentation for the Expanse supercomputer at SDSC",
  favicon: "img/favicon.ico",

  // GitHub Pages deployment config
  url: "https://sdsc.github.io",
  baseUrl: baseUrl,
  organizationName: "sdsc",
  projectName: "expanse-docs",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Adds an "Edit this page" button on every doc page,
          // linking straight to the file on GitHub
          editUrl: "https://github.com/sdsc/expanse-docs/edit/main/",
          rehypePlugins: [rehypeWrapTables],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // Docs-only site (routeBasePath: "/"), no blog: index everything,
        // hash the index files so browsers pick up rebuilt indexes.
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        hashed: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content:
            "User Guide for the Expanse supercomputer at the San Diego Supercomputer Center",
        },
      ],
      navbar: {
        // Brand lockup + color-mode toggle only: all navigation lives in the
        // docs sidebar, and on mobile the navbar toggle opens that docs menu
        // directly (no separate "main menu").
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Technical Summary", to: "/" },
              { label: "System Access", to: "/system-access" },
              { label: "Running Jobs", to: "/running-jobs" },
            ],
          },
          {
            title: "Expanse",
            items: [
              {
                label: "Expanse @ SDSC",
                href: "https://www.sdsc.edu/systems/expanse/index.html",
              },
              {
                label: "Expanse User Portal",
                href: "https://portal.expanse.sdsc.edu",
              },
              { label: "ACCESS Program", href: "https://access-ci.org/" },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/sdsc/expanse-docs",
              },
              {
                label: "SDSC Support",
                href: "https://www.sdsc.edu/support/index.html",
              },
              {
                label: "ACCESS Help Desk",
                href: "https://support.access-ci.org/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} San Diego Supercomputer Center, UC San Diego.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
