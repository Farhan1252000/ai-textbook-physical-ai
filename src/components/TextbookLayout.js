import React from 'react';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import DocsSidebar from '@theme/DocsSidebar';
import DocsPageLayoutSidebar from '@theme/DocsPageLayout/Sidebar';
import DocsPageLayoutMain from '@theme/DocsPageLayout/Main';
import DocsPageLayoutContent from '@theme/DocsPageLayout/Content';
import styles from './TextbookLayout.module.css';

function TextbookLayout(props) {
  const {
    children,
    sidebar,
    hiddenSidebarContainer,
    docsSidebar,
    ...metadata
  } = props;

  useKeyboardNavigation();
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const hasSidebar = sidebar && docsSidebar;
  const sidebarBreadcrumbs = useDocsSidebar();

  return (
    <>
      <PageMetadata {...metadata} />
      <div className={clsx(ThemeClassNames.common.docsWrapper, 'docs-wrapper')}>
        <SkipToContentFallbackId />
        {hasSidebar && (
          <DocsPageLayoutSidebar
            sidebar={sidebar}
            hiddenSidebarContainer={hiddenSidebarContainer}
          />
        )}
        <DocsPageLayoutMain
          as="main"
          className={clsx({
            [styles.docsMain]: hasSidebar,
          })}
          hiddenSidebarContainer={hiddenSidebarContainer}>
          <DocsPageLayoutContent
            as="main"
            className={clsx('container padding-top--md padding-bottom--lg', {
              'container--full': sidebarBreadcrumbs?.length === 0,
            })}>
            {children}
          </DocsPageLayoutContent>
        </DocsPageLayoutMain>
      </div>
    </>
  );
}

export default TextbookLayout;