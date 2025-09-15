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
      <p>Các bài viết về nhân quyền sẽ được cập nhật sớm.</p>
    </div>
  );
}

export default function NhanQuyenPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      try {
        const tagArticles = await getArticlesByTag('nhân quyền');
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
      title="Nhân quyền - Tri thức"
      description="Tổng hợp kiến thức về nhân quyền, bình đẳng và các quyền cơ bản của con người">

      {/* Hero Section */}
      <div className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            Nhân quyền
          </Heading>
          <p className="hero__subtitle">
            Tìm hiểu về các quyền cơ bản của con người, nguyên tắc bình đẳng và các khái niệm nhân quyền quan trọng
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
                  Nhân quyền là nền tảng của một xã hội công bằng và dân chủ.
                  Khám phá các khái niệm cơ bản và hiểu sâu hơn về quyền con người.
                </p>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <section>
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" className="margin-bottom--md">
                  Bài viết về Nhân quyền
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
                        <Heading as="h3">Chính trị</Heading>
                        <p>Tìm hiểu về hệ thống chính trị và quyền tham gia dân chủ</p>
                        <Link to="/tri-thuc/chinh-tri" className="button button--outline">
                          Khám phá →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="card">
                      <div className="card__body text--center">
                        <Heading as="h3">Luật pháp</Heading>
                        <p>Khám phá khung pháp lý bảo vệ quyền con người</p>
                        <Link to="/tri-thuc/luat-phap" className="button button--outline">
                          Khám phá →
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--4">
                    <div className="card">
                      <div className="card__body text--center">
                        <Heading as="h3">Khám phá</Heading>
                        <p>Trải nghiệm các câu chuyện thực tế về nhân quyền</p>
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