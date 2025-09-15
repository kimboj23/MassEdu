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
      value: '<div style="padding: 1rem 0; border-bottom: 1px solid var(--ifm-color-emphasis-300); margin-bottom: 1rem;"><h3 style="margin: 0; color: var(--ifm-color-primary);">Thuế và Ngân sách</h3><p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: var(--ifm-color-emphasis-700);">Khám phá qua góc nhìn của những nhân vật</p></div>',
    },
    {
      type: 'category',
      label: 'Giang - Người bán hàng rong',
      collapsed: false,
      items: [
        'characters/giang-ban-hang-rong/buoi-sang-ban-banh-mi',
        'characters/giang-ban-hang-rong/di-nop-thu-tuc',
        'characters/giang-ban-hang-rong/tinh-huong-kho-khan',
      ],
    },
    {
      type: 'category',
      label: 'Khánh - Chủ cửa hàng',
      collapsed: false,
      items: [
        'characters/khanh-chu-cua-hang/thang-dau-kho-khan',
        'characters/khanh-chu-cua-hang/nghia-vu-khac',
        'characters/khanh-chu-cua-hang/quyet-dinh-mo-rong',
      ],
    },
    {
      type: 'html',
      value: '<div style="padding: 1rem 0; border-top: 1px solid var(--ifm-color-emphasis-300); margin-top: 2rem;"><h4 style="margin: 0 0 0.5rem 0; color: var(--ifm-color-emphasis-800);">Bối cảnh & Tri thức</h4><p style="margin: 0; font-size: 0.85rem;"><a href="/tax-context/government-revenue" style="color: var(--ifm-color-primary);">Chính quyền lấy tiền từ đâu? →</a></p></div>',
    },
  ],
};

module.exports = sidebars;