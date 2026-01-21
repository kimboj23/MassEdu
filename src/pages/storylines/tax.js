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
    <article className={styles.cardWrapper} aria-labelledby={`character-${character.id}-name`}>
      <div className={`${styles.characterCard} ${!isAvailable ? styles.comingSoon : ''}`}>
        {/* Card Frame */}
        <div className={styles.cardFrame}>
          {/* Avatar/Image Section - Top portion */}
          <div className={styles.cardImage}>
            <div className={styles.avatarCircle} role="img" aria-label={`Hình đại diện của ${character.name}`}>{character.avatar}</div>
            {!isAvailable && (
              <div className={styles.comingSoonBadge} aria-label="Câu chuyện này sắp ra mắt">Sắp ra mắt</div>
            )}
          </div>

          {/* Character Info - Main body */}
          <div className={styles.cardBody}>
            <h3 className={styles.characterName} id={`character-${character.id}-name`}>{character.name}</h3>
            <p className={styles.occupation}>{character.occupation}</p>

            <dl className={styles.statsBar} aria-label="Thông tin cơ bản">
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Tuổi</dt>
                <dd className={styles.statValue}>{character.age}</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Vị trí</dt>
                <dd className={styles.statValue}>{character.background.location}</dd>
              </div>
            </dl>

            <p className={styles.description}>{character.description}</p>

            {/* Key challenge preview */}
            {character.challenges.tax.length > 0 && (
              <div className={styles.challenge} aria-label="Thách thức chính">
                <span className={styles.challengeIcon} aria-hidden="true">⚡</span>
                <span className={styles.challengeText}>{character.challenges.tax[0]}</span>
              </div>
            )}
          </div>

          {/* Card Footer - Action buttons */}
          <div className={styles.cardFooter} role="group" aria-label={`Các hành động cho ${character.name}`}>
            {isAvailable ? (
              <Link
                className={`${styles.actionButton} ${styles.primaryAction}`}
                to={taxStoryline.episodes[0].path}
                aria-label={`Bắt đầu hành trình với ${character.name}`}
              >
                Bắt đầu hành trình <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span
                className={`${styles.actionButton} ${styles.primaryAction} ${styles.disabled}`}
                aria-disabled="true"
                role="button"
              >
                Sắp ra mắt
              </span>
            )}
            <Link
              className={`${styles.actionButton} ${styles.secondaryAction}`}
              to={`/course-tax/characters/${character.id}`}
              aria-label={`Xem hồ sơ chi tiết của ${character.name}`}
            >
              Xem hồ sơ
            </Link>
          </div>
        </div>
      </div>
    </article>
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
      <main id="main-content" className="container margin-vert--lg">
        <section className={styles.hero} aria-labelledby="tax-stories-title">
          <h1 id="tax-stories-title" className="hero__title text--center">Câu chuyện về Thuế</h1>
          <p className="hero__subtitle text--center margin-bottom--lg">
            Chọn một nhân vật để bắt đầu hành trình tìm hiểu về thuế và ngân sách nhà nước.
          </p>
        </section>
        <section aria-label="Danh sách nhân vật">
          <ul className={styles.cardsGrid} style={{ listStyle: 'none', padding: 0 }}>
            {characters.map((char) => (
              <li key={char.id}>
                <CharacterCard character={char} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}