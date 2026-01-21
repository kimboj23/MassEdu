import React from 'react';

/**
 * IntroSection - Reusable centered intro text component
 * Replaces the common pattern of nested divs for centered intro text
 *
 * @param {string} children - The intro text content
 * @param {string} className - Additional CSS classes
 * @param {string} textSize - Text size: "large" (default), "medium", "small"
 */
export default function IntroSection({
  children,
  className = '',
  textSize = 'large'
}) {
  const textClass = textSize === 'large'
    ? 'text--large'
    : textSize === 'medium'
      ? ''
      : 'text--small';

  return (
    <div className={`intro-section ${className}`}>
      <p className={`intro-section__text ${textClass}`}>
        {children}
      </p>
    </div>
  );
}
