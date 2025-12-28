import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/textbook',
    component: ComponentCreator('/textbook', '531'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '237'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '416'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '1f1'),
            routes: [
              {
                path: '/docs/chapter-1-introduction',
                component: ComponentCreator('/docs/chapter-1-introduction', '349'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-2-physical-ai-fundamentals',
                component: ComponentCreator('/docs/chapter-2-physical-ai-fundamentals', 'aa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-3-humanoid-robotics-basics',
                component: ComponentCreator('/docs/chapter-3-humanoid-robotics-basics', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-4-ai-robotics-integration',
                component: ComponentCreator('/docs/chapter-4-ai-robotics-integration', '8a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chapter-5-future-of-physical-ai',
                component: ComponentCreator('/docs/chapter-5-future-of-physical-ai', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
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
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
