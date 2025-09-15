// c/Users/NinaTran/Downloads/MassEdu/MassEdu/src/components/Tooltip/index.js
import React, { useEffect, useState } from 'react';
// Use a named import for react-tooltip v5 and alias it for convenience.
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Link from '@docusaurus/Link';
// The CSS is required for the tooltip to be styled correctly.
import 'react-tooltip/dist/react-tooltip.css';
import './tooltip.css';

// Tooltip component: Underlined text with a popup explanation and optional link
export default function Tooltip({ children, id, content, link }) {
  const tooltipId = `tooltip-${id}`;
  const [tooltipPlace, setTooltipPlace] = useState('top');

  useEffect(() => {
    // Dynamic placement based on viewport position
    const handleTooltipPlacement = (event) => {
      const rect = event.target.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If element is in the upper half of viewport, show tooltip below
      if (rect.top < viewportHeight / 2) {
        setTooltipPlace('bottom');
      } else {
        setTooltipPlace('top');
      }
    };

    const tooltipTrigger = document.querySelector(`[data-tooltip-id="${tooltipId}"]`);
    if (tooltipTrigger) {
      tooltipTrigger.addEventListener('mouseenter', handleTooltipPlacement);
      return () => {
        tooltipTrigger.removeEventListener('mouseenter', handleTooltipPlacement);
      };
    }
  }, [tooltipId]);

  return (
    <>
      <a data-tooltip-id={tooltipId}
        style={{
          borderBottom: '2px dotted var(--ifm-color-primary)',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        {children}
      </a>
      <ReactTooltip
        id={tooltipId}
        place={tooltipPlace}
        clickable
        delayHide={500}
        positionStrategy="fixed"
        opacity={1}
        style={{
          zIndex: '99999',
          backgroundColor: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          fontSize: '0.9rem'
        }}
      >
        <div style={{ maxWidth: '300px' }}>
          <p>{content}</p>
          {link && <Link to={link}>Tìm hiểu thêm &rarr;</Link>}
        </div>
      </ReactTooltip>
    </>
  );
}
