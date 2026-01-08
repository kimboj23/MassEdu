import React from 'react';
import CustomCursor from '@site/src/components/CustomCursor';
import HapticFeedback from '@site/src/components/HapticFeedback';

/**
 * Root component - wraps the entire Docusaurus app
 * Used to inject global components like CustomCursor and HapticFeedback
 */
export default function Root({ children }) {
  return (
    <>
      <CustomCursor />
      <HapticFeedback />
      {children}
    </>
  );
}
