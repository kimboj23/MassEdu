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
    description: 'Năm 3 vừa học vừa làm.',
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
  },
  hangrong: {
    id: 'teptaixe',
    name: 'Tép tài xế',
    fullName: 'Tép tài xế',
    age: 38,
    occupation: 'Xe ôm công nghệ',
    avatar: 'T',
    description: 'Bôn ba trên các ngả đường.',
    background: {
      education: 'Tốt nghiệp cấp 2',
      family: 'Có 2 con đang đi học',
      income: 'Thu nhập không ổn định, khoảng 200-300k/ngày',
      location: 'Đà Nẵng'
    },
    personalityTraits: [
      'Chăm chỉ, kiên nhẫn',
      'Lo lắng cho tương lai con cái',
      'Thực tế, quan tâm đến chi tiêu hàng ngày'
    ],
    challenges: {
      tax: [
        'Không hiểu thuế gián tiếp ảnh hưởng thế nào',
        'Muốn biết tiền thuế đi đâu',
        'Băn khoăn về công bằng trong hệ thống thuế'
      ],
      healthcare: [],
      corruption: []
    },
    storylines: {
      tax: {
        title: 'Thuế và Ngân sách',
        episodes: [],
        status: 'coming-soon'
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
  },
  nhanvien: {
    id: 'tepnhanvien',
    name: 'Tép nhân viên',
    fullName: 'Tép nhân viên',
    age: 29,
    occupation: 'Nhân viên văn phòng',
    avatar: 'N',
    description: 'Bán mình cho tư bản.',
    background: {
      education: 'Cử nhân Kế toán',
      family: 'Độc thân, sống với bố mẹ',
      income: 'Lương 20 triệu/tháng',
      location: 'Hà Nội'
    },
    personalityTraits: [
      'Cẩn thận, chi tiết',
      'Quan tâm đến tài chính cá nhân',
      'Muốn hiểu rõ quyền lợi của mình'
    ],
    challenges: {
      tax: [
        'Muốn hiểu cách tính thuế TNCN',
        'Thắc mắc về các khoản giảm trừ',
        'Quan tâm đến quyết toán thuế cuối năm'
      ],
      healthcare: [],
      corruption: []
    },
    storylines: {
      tax: {
        title: 'Thuế và Ngân sách',
        episodes: [],
        status: 'coming-soon'
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