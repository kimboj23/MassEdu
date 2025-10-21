import React, { useContext, useEffect, useRef } from 'react';
import { StoryProgressContext } from './StoryProgressContext';
import styles from './interactive.module.css';

export function Scene({ id, start = false, children }) {
  const { choices } = useContext(StoryProgressContext);
  const sceneRef = useRef(null);

  // Determine if this scene should be visible.
  // A scene is visible if it's the starting scene, or if any choice made by the user
  // leads to this scene's ID.
  const isVisible =
    start ||
    Object.values(choices).some(choice => choice && choice.nextScene === `#${id}`);

  useEffect(() => {
    // When a scene becomes visible, scroll it into view.
    if (isVisible && sceneRef.current) {
      // Use a short timeout to ensure the element is fully rendered before scrolling.
      setTimeout(() => {
        sceneRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return <div id={id} ref={sceneRef} className={styles.scene}>{children}</div>;
}