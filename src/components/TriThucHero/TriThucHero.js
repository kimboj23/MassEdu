import React from 'react';
import Heading from '@theme/Heading';
import styles from './TriThucHero.module.css';

export default function TriThucHero({ title, subtitle }) {
  return (
    <section
      className={styles.triThucHero}
      aria-labelledby="tri-thuc-hero-title"
      role="banner"
    >
      <div className="container">
        <Heading
          as="h1"
          id="tri-thuc-hero-title"
          className={styles.triThucHeroTitle}
        >
          {title}
        </Heading>
        <p className={styles.triThucHeroSubtitle}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
