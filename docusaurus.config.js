// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mass Education',
  tagline: 'Human rights are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kimboj23.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/MassEdu-01/',

  // GitHub pages deployment config.
  organizationName: 'kimboj23', // Usually your GitHub org/user name.
  projectName: 'MassEdu-01', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/course01',
          routeBasePath: 'human-rights',
          sidebarPath: './sidebars-course01.js',
          editUrl: 'https://github.com/kimboj23/MassEdu-01/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/kimboj23/MassEdu-01/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
        path: 'docs/course02',
        routeBasePath: 'politics',
        sidebarPath: require.resolve('./sidebars-course02.js'),
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mass Education',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Lớp Học',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'docs',
                label: 'Hạt mầm Nhân quyền',
              },
              {
                type: 'docSidebar',
                sidebarId: 'course2',
                label: 'Chính trị Chính tôi',
                docsPluginId: 'course2',
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/kimboj23/MassEdu-01',
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kimboj23/MassEdu-01',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mass Education. Dựng với khát vọng tự do và lòng yêu tri thức.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;