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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Nhân quyền',
      items: [
        {
          type: 'category',
          label: 'Chương 1: Cơ bản về nhân quyền',
          items: [
            'human-rights/chapter1/tuyen-ngon-nhan-quyen',
            'human-rights/chapter1/1.0-gioi-thieu',
            'human-rights/chapter1/1.1-nhan-quyen-la-gi',
            'human-rights/chapter1/1.2-luoc-su-nhan-quyen',
            'human-rights/chapter1/1.3-binh-dang',
            'human-rights/chapter1/1.4b-doc-them-dien-giai-ve-tuyen-ngon',
            'human-rights/chapter1/1.5a-quyen-dan-su-chinh-tri',
            'human-rights/chapter1/1.5b-cong-uoc-quoc-te-quyen-dansu-chinhtri',
            'human-rights/chapter1/1.6a-quyen-kinhte-xahoi-vanhoa',
            'human-rights/chapter1/1.6b-cong-uoc-quocte-quyen-kinhte-xh-vh',
            'human-rights/chapter1/1.6c-docthem-quyen-giaoduc',
            'human-rights/chapter1/1.7-docthem-tuyenngon-nguyentac-longkhoandung',
            'human-rights/chapter1/1.8-hoi-dap-don-gian-nhan-quyen',
            'human-rights/chapter1/QuizHR',
            'human-rights/chapter1/QuizPOL',
          ],
        },
        {
          type: 'category',
          label: 'Chương 2: Luật nhân quyền quốc tế',
          items: [
            'human-rights/chapter2/2.0-gioi-thieu',
            'human-rights/chapter2/2.1a-luat-nhanquyen-quocte',
            'human-rights/chapter2/2.1b-nghia-vu-nhanuoc-nhan-quyen',
            'human-rights/chapter2/2.2a-hieu-ve-vi-pham-nhanquyen',
            'human-rights/chapter2/2.2b-gioi-han-quyen',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Chính trị',
      items: [
        'politics/chuong1/intro',
        'politics/chuong2/intro',
      ],
    },
  ],
};

export default sidebars;