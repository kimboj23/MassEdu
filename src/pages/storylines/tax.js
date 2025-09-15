import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { getCharactersByStoryline } from '@site/src/data/characters';
import { CharacterCard } from '@site/src/components/CharacterProfile';

import styles from './tax.module.css';

// Get characters who have tax storylines
const CharacterList = getCharactersByStoryline('tax');

function StorylineCharacterCard({ character }) {
  const firstEpisode = character.storylines.tax.episodes[0];

  return (
    <div className={clsx('col col--6', styles.characterCol)}>
      <div className={styles.characterCard}>
        <div className={styles.characterHeader}>
          <div className={styles.characterAvatar}>{character.avatar}</div>
          <div className={styles.characterInfo}>
            <h3 className={styles.characterName}>{character.name}</h3>
            <p className={styles.characterRole}>{character.occupation}</p>
            <Link to={`/characters/${character.id}`} className={styles.profileLink}>
              Xem hồ sơ đầy đủ →
            </Link>
          </div>
        </div>

        <div className={styles.characterDescription}>
          <p>{character.description}</p>
        </div>

        <div className={styles.characterChallenges}>
          <h4>Thách thức về thuế:</h4>
          <ul>
            {character.challenges.tax.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className={styles.actionButtons}>
          <Link to={firstEpisode.path} className={styles.startButton}>
            Bắt đầu với {character.name} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TaxStoryline() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Câu chuyện về Thuế"
      description="Khám phá cách thuế ảnh hưởng đến cuộc sống qua góc nhìn của những người trong cuộc">

      <div className={styles.heroSection}>
        <div className="container">
          <div className="text--center">
            <Heading as="h1" className={styles.heroTitle}>
              Câu chuyện về Thuế và Ngân sách
            </Heading>
            <p className={styles.heroSubtitle}>
              Tiền thuế bạn đóng đi đâu? Chính quyền chi tiêu như thế nào?
              Hãy khám phá qua trải nghiệm của những người khác nhau trong xã hội.
            </p>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className="container">
          <section className={styles.characterSection}>
            <div className="text--center margin-bottom--xl">
              <Heading as="h2">Chọn nhân vật để bắt đầu</Heading>
              <p>
                Mỗi nhân vật sẽ đưa bạn vào những tình huống khác nhau,
                giúp bạn hiểu sâu hơn về thuế và ngân sách công.
              </p>
            </div>

            <div className="row">
              {CharacterList.map((character, idx) => (
                <StorylineCharacterCard key={character.id} character={character} />
              ))}
            </div>
          </section>

          <section className={styles.contextSection}>
            <div className="text--center">
              <Heading as="h3">Hoặc tìm hiểu ngay về</Heading>
              <div className={styles.contextLinks}>
                <Link to="/tax-context/government-revenue" className={styles.contextLink}>
                  Chính quyền lấy tiền từ đâu?
                </Link>
                <span className={clsx(styles.contextLink, styles.contextLinkDisabled)}>
                  Nguyên tắc thu thuế (Sắp ra mắt)
                </span>
                <span className={clsx(styles.contextLink, styles.contextLinkDisabled)}>
                  Ngân sách chi cho gì? (Sắp ra mắt)
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}