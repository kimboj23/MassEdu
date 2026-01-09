import React, { useState, useContext, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { BacklinkHint } from '@site/src/components/Learning/BidirectionalLink';
import { StoryProgressContext } from './StoryProgressContext';
import styles from './interactive.module.css'; // This was missing styles for the component

export function StoryProgressProvider({ children }) {
  const [choices, setChoices] = useState(() => {
    // Load from localStorage if available
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('massedu-story-progress');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Track the current active scene
  const [currentScene, setCurrentScene] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if there's a hash in the URL (e.g., #canh-2a)
      const hash = window.location.hash?.replace('#', '');
      if (hash) {
        return hash;
      }
      // Otherwise, load from localStorage
      const saved = localStorage.getItem('massedu-current-scene');
      return saved || null;
    }
    return null;
  });

  // Listen for hash changes to update current scene when navigating via links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash?.replace('#', '');
      if (hash) {
        setCurrentScene(hash);
        localStorage.setItem('massedu-current-scene', hash);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  // Track scene history
  const [sceneHistory, setSceneHistory] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('massedu-scene-history');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const addChoice = (sceneId, choiceId, choiceText, nextScene) => {
    const newChoices = {
      ...choices,
      [sceneId]: { choiceId, choiceText, nextScene, timestamp: new Date().toISOString() },
    };
    setChoices(newChoices);

    // Add current scene to history before navigating
    if (currentScene && !sceneHistory.includes(currentScene)) {
      const newHistory = [...sceneHistory, currentScene];
      setSceneHistory(newHistory);
      localStorage.setItem('massedu-scene-history', JSON.stringify(newHistory));
    }

    // Update current scene
    const nextSceneId = nextScene?.replace('#', '');
    if (nextSceneId) {
      setCurrentScene(nextSceneId);
      if (typeof window !== 'undefined') {
        localStorage.setItem('massedu-current-scene', nextSceneId);
      }
    }

    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('massedu-story-progress', JSON.stringify(newChoices, (key, value) => key === '$$typeof' ? undefined : value));
    }
  };

  const getChoices = () => choices;

  const clearProgress = () => {
    setChoices({});
    setCurrentScene(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('massedu-story-progress');
      localStorage.removeItem('massedu-current-scene');
      localStorage.removeItem('massedu-scene-history');
    }
  };

  const goBack = () => {
    if (sceneHistory.length === 0) return;

    const newHistory = [...sceneHistory];
    const previousScene = newHistory.pop();

    setSceneHistory(newHistory);
    setCurrentScene(previousScene);

    if (typeof window !== 'undefined') {
      localStorage.setItem('massedu-scene-history', JSON.stringify(newHistory));
      localStorage.setItem('massedu-current-scene', previousScene);
    }
  };

  const restart = () => {
    clearProgress();
    window.location.reload();
  };

  return (
    <StoryProgressContext.Provider value={{ choices, currentScene, setCurrentScene, addChoice, getChoices, clearProgress, goBack, restart, sceneHistory }}>
      {children}
    </StoryProgressContext.Provider>
  );
}

export function useStoryProgress() {
  return useContext(StoryProgressContext);
}

/**
 * ChoiceButtons Component - Interactive choice system for branching narratives
 */
