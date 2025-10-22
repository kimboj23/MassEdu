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
    <div className="col col--12 margin-bottom--lg">
      <div className={`card ${!isAvailable ? 'card--disabled' : ''} ${styles.characterCard}`}>
        <div className="card__header">
          <div className={styles.characterHeader}>
            <div className={styles.characterAvatar}>{character.avatar}</div>
            <div className={styles.characterInfo}>
              <h2>{character.name}</h2>
              <p className={styles.occupation}>{character.occupation}</p>
              <div className={styles.characterMeta}>
                <span>Tuổi: {character.age}</span>
                <span>•</span>
                <span>{character.background.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card__body">
          <p className={styles.description}>{character.description}</p>

          <div className={styles.backgroundSection}>
            <h4>Hoàn cảnh</h4>
            <div className={styles.backgroundGrid}>
              <div>
                <strong>Học vấn:</strong> {character.background.education}
              </div>
              <div>
                <strong>Gia đình:</strong> {character.background.family}
              </div>
              <div>
                <strong>Thu nhập:</strong> {character.background.income}
              </div>
            </div>
          </div>

          <div className={styles.challengesSection}>
            <h4>Thách thức về thuế</h4>
            <ul className={styles.challengesList}>
              {character.challenges.tax.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>

          {isAvailable && (
            <div className={styles.episodesSection}>
              <h4>Hành trình ({taxStoryline.episodes.length} phần)</h4>
              <div className={styles.episodesList}>
                {taxStoryline.episodes.map((episode, idx) => (
                  <div key={episode.id} className={styles.episodeItem}>
                    <span className={styles.episodeNumber}>{idx + 1}</span>
                    <span className={styles.episodeTitle}>{episode.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="card__footer">
          <Link
            className={`button button--primary button--lg button--block ${!isAvailable ? 'disabled' : ''}`}
            to={isAvailable ? taxStoryline.episodes[0].path : undefined}
            aria-disabled={!isAvailable}
          >
            {isAvailable ? 'Bắt đầu hành trình' : 'Sắp ra mắt'}
          </Link>
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
        <div className="row">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      </main>
    </Layout>
  );
}