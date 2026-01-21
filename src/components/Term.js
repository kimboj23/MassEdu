import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// A reusable component for hyperlinked terms with tooltips
export default function Term({ id, children, tip }) {
  return (
    <>
      <button
        type="button"
        data-tooltip-id={id}
        data-tooltip-content={tip}
        aria-describedby={id}
        className="term-trigger"
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          font: 'inherit',
          color: 'var(--ifm-color-primary)',
          cursor: 'pointer',
          textDecoration: 'underline',
          display: 'inline'
        }}
      >
        {children}
      </button>
      <Tooltip id={id} role="tooltip" />
    </>
  );
}
