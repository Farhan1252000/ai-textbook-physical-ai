import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Physical AI Focus',
    description: (
      <>
        Comprehensive coverage of Physical AI principles, from theoretical foundations
        to practical implementations in real-world systems.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    description: (
      <>
        Deep dive into humanoid robotics design, control systems, and the
        integration of AI with physical robotic platforms.
      </>
    ),
  },
  {
    title: 'Academic Rigor',
    description: (
      <>
        Content developed with academic rigor and technical accuracy,
        suitable for researchers, engineers, and students.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}