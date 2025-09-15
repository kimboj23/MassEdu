// Utility functions for knowledge base article management

// Cache for article metadata
let articlesCache = null;

// Map the existing knowledge base content
export async function getAllKnowledgeBaseArticles() {
  if (articlesCache) {
    return articlesCache;
  }

  try {
    // Static mapping of existing knowledge base articles
    // This represents the actual content structure we have
    const articles = [
      // Human rights articles
      {
        slug: 'dinh-nghia',
        title: '1.1. Nhân quyền là gì?',
        description: 'Định nghĩa và tìm hiểu về khái niệm nhân quyền cơ bản',
        tags: ['nhân quyền'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/tuan1/dinh-nghia'
      },
      {
        slug: 'luoc-su',
        title: 'Lược sử nhân quyền',
        description: 'Lịch sử phát triển của nhân quyền qua các thời kỳ',
        tags: ['nhân quyền'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/tuan1/luoc-su'
      },
      {
        slug: 'binh-dang',
        title: 'Bình đẳng',
        description: 'Nguyên tắc bình đẳng trong nhân quyền',
        tags: ['nhân quyền'],
        conceptId: 'binh-dang',
        path: '/knowledge-base/tuan1/binh-dang'
      },
      {
        slug: 'quyen-dan-su-chinh-tri',
        title: 'Quyền dân sự và chính trị',
        description: 'Tìm hiểu về quyền dân sự và chính trị cơ bản',
        tags: ['nhân quyền', 'chính trị'],
        conceptId: 'quyen-dan-su',
        path: '/knowledge-base/tuan1/quyen-dan-su-chinh-tri'
      },
      {
        slug: 'dien-giai-tuyen-ngon',
        title: 'Diễn giải về Tuyên ngôn',
        description: 'Giải thích chi tiết về Tuyên ngôn Nhân quyền',
        tags: ['nhân quyền', 'luật pháp'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/tuan1/dien-giai-tuyen-ngon'
      },
      {
        slug: 'hoi-dap-nhan-quyen',
        title: 'Hỏi đáp đơn giản về nhân quyền',
        description: 'Những câu hỏi thường gặp về nhân quyền',
        tags: ['nhân quyền'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/tuan1/hoi-dap-nhan-quyen'
      },
      {
        slug: 'luat-nhanquyen-quocte',
        title: 'Luật nhân quyền quốc tế',
        description: 'Tìm hiểu về hệ thống luật nhân quyền quốc tế',
        tags: ['nhân quyền', 'luật pháp'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/luat-nhanquyen-quocte'
      },
      {
        slug: 'nghia-vu-nhanuoc-nhan-quyen',
        title: 'Nghĩa vụ nhà nước về nhân quyền',
        description: 'Trách nhiệm của nhà nước trong bảo vệ nhân quyền',
        tags: ['nhân quyền', 'chính trị', 'luật pháp'],
        conceptId: 'chinh-quyen',
        path: '/knowledge-base/nghia-vu-nhanuoc-nhan-quyen'
      },
      {
        slug: 'hieu-ve-vi-pham-nhanquyen',
        title: 'Hiểu về vi phạm nhân quyền',
        description: 'Các hình thức vi phạm nhân quyền và cách nhận biết',
        tags: ['nhân quyền', 'luật pháp'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/hieu-ve-vi-pham-nhanquyen'
      },
      {
        slug: 'gioi-han-quyen',
        title: 'Giới hạn quyền',
        description: 'Khi nào quyền con người có thể bị hạn chế',
        tags: ['nhân quyền', 'luật pháp'],
        conceptId: 'nhan-quyen',
        path: '/knowledge-base/gioi-han-quyen'
      },

      // Politics articles
      {
        slug: 'politics-intro1',
        title: 'Chính trị - Chương 1',
        description: 'Giới thiệu về chính trị và hệ thống chính trị',
        tags: ['chính trị'],
        conceptId: 'chinh-quyen',
        path: '/knowledge-base/chinh-quyen-dinh-nghia'
      },
      {
        slug: 'politics-intro2',
        title: 'Chính trị - Chương 2',
        description: 'Tìm hiểu sâu hơn về các khái niệm chính trị',
        tags: ['chính trị'],
        conceptId: 'chinh-quyen',
        path: '/knowledge-base/chinh-quyen-dinh-nghia'
      },

      // Additional articles from the new structure
      {
        slug: 'giay-phep-kinh-doanh-vn',
        title: 'Giấy phép kinh doanh tại Việt Nam',
        description: 'Quy định về giấy phép kinh doanh cho người bán hàng rong và cố định tại Việt Nam',
        tags: ['luật pháp'],
        conceptId: 'giay-phep-kinh-doanh',
        path: '/knowledge-base/giay-phep-kinh-doanh-vn'
      },
      {
        slug: 'giay-phep-kinh-doanh',
        title: 'Giấy phép kinh doanh: Nghiên cứu chuyên sâu',
        description: 'Phân tích toàn diện về nền tảng triết học, lịch sử và các quan điểm về giấy phép kinh doanh',
        tags: ['luật pháp', 'triết học', 'lịch sử'],
        conceptId: 'giay-phep-kinh-doanh',
        path: '/knowledge-base/giay-phep-kinh-doanh'
      },
      {
        slug: 'thue-dinh-nghia',
        title: 'Thuế là gì?',
        description: 'Định nghĩa và khái niệm cơ bản về thuế',
        tags: ['luật pháp'],
        conceptId: 'thue',
        path: '/knowledge-base/thue-dinh-nghia'
      },
      {
        slug: 'chinh-quyen-dinh-nghia',
        title: 'Chính quyền là gì?',
        description: 'Khái niệm về chính quyền và vai trò trong xã hội',
        tags: ['chính trị', 'luật pháp'],
        conceptId: 'chinh-quyen',
        path: '/knowledge-base/chinh-quyen-dinh-nghia'
      },
      {
        slug: 'hien-phap',
        title: 'Hiến pháp',
        description: 'Hiến pháp - đạo luật cơ bản của quốc gia',
        tags: ['luật pháp', 'chính trị', 'nhân quyền'],
        conceptId: 'hien-phap',
        path: '/knowledge-base/hien-phap'
      }
    ];

    articlesCache = articles;
    return articles;
  } catch (error) {
    console.error('Error loading knowledge base articles:', error);
    return [];
  }
}

// Get articles filtered by a specific tag
export async function getArticlesByTag(tag) {
  const articles = await getAllKnowledgeBaseArticles();
  return articles.filter(article => article.tags.includes(tag));
}

// Get all unique tags from all articles
export async function getAllTags() {
  const articles = await getAllKnowledgeBaseArticles();
  const tags = new Set();

  articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });

  return Array.from(tags).sort();
}

// Get article by concept ID
export async function getArticleByConceptId(conceptId) {
  const articles = await getAllKnowledgeBaseArticles();
  return articles.find(article => article.conceptId === conceptId);
}

// Get related articles (articles that share at least one tag)
export async function getRelatedArticles(currentArticle, limit = 5) {
  const articles = await getAllKnowledgeBaseArticles();

  return articles
    .filter(article =>
      article.slug !== currentArticle.slug &&
      article.tags.some(tag => currentArticle.tags.includes(tag))
    )
    .slice(0, limit);
}