// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MassEdu',
  tagline: 'Human rights are cool 😎',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kimboj23.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MassEdu/',

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
          path: 'docs/knowledge-base/human-rights',
          routeBasePath: 'human-rights',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/kimboj23/MassEdu/tree/main/',
        },
        blog: false, // Turn off the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'course2',
        path: 'docs/knowledge-base/politics',
        routeBasePath: 'politics',
        sidebarPath: require.resolve('./sidebars-course02.js'),
      },
    ],
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
      image: 'img/social-card.png',
      navbar: {
        title: 'MassEdu',
        logo: {
          alt: 'MassEdu Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/storylines/tax',
            label: 'Khám phá',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Tri thức',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',
                label: 'Nhân quyền',
              },
              {
                type: 'docSidebar',
                sidebarId: 'course2',
                label: 'Chính trị',
                docsPluginId: 'course2',
              },
              {
                type: 'docSidebar',
                sidebarId: 'courseTax',
                label: 'Thuế và Ngân sách',
                docsPluginId: 'course-tax',
              },
              {
                label: 'Pháp luật (Sắp ra mắt)',
                to: '#',
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
            title: 'Lớp Học',
            items: [
              {
                label: 'Hạt mầm Nhân quyền',
                to: '/human-rights/tuan1/gioi-thieu',
              },
              {
                label: 'Chính trị Chính tôi',
                to: '/politics/chuong1/intro',
              },
            ],
          },
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
        copyright: `Copyright © ${new Date().getFullYear()} MassEdu. Dựng với khát vọng tự do và lòng yêu tri thức.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;