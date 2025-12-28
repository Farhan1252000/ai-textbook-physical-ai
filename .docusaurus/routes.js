import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug', '29c'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug/config',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug/config', '4ba'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug/content',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug/content', '594'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug/globalData',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug/globalData', '7e9'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug/metadata',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug/metadata', '774'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug/registry',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug/registry', '13a'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/__docusaurus/debug/routes',
    component: ComponentCreator('/ai-textbook-physical-ai/__docusaurus/debug/routes', '442'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/textbook',
    component: ComponentCreator('/ai-textbook-physical-ai/textbook', '2f4'),
    exact: true
  },
  {
    path: '/ai-textbook-physical-ai/docs',
    component: ComponentCreator('/ai-textbook-physical-ai/docs', 'c19'),
    routes: [
      {
        path: '/ai-textbook-physical-ai/docs',
        component: ComponentCreator('/ai-textbook-physical-ai/docs', 'b56'),
        routes: [
          {
            path: '/ai-textbook-physical-ai/docs',
            component: ComponentCreator('/ai-textbook-physical-ai/docs', 'a06'),
            routes: [
              {
                path: '/ai-textbook-physical-ai/docs/chapter-1-introduction',
                component: ComponentCreator('/ai-textbook-physical-ai/docs/chapter-1-introduction', 'a47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-textbook-physical-ai/docs/chapter-2-physical-ai-fundamentals',
                component: ComponentCreator('/ai-textbook-physical-ai/docs/chapter-2-physical-ai-fundamentals', '555'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-textbook-physical-ai/docs/chapter-3-humanoid-robotics-basics',
                component: ComponentCreator('/ai-textbook-physical-ai/docs/chapter-3-humanoid-robotics-basics', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-textbook-physical-ai/docs/chapter-4-ai-robotics-integration',
                component: ComponentCreator('/ai-textbook-physical-ai/docs/chapter-4-ai-robotics-integration', '15c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-textbook-physical-ai/docs/chapter-5-future-of-physical-ai',
                component: ComponentCreator('/ai-textbook-physical-ai/docs/chapter-5-future-of-physical-ai', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-textbook-physical-ai/docs/intro',
                component: ComponentCreator('/ai-textbook-physical-ai/docs/intro', 'f67'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ai-textbook-physical-ai/',
    component: ComponentCreator('/ai-textbook-physical-ai/', 'a17'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
