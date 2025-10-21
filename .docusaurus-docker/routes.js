import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/MassEdu/__docusaurus/debug',
    component: ComponentCreator('/MassEdu/__docusaurus/debug', '1fd'),
    exact: true
  },
  {
    path: '/MassEdu/__docusaurus/debug/config',
    component: ComponentCreator('/MassEdu/__docusaurus/debug/config', 'ecf'),
    exact: true
  },
  {
    path: '/MassEdu/__docusaurus/debug/content',
    component: ComponentCreator('/MassEdu/__docusaurus/debug/content', '548'),
    exact: true
  },
  {
    path: '/MassEdu/__docusaurus/debug/globalData',
    component: ComponentCreator('/MassEdu/__docusaurus/debug/globalData', 'abf'),
    exact: true
  },
  {
    path: '/MassEdu/__docusaurus/debug/metadata',
    component: ComponentCreator('/MassEdu/__docusaurus/debug/metadata', 'e1b'),
    exact: true
  },
  {
    path: '/MassEdu/__docusaurus/debug/registry',
    component: ComponentCreator('/MassEdu/__docusaurus/debug/registry', '6e0'),
    exact: true
  },
  {
    path: '/MassEdu/__docusaurus/debug/routes',
    component: ComponentCreator('/MassEdu/__docusaurus/debug/routes', '167'),
    exact: true
  },
  {
    path: '/MassEdu/characters/giang',
    component: ComponentCreator('/MassEdu/characters/giang', 'f3a'),
    exact: true
  },
  {
    path: '/MassEdu/characters/khanh',
    component: ComponentCreator('/MassEdu/characters/khanh', 'bba'),
    exact: true
  },
  {
    path: '/MassEdu/markdown-page',
    component: ComponentCreator('/MassEdu/markdown-page', 'b0c'),
    exact: true
  },
  {
    path: '/MassEdu/storylines/tax',
    component: ComponentCreator('/MassEdu/storylines/tax', '6c2'),
    exact: true
  },
  {
    path: '/MassEdu/tax-context/government-revenue',
    component: ComponentCreator('/MassEdu/tax-context/government-revenue', '1e2'),
    exact: true
  },
  {
    path: '/MassEdu/tax-context/tax-types',
    component: ComponentCreator('/MassEdu/tax-context/tax-types', 'b61'),
    exact: true
  },
  {
    path: '/MassEdu/tax-context/what-is-government',
    component: ComponentCreator('/MassEdu/tax-context/what-is-government', '630'),
    exact: true
  },
  {
    path: '/MassEdu/tri-thuc/chinh-tri',
    component: ComponentCreator('/MassEdu/tri-thuc/chinh-tri', '350'),
    exact: true
  },
  {
    path: '/MassEdu/tri-thuc/luat-phap',
    component: ComponentCreator('/MassEdu/tri-thuc/luat-phap', '5f3'),
    exact: true
  },
  {
    path: '/MassEdu/tri-thuc/nhan-quyen',
    component: ComponentCreator('/MassEdu/tri-thuc/nhan-quyen', '48d'),
    exact: true
  },
  {
    path: '/MassEdu/course-tax',
    component: ComponentCreator('/MassEdu/course-tax', 'f2f'),
    routes: [
      {
        path: '/MassEdu/course-tax',
        component: ComponentCreator('/MassEdu/course-tax', 'f16'),
        routes: [
          {
            path: '/MassEdu/course-tax/tags',
            component: ComponentCreator('/MassEdu/course-tax/tags', '345'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax/tags/interactive',
            component: ComponentCreator('/MassEdu/course-tax/tags/interactive', 'b0f'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax/tags/thực-hanh',
            component: ComponentCreator('/MassEdu/course-tax/tags/thực-hanh', '04e'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax/tags/thuế',
            component: ComponentCreator('/MassEdu/course-tax/tags/thuế', '421'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax/tags/vat',
            component: ComponentCreator('/MassEdu/course-tax/tags/vat', '0fb'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax',
            component: ComponentCreator('/MassEdu/course-tax', 'ebf'),
            routes: [
              {
                path: '/MassEdu/course-tax/cac-loai-thue',
                component: ComponentCreator('/MassEdu/course-tax/cac-loai-thue', '12a'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/giang-ban-hang-rong',
                component: ComponentCreator('/MassEdu/course-tax/characters/giang-ban-hang-rong', 'b31'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/giang-ban-hang-rong/buoi-sang-ban-banh-mi',
                component: ComponentCreator('/MassEdu/course-tax/characters/giang-ban-hang-rong/buoi-sang-ban-banh-mi', 'd0e'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/giang-ban-hang-rong/di-nop-thu-tuc',
                component: ComponentCreator('/MassEdu/course-tax/characters/giang-ban-hang-rong/di-nop-thu-tuc', 'aec'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/giang-ban-hang-rong/tinh-huong-kho-khan',
                component: ComponentCreator('/MassEdu/course-tax/characters/giang-ban-hang-rong/tinh-huong-kho-khan', '83c'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/khanh-chu-cua-hang',
                component: ComponentCreator('/MassEdu/course-tax/characters/khanh-chu-cua-hang', '393'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/khanh-chu-cua-hang/nghia-vu-khac',
                component: ComponentCreator('/MassEdu/course-tax/characters/khanh-chu-cua-hang/nghia-vu-khac', '075'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/khanh-chu-cua-hang/quyet-dinh-mo-rong',
                component: ComponentCreator('/MassEdu/course-tax/characters/khanh-chu-cua-hang/quyet-dinh-mo-rong', 'dcc'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/khanh-chu-cua-hang/thang-dau-kho-khan',
                component: ComponentCreator('/MassEdu/course-tax/characters/khanh-chu-cua-hang/thang-dau-kho-khan', '255'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/sinh-vien',
                component: ComponentCreator('/MassEdu/course-tax/characters/sinh-vien', '53e'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/characters/sinh-vien/gap-kho',
                component: ComponentCreator('/MassEdu/course-tax/characters/sinh-vien/gap-kho', 'd15'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/characters/sinh-vien/suy-nghiem',
                component: ComponentCreator('/MassEdu/course-tax/characters/sinh-vien/suy-nghiem', '93e'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/characters/sinh-vien/thuc-tinh',
                component: ComponentCreator('/MassEdu/course-tax/characters/sinh-vien/thuc-tinh', '2ac'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/chinh-quyen-lay-tien-tu-dau',
                component: ComponentCreator('/MassEdu/course-tax/chinh-quyen-lay-tien-tu-dau', '048'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/LearningContent-Tax',
                component: ComponentCreator('/MassEdu/course-tax/LearningContent-Tax', '22a'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue', '961'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi', '6a2'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/b-ai-thuc-su-dong-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/b-ai-thuc-su-dong-thue', 'a18'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/c-ganh-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/c-ganh-thue', 'ded'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/d-suy-nghi-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/d-suy-nghi-thue', 'ff6'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/e-thue-la-gi',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/e-thue-la-gi', '63b'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/f-phan-loai-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/f-phan-loai-thue', 'e29'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/nguyen-tac-thu-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/nguyen-tac-thu-thue', '914'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/tai-sao-dong-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/tai-sao-dong-thue', '344'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/thue-va-chinh-tri',
                component: ComponentCreator('/MassEdu/course-tax/lessons/thue-va-chinh-tri', 'd95'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/thue-va-minh-bach',
                component: ComponentCreator('/MassEdu/course-tax/lessons/thue-va-minh-bach', '593'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/modules/module-a-recognizing-daily-taxes',
                component: ComponentCreator('/MassEdu/course-tax/modules/module-a-recognizing-daily-taxes', '239'),
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
    path: '/MassEdu/knowledge-base',
    component: ComponentCreator('/MassEdu/knowledge-base', '7aa'),
    routes: [
      {
        path: '/MassEdu/knowledge-base',
        component: ComponentCreator('/MassEdu/knowledge-base', '293'),
        routes: [
          {
            path: '/MassEdu/knowledge-base/tags',
            component: ComponentCreator('/MassEdu/knowledge-base/tags', 'e7d'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/bai-dọc-them',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/bai-dọc-them', '154'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/binh-dẳng',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/binh-dẳng', 'f62'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/chinh-quyền',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/chinh-quyền', '87c'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/chinh-trị',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/chinh-trị', '9be'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/chương-2',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/chương-2', '4fd'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/cong-ước',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/cong-ước', '1f1'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/diễn-giải',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/diễn-giải', 'c21'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/dịnh-nghia',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/dịnh-nghia', '3c9'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/giao-dục',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/giao-dục', 'dd4'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/giới-hạn-quyền',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/giới-hạn-quyền', 'ba5'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/giới-thiệu',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/giới-thiệu', '654'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/hiến-phap',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/hiến-phap', '3f7'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/hỏi-dap',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/hỏi-dap', 'c11'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/iccpr',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/iccpr', '988'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/khẩn-cấp',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/khẩn-cấp', '403'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/khong-phan-biệt-dối-xử',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/khong-phan-biệt-dối-xử', '2ba'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/lịch-sử',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/lịch-sử', '4c1'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/luật-nhan-quyền',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/luật-nhan-quyền', '11b'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/luật-phap',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/luật-phap', '1f4'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/luật-quốc-tế',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/luật-quốc-tế', '32e'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/nghia-vụ',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/nghia-vụ', '6ae'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/nguyen-tắc',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/nguyen-tắc', '59e'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/nha-nước',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/nha-nước', '029'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/nhan-quyền',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/nhan-quyền', '3a1'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/phan-tich',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/phan-tich', 'e3e'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/phap-luật',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/phap-luật', 'e4c'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quiz',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quiz', '627'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-chinh-trị',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-chinh-trị', 'da2'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-cơ-bản',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-cơ-bản', 'a89'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-dan-sự',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-dan-sự', '965'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-esc',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-esc', 'dfc'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-trẻ-em',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-trẻ-em', 'fd2'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/triết-học',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/triết-học', '3b3'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/tuyen-ngon-nhan-quyền',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/tuyen-ngon-nhan-quyền', 'a14'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/vi-phạm',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/vi-phạm', '435'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base',
            component: ComponentCreator('/MassEdu/knowledge-base', 'cc5'),
            routes: [
              {
                path: '/MassEdu/knowledge-base/1.7-docthem-tuyenngon-nguyentac-longkhoandung',
                component: ComponentCreator('/MassEdu/knowledge-base/1.7-docthem-tuyenngon-nguyentac-longkhoandung', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/2.1a-luat-nhanquyen-quocte',
                component: ComponentCreator('/MassEdu/knowledge-base/2.1a-luat-nhanquyen-quocte', 'e73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/chinh-quyen-dinh-nghia',
                component: ComponentCreator('/MassEdu/knowledge-base/chinh-quyen-dinh-nghia', '1b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/cong-uoc-quoc-te-quyen-dansu-chinhtri',
                component: ComponentCreator('/MassEdu/knowledge-base/cong-uoc-quoc-te-quyen-dansu-chinhtri', '9a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/cong-uoc-quocte-quyen-kinhte-xh-vh',
                component: ComponentCreator('/MassEdu/knowledge-base/cong-uoc-quocte-quyen-kinhte-xh-vh', '9f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/docthem-quyen-giaoduc',
                component: ComponentCreator('/MassEdu/knowledge-base/docthem-quyen-giaoduc', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/giay-phep-kinh-doanh',
                component: ComponentCreator('/MassEdu/knowledge-base/giay-phep-kinh-doanh', 'b71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/giay-phep-kinh-doanh-vn',
                component: ComponentCreator('/MassEdu/knowledge-base/giay-phep-kinh-doanh-vn', '544'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/gioi-han-quyen',
                component: ComponentCreator('/MassEdu/knowledge-base/gioi-han-quyen', '77a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/gioi-thieu-chuong-2',
                component: ComponentCreator('/MassEdu/knowledge-base/gioi-thieu-chuong-2', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/hien-phap',
                component: ComponentCreator('/MassEdu/knowledge-base/hien-phap', '49a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/hieu-ve-vi-pham-nhanquyen',
                component: ComponentCreator('/MassEdu/knowledge-base/hieu-ve-vi-pham-nhanquyen', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nghia-vu-nhanuoc-nhan-quyen',
                component: ComponentCreator('/MassEdu/knowledge-base/nghia-vu-nhanuoc-nhan-quyen', '961'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nhan-quyen-dinh-nghia',
                component: ComponentCreator('/MassEdu/knowledge-base/nhan-quyen-dinh-nghia', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/quyen-kinhte-xahoi-vanhoa',
                component: ComponentCreator('/MassEdu/knowledge-base/quyen-kinhte-xahoi-vanhoa', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/thue-dinh-nghia',
                component: ComponentCreator('/MassEdu/knowledge-base/thue-dinh-nghia', '5b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/binh-dang',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/binh-dang', '71e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/dien-giai-tuyen-ngon',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/dien-giai-tuyen-ngon', '31c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/dinh-nghia',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/dinh-nghia', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/gioi-thieu',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/gioi-thieu', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/hoi-dap-nhan-quyen',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/hoi-dap-nhan-quyen', '67f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/luoc-su',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/luoc-su', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/quiz-hr',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/quiz-hr', '5e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/quiz-pol',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/quiz-pol', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/quyen-dan-su-chinh-tri',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/quyen-dan-su-chinh-tri', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuyen-ngon-nhan-quyen',
                component: ComponentCreator('/MassEdu/knowledge-base/tuyen-ngon-nhan-quyen', '1af'),
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
    path: '/MassEdu/',
    component: ComponentCreator('/MassEdu/', '99d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
