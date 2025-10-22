import React, { useState, useEffect } from 'react';
import styles from './interactive.module.css';
import { useStoryProgress } from './ChoiceButtons';

/**
 * ThoughtBubble Component - Sequential animated thought revelations
 * Shows insights that pop up one after another with animation
 */

export default function ThoughtBubble({
  sequence = 1,
  delay = 0,
  children,
  icon = '💡',
  variant = 'insight', // insight, question, warning, success
  dismissible = false,
  autoShow = true,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(!autoShow);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoShow) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);

        // Remove animation class after animation completes
        setTimeout(() => setIsAnimating(false), 600);
      }, delay + (sequence - 1) * 300); // Stagger based on sequence

      return () => clearTimeout(timer);
    }
  }, [autoShow, delay, sequence]);

  const handleDismiss = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  if (!isVisible) return null;

  const variantClass = styles[`bubble-${variant}`] || styles['bubble-insight'];

  return (
    <div
      className={`${styles.thoughtBubble} ${variantClass} ${isAnimating ? styles.animating : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.bubbleIcon}>{icon}</div>
      <div className={styles.bubbleContent}>{children}</div>
      {dismissible && (
        <button
          className={styles.bubbleDismiss}
          onClick={handleDismiss}
          aria-label="Đóng"
        >
          ×
        </button>
      )}
      {/* Bubble tail */}
      <div className={styles.bubbleTail} />
    </div>
  );
}

/**
 * ThoughtBubbleSequence - Container for multiple bubbles that appear in sequence
 */
export function ThoughtBubbleSequence({
  children,
  baseDelay = 500,
  staggerDelay = 400,
  title,
  className = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childArray = React.Children.toArray(children);

  useEffect(() => {
    if (currentIndex < childArray.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, baseDelay + currentIndex * staggerDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, childArray.length, baseDelay, staggerDelay]);

  return (
    <div className={`${styles.thoughtSequence} ${className}`}>
      {title && <h4 className={styles.sequenceTitle}>{title}</h4>}
      <div className={styles.sequenceContainer}>
        {childArray.map((child, index) => (
          <div
            key={index}
            className={styles.sequenceItem}
            style={{
              opacity: index <= currentIndex ? 1 : 0,
              transform: index <= currentIndex ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.4s ease',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * RevealBubble - Thought bubble that requires user interaction to reveal
 */
export function RevealBubble({
  children,
  buttonText = 'Khoan đã... 🤔',
  icon = '💡',
  variant = 'insight',
  className = '',
}) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className={`${styles.revealBubble} ${className}`}>
      {!isRevealed ? (
        <button
          className={styles.revealButton}
          onClick={() => setIsRevealed(true)}
        >
          {buttonText}
        </button>
      ) : (
        <ThoughtBubble
          icon={icon}
          variant={variant}
          dismissible={false}
          autoShow={true}
          delay={0}
        >
          {children}
        </ThoughtBubble>
      )}
    </div>
  );
}

/**
 * ThinkingDots - Animated thinking indicator
 */
export function ThinkingDots({ text = 'Đang suy nghĩ', duration = 2000 }) {
  return (
    <div className={styles.thinkingDots}>
      <span className={styles.thinkingText}>{text}</span>
      <span className={styles.dot} style={{ animationDelay: '0s' }}>.</span>
      <span className={styles.dot} style={{ animationDelay: '0.2s' }}>.</span>
      <span className={styles.dot} style={{ animationDelay: '0.4s' }}>.</span>
    </div>
  );
}

/**
 * HighlightThought - Inline thought highlight that can expand
 */
export function HighlightThought({ trigger, children, variant = 'insight' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <span className={styles.highlightThought}>
      <span
        className={styles.highlightTrigger}
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyPress={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
      >
        {trigger}
        <span className={styles.highlightIndicator}>💭</span>
      </span>
      {isExpanded && (
        <span className={styles.highlightContent}>
          <ThoughtBubble variant={variant} delay={0} sequence={1}>
            {children}
          </ThoughtBubble>
        </span>
      )}
    </span>
  );
}

/**
 * Conditionally renders children based on story progress.
 */
export function ConditionalContent({ dependsOn, children }) {
  const { choices } = useStoryProgress();

  if (!dependsOn) {
    return <>{children}</>;
  }

  // The dependsOn prop can be a single string or an array of strings
  const dependencies = Array.isArray(dependsOn) ? dependsOn : [dependsOn];

  const isConditionMet = dependencies.some(dep => {
    const [sceneId, requiredChoiceId] = dep.split(':');
    if (!sceneId || !requiredChoiceId) {
      console.warn(`Invalid dependsOn prop format: ${dep}`);
      return false;
    }
    return choices[sceneId]?.choiceId === requiredChoiceId;
  });

  if (isConditionMet) {
    return <>{children}</>;
  }

  return null;
}
