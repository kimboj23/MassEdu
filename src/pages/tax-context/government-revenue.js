import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Tooltip from '../../components/Tooltip';
import styles from './context.module.css';

// Content chunking component
function ContentChunk({ title, children, isVisible, onToggle }) {
  return (
    <div className={styles.contentChunk}>
      <button
        className={styles.chunkToggle}
        onClick={onToggle}
        aria-expanded={isVisible}
      >
        <span>{title}</span>
        <span className={styles.chunkIcon}>{isVisible ? '−' : '+'}</span>
      </button>
      {isVisible && (
        <div className={styles.chunkContent}>
          {children}
        </div>
      )}
    </div>
  );
}


export default function GovernmentRevenue() {
  return (
    <Layout
      title="Chính quyền lấy tiền từ đâu?"
      description="Tìm hiểu các nguồn thu của chính quyền và cách thuế được thu">

      <div className={styles.contextHero}>
        <div className="container">
          <Heading as="h1">Chính quyền lấy tiền từ đâu?</Heading>
          <p>Để vận hành và cung cấp dịch vụ công, chính quyền cần có nguồn tài chính. Hãy tìm hiểu các nguồn thu chính.</p>
        </div>
      </div>

      <main className={styles.contextMain}>
        <div className="container">

          {/* Chunk 1: Nguồn thu chính */}
          <section className={styles.chunk}>
            <Heading as="h2">1. Thu thuế - Nguồn thu chính</Heading>
            <p>
              <Tooltip conceptId="thue">
                Thuế
              </Tooltip> là nguồn thu lớn nhất của <Tooltip conceptId="chinh-quyen">
                chính quyền
              </Tooltip>, chiếm khoảng 80-85% tổng thu <Tooltip conceptId="ngan-sach">
                ngân sách nhà nước
              </Tooltip>.
            </p>

            <div className={styles.taxTypes}>
              <h3>Các loại thuế chính:</h3>
              <div className={styles.taxGrid}>
                <div className={styles.taxCard}>
                  <h4><Tooltip conceptId="thue-thu-nhap">Thuế thu nhập</Tooltip></h4>
                  <p>Thuế từ lương, thưởng và hoạt động kinh doanh</p>
                </div>
                <div className={styles.taxCard}>
                  <h4>Thuế tiêu thụ đặc biệt</h4>
                  <p>Thuế trên xăng dầu, bia rượu, thuốc lá</p>
                </div>
                <div className={styles.taxCard}>
                  <h4>Thuế xuất nhập khẩu</h4>
                  <p>Thuế trên hàng hóa xuất khẩu và nhập khẩu</p>
                </div>
                <div className={styles.taxCard}>
                  <h4>Thuế giá trị gia tăng</h4>
                  <p>Thuế trên hầu hết hàng hóa và dịch vụ</p>
                </div>
              </div>
            </div>

            <div className={styles.chunkNavigation}>
              <button className={styles.nextChunk} onClick={() => document.getElementById('chunk2').scrollIntoView()}>
                Tiếp theo: Nguồn thu khác →
              </button>
            </div>
          </section>

          {/* Chunk 2: Nguồn thu khác */}
          <section className={styles.chunk} id="chunk2">
            <Heading as="h2">2. Các nguồn thu khác</Heading>

            <h3>Kinh doanh của nhà nước</h3>
            <p>
              Nhà nước cũng có thu nhập từ các <Tooltip conceptId="doanh-nghiep-nha-nuoc">
                doanh nghiệp nhà nước
              </Tooltip> như Petrolimex, VNPT, các ngân hàng nhà nước.
            </p>

            <h3>Phí và lệ phí</h3>
            <ul>
              <li>Phí đăng ký kết hôn, ly hôn</li>
              <li>Lệ phí làm hộ chiếu, thị thực</li>
              <li>Phí sử dụng đường bộ</li>
              <li>Lệ phí trước bạ</li>
            </ul>

            <h3>Thu từ đất đai</h3>
            <p>
              Thu từ tiền sử dụng đất, thuê đất, chuyển nhượng quyền sử dụng đất.
            </p>

            <div className={styles.chunkNavigation}>
              <button className={styles.nextChunk} onClick={() => document.getElementById('chunk3').scrollIntoView()}>
                Tiếp theo: Vai trò của chính quyền →
              </button>
            </div>
          </section>

          {/* Chunk 3: Vai trò chính quyền */}
          <section className={styles.chunk} id="chunk3">
            <Heading as="h2">3. Vậy chính quyền là gì? Vai trò ra sao?</Heading>

            <p>
              <Tooltip conceptId="chinh-quyen">
                Chính quyền
              </Tooltip> bao gồm các cấp từ trung ương đến địa phương, mỗi cấp có vai trò thu thuế và chi tiêu khác nhau.
            </p>

            <div className={styles.governmentLevels}>
              <div className={styles.levelCard}>
                <h4>Chính quyền trung ương</h4>
                <p>Thu thuế xuất nhập khẩu, thuế thu nhập doanh nghiệp lớn, chi cho quốc phòng, giáo dục đại học</p>
              </div>
              <div className={styles.levelCard}>
                <h4>Chính quyền tỉnh/thành phố</h4>
                <p>Thu thuế thu nhập cá nhân, chi cho y tế, giáo dục phổ thông</p>
              </div>
              <div className={styles.levelCard}>
                <h4>Chính quyền huyện/quận</h4>
                <p>Thu phí, lệ phí địa phương, chi cho hạ tầng cơ sở</p>
              </div>
            </div>

            <div className={styles.finalNavigation}>
              <Link to="/storylines/tax" className={styles.backToStory}>
                ← Quay lại câu chuyện
              </Link>
              <Link to="/tax-context/tax-principles" className={styles.nextContext}>
                Nguyên tắc thu thuế →
              </Link>
            </div>
          </section>

        </div>
      </main>
    </Layout>
  );
}