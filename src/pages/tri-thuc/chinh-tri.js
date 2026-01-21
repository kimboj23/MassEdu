import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { getArticlesByTag } from '../../utils/knowledgeBase';
import TriThucHero from '@site/src/components/TriThucHero';
import Icon from '@site/src/components/Icon';
import { IntroSection } from '@site/src/components/Layout';

// Article card component
function ArticleCard({ article }) {
  return (
    <article className="knowledge-article-card" aria-labelledby={`article-${article.slug}`}>
      <div className="card margin-bottom--md">
        <div className="card__header">
          <ul className="article-tags" aria-label="Thẻ bài viết" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {article.tags.map(tag => (
              <li
                key={tag}
                className="badge badge--secondary"
                style={{ display: 'inline-block', marginRight: '8px', fontSize: '0.75rem' }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="card__body">
          <Heading as="h3" id={`article-${article.slug}`} className="card__title">
            <Link to={article.path}>{article.title}</Link>
          </Heading>
          <p className="card__description">{article.description}</p>
        </div>
        <div className="card__footer">
          <Link
            to={article.path}
            className="button button--primary button--sm"
            aria-label={`Đọc bài viết: ${article.title}`}
          >
            <Icon name="article" decorative size="small" /> Đọc bài viết
          </Link>
        </div>
      </div>
    </article>
  );
}

// Loading component
function LoadingState() {
  return (
    <div className="text--center margin-vert--lg" role="status" aria-live="polite">
      <Icon name="hourglass_empty" label="Đang tải" size="large" />
      <div>Đang tải bài viết...</div>
    </div>
  );
}

// Empty state component
function EmptyState() {
  return (
    <div className="text--center margin-vert--lg" role="status">
      <Icon name="inbox" label="Không có bài viết" size="large" />
      <Heading as="h3">Chưa có bài viết nào</Heading>
      <p>Các bài viết về chính trị sẽ được cập nhật sớm.</p>
    </div>
  );
}

export default function ChinhTriPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const tagArticles = await getArticlesByTag('chính trị');
        setArticles(tagArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return (
    <Layout
      title="Chính trị - Tri thức"
      description="Tổng hợp kiến thức về hệ thống chính trị, chính quyền và dân chủ">

      {/* Hero Section */}
      <TriThucHero
        title="Chính trị"
        subtitle="Hiểu về hệ thống chính trị, cách thức hoạt động của chính quyền và quyền tham gia dân chủ"
      />

      {/* Main Content */}
      <main className="margin-vert--lg">
        <div className="container">

          {/* Introduction */}
          <IntroSection>
            Chính trị không chỉ là quyền lực, mà còn là cách chúng ta đấu tranh để được lắng nghe.
          </IntroSection>

          {/* Articles Section */}
          <section aria-labelledby="articles-heading">
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" id="articles-heading" className="margin-bottom--md">
                  <Icon name="library_books" decorative size="medium" /> Bài viết về Chính trị
                </Heading>

                {loading ? (
                  <LoadingState />
                ) : articles.length > 0 ? (
                  <div className="row" role="list" aria-label="Danh sách bài viết">
                    {articles.map(article => (
                      <div key={article.slug} className="col col--6 col--lg-4" role="listitem">
                        <ArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyState />
                )}
              </div>
            </div>
          </section>

          {/* Related Topics */}
          <section className="margin-top--xl" aria-labelledby="related-topics-heading">
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" id="related-topics-heading" className="margin-bottom--md">
                  <Icon name="hub" decorative size="medium" /> Chủ đề liên quan
                </Heading>
                <div className="row" role="list" aria-label="Các chủ đề liên quan">
                  <div className="col col--4" role="listitem">
                    <div className="card">
                      <div className="card__body text--center">
                        <Icon name="diversity_3" label="Nhân quyền" size="large" />
                        <Heading as="h3">Nhân quyền</Heading>
                        <p>Tìm hiểu về quyền con người trong hệ thống chính trị</p>
                        <Link
                          to="/tri-thuc/nhan-quyen"
                          className="button button--outline"
                          aria-label="Khám phá chủ đề Nhân quyền"
                        >
                          <Icon name="arrow_forward" decorative size="small" /> Khám phá
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4" role="listitem">
                    <div className="card">
                      <div className="card__body text--center">
                        <Icon name="gavel" label="Luật pháp" size="large" />
                        <Heading as="h3">Luật pháp</Heading>
                        <p>Khám phá khung pháp lý của hệ thống chính trị</p>
                        <Link
                          to="/tri-thuc/luat-phap"
                          className="button button--outline"
                          aria-label="Khám phá chủ đề Luật pháp"
                        >
                          <Icon name="arrow_forward" decorative size="small" /> Khám phá
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4" role="listitem">
                    <div className="card">
                      <div className="card__body text--center">
                        <Icon name="explore" label="Khám phá" size="large" />
                        <Heading as="h3">Khám phá</Heading>
                        <p>Trải nghiệm các câu chuyện về chính trị thực tế</p>
                        <Link
                          to="/storylines/tax"
                          className="button button--outline"
                          aria-label="Bắt đầu khám phá câu chuyện"
                        >
                          <Icon name="play_arrow" decorative size="small" /> Bắt đầu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}