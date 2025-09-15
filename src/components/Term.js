import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// A reusable component for hyperlinked terms with tooltips
export default function Term({ id, children, tip }) {
  return (
    <>
      <a data-tooltip-id={id} data-tooltip-content={tip}>
        {children}
      </a>
      <Tooltip id={id} />
    </>
  );
}
