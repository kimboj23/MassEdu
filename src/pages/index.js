import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title display">
          Học về quyền<br />
          và trách nhiệm<br />
          công dân
        </Heading>
        <p className="hero__subtitle lead">
          TepUp là nơi nằm ngoài ao làng quen thuộc,
          nơi những "tép riu" có thể tự do học hỏi và
          thể hiện chính kiến một cách an toàn.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="#storylines">
            Bắt đầu học
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/knowledge-base/1.0-gioi-thieu">
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
