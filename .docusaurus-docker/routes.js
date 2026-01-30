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
    component: ComponentCreator('/course-tax', '0e4'),
    routes: [
      {
        path: '/course-tax',
        component: ComponentCreator('/course-tax', 'af2'),
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
            component: ComponentCreator('/course-tax', '0a2'),
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
                path: '/course-tax/characters/tepsinhvien',
                component: ComponentCreator('/course-tax/characters/tepsinhvien', '429'),
                exact: true
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
    component: ComponentCreator('/knowledge-base', '6cf'),
    routes: [
      {
        path: '/knowledge-base',
        component: ComponentCreator('/knowledge-base', '7c5'),
        routes: [
          {
            path: '/knowledge-base/tags',
            component: ComponentCreator('/knowledge-base/tags', '1b6'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/chinh-trị',
            component: ComponentCreator('/knowledge-base/tags/chinh-trị', 'd5e'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/dịnh-nghia',
            component: ComponentCreator('/knowledge-base/tags/dịnh-nghia', 'ae6'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/hiến-phap',
            component: ComponentCreator('/knowledge-base/tags/hiến-phap', '885'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/lịch-sử',
            component: ComponentCreator('/knowledge-base/tags/lịch-sử', '9eb'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/nguyen-tắc',
            component: ComponentCreator('/knowledge-base/tags/nguyen-tắc', 'd89'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/nhan-quyền',
            component: ComponentCreator('/knowledge-base/tags/nhan-quyền', 'ecd'),
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
            path: '/knowledge-base/tags/quyền-cong-dan',
            component: ComponentCreator('/knowledge-base/tags/quyền-cong-dan', 'b65'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-dan-sự',
            component: ComponentCreator('/knowledge-base/tags/quyền-dan-sự', 'f43'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-kinh-tế',
            component: ComponentCreator('/knowledge-base/tags/quyền-kinh-tế', '6b3'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-van-hoa',
            component: ComponentCreator('/knowledge-base/tags/quyền-van-hoa', '3e9'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/quyền-xa-hội',
            component: ComponentCreator('/knowledge-base/tags/quyền-xa-hội', 'a8a'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/triết-học',
            component: ComponentCreator('/knowledge-base/tags/triết-học', '868'),
            exact: true
          },
          {
            path: '/knowledge-base/tags/việt-nam',
            component: ComponentCreator('/knowledge-base/tags/việt-nam', '8b2'),
            exact: true
          },
          {
            path: '/knowledge-base',
            component: ComponentCreator('/knowledge-base', 'dd4'),
            routes: [
              {
                path: '/knowledge-base/category/nhân-quyền',
                component: ComponentCreator('/knowledge-base/category/nhân-quyền', '54f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nhan-quyen/hien-phap-vn',
                component: ComponentCreator('/knowledge-base/nhan-quyen/hien-phap-vn', 'c9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nhan-quyen/nhan-quyen-la-gi',
                component: ComponentCreator('/knowledge-base/nhan-quyen/nhan-quyen-la-gi', '711'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nhan-quyen/quyen-dan-su-chinh-tri',
                component: ComponentCreator('/knowledge-base/nhan-quyen/quyen-dan-su-chinh-tri', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nhan-quyen/quyen-kinh-te-xa-hoi-van-hoa',
                component: ComponentCreator('/knowledge-base/nhan-quyen/quyen-kinh-te-xa-hoi-van-hoa', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/nhan-quyen/triet-hoc-lich-su',
                component: ComponentCreator('/knowledge-base/nhan-quyen/triet-hoc-lich-su', 'a9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/knowledge-base/tuan1/quiz-pol',
                component: ComponentCreator('/knowledge-base/tuan1/quiz-pol', '615'),
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
