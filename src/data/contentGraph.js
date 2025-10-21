/**
 * Content Graph: Defines relationships between lessons, stories, and modules
 * This powers the bidirectional learning architecture
 */

export const contentGraph = {
  // Concept-centric view
  concepts: {
    vat: {
      id: 'vat',
      name: 'Thuế VAT (Giá trị gia tăng)',
      shortName: 'VAT',
      definition: 'Thuế gián thu 10% ẩn trong giá hầu hết hàng hóa, dịch vụ',
      lessons: ['01-ban-dang-dong-thue-gi'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          timestamp: 'canh-2a',
          context: 'Sinh viên mua bánh mì và phát hiện thuế VAT',
        },
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          timestamp: 'canh-2b',
          context: 'Sinh viên thấy VAT trên hóa đơn cà phê',
        },
      ],
      modules: ['module-e-tax-fairness'],
    },

    'indirect-tax': {
      id: 'indirect-tax',
      name: 'Thuế gián thu',
      definition: 'Thuế đánh vào hàng hóa/dịch vụ, mọi người đóng như nhau',
      lessons: ['01-ban-dang-dong-thue-gi', '04-nguyen-tac-thu-thue'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          timestamp: 'canh-3-1',
          context: 'So sánh người giàu nghèo cùng mua bánh mì',
        },
      ],
      modules: ['module-e-tax-fairness'],
    },

    'direct-tax': {
      id: 'direct-tax',
      name: 'Thuế trực tiếp',
      definition: 'Thuế đánh vào thu nhập/tài sản, ai kiếm nhiều đóng nhiều',
      lessons: ['01-ban-dang-dong-thue-gi', '04-nguyen-tac-thu-thue'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          timestamp: 'module-c',
          context: 'Tìm hiểu về thuế lũy tiến',
        },
      ],
      modules: ['module-c-progressive-tax'],
    },

    'tax-id': {
      id: 'tax-id',
      name: 'Mã số thuế / Số định danh',
      definition: 'Từ 1/7/2025, số CCCD 12 số chính là mã số thuế',
      lessons: ['01-ban-dang-dong-thue-gi'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '02-Gặp-khó',
          timestamp: 'canh-4',
          context: 'Khách hàng yêu cầu mã số thuế',
        },
      ],
      modules: ['module-b-tax-id'],
    },

    'progressive-tax': {
      id: 'progressive-tax',
      name: 'Thuế lũy tiến',
      definition: 'Hệ thống thuế tính theo bậc, bậc cao hơn đóng tỷ lệ cao hơn',
      lessons: ['04-nguyen-tac-thu-thue'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          timestamp: 'module-c',
          context: 'Giải thích thuế lũy tiến với ví dụ lương 20 triệu',
        },
      ],
      modules: ['module-c-progressive-tax'],
    },

    'social-contract': {
      id: 'social-contract',
      name: 'Khế ước xã hội',
      definition: 'Người dân đóng thuế để đổi lại dịch vụ công và an ninh',
      lessons: ['02-tai-sao-dong-thue'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '03-ket-thuc',
          timestamp: 'canh-7-2',
          context: 'Suy ngẫm về mối liên hệ giữa thuế và dịch vụ công',
        },
      ],
      modules: [],
    },

    transparency: {
      id: 'transparency',
      name: 'Minh bạch thuế',
      definition: 'Công khai thông tin về thu thuế và chi tiêu ngân sách',
      lessons: ['05-thue-va-minh-bach'],
      stories: [],
      modules: [],
    },

    fairness: {
      id: 'fairness',
      name: 'Công bằng thuế',
      definition: 'Phân bổ gánh nặng thuế theo khả năng chi trả',
      lessons: ['04-nguyen-tac-thu-thue'],
      stories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          timestamp: 'canh-3-1',
          context: 'Câu hỏi về công bằng trong thuế VAT',
        },
      ],
      modules: ['module-e-tax-fairness'],
    },
  },

  // Lesson-centric view
  lessons: {
    '01-ban-dang-dong-thue-gi': {
      id: '01-ban-dang-dong-thue-gi',
      title: 'Bạn đang đóng thuế gì?',
      path: '/course-tax/lessons/01-ban-dang-dong-thue-gi',
      concepts: ['vat', 'indirect-tax', 'direct-tax', 'tax-id'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scenes: ['01-thuc-tinh'],
          priority: 'high',
          description: 'Xem sinh viên khám phá thuế VAT trong cuộc sống hàng ngày',
        },
      ],
      relatedModules: ['module-b-tax-id'],
      learningOutcomes: [
        'Nhận diện các loại thuế đang đóng hàng ngày',
        'Phân biệt thuế trực tiếp và gián thu',
        'Hiểu về mã số thuế cá nhân',
      ],
    },

    '02-tai-sao-dong-thue': {
      id: '02-tai-sao-dong-thue',
      title: 'Tại sao bạn đóng thuế?',
      path: '/course-tax/lessons/02-tai-sao-dong-thue',
      concepts: ['social-contract'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scenes: ['01-thuc-tinh', '03-ket-thuc'],
          priority: 'high',
          description: 'Theo dõi sinh viên nhận ra ý nghĩa của thuế',
        },
      ],
      relatedModules: [],
      learningOutcomes: [
        'Hiểu khái niệm khế ước xã hội',
        'Nhận ra mối liên hệ giữa thuế và dịch vụ công',
      ],
    },

    '03-tien-thue-di-dau': {
      id: '03-tien-thue-di-dau',
      title: 'Tiền thuế đi đâu?',
      path: '/course-tax/lessons/03-tien-thue-di-dau',
      concepts: [],
      relatedStories: [
        {
          character: 'sinh-vien',
          scenes: ['03-ket-thuc'],
          priority: 'high',
          description: 'Chơi minigame phân bổ ngân sách',
        },
      ],
      relatedModules: [],
      learningOutcomes: [
        'Hiểu cách phân bổ ngân sách nhà nước',
        'Nhận ra các trade-off trong chi tiêu công',
      ],
    },

    '04-nguyen-tac-thu-thue': {
      id: '04-nguyen-tac-thu-thue',
      title: 'Thuế được thu như nào?',
      path: '/course-tax/lessons/04-nguyen-tac-thu-thue',
      concepts: ['progressive-tax', 'fairness', 'indirect-tax', 'direct-tax'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scenes: ['01-thuc-tinh'],
          priority: 'high',
          description: 'Khám phá công bằng thuế qua so sánh người giàu nghèo',
        },
      ],
      relatedModules: ['module-c-progressive-tax', 'module-e-tax-fairness'],
      learningOutcomes: [
        'Hiểu các nguyên tắc thu thuế công bằng',
        'Phân biệt thuế lũy tiến và tỷ lệ',
      ],
    },

    '05-thue-va-minh-bach': {
      id: '05-thue-va-minh-bach',
      title: 'Thuế và minh bạch',
      path: '/course-tax/lessons/05-thue-va-minh-bach',
      concepts: ['transparency'],
      relatedStories: [],
      relatedModules: [],
      learningOutcomes: [
        'Hiểu tầm quan trọng của minh bạch thuế',
        'Biết cách đòi hỏi trách nhiệm giải trình',
      ],
    },

    '06-thue-va-chinh-tri': {
      id: '06-thue-va-chinh-tri',
      title: 'Thuế và chính trị',
      path: '/course-tax/lessons/06-thue-va-chinh-tri',
      concepts: [],
      relatedStories: [],
      relatedModules: ['module-e-tax-fairness'],
      learningOutcomes: [
        'Hiểu mối liên hệ giữa thuế và quyền lực chính trị',
        'So sánh các hệ thống thuế quốc tế',
      ],
    },
  },

  // Story-centric view
  stories: {
    'sinh-vien': {
      id: 'sinh-vien',
      character: 'Sinh viên',
      title: 'Hành trình thức tỉnh',
      description: 'Theo dõi sinh viên khám phá thuế qua cuộc sống hàng ngày',
      path: '/course-tax/characters/sinh-vien',
      avatar: '🎓',
      scenes: [
        {
          id: '01-thuc-tinh',
          title: 'Phần 1: Thức tỉnh',
          path: '/course-tax/characters/sinh-vien/01-thuc-tinh',
          relatedLessons: ['01-ban-dang-dong-thue-gi', '02-tai-sao-dong-thue', '04-nguyen-tac-thu-thue'],
          concepts: ['vat', 'indirect-tax', 'fairness'],
          hooks: [
            {
              timestamp: 'canh-2a',
              concept: 'vat',
              type: 'learn-more',
              lesson: '01-ban-dang-dong-thue-gi',
              text: 'Tìm hiểu thêm về thuế VAT',
            },
            {
              timestamp: 'canh-3-1',
              concept: 'fairness',
              type: 'deep-dive',
              module: 'module-e-tax-fairness',
              text: 'Tại sao thuế gián thu không công bằng?',
            },
            {
              timestamp: 'module-c',
              concept: 'progressive-tax',
              type: 'module',
              module: 'module-c-progressive-tax',
              text: 'Thuế lũy tiến hoạt động như thế nào?',
            },
          ],
        },
        {
          id: '02-Gặp-khó',
          title: 'Phần 2: Gặp-khó',
          path: '/course-tax/characters/sinh-vien/02-Gặp-khó',
          relatedLessons: ['01-ban-dang-dong-thue-gi'],
          concepts: ['tax-id'],
          hooks: [
            {
              timestamp: 'canh-4',
              concept: 'tax-id',
              type: 'module',
              module: 'module-b-tax-id',
              text: 'Mã số thuế là gì? Khi nào cần đăng ký?',
            },
            {
              timestamp: 'module-d',
              concept: 'freelance-tax',
              type: 'module',
              module: 'module-d-freelance-vs-employee',
              text: 'Freelance và nhân viên khác nhau thế nào về thuế?',
            },
          ],
        },
        {
          id: '03-ket-thuc',
          title: 'Phần 3: Suy-nghiệm',
          path: '/course-tax/characters/sinh-vien/03-ket-thuc',
          relatedLessons: ['02-tai-sao-dong-thue', '03-tien-thue-di-dau'],
          concepts: ['social-contract'],
          hooks: [
            {
              timestamp: 'canh-7-2',
              concept: 'social-contract',
              type: 'learn-more',
              lesson: '02-tai-sao-dong-thue',
              text: 'Khế ước xã hội là gì?',
            },
            {
              timestamp: 'canh-7-3',
              concept: 'budget',
              type: 'interactive',
              lesson: '03-tien-thue-di-dau',
              text: 'Chơi minigame phân bổ ngân sách',
            },
          ],
        },
      ],
    },
  },

  // Module-centric view
  modules: {
    'module-a-recognizing-daily-taxes': {
      id: 'module-a-recognizing-daily-taxes',
      title: 'Module A: Nhận diện thuế trong cuộc sống',
      path: '/course-tax/modules/module-a-recognizing-daily-taxes',
      concepts: ['vat', 'indirect-tax', 'direct-tax'],
      prerequisiteLessons: [],
      relatedStories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          context: 'Khám phá thuế VAT trong cuộc sống hàng ngày',
        },
      ],
    },

    'module-b-tax-id': {
      id: 'module-b-tax-id',
      title: 'Mã số thuế & Khi nào cần lo về thuế',
      path: '/course-tax/modules/module-b-tax-id',
      concepts: ['tax-id'],
      prerequisiteLessons: ['01-ban-dang-dong-thue-gi'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scene: '02-Gặp-khó',
          context: 'Khách hàng yêu cầu mã số thuế',
        },
      ],
    },

    'module-c-progressive-tax': {
      id: 'module-c-progressive-tax',
      title: 'Thuế lũy tiến',
      path: '/course-tax/modules/module-c-progressive-tax',
      concepts: ['progressive-tax'],
      prerequisiteLessons: ['01-ban-dang-dong-thue-gi', '04-nguyen-tac-thu-thue'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          context: 'Giải thích thuế lũy tiến',
        },
      ],
    },

    'module-d-freelance-vs-employee': {
      id: 'module-d-freelance-vs-employee',
      title: 'Freelance vs Nhân viên',
      path: '/course-tax/modules/module-d-freelance-vs-employee',
      concepts: ['tax-id', 'direct-tax'],
      prerequisiteLessons: ['01-ban-dang-dong-thue-gi'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scene: '02-Gặp-khó',
          context: 'So sánh thuế cho freelancer và nhân viên',
        },
      ],
    },

    'module-e-tax-fairness': {
      id: 'module-e-tax-fairness',
      title: 'Công bằng thuế - So sánh sâu hơn',
      path: '/course-tax/modules/module-e-tax-fairness',
      concepts: ['fairness', 'progressive-tax', 'indirect-tax'],
      prerequisiteLessons: ['04-nguyen-tac-thu-thue'],
      relatedStories: [
        {
          character: 'sinh-vien',
          scene: '01-thuc-tinh',
          context: 'Câu hỏi về công bằng',
        },
      ],
    },
  },
};

