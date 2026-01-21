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
      // Set focus for keyboard users
      storylinesSection.setAttribute('tabindex', '-1');
      storylinesSection.focus();
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} aria-labelledby="hero-title">
      <div className="container">
        <Heading as="h1" id="hero-title" className="hero__title display">
          Tép riu<br aria-hidden="true" />
          stép up<br aria-hidden="true" />
          stép out
        </Heading>
        <p className="hero__subtitle lead">
          TepUp là nơi nằm ngoài ao làng quen thuộc,
          nơi những "tép riu" có thể tự do học hỏi và
          thể hiện chính kiến một cách an toàn.
        </p>
        <div className={styles.buttons} role="group" aria-label="Các hành động chính">
          <button
            className="button button--primary button--lg"
            onClick={handleScrollToStorylines}
            aria-label="Bắt đầu học - cuộn đến phần câu chuyện">
            Bắt đầu học
          </button>
          <Link
            className="button button--secondary button--lg"
            to="/about"
            aria-label="Tìm hiểu thêm về TepUp">
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
      <main id="main-content" aria-label="Nội dung chính">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
