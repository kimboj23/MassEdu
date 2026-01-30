import React, { useState, useRef, useCallback } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import WaveAnimation from '@site/src/components/WaveAnimation';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Draggable floating logo component
function DraggableLogo({ id, initialClass }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(null);
  const dragRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    const rect = dragRef.current.getBoundingClientRect();
    const containerRect = dragRef.current.parentElement.getBoundingClientRect();

    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    // Set initial position if not already set
    if (!position) {
      setPosition({
        x: rect.left - containerRect.left,
        y: rect.top - containerRect.top
      });
    }

    setIsDragging(true);
  }, [position]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const containerRect = dragRef.current.parentElement.getBoundingClientRect();
    const newX = e.clientX - containerRect.left - offsetRef.current.x;
    const newY = e.clientY - containerRect.top - offsetRef.current.y;

    setPosition({ x: newX, y: newY });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse listeners when dragging
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const wrapperStyle = position ? {
    left: position.x,
    top: position.y,
    animation: 'none',
    transform: 'none'
  } : {};

  return (
    <span
      ref={dragRef}
      className={`${styles.floatingLogoWrapper} ${!position ? initialClass : ''} ${isDragging ? styles.dragging : ''}`}
      style={wrapperStyle}
      onMouseDown={handleMouseDown}
    >
      <img src="/img/Tepup-BnW-Color-Logo-0.png" alt="" className={styles.floatingLogo} draggable={false} />
    </span>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const handleScrollToStorylines = (e) => {
    e.preventDefault();
    const storylinesSection = document.getElementById('storylines');
    if (storylinesSection) {
      storylinesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Set focus for keyboard users
      storylinesSection.setAttribute('tabindex', '-1');
      storylinesSection.focus();
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} aria-labelledby="hero-title">
      {/* Floating Logo Animation - Draggable */}
      <div className={styles.floatingLogoContainer} aria-hidden="true">
        <DraggableLogo id={1} initialClass={styles.floatingLogo1} />
        <DraggableLogo id={2} initialClass={styles.floatingLogo2} />
        <DraggableLogo id={3} initialClass={styles.floatingLogo3} />
        <DraggableLogo id={4} initialClass={styles.floatingLogo4} />
      </div>
      <div className="container">
        <Heading as="h1" id="hero-title" className="hero__title display">
          Tép riu<br aria-hidden="true" />
          stép up<br aria-hidden="true" />
          stép out
        </Heading>
        <p className="hero__subtitle lead">
          TepUp là nơi nằm ngoài ao làng quen thuộc,
          nơi những "tép riu" có thể tự do học hỏi và
          thể hiện chính kiến một cách an toàn.
        </p>
        <div className={styles.buttons} role="group" aria-label="Các hành động chính">
          <button
            className="button button--primary button--lg"
            onClick={handleScrollToStorylines}
            aria-label="Bắt đầu học - cuộn đến phần câu chuyện">
            Bắt đầu học
          </button>
          <Link
            className="button button--secondary button--lg"
            to="/about"
            aria-label="Tìm hiểu thêm về TepUp">
            Tìm hiểu thêm
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Mại vô ${siteConfig.title}`}
      description="Bên nhau học hành">
      <WaveAnimation />
      <HomepageHeader />
      <main id="main-content" aria-label="Nội dung chính">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
