import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { getAllCharacters } from '@site/src/data/characters';
import styles from './tax.module.css';

function CharacterCard({ character }) {
  const taxStoryline = character.storylines?.tax;
  const isAvailable = taxStoryline && taxStoryline.episodes && taxStoryline.episodes.length > 0;

  return (
    <div className={styles.cardWrapper}>
      <div className={`${styles.characterCard} ${!isAvailable ? styles.comingSoon : ''}`}>
        {/* Card Frame */}
        <div className={styles.cardFrame}>
          {/* Avatar/Image Section - Top portion */}
          <div className={styles.cardImage}>
            <div className={styles.avatarCircle}>{character.avatar}</div>
            {!isAvailable && (
              <div className={styles.comingSoonBadge}>Sắp ra mắt</div>
            )}
          </div>

          {/* Character Info - Main body */}
          <div className={styles.cardBody}>
            <h3 className={styles.characterName}>{character.name}</h3>
            <p className={styles.occupation}>{character.occupation}</p>

            <div className={styles.statsBar}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Tuổi</span>
                <span className={styles.statValue}>{character.age}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Vị trí</span>
                <span className={styles.statValue}>{character.background.location}</span>
              </div>
            </div>

            <p className={styles.description}>{character.description}</p>

            {/* Key challenge preview */}
            {character.challenges.tax.length > 0 && (
              <div className={styles.challenge}>
                <span className={styles.challengeIcon}>⚡</span>
                <span className={styles.challengeText}>{character.challenges.tax[0]}</span>
              </div>
            )}
          </div>

          {/* Card Footer - Action buttons */}
          <div className={styles.cardFooter}>
            <Link
              className={`${styles.actionButton} ${styles.primaryAction} ${!isAvailable ? styles.disabled : ''}`}
              to={isAvailable ? taxStoryline.episodes[0].path : '#'}
            >
              {isAvailable ? 'Bắt đầu hành trình →' : 'Sắp ra mắt'}
            </Link>
            <Link
              className={`${styles.actionButton} ${styles.secondaryAction}`}
              to={`/course-tax/characters/${character.id}`}
            >
              Xem hồ sơ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TaxStorylines() {
  const characters = getAllCharacters();

  return (
    <Layout
      title="Chọn câu chuyện của bạn"
      description="Khám phá về thuế qua các câu chuyện tương tác.">
      <Head>
        <title>Câu chuyện về Thuế | MassEdu</title>
      </Head>
      <main className="container margin-vert--lg">
        <div className={styles.hero}>
          <h1 className="hero__title text--center">Câu chuyện về Thuế</h1>
          <p className="hero__subtitle text--center margin-bottom--lg">
            Chọn một nhân vật để bắt đầu hành trình tìm hiểu về thuế và ngân sách nhà nước.
          </p>
        </div>
        <div className={styles.cardsGrid}>
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      </main>
    </Layout>
  );
}