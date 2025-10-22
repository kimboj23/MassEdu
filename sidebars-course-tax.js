/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main sidebar for course-tax
  courseTax: [
    {
      type: 'html',
      value: '<div style="padding: 1rem 0; border-bottom: 1px solid var(--ifm-color-emphasis-300); margin-bottom: 1rem;"><h3 style="margin: 0; color: var(--ifm-color-primary);">Thuế và Ngân sách</h3><p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: var(--ifm-color-emphasis-700);">Học qua câu chuyện và bài học</p></div>',
    },

    // CHARACTERS/STORIES SECTION
    {
      type: 'html',
      value: '<div style="padding: 1rem 0; border-top: 1px solid var(--ifm-color-emphasis-300); margin-top: 1rem;"></div>',
    },
    {
      type: 'category',
      label: 'Câu chuyện',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Sinh viên',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'characters/sinh-vien/story',
          },
          items: [], // Remove sub-items as they are now merged into the main story
        },
        // Future characters can be added here
      ],
    },

    
    // LESSONS SECTION
    {
      type: 'category',
      label: 'Bài học',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '1. Thuế ơi thuế à',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'lessons/ban-dang-dong-thue/index',
          },
          items: [
            {
              type: 'doc',
              id: 'lessons/ban-dang-dong-thue/a-ban-dang-dong-thue-gi',
              label: 'Bạn đang đóng thuế gì?',
            },
            {
              type: 'doc',
              id: 'lessons/ban-dang-dong-thue/b-ai-thuc-su-dong-thue',
              label: 'Ai đang thực sự đóng thuế?',
            },
            {
              type: 'doc',
              id: 'lessons/ban-dang-dong-thue/c-ganh-thue',
              label: 'Ai thực sự gánh chịu thuế?',
            },
            {
              type: 'doc',
              id: 'lessons/ban-dang-dong-thue/e-thue-la-gi',
              label: 'Vậy Thuế là gì?',
            },
            {
              type: 'doc',
              id: 'lessons/ban-dang-dong-thue/f-phan-loai-thue',
              label: 'Phân loại thuế',
            },
            {
              type: 'doc',
              id: 'lessons/ban-dang-dong-thue/d-suy-nghi-thue',
              label: 'Hãy suy nghĩ về thuế',
            },
          ],
        },
        {
          type: 'doc',
          id: 'lessons/tai-sao-dong-thue',
          label: '2. Tại sao bạn đóng thuế?',
        },
          //{
          //  type: 'doc',
          //  id: 'lessons/tien-thue-di-dau', // This file is still empty
          //  label: '3. Tiền thuế đi đâu?',
          //},
        {
          type: 'doc',
          id: 'lessons/nguyen-tac-thu-thue',
          label: '4. Nguyên tắc thu thuế',
        },
        {
          type: 'doc',
          id: 'lessons/thue-va-minh-bach',
          label: '5. Thuế và Minh bạch',
        },
        {
          type: 'doc',
          id: 'lessons/thue-va-chinh-tri',
          label: '6. Thuế và Chính trị',
        },
      ],
    },
    
    // MODULES SECTION (Deep dives)
    {
      type: 'html',
      value: '<div style="padding: 1rem 0; border-top: 1px solid var(--ifm-color-emphasis-300); margin-top: 1rem;"></div>',
    },
    {
      type: 'category',
      label: 'Chuyên sâu',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'modules/module-a-recognizing-daily-taxes',
          label: 'A. Nhận diện thuế hàng ngày',
        },
        // Future modules will be added here:
        // 'modules/module-b-tax-id',
        // 'modules/module-c-progressive-tax',
        // 'modules/module-d-freelance-vs-employee',
        // 'modules/module-e-tax-fairness',
      ],
    },

    // HELPFUL LINKS
    {
      type: 'html',
      value: '<div style="padding: 1rem 0; border-top: 1px solid var(--ifm-color-emphasis-300); margin-top: 1rem;"><h4 style="margin: 0 0 0.5rem 0; color: var(--ifm-color-emphasis-800);">Liên kết hữu ích</h4><ul style="margin: 0; padding-left: 1.25rem; font-size: 0.9rem;"><li><a href="/course-tax/lessons/01-ban-dang-dong-thue-gi" style="color: var(--ifm-color-primary);">Bắt đầu với bài học</a></li><li><a href="/course-tax/characters/sinh-vien" style="color: var(--ifm-color-primary);">Bắt đầu với câu chuyện</a></li></ul></div>',
    },
  ],
};

module.exports = sidebars;