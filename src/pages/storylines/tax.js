import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

const characters = [
  {
    name: 'Sinh viên',
    description: 'Theo dõi một sinh viên năm ba lần đầu tiên khám phá ra mình đang đóng thuế mỗi ngày và tìm hiểu về trách nhiệm công dân của mình.',
    link: '/course-tax/characters/sinh-vien/',
    imageUrl: '/MassEdu/img/character-student.png', // Placeholder image
    tags: ['Sinh viên làm thêm', 'Thuế GTGT', 'Thuế TNCN'],
    status: 'Sẵn sàng',
  },
  {
    name: 'Chủ quán cà phê (Sắp ra mắt)',
    description: 'Trải nghiệm việc quản lý một doanh nghiệp nhỏ, đối mặt với thuế doanh nghiệp, hóa đơn và các quy định phức tạp.',
    link: '#',
    imageUrl: '/MassEdu/img/character-owner.png', // Placeholder image
    tags: ['Kinh doanh', 'Thuế doanh nghiệp'],
    status: 'Sắp ra mắt',
  },
];

function CharacterCard({ character }) {
  const isComingSoon = character.status === 'Sắp ra mắt';
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={`card ${isComingSoon ? 'card--disabled' : ''}`}>
        <div className="card__header">
          <h3>{character.name}</h3>
        </div>
        <div className="card__body">
          <p>{character.description}</p>
          <div>
            {character.tags.map((tag, idx) => (
              <span key={idx} className="badge badge--secondary margin-right--xs">{tag}</span>
            ))}
          </div>
        </div>
        <div className="card__footer">
          <Link
            className={`button button--primary button--block ${isComingSoon ? 'disabled' : ''}`}
            to={!isComingSoon ? character.link : undefined}
            aria-disabled={isComingSoon}
          >
            {isComingSoon ? 'Sắp ra mắt' : 'Bắt đầu câu chuyện'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TaxStorylines() {
  return (
    <Layout
      title="Chọn câu chuyện của bạn"
      description="Khám phá về thuế qua các câu chuyện tương tác.">
      <Head>
        <title>Câu chuyện về Thuế | MassEdu</title>
      </Head>
      <main className="container margin-vert--lg">
        <h1 className="hero__title text--center">Câu chuyện về Thuế</h1>
        <p className="hero__subtitle text--center margin-bottom--lg">Chọn một nhân vật để bắt đầu hành trình tìm hiểu về thuế và ngân sách nhà nước.</p>
        <div className="row">
          {characters.map((char, idx) => (
            <CharacterCard key={idx} character={char} />
          ))}
        </div>
      </main>
    </Layout>
  );
}