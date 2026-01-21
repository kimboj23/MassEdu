// c/Users/NinaTran/Downloads/MassEdu/MassEdu/src/components/HomepageFeatures/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const StorylineList = [
  {
    title: 'Thuế và Ngân sách Công',
    description: (
      <>
        Tiền thuế bạn đóng đi đâu? Khám phá qua góc nhìn của những người trong cuộc.
        Tìm hiểu cách chính quyền thu thuế và chi tiêu ngân sách.
      </>
    ),
    link: '/storylines/tax',
    status: 'active'
  },
  {
    title: 'Y tế Công',
    description: (
      <>
        Hệ thống y tế vận hành ra sao? Cùng tìm hiểu qua những câu chuyện
        về bệnh nhân, bác sĩ và các nhà quản lý.
      </>
    ),
    link: '#',
    status: 'coming-soon'
  },
  {
    title: 'Tham nhũng',
    description: (
      <>
        Tham nhũng ảnh hưởng đến cuộc sống của chúng ta như thế nào?
        Hãy cùng điều tra qua các tình huống thực tế.
      </>
    ),
    link: '#',
    status: 'coming-soon'
  },
];

function StorylineCard({title, description, link, status, cardIndex}) {
  const isActive = status === 'active';
  const isComingSoon = status === 'coming-soon';

  const CardContent = () => (
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {isComingSoon && (
          <span className={styles.comingSoonBadge} aria-label="Chủ đề này sắp ra mắt">Sắp ra mắt</span>
        )}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      {isActive && (
        <div className={styles.cardAction} aria-hidden="true">
          Bắt đầu khám phá <span aria-hidden="true">→</span>
        </div>
      )}
    </div>
  );

  const colorClass = `colorVariant${(cardIndex % 3) + 1}`;

  return (
    <article className={styles.cardWrapper}>
      {isActive ? (
        <Link
          to={link}
          className={clsx(styles.featureLink, styles.activeStoryline, styles[colorClass])}
          aria-label={`Khám phá câu chuyện: ${title}`}
        >
          <CardContent />
        </Link>
      ) : (
        <div
          className={clsx(styles.featureLink, styles.comingSoonStoryline, styles[colorClass])}
          aria-label={`${title} - Sắp ra mắt`}
        >
          <CardContent />
        </div>
      )}
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} id="storylines" aria-labelledby="storylines-title">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle} id="storylines-title">Chọn câu chuyện để khám phá</h2>
          <p className={styles.sectionSubtitle}>Mỗi câu chuyện sẽ đưa bạn vào vai những người khác nhau trong xã hội, giúp bạn hiểu sâu hơn về các vấn đề quan trọng.</p>
        </div>
        <ul className={styles.cardsGrid} aria-label="Danh sách các câu chuyện">
          {StorylineList.map((props, idx) => (
            <li key={idx}>
              <StorylineCard {...props} cardIndex={idx} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
