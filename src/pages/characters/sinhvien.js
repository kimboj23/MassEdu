import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { getCharacter } from '@site/src/data/characters';
import CharacterProfile from '@site/src/components/CharacterProfile';

export default function SinhVienPage() {
  const character = getCharacter('sinhvien');

  if (!character) {
    return (
      <Layout title="Nhân vật không tìm thấy">
        <div className="container">
          <div className="text--center margin-vert--xl">
            <Heading as="h1">Nhân vật không tìm thấy</Heading>
            <p>Xin lỗi, chúng tôi không thể tìm thấy thông tin về nhân vật này.</p>
            <Link to="/storylines/tax" className="button button--primary">
              Trở về danh sách nhân vật
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`Hồ sơ nhân vật - ${character.name}`}
      description={`Tìm hiểu về ${character.name} - ${character.occupation}`}>

      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="margin-bottom--md">
              <Link to="/storylines/tax" className="button button--outline">
                ← Trở về danh sách nhân vật
              </Link>
            </div>

            <Heading as="h1">Hồ sơ nhân vật: {character.name}</Heading>
            <p className="lead">
              Khám phá câu chuyện và hành trình của {character.name} qua các tình huống thực tế về thuế và ngân sách.
            </p>

            <CharacterProfile characterId="sinhvien" showProgress={true} />

            <div className="margin-top--lg text--center">
              <Link
                to={character.storylines.tax.episodes[0]?.path || '/storylines/tax'}
                className="button button--primary button--lg">
                Bắt đầu hành trình với {character.name} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
