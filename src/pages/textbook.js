import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './textbook.module.css';

function TextbookHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.textbookHero)}>
      <div className="container">
        <h1 className="hero__title">Textbook Chapters</h1>
        <p className="hero__subtitle">Explore the comprehensive content on Physical AI and Humanoid Robotics</p>
      </div>
    </header>
  );
}

function ChapterCard({ title, description, link, order }) {
  return (
    <div className={clsx('col col--4', styles.chapterCard)}>
      <div className="card">
        <div className="card__header">
          <h3>Chapter {order}: {title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary" to={link}>
            Read Chapter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Textbook() {
  const {siteConfig} = useDocusaurusContext();

  const chapters = [
    {
      title: "Introduction to Physical AI",
      description: "Foundational concepts and principles of Physical AI",
      link: "/docs/chapter-1-introduction",
      order: 1
    },
    {
      title: "Physical AI Fundamentals",
      description: "Core principles and technologies in Physical AI",
      link: "/docs/chapter-2-physical-ai-fundamentals",
      order: 2
    },
    {
      title: "Humanoid Robotics Basics",
      description: "Introduction to humanoid robotics and design principles",
      link: "/docs/chapter-3-humanoid-robotics-basics",
      order: 3
    },
    {
      title: "AI-Robotics Integration",
      description: "How AI and robotics work together in humanoid systems",
      link: "/docs/chapter-4-ai-robotics-integration",
      order: 4
    },
    {
      title: "Future of Physical AI",
      description: "Looking ahead: trends and developments in the field",
      link: "/docs/chapter-5-future-of-physical-ai",
      order: 5
    }
  ];

  return (
    <Layout
      title={`Textbook - ${siteConfig.title}`}
      description="Complete textbook on Physical AI and Humanoid Robotics">
      <TextbookHeader />
      <main className={styles.textbookMain}>
        <section className="container padding-vert--lg">
          <div className="row">
            {chapters.map((chapter, index) => (
              <ChapterCard
                key={index}
                title={chapter.title}
                description={chapter.description}
                link={chapter.link}
                order={chapter.order}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}