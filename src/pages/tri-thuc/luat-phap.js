import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { getArticlesByTag } from '../../utils/knowledgeBase';

// Article card component
function ArticleCard({ article }) {
  return (
    <div className="knowledge-article-card">
      <div className="card margin-bottom--md">
        <div className="card__header">
          <div className="article-tags">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="badge badge--secondary"
                style={{ marginRight: '8px', fontSize: '0.75rem' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="card__body">
          <Heading as="h3" className="card__title">
            <Link to={article.path}>{article.title}</Link>
          </Heading>
          <p className="card__description">{article.description}</p>
        </div>
        <div className="card__footer">
          <Link to={article.path} className="button button--primary button--sm">
            Đọc bài viết →
          </Link>
        </div>
      </div>
    </div>
  );
}

// Loading component
function LoadingState() {
  return (
    <div className="text--center margin-vert--lg">
      <div>Đang tải bài viết...</div>
    </div>
  );
}

// Empty state component
function EmptyState() {
  return (
    <div className="text--center margin-vert--lg">
      <Heading as="h3">Chưa có bài viết nào</Heading>
      <p>Các bài viết về luật pháp sẽ được cập nhật sớm.</p>
    </div>
  );
}

export default function LuatPhapPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const tagArticles = await getArticlesByTag('luật pháp');
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
      title="Luật pháp - Tri thức"
      description="Tổng hợp kiến thức về hệ thống pháp luật, quyền và nghĩa vụ pháp lý">

      {/* Hero Section */}
      <div className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Luật pháp
          </Heading>
          <p className="hero__subtitle">
            Tìm hiểu về hệ thống pháp luật, quyền và nghĩa vụ của công dân trong xã hội
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="margin-vert--lg">
        <div className="container">

          {/* Introduction */}
          <div className="row margin-bottom--lg">
            <div className="col col--8 col--offset-2">
              <div className="text--center">
                <p className="text--large">
                  Pháp luật là nền tảng của xã hội văn minh.
                  Hiểu biết pháp luật giúp bạn bảo vệ quyền lợi và thực hiện nghĩa vụ.
                </p>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <section>
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" className="margin-bottom--md">
                  Bài viết về Luật pháp
                </Heading>

                {loading ? (
                  <LoadingState />
                ) : articles.length > 0 ? (
                  <div className="row">
                    {articles.map(article => (
                      <div key={article.slug} className="col col--6 col--lg-4">
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
          <section className="margin-top--xl">
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" className="margin-bottom--md">
                  Chủ đề liên quan
                </Heading>
                <div className="row">
                  <div className="col col--4">
                    <div className="card">
                      <div className="card__body text--center">
                        <Heading as="h3">Nhân quyền</Heading>
                        <p>Tìm hiểu về quyền con người được bảo vệ bởi pháp luật</p>
                        <Link to="/tri-thuc/nhan-quyen" className="button button--outline">
                          Khám phá →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="card">
                      <div className="card__body text--center">
                        <Heading as="h3">Chính trị</Heading>
                        <p>Khám phá mối quan hệ giữa pháp luật và chính trị</p>
                        <Link to="/tri-thuc/chinh-tri" className="button button--outline">
                          Khám phá →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="card">
                      <div className="card__body text--center">
                        <Heading as="h3">Khám phá</Heading>
                        <p>Trải nghiệm các tình huống pháp lý thực tế</p>
                        <Link to="/storylines/tax" className="button button--outline">
                          Bắt đầu →
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