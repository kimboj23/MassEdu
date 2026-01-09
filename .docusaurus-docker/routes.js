import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '8b4'),
    exact: true
  },
  {
    path: '/characters/sinhvien',
    component: ComponentCreator('/characters/sinhvien', 'ebf'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/storylines/tax',
    component: ComponentCreator('/storylines/tax', '5f6'),
    exact: true
  },
  {
    path: '/tax-context/government-revenue',
    component: ComponentCreator('/tax-context/government-revenue', '86c'),
    exact: true
  },
  {
    path: '/tax-context/tax-types',
    component: ComponentCreator('/tax-context/tax-types', '79b'),
    exact: true
  },
  {
    path: '/tax-context/what-is-government',
    component: ComponentCreator('/tax-context/what-is-government', '482'),
    exact: true
  },
  {
    path: '/tri-thuc/chinh-tri',
    component: ComponentCreator('/tri-thuc/chinh-tri', '98f'),
    exact: true
  },
  {
    path: '/tri-thuc/luat-phap',
    component: ComponentCreator('/tri-thuc/luat-phap', '0d0'),
    exact: true
  },
  {
    path: '/tri-thuc/nhan-quyen',
    component: ComponentCreator('/tri-thuc/nhan-quyen', '44f'),
    exact: true
  },
  {
    path: '/course-tax',
    component: ComponentCreator('/course-tax', '245'),
    routes: [
      {
        path: '/course-tax',
        component: ComponentCreator('/course-tax', '537'),
        routes: [
          {
            path: '/course-tax/tags',
            component: ComponentCreator('/course-tax/tags', 'f9e'),
            exact: true
          },
          {
            path: '/course-tax/tags/interactive',
            component: ComponentCreator('/course-tax/tags/interactive', '20e'),
            exact: true
          },
          {
            path: '/course-tax/tags/ma-số-thuế',
            component: ComponentCreator('/course-tax/tags/ma-số-thuế', 'c28'),
            exact: true
          },
          {
            path: '/course-tax/tags/nghia-vụ-thuế',
            component: ComponentCreator('/course-tax/tags/nghia-vụ-thuế', '6ad'),
            exact: true
          },
          {
            path: '/course-tax/tags/thực-hanh',
            component: ComponentCreator('/course-tax/tags/thực-hanh', '898'),
            exact: true
          },
          {
            path: '/course-tax/tags/thuế',
            component: ComponentCreator('/course-tax/tags/thuế', '47c'),
            exact: true
          },
          {
            path: '/course-tax/tags/tncn',
            component: ComponentCreator('/course-tax/tags/tncn', '1d4'),
            exact: true
          },
          {
            path: '/course-tax/tags/vat',
            component: ComponentCreator('/course-tax/tags/vat', '42f'),
            exact: true
          },
          {
            path: '/course-tax',
            component: ComponentCreator('/course-tax', 'aa7'),
            routes: [
              {
                path: '/course-tax/cac-loai-thue',
                component: ComponentCreator('/course-tax/cac-loai-thue', 'e8a'),
                exact: true
              },
              {
                path: '/course-tax/characters/sinh-vien/story',
                component: ComponentCreator('/course-tax/characters/sinh-vien/story', 'd22'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/chinh-quyen-lay-tien-tu-dau',
                component: ComponentCreator('/course-tax/chinh-quyen-lay-tien-tu-dau', '1b2'),
                exact: true
              },
              {
                path: '/course-tax/concepts/salary-tax-calculation',
                component: ComponentCreator('/course-tax/concepts/salary-tax-calculation', '37e'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/LearningContent-Tax',
                component: ComponentCreator('/course-tax/LearningContent-Tax', '14a'),
                exact: true
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue', '1ec'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi', '718'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue/b-ai-thuc-su-dong-thue',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue/b-ai-thuc-su-dong-thue', 'c7c'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue/c-ganh-thue',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue/c-ganh-thue', 'd81'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue/d-suy-nghi-thue',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue/d-suy-nghi-thue', 'a01'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue/e-thue-la-gi',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue/e-thue-la-gi', '248'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/ban-dang-dong-thue/f-phan-loai-thue',
                component: ComponentCreator('/course-tax/lessons/ban-dang-dong-thue/f-phan-loai-thue', 'e3f'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/nguyen-tac-thu-thue',
                component: ComponentCreator('/course-tax/lessons/nguyen-tac-thu-thue', '893'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/tai-sao-dong-thue',
                component: ComponentCreator('/course-tax/lessons/tai-sao-dong-thue', '936'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/thue-va-chinh-tri',
                component: ComponentCreator('/course-tax/lessons/thue-va-chinh-tri', '0aa'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/lessons/thue-va-minh-bach',
                component: ComponentCreator('/course-tax/lessons/thue-va-minh-bach', '6d7'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/modules/module-a-recognizing-daily-taxes',
                component: ComponentCreator('/course-tax/modules/module-a-recognizing-daily-taxes', 'b39'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/course-tax/modules/module-b-tax-id-obligations',
                component: ComponentCreator('/course-tax/modules/module-b-tax-id-obligations', '8ce'),
                exact: true,
                sidebar: "courseTax"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/knowledge-base',
    component: ComponentCreator('/knowledge-base', '893'),
    routes: [
      {
        path: '/knowledge-base',
        component: ComponentCreator('/knowledge-base', '00a'),
        routes: [
          {
            path: '/knowledge-base/tags',
            component: ComponentCreator('/knowledge-base/tags', '1b6'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/bai-dọc-them',
            component: ComponentCreator('/knowledge-base/tags/bai-dọc-them', '853'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/binh-dẳng',
            component: ComponentCreator('/knowledge-base/tags/binh-dẳng', '634'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/chinh-quyền',
            component: ComponentCreator('/knowledge-base/tags/chinh-quyền', 'eaf'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/chinh-trị',
            component: ComponentCreator('/knowledge-base/tags/chinh-trị', 'd5e'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/chương-2',
            component: ComponentCreator('/knowledge-base/tags/chương-2', '446'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/cong-ước',
            component: ComponentCreator('/knowledge-base/tags/cong-ước', 'ef8'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/diễn-giải',
            component: ComponentCreator('/knowledge-base/tags/diễn-giải', '7ac'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/dịnh-nghia',
            component: ComponentCreator('/knowledge-base/tags/dịnh-nghia', 'ae6'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/giao-dục',
            component: ComponentCreator('/knowledge-base/tags/giao-dục', 'a2f'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/giới-hạn-quyền',
            component: ComponentCreator('/knowledge-base/tags/giới-hạn-quyền', '5fb'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/giới-thiệu',
            component: ComponentCreator('/knowledge-base/tags/giới-thiệu', 'd05'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/hiến-phap',
            component: ComponentCreator('/knowledge-base/tags/hiến-phap', '885'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/hỏi-dap',
            component: ComponentCreator('/knowledge-base/tags/hỏi-dap', '240'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/iccpr',
            component: ComponentCreator('/knowledge-base/tags/iccpr', '3fa'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/khẩn-cấp',
            component: ComponentCreator('/knowledge-base/tags/khẩn-cấp', 'e31'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/khong-phan-biệt-dối-xử',
            component: ComponentCreator('/knowledge-base/tags/khong-phan-biệt-dối-xử', '368'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/lịch-sử',
            component: ComponentCreator('/knowledge-base/tags/lịch-sử', '9eb'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/luật-nhan-quyền',
            component: ComponentCreator('/knowledge-base/tags/luật-nhan-quyền', '613'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/luật-phap',
            component: ComponentCreator('/knowledge-base/tags/luật-phap', '804'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/luật-quốc-tế',
            component: ComponentCreator('/knowledge-base/tags/luật-quốc-tế', 'f2e'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/nghia-vụ',
            component: ComponentCreator('/knowledge-base/tags/nghia-vụ', 'e5b'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/nguyen-tắc',
            component: ComponentCreator('/knowledge-base/tags/nguyen-tắc', 'd89'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/nha-nước',
            component: ComponentCreator('/knowledge-base/tags/nha-nước', 'b6d'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/nhan-quyền',
            component: ComponentCreator('/knowledge-base/tags/nhan-quyền', 'ecd'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/phan-tich',
            component: ComponentCreator('/knowledge-base/tags/phan-tich', '26e'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/phap-luật',
            component: ComponentCreator('/knowledge-base/tags/phap-luật', 'b8f'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quiz',
            component: ComponentCreator('/knowledge-base/tags/quiz', 'ac6'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-chinh-trị',
            component: ComponentCreator('/knowledge-base/tags/quyền-chinh-trị', '737'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-cơ-bản',
            component: ComponentCreator('/knowledge-base/tags/quyền-cơ-bản', 'ba6'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-dan-sự',
            component: ComponentCreator('/knowledge-base/tags/quyền-dan-sự', 'f43'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-esc',
            component: ComponentCreator('/knowledge-base/tags/quyền-esc', '658'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-trẻ-em',
            component: ComponentCreator('/knowledge-base/tags/quyền-trẻ-em', '540'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/triết-học',
            component: ComponentCreator('/knowledge-base/tags/triết-học', '868'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/tuyen-ngon-nhan-quyền',
            component: ComponentCreator('/knowledge-base/tags/tuyen-ngon-nhan-quyền', 'c84'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/vi-phạm',
            component: ComponentCreator('/knowledge-base/tags/vi-phạm', '703'),
            exact: true
          },
          {
            path: '/knowledge-base',
            component: ComponentCreator('/knowledge-base', 'ab4'),
            routes: [
              {
                path: '/knowledge-base/1.7-docthem-tuyenngon-nguyentac-longkhoandung',
                component: ComponentCreator('/knowledge-base/1.7-docthem-tuyenngon-nguyentac-longkhoandung', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/2.1a-luat-nhanquyen-quocte',
                component: ComponentCreator('/knowledge-base/2.1a-luat-nhanquyen-quocte', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/chinh-quyen-dinh-nghia',
                component: ComponentCreator('/knowledge-base/chinh-quyen-dinh-nghia', '7a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/cong-uoc-quoc-te-quyen-dansu-chinhtri',
                component: ComponentCreator('/knowledge-base/cong-uoc-quoc-te-quyen-dansu-chinhtri', 'a59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/cong-uoc-quocte-quyen-kinhte-xh-vh',
                component: ComponentCreator('/knowledge-base/cong-uoc-quocte-quyen-kinhte-xh-vh', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/docthem-quyen-giaoduc',
                component: ComponentCreator('/knowledge-base/docthem-quyen-giaoduc', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/giay-phep-kinh-doanh',
                component: ComponentCreator('/knowledge-base/giay-phep-kinh-doanh', '2c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/giay-phep-kinh-doanh-vn',
                component: ComponentCreator('/knowledge-base/giay-phep-kinh-doanh-vn', 'b8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/gioi-han-quyen',
                component: ComponentCreator('/knowledge-base/gioi-han-quyen', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/gioi-thieu-chuong-2',
                component: ComponentCreator('/knowledge-base/gioi-thieu-chuong-2', '1b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/hien-phap',
                component: ComponentCreator('/knowledge-base/hien-phap', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/hieu-ve-vi-pham-nhanquyen',
                component: ComponentCreator('/knowledge-base/hieu-ve-vi-pham-nhanquyen', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nghia-vu-nhanuoc-nhan-quyen',
                component: ComponentCreator('/knowledge-base/nghia-vu-nhanuoc-nhan-quyen', '0b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nhan-quyen-dinh-nghia',
                component: ComponentCreator('/knowledge-base/nhan-quyen-dinh-nghia', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/quyen-kinhte-xahoi-vanhoa',
                component: ComponentCreator('/knowledge-base/quyen-kinhte-xahoi-vanhoa', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/thue-dinh-nghia',
                component: ComponentCreator('/knowledge-base/thue-dinh-nghia', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/binh-dang',
                component: ComponentCreator('/knowledge-base/tuan1/binh-dang', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/dien-giai-tuyen-ngon',
                component: ComponentCreator('/knowledge-base/tuan1/dien-giai-tuyen-ngon', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/dinh-nghia',
                component: ComponentCreator('/knowledge-base/tuan1/dinh-nghia', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/gioi-thieu',
                component: ComponentCreator('/knowledge-base/tuan1/gioi-thieu', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/hoi-dap-nhan-quyen',
                component: ComponentCreator('/knowledge-base/tuan1/hoi-dap-nhan-quyen', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/luoc-su',
                component: ComponentCreator('/knowledge-base/tuan1/luoc-su', '6df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/quiz-hr',
                component: ComponentCreator('/knowledge-base/tuan1/quiz-hr', 'a83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/quiz-pol',
                component: ComponentCreator('/knowledge-base/tuan1/quiz-pol', '615'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/quyen-dan-su-chinh-tri',
                component: ComponentCreator('/knowledge-base/tuan1/quyen-dan-su-chinh-tri', '7fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuyen-ngon-nhan-quyen',
                component: ComponentCreator('/knowledge-base/tuyen-ngon-nhan-quyen', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
