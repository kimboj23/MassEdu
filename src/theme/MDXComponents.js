import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Icon from '@site/src/components/Icon';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add custom components
  Icon,
};
