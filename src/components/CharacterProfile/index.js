import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { getCharacter } from '@site/src/data/characters';
import styles from './character-profile.module.css';

function StorylineProgress({ character, currentStoryline, currentEpisode }) {
  const storylines = character.storylines;

  return (
    <nav className={styles.storylineProgress} aria-label={`Hành trình của ${character.name}`}>
      <h4 id="storyline-progress-title">Hành trình của {character.name}</h4>
      {Object.entries(storylines).map(([storylineId, storyline]) => (
        <section key={storylineId} className={styles.storylineSection} aria-labelledby={`storyline-${storylineId}`}>
          <div className={styles.storylineHeader}>
            <span className={styles.storylineTitle} id={`storyline-${storylineId}`}>{storyline.title}</span>
            {storyline.status === 'coming-soon' && (
              <span className={styles.comingSoon} aria-label="Sắp ra mắt">Sắp ra mắt</span>
            )}
          </div>

          {storyline.episodes && storyline.episodes.length > 0 && (
            <ol className={styles.episodeList} aria-label={`Các tập trong ${storyline.title}`}>
              {storyline.episodes.map((episode, index) => {
                const isCurrentEpisode =
                  storylineId === currentStoryline && episode.slug === currentEpisode;
                const isCompleted =
                  storylineId === currentStoryline &&
                  currentEpisode &&
                  index < storyline.episodes.findIndex(ep => ep.slug === currentEpisode);

                return (
                  <li key={episode.id}>
                    <Link
                      to={episode.path}
                      className={clsx(
                        styles.episodeLink,
                        isCurrentEpisode && styles.currentEpisode,
                        isCompleted && styles.completedEpisode
                      )}
                      aria-label={`Tập ${index + 1}: ${episode.title}${isCurrentEpisode ? ', đang xem' : ''}${isCompleted ? ', đã hoàn thành' : ''}`}
                      aria-current={isCurrentEpisode ? 'step' : undefined}
                    >
                      <span className={styles.episodeNumber} aria-hidden="true">{index + 1}</span>
                      <span className={styles.episodeTitle}>{episode.title}</span>
                      {isCurrentEpisode && <span className={styles.currentBadge} aria-hidden="true">Hiện tại</span>}
                      {isCompleted && <span className={styles.completedBadge} aria-hidden="true">Hoàn thành</span>}
                    </Link>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      ))}
    </nav>
  );
}

function CharacterCard({ character, compact = false }) {
  return (
    <article className={clsx(styles.characterCard, compact && styles.compact)} aria-labelledby={`character-name-${character.id || character.name}`}>
      <div className={styles.characterHeader}>
        <div className={styles.characterAvatar} role="img" aria-label={`Hình đại diện của ${character.name}`}>{character.avatar}</div>
        <div className={styles.characterBasicInfo}>
          <h3 className={styles.characterName} id={`character-name-${character.id || character.name}`}>{character.name}</h3>
          <p className={styles.characterOccupation}>{character.occupation}</p>
          {!compact && (
            <>
              <p className={styles.characterAge}>Tuổi: {character.age}</p>
              <p className={styles.characterLocation}>Địa điểm: {character.background.location}</p>
            </>
          )}
        </div>
      </div>

      <p className={styles.characterDescription}>{character.description}</p>

      {!compact && (
        <>
          <section className={styles.characterBackground} aria-labelledby="personal-info-heading">
            <h4 id="personal-info-heading">Thông tin cá nhân</h4>
            <ul>
              <li><strong>Học vấn:</strong> {character.background.education}</li>
              <li><strong>Gia đình:</strong> {character.background.family}</li>
              <li><strong>Thu nhập:</strong> {character.background.income}</li>
            </ul>
          </section>

          <section className={styles.personalityTraits} aria-labelledby="personality-heading">
            <h4 id="personality-heading">Tính cách</h4>
            <ul className={styles.traitTags} aria-label="Các đặc điểm tính cách" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {character.personalityTraits.map((trait, index) => (
                <li key={index} className={styles.traitTag} style={{ display: 'inline-block' }}>{trait}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
}

export default function CharacterProfile({
  characterId,
  currentStoryline = null,
  currentEpisode = null,
  showProgress = true,
  compact = false
}) {
  const character = getCharacter(characterId);

  if (!character) {
    return <div role="alert">Không tìm thấy thông tin nhân vật.</div>;
  }

  return (
    <section className={styles.characterProfile} aria-label={`Thông tin nhân vật ${character.name}`}>
      <CharacterCard character={character} compact={compact} />
      {showProgress && (
        <StorylineProgress
          character={character}
          currentStoryline={currentStoryline}
          currentEpisode={currentEpisode}
        />
      )}
    </section>
  );
}

export { CharacterCard };