/**
 * Helper functions to query the content graph
 */

// Get all content related to a concept
export function getConceptContent(conceptId) {
  return contentGraph.concepts[conceptId] || null;
}

// Get lesson by ID
export function getLesson(lessonId) {
  return contentGraph.lessons[lessonId] || null;
}

// Get story by character ID
export function getStory(characterId) {
  return contentGraph.stories[characterId] || null;
}

// Get module by ID
export function getModule(moduleId) {
  return contentGraph.modules[moduleId] || null;
}

// Get all stories related to a lesson
export function getStoriesForLesson(lessonId) {
  const lesson = getLesson(lessonId);
  return lesson ? lesson.relatedStories : [];
}

// Get all lessons related to a story scene
export function getLessonsForScene(characterId, sceneId) {
  const story = getStory(characterId);
  if (!story) return [];

  const scene = story.scenes.find(s => s.id === sceneId);
  return scene ? scene.relatedLessons : [];
}

// Get hooks for a specific scene
export function getHooksForScene(characterId, sceneId) {
  const story = getStory(characterId);
  if (!story) return [];

  const scene = story.scenes.find(s => s.id === sceneId);
  return scene ? scene.hooks : [];
}

// Get all content (lessons + stories + modules) related to a concept
export function getAllContentForConcept(conceptId) {
  const concept = getConceptContent(conceptId);
  if (!concept) return { lessons: [], stories: [], modules: [] };

  return {
    lessons: concept.lessons.map(id => getLesson(id)).filter(Boolean),
    stories: concept.stories,
    modules: concept.modules.map(id => getModule(id)).filter(Boolean),
  };
}

export default contentGraph;
