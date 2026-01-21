import React from 'react';

/**
 * Accessible Icon component using Material Symbols
 * @param {string} name - Material Symbol name (e.g., "home", "search", "arrow_forward")
 * @param {string} label - Accessible label for screen readers (required for meaningful icons)
 * @param {boolean} decorative - Set to true if icon is purely decorative (no label needed)
 * @param {string} size - Icon size: "small" (20px), "medium" (24px), "large" (32px), "xlarge" (48px)
 * @param {string} className - Additional CSS classes
 */
export default function Icon({
  name,
  label,
  decorative = false,
  size = 'medium',
  className = '',
  ...props
}) {
  const sizeMap = {
    small: '20px',
    medium: '24px',
    large: '32px',
    xlarge: '48px'
  };

  const iconStyle = {
    fontSize: sizeMap[size] || sizeMap.medium,
    verticalAlign: 'middle'
  };

  if (decorative) {
    return (
      <span
        className={`material-symbols-outlined ${className}`}
        style={iconStyle}
        aria-hidden="true"
        {...props}
      >
        {name}
      </span>
    );
  }

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={iconStyle}
      role="img"
      aria-label={label}
      {...props}
    >
      {name}
    </span>
  );
}
