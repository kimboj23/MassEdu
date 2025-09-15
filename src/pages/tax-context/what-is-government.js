import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Tooltip from '@site/src/components/Tooltip';
import styles from './context.module.css';

export default function WhatIsGovernment() {
  return (
    <Layout
      title="Vậy chính quyền là gì? Vai trò ra sao?"
      description="Tìm hiểu về bản chất và vai trò của chính quyền trong xã hội">

      <div className={styles.contextHero}>
        <div className="container">
          <Heading as="h1">Vậy chính quyền là gì? Vai trò ra sao?</Heading>
          <p>Để hiểu rõ về thuế, trước tiên chúng ta cần hiểu chính quyền là gì và tại sao họ cần tiền.</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">

            <section className={styles.contextSection}>
              <Heading as="h2">Chính quyền là gì?</Heading>
              <p>
                <Tooltip conceptId="chinh-quyen">
                  Chính quyền
                </Tooltip> là tổ chức được thành lập để quản lý và phục vụ người dân trong một quốc gia.
                Giống như một gia đình cần có người quản lý việc nhà, một quốc gia cũng cần có tổ chức để duy trì trật tự và cung cấp dịch vụ cho tất cả mọi người.
              </p>

              <div className={styles.exampleBox}>
                <h4>Ví dụ đơn giản</h4>
                <p>
                  Hãy tưởng tượng một khu chung cư lớn có 1000 gia đình. Ai sẽ lo việc:
                </p>
                <ul>
                  <li>Dọn dẹp hành lang chung?</li>
                  <li>Sửa chữa thang máy khi hỏng?</li>
                  <li>Bảo vệ an ninh ban đêm?</li>
                  <li>Giải quyết tranh chấp giữa các hàng xóm?</li>
                </ul>
                <p>
                  → Ban quản trị chung cư! Chính quyền cũng giống như "ban quản trị" của cả nước.
                </p>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Vai trò của chính quyền</Heading>

              <div className={styles.roleGrid}>
                <div className={styles.roleCard}>
                  <h3>Duy trì trật tự</h3>
                  <p>Đảm bảo an ninh, giữ gìn hòa bình, thực thi pháp luật</p>
                </div>

                <div className={styles.roleCard}>
                  <h3>Cung cấp dịch vụ công</h3>
                  <p>Y tế, giáo dục, giao thông, điện nước - những thứ mọi người đều cần</p>
                </div>

                <div className={styles.roleCard}>
                  <h3>Tái phân phối tài nguyên</h3>
                  <p>Giúp đỡ người nghèo, đầu tư vào các vùng khó khăn</p>
                </div>

                <div className={styles.roleCard}>
                  <h3>Đại diện cho quốc gia</h3>
                  <p>Đàm phán với các nước khác, bảo vệ lợi ích quốc gia</p>
                </div>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Tại sao chính quyền cần tiền?</Heading>
              <p>
                Tất cả những việc trên đều tốn tiền! Chính quyền cần tiền để:
              </p>

              <div className={styles.expenseList}>
                <div className={styles.expenseItem}>
                  <span className={styles.expenseIcon}>CA</span>
                  <div>
                    <strong>Trả lương cho công chức</strong>
                    <p>Cảnh sát, giáo viên, bác sĩ, công chức các cấp</p>
                  </div>
                </div>

                <div className={styles.expenseItem}>
                  <span className={styles.expenseIcon}>CĐ</span>
                  <div>
                    <strong>Xây dựng cơ sở hạ tầng</strong>
                    <p>Đường xá, cầu cống, bệnh viện, trường học</p>
                  </div>
                </div>

                <div className={styles.expenseItem}>
                  <span className={styles.expenseIcon}>🆘</span>
                  <div>
                    <strong>Hỗ trợ khẩn cấp</strong>
                    <p>Ứng phó thiên tai, đại dịch, khủng hoảng</p>
                  </div>
                </div>
              </div>

              <div className={styles.calloutBox}>
                <h4>Câu hỏi quan trọng</h4>
                <p>
                  Nếu không có thuế, chính quyền sẽ lấy tiền từ đâu để làm những việc này?
                  Và nếu không có ai làm những việc này, cuộc sống của chúng ta sẽ ra sao?
                </p>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Khám phá tiếp</Heading>
              <div className={styles.nextSteps}>
                <Link to="/tax-context/government-revenue" className={styles.contextLink}>
                  ← Chính quyền lấy tiền từ đâu?
                </Link>
                <Link to="/tax-context/tax-types" className={styles.contextLink}>
                  Các loại thuế →
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}