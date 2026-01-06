// c/Users/NinaTran/Downloads/MassEdu/MassEdu/src/components/HomepageFeatures/index.js
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const StorylineList = [
  {
    title: 'Thuế và Ngân sách Công',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
          <span className={styles.comingSoonBadge}>Sắp ra mắt</span>
        )}
      </div>
      <p className={styles.cardDescription}>{description}</p>
      {isActive && (
        <div className={styles.cardAction}>
          Bắt đầu khám phá →
        </div>
      )}
    </div>
  );

  const colorClass = `colorVariant${(cardIndex % 3) + 1}`;

  return (
    <div className={styles.cardWrapper}>
      {isActive ? (
        <Link to={link} className={clsx(styles.featureLink, styles.activeStoryline, styles[colorClass])}>
          <CardContent />
        </Link>
      ) : (
        <div className={clsx(styles.featureLink, styles.comingSoonStoryline, styles[colorClass])}>
          <CardContent />
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} id="storylines">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Chọn câu chuyện để khám phá</h2>
          <p className={styles.sectionSubtitle}>Mỗi câu chuyện sẽ đưa bạn vào vai những người khác nhau trong xã hội, giúp bạn hiểu sâu hơn về các vấn đề quan trọng.</p>
        </div>
        <div className={styles.cardsGrid}>
          {StorylineList.map((props, idx) => (
            <StorylineCard key={idx} {...props} cardIndex={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
