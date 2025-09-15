// Concept database with tagging system for organizing knowledge base articles
// Each concept can have multiple tags and will appear in corresponding "Tri thức" sections

export const concepts = {
  // Tax-related concepts
  'thue': {
    id: 'thue',
    title: 'Thuế',
    definition: 'Khoản tiền bắt buộc mà cá nhân và tổ chức phải nộp cho nhà nước theo quy định pháp luật',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/thue-dinh-nghia'
  },
  'thue-thu-nhap': {
    id: 'thue-thu-nhap',
    title: 'Thuế thu nhập',
    definition: 'Thuế được tính trên thu nhập của cá nhân hoặc doanh nghiệp',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/thue-dinh-nghia'
  },
  'ngan-sach': {
    id: 'ngan-sach',
    title: 'Ngân sách nhà nước',
    definition: 'Kế hoạch tài chính tổng thể về thu và chi của nhà nước trong một năm',
    tags: ['chính trị', 'luật pháp'],
    knowledgeArticle: '/knowledge-base/chinh-quyen-dinh-nghia'
  },

  // Human rights concepts
  'nhan-quyen': {
    id: 'nhan-quyen',
    title: 'Nhân quyền',
    definition: 'Những quyền cơ bản mà mọi người đều có từ khi sinh ra, không phân biệt chủng tộc, giới tính, tôn giáo',
    tags: ['nhân quyền', 'luật pháp'],
    knowledgeArticle: '/knowledge-base/tuan1/dinh-nghia'
  },
  'binh-dang': {
    id: 'binh-dang',
    title: 'Bình đẳng',
    definition: 'Nguyên tắc mọi người đều có giá trị như nhau và được đối xử công bằng',
    tags: ['nhân quyền'],
    knowledgeArticle: '/knowledge-base/tuan1/binh-dang'
  },
  'quyen-dan-su': {
    id: 'quyen-dan-su',
    title: 'Quyền dân sự và chính trị',
    definition: 'Nhóm quyền bảo vệ tự do cá nhân và đảm bảo khả năng tham gia vào đời sống chính trị',
    tags: ['nhân quyền', 'chính trị'],
    knowledgeArticle: '/knowledge-base/tuan1/quyen-dan-su-chinh-tri'
  },

  // Political concepts
  'chinh-quyen': {
    id: 'chinh-quyen',
    title: 'Chính quyền',
    definition: 'Hệ thống các cơ quan có thẩm quyền điều hành nhà nước ở các cấp',
    tags: ['chính trị', 'luật pháp'],
    knowledgeArticle: '/knowledge-base/chinh-quyen-dinh-nghia'
  },
  'dan-chu': {
    id: 'dan-chu',
    title: 'Dân chủ',
    definition: 'Hình thức chính trị trong đó quyền lực thuộc về nhân dân',
    tags: ['chính trị', 'nhân quyền'],
    knowledgeArticle: '/knowledge-base/chinh-quyen-dinh-nghia'
  },
  'doanh-nghiep-nha-nuoc': {
    id: 'doanh-nghiep-nha-nuoc',
    title: 'Doanh nghiệp nhà nước',
    definition: 'Các công ty do nhà nước sở hữu và điều hành',
    tags: ['chính trị'],
    knowledgeArticle: '/knowledge-base/chinh-quyen-dinh-nghia'
  },

  // Legal concepts
  'phap-luat': {
    id: 'phap-luat',
    title: 'Pháp luật',
    definition: 'Hệ thống các quy tắc xử sự do nhà nước ban hành và bảo đảm thực hiện',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/luat-nhanquyen-quocte'
  },
  'hien-phap': {
    id: 'hien-phap',
    title: 'Hiến pháp',
    definition: 'Đạo luật cơ bản nhất của một quốc gia, quy định về tổ chức nhà nước và quyền công dân',
    tags: ['luật pháp', 'chính trị', 'nhân quyền'],
    knowledgeArticle: '/knowledge-base/hien-phap'
  },

  // Healthcare concepts (for future use)
  'y-te-cong': {
    id: 'y-te-cong',
    title: 'Y tế công',
    definition: 'Hệ thống y tế do nhà nước tổ chức và quản lý nhằm bảo vệ sức khỏe toàn dân',
    tags: ['chính trị', 'nhân quyền'],
    knowledgeArticle: '/knowledge-base/chinh-quyen-dinh-nghia'
  },

  // Anti-corruption concepts (for future use)
  'tham-nhung': {
    id: 'tham-nhung',
    title: 'Tham nhũng',
    definition: 'Việc lạm dụng quyền lực được giao phó để trục lợi cá nhân',
    tags: ['chính trị', 'luật pháp'],
    knowledgeArticle: '/knowledge-base/luat-nhanquyen-quocte'
  },

  // Business/Economic concepts
  'giay-phep-kinh-doanh': {
    id: 'giay-phep-kinh-doanh',
    title: 'Giấy phép kinh doanh',
    definition: 'Giấy phép kinh doanh là tài liệu pháp lý cho phép cá nhân, tổ chức được phép kinh doanh hàng hóa, dịch vụ.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/giay-phep-kinh-doanh-vn'
  },
  'thue-thu-nhap-ca-nhan': {
    id: 'thue-thu-nhap-ca-nhan',
    title: 'Thuế thu nhập cá nhân',
    definition: 'Thuế thu nhập cá nhân từ hoạt động kinh doanh được tính dựa trên lợi nhuận sau khi trừ chi phí hợp lý.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/personal-income-tax'
  },
  'thue-suat-10-phan-tram': {
    id: 'thue-suat-10-phan-tram',
    title: 'Thuế suất 10%',
    definition: 'Thuế suất 10% áp dụng cho thu nhập từ 5 triệu đến 10 triệu đồng/tháng. Thu nhập dưới 5 triệu được miễn thuế.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/tax-rates'
  },
  'le-phi-via-he': {
    id: 'le-phi-via-he',
    title: 'Lệ phí sử dụng vỉa hè',
    definition: 'Lệ phí sử dụng vỉa hè được tính theo diện tích và thời gian sử dụng, thường từ 20.000-50.000 đồng/m²/tháng.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/sidewalk-fees'
  },
  'nguoi-yeu-the': {
    id: 'nguoi-yeu-the',
    title: 'Người yếu thế',
    definition: 'Người yếu thế là những cá nhân hoặc nhóm người có nguy cơ bị tổn thương cao hơn do các rào cản xã hội, kinh tế, hoặc thể chất.',
    tags: ['nhân quyền'],
    knowledgeArticle: '/knowledge-base/vulnerable-groups'
  },
  'bao-hiem-xa-hoi': {
    id: 'bao-hiem-xa-hoi',
    title: 'Bảo hiểm xã hội',
    definition: 'Bảo hiểm xã hội là chế độ bảo hiểm do Nhà nước tổ chức nhằm bảo đảm an sinh xã hội cho người lao động.',
    tags: ['luật pháp', 'chính trị'],
    knowledgeArticle: '/knowledge-base/social-security'
  },
  'ho-kinh-doanh': {
    id: 'ho-kinh-doanh',
    title: 'Hộ kinh doanh',
    definition: 'Hộ kinh doanh là hình thức kinh doanh đơn giản nhất, phù hợp với quy mô nhỏ và vốn ít.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/household-business'
  },
  'chu-doanh-nghiep': {
    id: 'chu-doanh-nghiep',
    title: 'Chủ doanh nghiệp',
    definition: 'Chủ doanh nghiệp tư nhân phải tham gia bảo hiểm xã hội bắt buộc với mức đóng tối thiểu theo quy định.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/business-owner'
  },
  'bhxh-nguoi-su-dung-ld': {
    id: 'bhxh-nguoi-su-dung-ld',
    title: 'BHXH người sử dụng lao động',
    definition: 'Người sử dụng lao động phải đóng BHXH 17.5%, BHYT 3%, BHTN 1% trên lương đóng BHXH của người lao động.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/employer-obligations'
  },
  'thue-ho-kinh-doanh': {
    id: 'thue-ho-kinh-doanh',
    title: 'Thuế hộ kinh doanh',
    definition: 'Hộ kinh doanh với doanh thu dưới 100 triệu đồng/năm được miễn thuế thu nhập cá nhân.',
    tags: ['luật pháp'],
    knowledgeArticle: '/knowledge-base/household-tax'
  },
  'le-phi-via-he-tang': {
    id: 'le-phi-via-he-tang',
    title: 'Tăng lệ phí vỉa hè',
    definition: 'Do áp lực từ việc nhiều người sử dụng vỉa hè, chính quyền địa phương quyết định tăng lệ phí để quản lý tốt hơn.',
    tags: ['chính trị', 'luật pháp'],
    knowledgeArticle: '/knowledge-base/fee-increase'
  }
};

// Helper function to get concepts by tag
export function getConceptsByTag(tag) {
  return Object.values(concepts).filter(concept =>
    concept.tags.includes(tag)
  );
}

// Helper function to get all tags
export function getAllTags() {
  const tags = new Set();
  Object.values(concepts).forEach(concept => {
    concept.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Helper function to get concept by ID
export function getConcept(id) {
  return concepts[id];
}