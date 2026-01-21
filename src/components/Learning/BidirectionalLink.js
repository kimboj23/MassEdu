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
    // Get the story page path (first scene's path or construct it)
    const storyPath = targetContent?.scenes?.[0]?.path || `${targetContent?.path || `/course-tax/characters/${story}`}/story`;
    targetPath = scene
      ? `${storyPath}#${scene}`
      : storyPath;
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
    if (to === 'concept') return '💡';
    return '→';
  };

  // Preview content for hover
  const renderPreview = () => {
    if (!showPreview || !targetContent) return null;

    return (
      <div className={styles.linkPreview} role="tooltip" aria-label={`Xem trước: ${targetTitle}`}>
        <div className={styles.previewHeader}>
          <span className={styles.previewIcon} aria-hidden="true">{getIcon()}</span>
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
            <ul aria-label="Các kết quả học tập">
              {targetContent.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const typeLabels = {
    lesson: 'bài học',
    story: 'câu chuyện',
    module: 'module',
    concept: 'khái niệm'
  };

  return (
    <div
      className={`${styles.bidirectionalLink} ${styles[`link-${targetType}`]} ${className}`}
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
      onFocus={() => setShowHover(true)}
      onBlur={() => setShowHover(false)}
    >
      <Link
        to={targetPath}
        className={styles.linkButton}
        aria-label={`Đi đến ${typeLabels[targetType] || 'nội dung'}: ${targetTitle}`}
        aria-describedby={showHover && showPreview ? `preview-${targetType}-${targetPath.replace(/\//g, '-')}` : undefined}
      >
        <span className={styles.linkIcon} aria-hidden="true">{getIcon()}</span>
        <span className={styles.linkText}>
          {children || targetTitle}
        </span>
        <span className={styles.linkArrow} aria-hidden="true">→</span>
      </Link>

      {showHover && showPreview && (
        <section
          className={styles.linkPreviewContainer}
          id={`preview-${targetType}-${targetPath.replace(/\//g, '-')}`}
          aria-live="polite"
        >
          {renderPreview()}
        </section>
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
        to={lesson ? 'lesson' : (moduleProp ? 'module' : 'concept')}
        lesson={lesson}
        module={moduleProp}
        concept={concept}
        context={context}
        className={styles.learnMore}
      >
        {children || (
          <>
            <strong>Tìm hiểu thêm:</strong> {context || 'Đọc bài học chi tiết'}
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
        to="story"
        story={character}
        scene={scene}
        context={context}
        className={styles.storyExample}
      >
        {children || (
          <>
            <strong>Ví dụ:</strong> {context}
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
      {(lesson || moduleProp) && <span className={styles.hintIcon}>→</span>}
    </span>
  );
}

/**
 * StoryCallout Component - Call-to-action box in lessons
 */
export function StoryCallout({ character, scenes = [], title, description }) {
  const storyData = getStory(character);

  return (
    <aside className={styles.storyCallout} role="complementary" aria-labelledby="story-callout-title">
      <div className={styles.calloutHeader}>
        <h4 id="story-callout-title">{title || 'Muốn trải nghiệm trực tiếp?'}</h4>
      </div>
      <p>{description || `Theo dõi câu chuyện của ${storyData?.character} để thấy những khái niệm này xuất hiện trong cuộc sống như thế nào.`}</p>
      <div className={styles.calloutActions} role="group" aria-label="Các lựa chọn câu chuyện">
        {scenes.length > 0 ? (
          scenes.map((scene) => {
            const sceneData = storyData?.scenes.find(s => s.id === scene);
            return (
              <Link
                key={scene}
                to={sceneData?.path || `${storyData?.path}/${scene}`}
                className={styles.calloutButton}
                aria-label={`Bắt đầu: ${sceneData?.title || 'câu chuyện'}`}
              >
                {sceneData?.title || 'Bắt đầu câu chuyện'}
              </Link>
            );
          })
        ) : (
          <Link
            to={storyData?.path}
            className={styles.calloutButton}
            aria-label={`Bắt đầu câu chuyện của ${storyData?.character || character}`}
          >
            Bắt đầu câu chuyện
          </Link>
        )}
      </div>
    </aside>
  );
}
