import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import TriThucHero from '@site/src/components/TriThucHero';
import Icon from '@site/src/components/Icon';
import { IntroSection } from '@site/src/components/Layout';

const humanRightsPages = [
  {
    title: 'Triết học - Lịch sử Nhân quyền',
    description: 'Lịch sử hình thành và phát triển của tư tưởng nhân quyền từ cổ đại đến hiện đại',
    path: '/knowledge-base/nhan-quyen/triet-hoc-lich-su',
    icon: 'history_edu'
  },
  {
    title: 'Nhân quyền là gì và gồm những gì?',
    description: 'Định nghĩa nhân quyền, các nguyên tắc cơ bản và phân loại các nhóm quyền',
    path: '/knowledge-base/nhan-quyen/nhan-quyen-la-gi',
    icon: 'help_outline'
  },
  {
    title: 'Các quyền dân sự và chính trị',
    description: 'Tìm hiểu về các quyền dân sự và chính trị - nhóm quyền bảo vệ tự do cá nhân',
    path: '/knowledge-base/nhan-quyen/quyen-dan-su-chinh-tri',
    icon: 'how_to_vote'
  },
  {
    title: 'Các quyền kinh tế, xã hội và văn hóa',
    description: 'Tìm hiểu về các quyền kinh tế, xã hội và văn hóa - nhóm quyền bảo đảm điều kiện sống xứng đáng',
    path: '/knowledge-base/nhan-quyen/quyen-kinh-te-xa-hoi-van-hoa',
    icon: 'diversity_3'
  },
  {
    title: 'Nhân quyền trong Hiến pháp Việt Nam',
    description: 'Tìm hiểu về các quyền cơ bản được quy định trong Hiến pháp Việt Nam 2013',
    path: '/knowledge-base/nhan-quyen/hien-phap-vn',
    icon: 'menu_book'
  }
];

function PageCard({ page }) {
  return (
    <article className="knowledge-article-card">
      <div className="card margin-bottom--md">
        <div className="card__body">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Icon name={page.icon} decorative size="medium" />
            <Heading as="h3" className="card__title" style={{ margin: 0 }}>
              <Link to={page.path}>{page.title}</Link>
            </Heading>
          </div>
          <p className="card__description">{page.description}</p>
        </div>
        <div className="card__footer">
          <Link
            to={page.path}
            className="button button--primary button--sm"
            aria-label={`Đọc bài viết: ${page.title}`}
          >
            <Icon name="article" decorative size="small" /> Đọc bài viết
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function NhanQuyenPage() {
  return (
    <Layout
      title="Nhân quyền - Tri thức"
      description="Tổng hợp kiến thức về nhân quyền, bình đẳng và các quyền cơ bản của con người">

      {/* Hero Section */}
      <TriThucHero
        title="Nhân quyền"
        subtitle="Tìm hiểu về các quyền cơ bản của con người, nguyên tắc bình đẳng và các khái niệm nhân quyền quan trọng"
      />

      {/* Main Content */}
      <main className="margin-vert--lg">
        <div className="container">

          {/* Introduction */}
          <IntroSection>
            Quyền con người là những gì bạn đáng được có, mà không phải ân huệ cần chờ ai cho.
          </IntroSection>

          {/* Articles Section */}
          <section aria-labelledby="articles-heading">
            <div className="row">
              <div className="col col--12">
                <Heading as="h2" id="articles-heading" className="margin-bottom--md">
                  <Icon name="library_books" decorative size="medium" /> Bài viết về Nhân quyền
                </Heading>

                <div className="row" role="list" aria-label="Danh sách bài viết">
                  {humanRightsPages.map((page, index) => (
                    <div key={index} className="col col--6 col--lg-4" role="listitem">
                      <PageCard page={page} />
                    </div>
                  ))}
                </div>
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
                        <Icon name="account_balance" label="Chính trị" size="large" />
                        <Heading as="h3">Chính trị</Heading>
                        <p>Tìm hiểu về hệ thống chính trị và quyền tham gia dân chủ</p>
                        <Link
                          to="/tri-thuc/chinh-tri"
                          className="button button--outline"
                          aria-label="Khám phá chủ đề Chính trị"
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
                        <p>Khám phá khung pháp lý bảo vệ quyền con người</p>
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
                        <p>Trải nghiệm các câu chuyện thực tế về nhân quyền</p>
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
