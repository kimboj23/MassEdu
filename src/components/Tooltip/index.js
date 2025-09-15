import React, { useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import Link from '@docusaurus/Link';
import 'react-tooltip/dist/react-tooltip.css';
import { getConcept } from '../../data/concepts';

// Unified Tooltip component with consistent design for all use cases
// Usage:
// <Tooltip conceptId="thue">Thuế</Tooltip>
// <Tooltip content="Simple explanation" link="/link" id="unique">Text</Tooltip>
export default function Tooltip({ children, conceptId, content, link, id }) {
  // Prepare tooltip data
  let tooltipData = {};

  if (conceptId) {
    const concept = getConcept(conceptId);
    if (!concept) {
      console.warn(`Concept not found: ${conceptId}`);
      return <span>{children}</span>;
    }
    tooltipData = {
      id: `tooltip-${conceptId}`,
      title: concept.title,
      content: concept.definition,
      tags: concept.tags,
      link: concept.knowledgeArticle,
      linkText: `Tìm hiểu thêm về ${concept.title}`
    };
  } else if (content) {
    tooltipData = {
      id: `tooltip-${id || Math.random().toString(36).substr(2, 9)}`,
      title: null,
      content: content,
      tags: null,
      link: link,
      linkText: 'Tìm hiểu thêm'
    };
  } else {
    console.warn('Tooltip requires either conceptId or content prop');
    return <span>{children}</span>;
  }

  const [tooltipPlace, setTooltipPlace] = useState('top');

  useEffect(() => {
    // Dynamic placement based on viewport position
    const handleTooltipPlacement = (event) => {
      const rect = event.target.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight / 2) {
        setTooltipPlace('bottom');
      } else {
        setTooltipPlace('top');
      }
    };

    const tooltipTrigger = document.querySelector(`[data-tooltip-id="${tooltipData.id}"]`);
    if (tooltipTrigger) {
      tooltipTrigger.addEventListener('mouseenter', handleTooltipPlacement);
      return () => {
        tooltipTrigger.removeEventListener('mouseenter', handleTooltipPlacement);
      };
    }
  }, [tooltipData.id]);

  // Generate color based on tag
  const getTagColor = (tag) => {
    const colors = {
      'nhân quyền': '#e3f2fd',
      'chính trị': '#f3e5f5',
      'luật pháp': '#e8f5e8'
    };
    return colors[tag] || '#f5f5f5';
  };

  return (
    <>
      <span
        data-tooltip-id={tooltipData.id}
        className="tooltip-trigger"
        style={{
          borderBottom: '2px dotted var(--ifm-color-primary)',
          cursor: 'pointer',
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        {children}
      </span>
      <ReactTooltip
        id={tooltipData.id}
        place={tooltipPlace}
        clickable
        delayHide={500}
        positionStrategy="fixed"
        opacity={1}
        style={{
          zIndex: '99999',
          backgroundColor: '#ffffff',
          color: '#1c1e21',
          border: '1px solid #d0d7de',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          fontSize: '0.9rem',
          maxWidth: '350px',
          padding: '12px'
        }}
      >
        <div className="tooltip-content">
          {/* Title (for concept tooltips) */}
          {tooltipData.title && (
            <h4 style={{
              margin: '0 0 8px 0',
              color: '#1976d2',
              fontSize: '1rem'
            }}>
              {tooltipData.title}
            </h4>
          )}

          {/* Tags (for concept tooltips) */}
          {tooltipData.tags && (
            <div className="tooltip-tags" style={{ marginBottom: '12px' }}>
              {tooltipData.tags.map(tag => (
                <span
                  key={tag}
                  className="tooltip-tag"
                  style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    marginRight: '4px',
                    backgroundColor: getTagColor(tag),
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    color: '#1c1e21',
                    border: '1px solid #e1e4e8'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <p style={{
            margin: '0 0 12px 0',
            lineHeight: '1.4'
          }}>
            {tooltipData.content}
          </p>

          {/* Link */}
          {tooltipData.link && (
            <div className="tooltip-actions" style={{
              paddingTop: '8px',
              borderTop: '1px solid #e1e4e8'
            }}>
              <Link
                to={tooltipData.link}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}
              >
                {tooltipData.linkText} →
              </Link>
            </div>
          )}
        </div>
      </ReactTooltip>
    </>
  );
}