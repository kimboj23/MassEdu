import React from 'react';
import CustomCursor from '@site/src/components/CustomCursor';
import HapticFeedback from '@site/src/components/HapticFeedback';
import SkipLink from '@site/src/components/SkipLink';

/**
 * Root component - wraps the entire Docusaurus app
 * Used to inject global components like CustomCursor, HapticFeedback, and SkipLink
 */
export default function Root({ children }) {
  return (
    <>
      <SkipLink />
      <CustomCursor />
      <HapticFeedback />
      {children}
    </>
  );
}
