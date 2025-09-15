// Central character registry for cross-storyline tracking
// Each character has a unique ID and can appear in multiple storylines

export const CHARACTERS = {
  giang: {
    id: 'giang',
    name: 'Giang',
    fullName: 'Giang',
    age: 28,
    occupation: 'Người bán hàng rong',
    avatar: 'G',
    description: 'Giang bán bánh mì trên vỉa hè để kiếm sống.',
    background: {
      education: 'Tốt nghiệp cấp 3',
      family: 'Có 2 con nhỏ, người bạn đời làm xe ôm',
      income: 'Không ổn định, khoảng 4-6 triệu/tháng',
      location: 'Quận 3, Thành phố Hồ Chí Minh'
    },
    personalityTraits: [
      'Chăm chỉ, cần cù',
      'Lo lắng về tương lai',
      'Mong muốn ổn định cuộc sống'
    ],
    challenges: {
      tax: [
        'Không có giấy phép kinh doanh',
        'Phải đóng phí sử dụng vỉa hè',
        'Thu nhập không ổn định'
      ],
      healthcare: [
        'Không có bảo hiểm y tế đầy đủ',
        'Khó tiếp cận dịch vụ y tế chất lượng',
        'Chi phí khám chữa bệnh cao'
      ],
      corruption: [
        'Phải đưa "lót tay" để được bán hàng yên ổn',
        'Bị các cán bộ phường "vòi vĩnh"',
        'Không biết cách khiếu nại khi bị ức hiếp'
      ]
    },
    storylines: {
      tax: {
        title: 'Thuế và Ngân sách',
        episodes: [
          {
            id: 'giang-tax-01',
            title: 'Buổi sáng bán bánh mì',
            slug: 'buoi-sang-ban-banh-mi',
            path: '/course-tax/characters/giang-ban-hang-rong/buoi-sang-ban-banh-mi'
          },
          {
            id: 'giang-tax-02',
            title: 'Đi nộp thủ tục',
            slug: 'di-nop-thu-tuc',
            path: '/course-tax/characters/giang-ban-hang-rong/di-nop-thu-tuc'
          },
          {
            id: 'giang-tax-03',
            title: 'Tình huống khó khăn',
            slug: 'tinh-huong-kho-khan',
            path: '/course-tax/characters/giang-ban-hang-rong/tinh-huong-kho-khan'
          }
        ]
      },
      // Placeholder for future storylines
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

  khanh: {
    id: 'khanh',
    name: 'Khánh',
    fullName: 'Khánh',
    age: 35,
    occupation: 'Chủ cửa hàng tạp hóa',
    avatar: 'K',
    description: 'Khánh có một cửa hàng tạp hóa nhỏ.',
    background: {
      education: 'Cao đẳng kinh tế',
      family: 'Bạn đời và 1 con, cha mẹ già',
      income: 'Ổn định, khoảng 15-20 triệu/tháng',
      location: 'Quận Hai Bà Trưng, Hà Nội'
    },
    personalityTraits: [
      'Tính toán, thận trọng',
      'Muốn mở rộng kinh doanh',
      'Quan tâm đến pháp luật'
    ],
    challenges: {
      tax: [
        'Phải đăng ký kinh doanh',
        'Nộp thuế thu nhập cá nhân',
        'Chi phí thuê mặt bằng cao'
      ],
      healthcare: [
        'Tìm hiểu về bảo hiểm xã hội cho nhân viên',
        'Cân nhắc gói bảo hiểm y tế gia đình',
        'Lo lắng về sức khỏe do stress kinh doanh'
      ],
      corruption: [
        'Gặp khó khăn trong việc xin giấy phép',
        'Phải "bôi trơn" để được ưu tiên xử lý hồ sơ',
        'Cạnh tranh không lành mạnh với đối thủ có "quan hệ"'
      ]
    },
    storylines: {
      tax: {
        title: 'Thuế và Ngân sách',
        episodes: [
          {
            id: 'khanh-tax-01',
            title: 'Tháng đầu khó khăn',
            slug: 'thang-dau-kho-khan',
            path: '/course-tax/characters/khanh-chu-cua-hang/thang-dau-kho-khan'
          },
          {
            id: 'khanh-tax-02',
            title: 'Các nghĩa vụ khác',
            slug: 'nghia-vu-khac',
            path: '/course-tax/characters/khanh-chu-cua-hang/nghia-vu-khac'
          },
          {
            id: 'khanh-tax-03',
            title: 'Quyết định mở rộng',
            slug: 'quyet-dinh-mo-rong',
            path: '/course-tax/characters/khanh-chu-cua-hang/quyet-dinh-mo-rong'
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