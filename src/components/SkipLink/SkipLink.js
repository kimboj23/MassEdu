import React from 'react';

/**
 * SkipLink component for keyboard navigation accessibility
 * Allows keyboard users to skip directly to main content
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Chuyển đến nội dung chính"
    >
      Chuyển đến nội dung chính
    </a>
  );
}
