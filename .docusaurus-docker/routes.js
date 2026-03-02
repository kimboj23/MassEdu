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
    path: '/MassEdu/about',
    component: ComponentCreator('/MassEdu/about', '5f3'),
    exact: true
  },
  {
    path: '/MassEdu/characters/sinhvien',
    component: ComponentCreator('/MassEdu/characters/sinhvien', '06d'),
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
    component: ComponentCreator('/MassEdu/course-tax', '0fb'),
    routes: [
      {
        path: '/MassEdu/course-tax',
        component: ComponentCreator('/MassEdu/course-tax', '0c4'),
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
            path: '/MassEdu/course-tax/tags/ma-số-thuế',
            component: ComponentCreator('/MassEdu/course-tax/tags/ma-số-thuế', '58c'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax/tags/nghia-vụ-thuế',
            component: ComponentCreator('/MassEdu/course-tax/tags/nghia-vụ-thuế', 'e62'),
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
            path: '/MassEdu/course-tax/tags/tncn',
            component: ComponentCreator('/MassEdu/course-tax/tags/tncn', 'f33'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax/tags/vat',
            component: ComponentCreator('/MassEdu/course-tax/tags/vat', '0fb'),
            exact: true
          },
          {
            path: '/MassEdu/course-tax',
            component: ComponentCreator('/MassEdu/course-tax', '5a0'),
            routes: [
              {
                path: '/MassEdu/course-tax/cac-loai-thue',
                component: ComponentCreator('/MassEdu/course-tax/cac-loai-thue', '12a'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/characters/sinh-vien/story',
                component: ComponentCreator('/MassEdu/course-tax/characters/sinh-vien/story', '361'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/characters/tepsinhvien',
                component: ComponentCreator('/MassEdu/course-tax/characters/tepsinhvien', 'd1b'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/chinh-quyen-lay-tien-tu-dau',
                component: ComponentCreator('/MassEdu/course-tax/chinh-quyen-lay-tien-tu-dau', '048'),
                exact: true
              },
              {
                path: '/MassEdu/course-tax/concepts/salary-tax-calculation',
                component: ComponentCreator('/MassEdu/course-tax/concepts/salary-tax-calculation', '83e'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue', '961'),
                exact: true,
                sidebar: "courseTax"
              },
              {
                path: '/MassEdu/course-tax/lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi',
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi', 'bbf'),
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
                component: ComponentCreator('/MassEdu/course-tax/lessons/ban-dang-dong-thue/f-phan-loai-thue', 'bde'),
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
              },
              {
                path: '/MassEdu/course-tax/modules/module-b-tax-id-obligations',
                component: ComponentCreator('/MassEdu/course-tax/modules/module-b-tax-id-obligations', 'b9b'),
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
    component: ComponentCreator('/MassEdu/knowledge-base', '8bc'),
    routes: [
      {
        path: '/MassEdu/knowledge-base',
        component: ComponentCreator('/MassEdu/knowledge-base', 'ed9'),
        routes: [
          {
            path: '/MassEdu/knowledge-base/tags',
            component: ComponentCreator('/MassEdu/knowledge-base/tags', 'e7d'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/chinh-trị',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/chinh-trị', '9be'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/dịnh-nghia',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/dịnh-nghia', '3c9'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/hiến-phap',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/hiến-phap', '3f7'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/lịch-sử',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/lịch-sử', '4c1'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/nguyen-tắc',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/nguyen-tắc', '59e'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/nhan-quyền',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/nhan-quyền', '3a1'),
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
            path: '/MassEdu/knowledge-base/tags/quyền-cong-dan',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-cong-dan', '7a6'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-dan-sự',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-dan-sự', '965'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-kinh-tế',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-kinh-tế', '85d'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-van-hoa',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-van-hoa', '084'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/quyền-xa-hội',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/quyền-xa-hội', 'b98'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/triết-học',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/triết-học', '3b3'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base/tags/việt-nam',
            component: ComponentCreator('/MassEdu/knowledge-base/tags/việt-nam', 'd79'),
            exact: true
          },
          {
            path: '/MassEdu/knowledge-base',
            component: ComponentCreator('/MassEdu/knowledge-base', '0e1'),
            routes: [
              {
                path: '/MassEdu/knowledge-base/category/nhân-quyền',
                component: ComponentCreator('/MassEdu/knowledge-base/category/nhân-quyền', 'd76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nhan-quyen/hien-phap-vn',
                component: ComponentCreator('/MassEdu/knowledge-base/nhan-quyen/hien-phap-vn', '689'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nhan-quyen/nhan-quyen-la-gi',
                component: ComponentCreator('/MassEdu/knowledge-base/nhan-quyen/nhan-quyen-la-gi', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nhan-quyen/quyen-dan-su-chinh-tri',
                component: ComponentCreator('/MassEdu/knowledge-base/nhan-quyen/quyen-dan-su-chinh-tri', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nhan-quyen/quyen-kinh-te-xa-hoi-van-hoa',
                component: ComponentCreator('/MassEdu/knowledge-base/nhan-quyen/quyen-kinh-te-xa-hoi-van-hoa', 'f11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/nhan-quyen/triet-hoc-lich-su',
                component: ComponentCreator('/MassEdu/knowledge-base/nhan-quyen/triet-hoc-lich-su', '424'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MassEdu/knowledge-base/tuan1/quiz-pol',
                component: ComponentCreator('/MassEdu/knowledge-base/tuan1/quiz-pol', 'd49'),
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
