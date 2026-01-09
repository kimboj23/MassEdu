import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import WaveAnimation from '@site/src/components/WaveAnimation';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const handleScrollToStorylines = (e) => {
    e.preventDefault();
    const storylinesSection = document.getElementById('storylines');
    if (storylinesSection) {
      storylinesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title display">
          Tép riu<br />
          stép up<br />
          stép out
        </Heading>
        <p className="hero__subtitle lead">
          TepUp là nơi nằm ngoài ao làng quen thuộc,
          nơi những "tép riu" có thể tự do học hỏi và
          thể hiện chính kiến một cách an toàn.
        </p>
        <div className={styles.buttons}>
          <button
            className="button button--primary button--lg"
            onClick={handleScrollToStorylines}>
            Bắt đầu học
          </button>
          <Link
            className="button button--secondary button--lg"
            to="/about">
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Mại vô ${siteConfig.title}`}
      description="Bên nhau học hành">
      <WaveAnimation />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