export default function ChoiceButtons({
  children,
  sceneId,
  layout = 'vertical', // vertical, horizontal, grid
  showProgress = true,
  className = '',
}) {
  const { addChoice } = useStoryProgress();
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoice = (choiceId, choiceText, nextScene) => {
    setSelectedChoice(choiceId);
    if (sceneId) {
      addChoice(sceneId, choiceId, choiceText, nextScene);
    }
  };

  const layoutClass = styles[`layout-${layout}`] || styles['layout-vertical'];

  return (
    <div className={`${styles.choiceButtons} ${layoutClass} ${className}`}>
      <div className={styles.choicesContainer}>
        {React.Children.map(children, (child) => {
          if (child && child.type === Choice) {
            return React.cloneElement(child, {
              onSelect: handleChoice,
              isSelected: selectedChoice === child.props.value,
              disabled: selectedChoice && selectedChoice !== child.props.value,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}

/**
 * Choice Component - Individual choice button
 */
export function Choice({
  value,
  children,
  nextScene,
  emoji,
  variant = 'default', // default, primary, learn, skip
  lesson,
  module: moduleProp,
  points = 0,
  onSelect,
  isSelected,
  disabled,
  className = '',
}) {
  const [isHovering, setIsHovering] = useState(false);

  // Helper to extract plain text from children, which might be complex React nodes
  const getChoiceText = (nodes) => {
    if (typeof nodes === 'string') {
      return nodes;
    }
    if (Array.isArray(nodes)) {
      return nodes.map(getChoiceText).join('');
    }
    if (nodes && nodes.props && nodes.props.children) {
      return getChoiceText(nodes.props.children);
    }
    return '';
  };

  const handleClick = () => {
    if (onSelect && !disabled) {
      onSelect(value, getChoiceText(children).trim(), nextScene);
    }
  };

  const variantClass = styles[`choice-${variant}`] || styles['choice-default'];

  // If nextScene is provided, render as Link
  const content = (
    <>
      <span className={styles.choiceContent}>{children}</span>
      {(lesson || moduleProp) && <BacklinkHint lesson={lesson} module={moduleProp} />}
      {points > 0 && (
        <span className={styles.choiceBadge}>+{points}</span>
      )}
    </>
  );

  const baseClass = `${styles.choice} ${variantClass} ${isSelected ? styles.selected : ''} ${disabled ? styles.disabled : ''} ${className}`;

  if (nextScene && !disabled) {
    return (
      <Link
        to={nextScene}
        className={baseClass}
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {content}
        <span className={styles.choiceArrow}>→</span>
      </Link>
    );
  }

  return (
    <button
      className={baseClass}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {content}
      {!disabled && <span className={styles.choiceArrow}>→</span>}
    </button>
  );
}

/**
 * QuickChoice - Inline choice for smaller decisions
 */
export function QuickChoice({ options, onSelect, sceneId }) {
  const { addChoice } = useStoryProgress();
  const [selected, setSelected] = useState(null);

  const handleSelect = (optionValue, optionLabel) => {
    setSelected(optionValue);
    if (sceneId) {
      addChoice(sceneId, optionValue, optionLabel);
    }
    if (onSelect) {
      onSelect(optionValue, optionLabel);
    }
  };

  return (
    <div className={styles.quickChoice}>
      {options.map((option, index) => (
        <button
          key={index}
          className={`${styles.quickOption} ${selected === option.value ? styles.selected : ''}`}
          onClick={() => handleSelect(option.value, option.label)}
          disabled={selected && selected !== option.value}
        >
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}

/**
 * TimedChoice - Choice with countdown timer
 */
export function TimedChoice({
  children,
  sceneId,
  timeout = 10000, // 10 seconds
  defaultChoice,
  onTimeout,
  className = '',
}) {
  const [timeLeft, setTimeLeft] = useState(timeout / 1000);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      if (onTimeout) {
        onTimeout(defaultChoice);
      }
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, defaultChoice, onTimeout]);

  return (
    <div className={`${styles.timedChoice} ${className}`}>
      {!isExpired && (
        <div className={styles.timer}>
          <div className={styles.timerBar} style={{ width: `${(timeLeft / (timeout / 1000)) * 100}%` }} />
          <span className={styles.timerText}>
            {timeLeft}s
          </span>
        </div>
      )}
      <ChoiceButtons sceneId={sceneId} showProgress={!isExpired}>
        {children}
      </ChoiceButtons>
      {isExpired && (
        <div className={styles.timeoutMessage}>
          Hết giờ! Mặc định chọn: {defaultChoice}
        </div>
      )}
    </div>
  );
}

/**
 * ProgressIndicator - Shows story progress based on choices made
 */
export function ProgressIndicator({ totalScenes }) {
  const { getChoices, goBack, restart, sceneHistory } = useStoryProgress();
  const choices = getChoices();
  const completedScenes = Object.keys(choices).length;
  const progress = (completedScenes / totalScenes) * 100;

  return (
    <div className={styles.progressIndicator}>
      <div className={styles.progressControls}>
        <button onClick={goBack} disabled={sceneHistory.length === 0} className={styles.progressButton}>
          <span>← Quay lại</span>
        </button>
        <button onClick={restart} className={styles.progressButton}>
          <span>Bắt đầu lại</span>
        </button>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className={styles.progressText}>
        {completedScenes} / {totalScenes} hoàn thành
      </div>
    </div>
  );
}

/**
 * ChoiceReview - Shows summary of choices made
 */
export function ChoiceReview() {
  const { getChoices, clearProgress } = useStoryProgress();
  const choices = getChoices();

  if (Object.keys(choices).length === 0) {
    return null;
  }

  return (
    <div className={styles.choiceReview}>
      <h4>Các quyết định của bạn:</h4>
      <ul className={styles.reviewList}>
        {Object.entries(choices).map(([sceneId, choice]) => (
          <li key={sceneId} className={styles.reviewItem}>
            <span className={styles.reviewScene}>{sceneId}:</span>
            <span className={styles.reviewChoice}>{choice.choiceText}</span>
          </li>
        ))}
      </ul>
      <button
        className={styles.clearButton}
        onClick={clearProgress}
      >
        Chơi lại từ đầu
      </button>
    </div>
  );
}
