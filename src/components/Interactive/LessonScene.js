import React, { useContext, useEffect, useRef } from 'react';
import { StoryProgressContext } from './StoryProgressContext';
import styles from './interactive.module.css';

/**
 * LessonScene Component
 * Similar to Scene but optimized for educational content chunking
 * Displays one learning unit at a time with progress tracking
 */
export function LessonScene({ id, start = false, title, children, lessonId }) {
  const { currentScene, setCurrentScene } = useContext(StoryProgressContext);
  const sceneRef = useRef(null);

  // Set the starting scene as current on mount
  useEffect(() => {
    // If this is the starting scene and:
    // - no scene is set, OR
    // - currentScene is from a story (doesn't start with "chunk-")
    // Then initialize this lesson's starting scene
    if (start && (!currentScene || !currentScene.startsWith('chunk-'))) {
      setCurrentScene(id);
    }
  }, [start, id, setCurrentScene]);

  // Determine if this scene should be visible
  // Show starting scene if no scene is set yet or if currentScene is not a chunk
  const isVisible = currentScene === id || (start && (!currentScene || !currentScene.startsWith('chunk-')));

  useEffect(() => {
    // When a scene becomes visible, scroll to top smoothly
    if (isVisible && sceneRef.current) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id={id}
      ref={sceneRef}
      className={`${styles.scene} ${styles.lessonScene}`}
      data-lesson-id={lessonId}
    >
      {title && (
        <div className={styles.lessonSceneHeader}>
          <h3>{title}</h3>
        </div>
      )}
      <div className={styles.lessonSceneContent}>
        {children}
      </div>
    </div>
  );
}

/**
 * LessonChunkNavigation Component
 * Navigation buttons for moving between lesson chunks
 */
export function LessonChunkNavigation({
  currentChunk,
  totalChunks,
  prevChunk,
  nextChunk,
  onNavigate
}) {
  const { setCurrentScene } = useContext(StoryProgressContext);

  const handlePrev = () => {
    if (prevChunk) {
      setCurrentScene(prevChunk);
      if (onNavigate) onNavigate(prevChunk);
    }
  };

  const handleNext = () => {
    if (nextChunk) {
      setCurrentScene(nextChunk);
      if (onNavigate) onNavigate(nextChunk);
    }
  };

  return (
    <div className={styles.lessonNavigation}>
      <div className={styles.lessonProgress}>
        <div className={styles.progressDots}>
          {Array.from({ length: totalChunks }, (_, i) => (
            <span
              key={i}
              className={`${styles.progressDot} ${
                i < currentChunk ? styles.progressDotComplete : ''
              } ${i === currentChunk - 1 ? styles.progressDotActive : ''}`}
              aria-label={`Chunk ${i + 1} of ${totalChunks}`}
            />
          ))}
        </div>
        <div className={styles.progressText}>
          Phần {currentChunk} / {totalChunks}
        </div>
      </div>

      <div className={styles.lessonButtons}>
        <button
          onClick={handlePrev}
          disabled={!prevChunk}
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          aria-label="Previous chunk"
        >
          ← Trước
        </button>
        <button
          onClick={handleNext}
          disabled={!nextChunk}
          className={`${styles.navButton} ${styles.navButtonNext}`}
          aria-label="Next chunk"
        >
          Tiếp theo →
        </button>
      </div>
    </div>
  );
}

/**
 * LessonProgress Component
 * Shows overall progress through a lesson
 */
export function LessonProgress({ total, title, showReset = true, startChunkId = 'chunk-1' }) {
  const { currentScene, setCurrentScene } = useContext(StoryProgressContext);

  // Extract chunk number from currentScene (e.g., "chunk-1" -> 1)
  const getCurrentChunkNumber = () => {
    if (!currentScene || !currentScene.startsWith('chunk-')) return 0;
    const num = parseInt(currentScene.replace('chunk-', ''));
    return isNaN(num) ? 0 : num;
  };

  const currentChunk = getCurrentChunkNumber();
  const percentage = currentChunk > 0 ? Math.round((currentChunk / total) * 100) : 0;

  const handleReset = () => {
    // Reset to the starting chunk
    setCurrentScene(startChunkId);
  };

  return (
    <div className={styles.lessonProgressBar}>
      <div className={styles.lessonProgressInfo}>
        <span className={styles.lessonProgressTitle}>{title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className={styles.lessonProgressPercent}>{percentage}%</span>
          {showReset && (
            <button
              onClick={handleReset}
              className={styles.resetButton}
              title="Bắt đầu lại từ đầu"
            >
              🔄
            </button>
          )}
        </div>
      </div>
      <div className={styles.progressBarTrack}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}
