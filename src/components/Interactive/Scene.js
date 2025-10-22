import React, { useContext, useEffect, useRef } from 'react';
import { StoryProgressContext } from './StoryProgressContext';
import styles from './interactive.module.css';

export function Scene({ id, start = false, children }) {
  const { currentScene, setCurrentScene } = useContext(StoryProgressContext);
  const sceneRef = useRef(null);

  // Set the starting scene as current on mount, or if the current scene is not set
  useEffect(() => {
    if (start && !currentScene) {
      setCurrentScene(id);
    }
  }, [start, id, setCurrentScene]);

  // Determine if this scene should be visible.
  // Only the current scene OR the starting scene (if no scene is active yet) should be visible
  const isVisible = currentScene === id;

  useEffect(() => {
    // When a scene becomes visible, scroll to top of page smoothly
    if (isVisible && sceneRef.current) {
      // Use a short timeout to ensure the element is fully rendered before scrolling.
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  // Filter out heading elements (h1, h2, h3, etc.) to improve immersion
  const filteredChildren = React.Children.toArray(children).filter(child => {
    if (React.isValidElement(child) && typeof child.type === 'string') {
      return !/^h[1-6]$/.test(child.type);
    }
    return true;
  });

  return (
    <div id={id} ref={sceneRef} className={styles.scene}>
      {filteredChildren}
    </div>
  );
}