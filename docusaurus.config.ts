import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ShopR SDK',
  tagline: 'Learn how to use the ShopR SDK',
  favicon: 'img/shopr.webp',

  // Set the production URL of your site here
  url: 'https://www.shoprvr.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/ShopRSdkDocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ShopR-vr', // Your GitHub org/user name.
  projectName: 'ShopRSdkDocs', // Your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
              'https://github.com/ShopR-vr/ShopRSdkDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
              'https://github.com/ShopR-vr/ShopRSdkDocs/tree/main/',
          // Enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card image for your project
    image: 'img/shopr-social-card.jpg',
    navbar: {
      title: 'ShopR SDK Documentation',
      logo: {
        alt: 'ShopR Logo',
        src: 'img/shopr.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'SDK Docs',
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
              label: 'Discord',
              href: 'https://discord.gg/83UEBhSF',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ShopR, Inc. Built with Docusaurus. 💗`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
