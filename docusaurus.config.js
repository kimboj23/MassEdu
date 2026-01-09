// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TepUp',
  tagline: 'Tép riu stép up, stép out.',
  favicon: 'img/tepup_logo.png',

  // Set the production url of your site here
  url: 'https://www.tepup.space',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'kimboj23', // Your GitHub username.
  projectName: 'MassEdu', // Your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/knowledge-base',
          routeBasePath: 'knowledge-base',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kimboj23/MassEdu/tree/main/',
        },
        blog: false, // Turn off the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'course-tax',
        path: 'docs/course-tax',
        routeBasePath: 'course-tax',
        sidebarPath: './sidebars-course-tax.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      image: 'img/tepup_logo.png',
      navbar: {
        title: 'TepUp',
        logo: {
          alt: 'TepUp.space Logo',
          src: 'img/tepup_logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Khám phá',
            position: 'left',
            items: [
              {
                label: 'Thuế',
                to: '/storylines/tax',
              },
              {
                label: 'Y tế công (Sắp ra mắt)',
                to: '#',
              },
              {
                label: 'Tham nhũng (Sắp ra mắt)',
                to: '#',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Tri thức',
            position: 'left',
            items: [
              {
                label: 'Nhân quyền',
                to: '/tri-thuc/nhan-quyen',
              },
              {
                label: 'Chính trị',
                to: '/tri-thuc/chinh-tri',
              },
              {
                label: 'Luật pháp',
                to: '/tri-thuc/luat-phap',
              },
            ],
          },
          {
            href: 'https://github.com/kimboj23/MassEdu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/kimboj23/MassEdu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TepUp.space. Nơi học về quyền và trách nhiệm công dân một cách an toàn và dễ tiếp cận.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;