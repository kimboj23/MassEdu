import React from 'react';
import Heading from '@theme/Heading';
import styles from './TriThucHero.module.css';

export default function TriThucHero({ title, subtitle }) {
  return (
    <div className={styles.triThucHero}>
      <div className="container">
        <Heading as="h1" className={styles.triThucHeroTitle}>
          {title}
        </Heading>
        <p className={styles.triThucHeroSubtitle}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
