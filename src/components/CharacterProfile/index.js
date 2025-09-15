import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { getCharacter } from '@site/src/data/characters';
import styles from './character-profile.module.css';

function StorylineProgress({ character, currentStoryline, currentEpisode }) {
  const storylines = character.storylines;

  return (
    <div className={styles.storylineProgress}>
      <h4>Hành trình của {character.name}</h4>
      {Object.entries(storylines).map(([storylineId, storyline]) => (
        <div key={storylineId} className={styles.storylineSection}>
          <div className={styles.storylineHeader}>
            <span className={styles.storylineTitle}>{storyline.title}</span>
            {storyline.status === 'coming-soon' && (
              <span className={styles.comingSoon}>Sắp ra mắt</span>
            )}
          </div>

          {storyline.episodes && storyline.episodes.length > 0 && (
            <div className={styles.episodeList}>
              {storyline.episodes.map((episode, index) => {
                const isCurrentEpisode =
                  storylineId === currentStoryline && episode.slug === currentEpisode;
                const isCompleted =
                  storylineId === currentStoryline &&
                  currentEpisode &&
                  index < storyline.episodes.findIndex(ep => ep.slug === currentEpisode);

                return (
                  <Link
                    key={episode.id}
                    to={episode.path}
                    className={clsx(
                      styles.episodeLink,
                      isCurrentEpisode && styles.currentEpisode,
                      isCompleted && styles.completedEpisode
                    )}
                  >
                    <span className={styles.episodeNumber}>{index + 1}</span>
                    <span className={styles.episodeTitle}>{episode.title}</span>
                    {isCurrentEpisode && <span className={styles.currentBadge}>Hiện tại</span>}
                    {isCompleted && <span className={styles.completedBadge}>Hoàn thành</span>}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CharacterCard({ character, compact = false }) {
  return (
    <div className={clsx(styles.characterCard, compact && styles.compact)}>
      <div className={styles.characterHeader}>
        <div className={styles.characterAvatar}>{character.avatar}</div>
        <div className={styles.characterBasicInfo}>
          <h3 className={styles.characterName}>{character.name}</h3>
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
          <div className={styles.characterBackground}>
            <h4>Thông tin cá nhân</h4>
            <ul>
              <li><strong>Học vấn:</strong> {character.background.education}</li>
              <li><strong>Gia đình:</strong> {character.background.family}</li>
              <li><strong>Thu nhập:</strong> {character.background.income}</li>
            </ul>
          </div>

          <div className={styles.personalityTraits}>
            <h4>Tính cách</h4>
            <div className={styles.traitTags}>
              {character.personalityTraits.map((trait, index) => (
                <span key={index} className={styles.traitTag}>{trait}</span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
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
    return <div>Không tìm thấy thông tin nhân vật.</div>;
  }

  return (
    <div className={styles.characterProfile}>
      <CharacterCard character={character} compact={compact} />
      {showProgress && (
        <StorylineProgress
          character={character}
          currentStoryline={currentStoryline}
          currentEpisode={currentEpisode}
        />
      )}
    </div>
  );
}

export { CharacterCard };