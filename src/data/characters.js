// Central character registry for cross-storyline tracking
// Each character has a unique ID and can appear in multiple storylines

export const CHARACTERS = {
  sinhvien: {
    id: 'tepsinhvien',
    name: 'Tép sinh viên',
    fullName: 'Tép sinh viên',
    age: 20,
    occupation: 'Sinh viên',
    avatar: 'S',
    description: 'Sinh viên năm 3 đang học ngành Marketing.',
    background: {
      education: 'Sinh viên ngành Marketing',
      family: 'Quê Lâm Đồng, bố mẹ làm nông',
      income: 'Thiết kế freelance và dạy kèm tiếng Anh, thu nhập khoảng 3-4 triệu/tháng',
      location: 'Sài Gòn'
    },
    personalityTraits: [
      'Tò mò, ham học hỏi',
      'Quan tâm đến vấn đề xã hội',
      'Muốn hiểu rõ về trách nhiệm công dân'
    ],
    challenges: {
      tax: [
        'Chưa hiểu rõ về thuế và vai trò của nó',
        'Thắc mắc về việc sử dụng ngân sách công',
        'Muốn biết trách nhiệm của mình với xã hội'
      ],
      healthcare: [
        'Sử dụng bảo hiểm y tế sinh viên',
        'Quan tâm đến chất lượng dịch vụ y tế công',
        'Tìm hiểu về quyền lợi bảo hiểm'
      ],
      corruption: [
        'Chứng kiến tham nhũng trong cuộc sống hàng ngày',
        'Muốn hiểu nguyên nhân và hậu quả',
        'Tìm cách góp phần thay đổi'
      ]
    },
    storylines: {
      tax: {
        title: 'Thuế và Ngân sách',
        episodes: [
          {
            id: 'sinhvien-tax-story',
            title: 'Hành trình khám phá thuế',
            slug: 'story',
            path: '/course-tax/characters/sinh-vien/story'
          }
        ]
      },
      healthcare: {
        title: 'Y tế Công',
        episodes: [],
        status: 'coming-soon'
      },
      corruption: {
        title: 'Tham nhũng',
        episodes: [],
        status: 'coming-soon'
      }
    }
  }
};

// Helper functions
export function getCharacter(id) {
  return CHARACTERS[id];
}

export function getCharacterStorylines(id) {
  const character = CHARACTERS[id];
  return character ? character.storylines : {};
}

export function getCharacterEpisodes(characterId, storylineId) {
  const character = CHARACTERS[characterId];
  if (!character || !character.storylines[storylineId]) {
    return [];
  }
  return character.storylines[storylineId].episodes;
}

export function getAllCharacters() {
  return Object.values(CHARACTERS);
}

export function getCharactersByStoryline(storylineId) {
  return Object.values(CHARACTERS).filter(character =>
    character.storylines[storylineId] &&
    character.storylines[storylineId].episodes.length > 0
  );
}