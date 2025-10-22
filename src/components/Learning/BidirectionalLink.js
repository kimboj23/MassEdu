import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import { getLesson, getStory, getModule, getConceptContent } from '@site/src/data/contentGraph';
import styles from './learning.module.css';

/**
 * BidirectionalLink Component
 * Creates smart links between lessons, stories, and modules
 * Shows preview on hover and tracks reading progress
 */

export default function BidirectionalLink({
  from,
  to,
  lesson,
  story,
  module: moduleProp,
  concept,
  scene,
  context,
  children,
  showPreview = true,
  className = '',
}) {
  const [showHover, setShowHover] = useState(false);

  // Determine target content
  let targetContent = null;
  let targetPath = '';
  let targetTitle = '';
  let targetType = '';

  if (to === 'lesson' && lesson) {
    targetContent = getLesson(lesson);
    targetPath = targetContent?.path || `/course-tax/lessons/${lesson}`;
    targetTitle = targetContent?.title || 'Bài học';
    targetType = 'lesson';
  } else if (to === 'story' && story) {
    targetContent = getStory(story);
    targetPath = scene
      ? `${targetContent?.path}/${scene}`
      : targetContent?.path || `/course-tax/characters/${story}`;
    targetTitle = scene
      ? targetContent?.scenes?.find(s => s.id === scene)?.title
      : targetContent?.title;
    targetType = 'story';
  } else if (to === 'module' && moduleProp) {
    targetContent = getModule(moduleProp);
    targetPath = targetContent?.path || `/course-tax/modules/${moduleProp}`;
    targetTitle = targetContent?.title || 'Module chuyên sâu';
    targetType = 'module';
  } else if (concept) {
    const conceptData = getConceptContent(concept);
    targetPath = `/course-tax/concepts/${concept}`;
    targetTitle = conceptData?.name || 'Khái niệm';
    targetType = 'concept';
  }

  // Icon based on link type
  const getIcon = () => {
    if (from === 'lesson' && to === 'story') return '🎭';
    if (from === 'story' && to === 'lesson') return '📚';
    if (to === 'module') return '🔍';
    if (to === 'concept') return '💡';
    return '→';
  };

  // Preview content for hover
  const renderPreview = () => {
    if (!showPreview || !targetContent) return null;

    return (
      <div className={styles.linkPreview}>
        <div className={styles.previewHeader}>
          <span className={styles.previewIcon}>{getIcon()}</span>
          <strong>{targetTitle}</strong>
        </div>
        {context && (
          <div className={styles.previewContext}>
            {context}
          </div>
        )}
        {targetContent.learningOutcomes && (
          <div className={styles.previewOutcomes}>
            <small>Bạn sẽ học:</small>
            <ul>
              {targetContent.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`${styles.bidirectionalLink} ${styles[`link-${targetType}`]} ${className}`}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      <Link
        to={targetPath}
        className={styles.linkButton}
      >
        <span className={styles.linkIcon}>{getIcon()}</span>
        <span className={styles.linkText}>
          {children || targetTitle}
        </span>
        <span className={styles.linkArrow}>→</span>
      </Link>

      {showHover && showPreview && (
        <div className={styles.linkPreviewContainer}>
          {renderPreview()}
        </div>
      )}
    </div>
  );
}

/**
 * LearnMore Component - Specialized link from story to lesson
 */
export function LearnMore({ lesson, concept, module: moduleProp, children, context }) {
  return (
    <div className={styles.learnMoreContainer}>
      <BidirectionalLink
        from="story"
        to={lesson ? 'lesson' : (moduleProp ? 'module' : 'concept')}
        lesson={lesson}
        module={moduleProp}
        concept={concept}
        context={context}
        className={styles.learnMore}
      >
        {children || (
          <>
            <strong>📚 Tìm hiểu thêm:</strong> {context || 'Đọc bài học chi tiết'}
          </>
        )}
      </BidirectionalLink>
    </div>
  );
}

/**
 * StoryExample Component - Specialized link from lesson to story
 */
export function StoryExample({ character, scene, context, children }) {
  return (
    <div className={styles.storyExampleContainer}>
      <BidirectionalLink
        from="lesson"
        to="story"
        story={character}
        scene={scene}
        context={context}
        className={styles.storyExample}
      >
        {children || (
          <>
            <strong>🎭 Xem ví dụ thực tế:</strong> {context}
          </>
        )}
      </BidirectionalLink>
    </div>
  );
}

/**
 * BacklinkHint Component - Subtle indicator in choice buttons
 */
export function BacklinkHint({ lesson, module: moduleProp }) {
  return (
    <span className={styles.backlinkHint}>
      {lesson && <span className={styles.hintIcon}>📚</span>}
      {moduleProp && <span className={styles.hintIcon}>🔍</span>}
    </span>
  );
}

/**
 * StoryCallout Component - Call-to-action box in lessons
 */
export function StoryCallout({ character, scenes = [], title, description }) {
  const storyData = getStory(character);

  return (
    <div className={styles.storyCallout}>
      <div className={styles.calloutHeader}>
        <span className={styles.calloutIcon}>🎭</span>
        <h4>{title || 'Muốn trải nghiệm trực tiếp?'}</h4>
      </div>
      <p>{description || `Theo dõi câu chuyện của ${storyData?.character} để thấy những khái niệm này xuất hiện trong cuộc sống như thế nào.`}</p>
      <div className={styles.calloutActions}>
        {scenes.length > 0 ? (
          scenes.map((scene) => {
            const sceneData = storyData?.scenes.find(s => s.id === scene);
            return (
              <Link
                key={scene}
                to={sceneData?.path || `${storyData?.path}/${scene}`}
                className={styles.calloutButton}
              >
                {sceneData?.title || 'Bắt đầu câu chuyện'}
              </Link>
            );
          })
        ) : (
          <Link
            to={storyData?.path}
            className={styles.calloutButton}
          >
            Bắt đầu câu chuyện
          </Link>
        )}
      </div>
    </div>
  );
}
