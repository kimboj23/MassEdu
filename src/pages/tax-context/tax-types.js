import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import Tooltip from '@site/src/components/Tooltip';
import styles from './context.module.css';

export default function TaxTypes() {
  return (
    <Layout
      title="Gọi tên các loại thuế"
      description="Tìm hiểu về các loại thuế khác nhau và cách chúng hoạt động">

      <div className={styles.contextHero}>
        <div className="container">
          <Heading as="h1">Gọi tên các loại thuế</Heading>
          <p>Thuế không chỉ có một loại. Hãy cùng tìm hiểu các loại thuế khác nhau và ai phải đóng loại nào.</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">

            <section className={styles.contextSection}>
              <Heading as="h2">Thuế theo thu nhập</Heading>

              <div className={styles.taxTypeCard}>
                <h3>Thuế thu nhập cá nhân</h3>
                <p><strong>Ai đóng:</strong> Người có thu nhập từ lương, kinh doanh, đầu tư</p>
                <p><strong>Cách tính:</strong> Dựa trên thu nhập - thu nhập cao đóng nhiều hơn</p>

                <div className={styles.exampleBox}>
                  <h4>Ví dụ:</h4>
                  <ul>
                    <li>Thu nhập tháng: 8 triệu đồng</li>
                    <li>Thuế suất: 10%</li>
                    <li>Thuế phải nộp: 800.000 đồng</li>
                  </ul>
                </div>
              </div>

              <div className={styles.taxTypeCard}>
                <h3>Thuế thu nhập doanh nghiệp</h3>
                <p><strong>Ai đóng:</strong> Các công ty, doanh nghiệp</p>
                <p><strong>Cách tính:</strong> Dựa trên lợi nhuận của công ty</p>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Thuế khi mua bán</Heading>

              <div className={styles.taxTypeCard}>
                <h3>Thuế giá trị gia tăng (VAT)</h3>
                <p><strong>Ai đóng:</strong> Người mua hàng (đã bao gồm trong giá)</p>
                <p><strong>Cách hoạt động:</strong> 10% được cộng vào giá hàng hóa</p>

                <div className={styles.exampleBox}>
                  <h4>Ví dụ khi mua bánh mì:</h4>
                  <ul>
                    <li>Giá bánh: 15.000 đồng</li>
                    <li>Đã bao gồm VAT: ~1.360 đồng</li>
                    <li>Người bán phải nộp VAT này cho nhà nước</li>
                  </ul>
                </div>
              </div>

              <div className={styles.taxTypeCard}>
                <h3>Thuế tiêu thụ đặc biệt</h3>
                <p><strong>Áp dụng cho:</strong> Xe hơi, thuốc lá, rượu bia - những thứ "không cần thiết"</p>
                <p><strong>Mục đích:</strong> Hạn chế tiêu dùng những thứ có hại hoặc xa xỉ</p>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Thuế và phí khác</Heading>

              <div className={styles.taxTypeGrid}>
                <div className={styles.taxTypeCard}>
                  <h3>Thuế tài sản</h3>
                  <p>Thuế nhà, đất (đang được thảo luận)</p>
                </div>

                <div className={styles.taxTypeCard}>
                  <h3>Phí sử dụng đường bộ</h3>
                  <p>Xe tải, xe container phải đóng</p>
                </div>

                <div className={styles.taxTypeCard}>
                  <h3>Phí sử dụng vỉa hè</h3>
                  <p>Đối với người bán hàng rong</p>
                </div>

                <div className={styles.taxTypeCard}>
                  <h3>Lệ phí giấy tờ</h3>
                  <p>Làm giấy phép, đăng ký xe</p>
                </div>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Tại sao có nhiều loại thuế?</Heading>

              <div className={styles.reasonsList}>
                <div className={styles.reasonItem}>
                  <span className={styles.reasonIcon}>CB</span>
                  <div>
                    <strong>Công bằng</strong>
                    <p>Người có thu nhập cao đóng thuế thu nhập, người tiêu dùng nhiều đóng VAT</p>
                  </div>
                </div>

                <div className={styles.reasonItem}>
                  <span className={styles.reasonIcon}>DH</span>
                  <div>
                    <strong>Định hướng hành vi</strong>
                    <p>Thuế cao cho thuốc lá để khuyến khích người dân bỏ hút</p>
                  </div>
                </div>

                <div className={styles.reasonItem}>
                  <span className={styles.reasonIcon}>OD</span>
                  <div>
                    <strong>Ổn định nguồn thu</strong>
                    <p>Nếu chỉ có một loại thuế, nguồn thu sẽ không ổn định</p>
                  </div>
                </div>
              </div>

              <div className={styles.calloutBox}>
                <h4>Câu hỏi thú vị</h4>
                <p>
                  Bạn có biết rằng khi mua một ly cà phê, bạn đã đóng ít nhất 3 loại thuế khác nhau không?
                  Hãy thử đoán xem!
                </p>
              </div>
            </section>

            <section className={styles.contextSection}>
              <Heading as="h2">Khám phá tiếp</Heading>
              <div className={styles.nextSteps}>
                <Link to="/tax-context/what-is-government" className={styles.contextLink}>
                  ← Chính quyền là gì?
                </Link>
                <Link to="/tax-context/tax-principles" className={styles.contextLink}>
                  Nguyên tắc thu thuế →
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
}