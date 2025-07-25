import React, { useState, useEffect, useRef } from 'react';
import styles from './Quiz.module.css';

/**
 * Interactive Multiple Choice Quiz Component
 * 
 * Features:
 * - Instant feedback on selection (no submit button)
 * - Gamified UI with progress bars, streaks, and celebrations
 * - Audio and haptic feedback for better engagement
 * - Sequential quiz support via onComplete callback
 * 
 * @param {string} question - The question text to display
 * @param {string[]} options - Array of answer options
 * @param {number} correct - Index of the correct answer (0-based)
 * @param {string} explanation - Explanation shown after answering
 * @param {number} points - Points awarded for correct answer (default: 10)
 * @param {number} streak - Current streak count to display (default: 0)
 * @param {boolean} enableSounds - Enable audio feedback (default: false)
 * @param {boolean} enableHaptics - Enable vibration feedback (default: true)
 * @param {function} onComplete - Callback fired when user advances (for sequential quizzes)
 */
export default function MultipleChoice({ 
  question, 
  options, 
  correct, 
  explanation,
  points = 10,
  streak = 0,
  enableSounds = false,
  enableHaptics = true,
  onComplete = null
}) {
  // UI State Management
  const [selected, setSelected] = useState(null);           // Currently selected option index
  const [showResult, setShowResult] = useState(false);     // Whether to show result/explanation
  const [isAnimating, setIsAnimating] = useState(false);   // For selection bounce animation
  const [showCelebration, setShowCelebration] = useState(false); // Confetti animation trigger
  const [progress, setProgress] = useState(0);             // Progress bar animation (0-100)
  
  // Ref for auto-scroll functionality
  const questionRef = useRef(null);

  // Derived state: whether the selected answer is correct
  const isCorrect = selected === correct;

  /**
   * Generate audio feedback using Web Audio API
   * Creates different sound patterns for select/correct/incorrect actions
   * @param {string} type - Type of sound: 'select', 'correct', or 'incorrect'
   */
  const playSound = (type) => {
    if (!enableSounds) return;
    
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (type === 'select') {
        // Quick selection beep (800Hz, 0.1s)
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
      } else if (type === 'correct') {
        // Success melody - ascending C-E-G chord
        [523, 659, 784].forEach((freq, i) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();
          osc.connect(gain);
          gain.connect(audioContext.destination);
          
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.2, audioContext.currentTime + i * 0.1);
          gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + i * 0.1 + 0.2);
          osc.start(audioContext.currentTime + i * 0.1);
          osc.stop(audioContext.currentTime + i * 0.1 + 0.2);
        });
      } else if (type === 'incorrect') {
        // Error sound - low frequency buzz (200Hz, 0.3s)
        oscillator.frequency.value = 200;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
      }
    } catch (error) {
      // Gracefully handle browsers without Web Audio API support
      console.debug('Audio feedback not available:', error.message);
    }
  };

  /**
   * Trigger haptic feedback via device vibration
   * Different vibration patterns for different actions
   * @param {string} type - Type of haptic: 'select', 'correct', or 'incorrect'
   */
  const triggerHaptic = (type) => {
    if (!enableHaptics || !navigator.vibrate) return;
    
    if (type === 'select') {
      navigator.vibrate(50); // Quick tap
    } else if (type === 'correct') {
      navigator.vibrate([100, 50, 100]); // Double tap pattern
    } else if (type === 'incorrect') {
      navigator.vibrate(200); // Long buzz
    }
  };

  /**
   * Handle result display and feedback when answer is revealed
   * Triggers celebration for correct answers, plays appropriate sounds/haptics
   */
  useEffect(() => {
    if (showResult) {
      if (isCorrect) {
        setShowCelebration(true);
        playSound('correct');
        triggerHaptic('correct');
        // Stop celebration animation after 2 seconds
        setTimeout(() => setShowCelebration(false), 2000);
      } else {
        playSound('incorrect');
        triggerHaptic('incorrect');
      }
    }
  }, [showResult, isCorrect]);

  /**
   * Handle user selecting an answer option
   * Just selects the option, doesn't show result until handleSubmit is called
   * @param {number} index - Index of selected option (0-based)
   */
  const handleOptionSelect = (index) => {
    if (showResult) return; // Prevent changing selection after result is shown
    
    setSelected(index);
    setIsAnimating(true);
    playSound('select');
    triggerHaptic('select');
    
    // Just stop animation after brief delay
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  /**
   * Handle submit button click - shows the result
   */
  const handleSubmit = () => {
    if (selected === null || showResult) return;
    
    // Add feedback for submit button
    playSound('select');
    triggerHaptic('select');
    
    setShowResult(true);
    // Animate progress bar filling up (500ms total)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 50);
  };

  /**
   * Handle continue/retry button click
   * For correct answers: advances to next question (sequential mode) or resets (standalone)
   * For incorrect answers: always resets current question for retry
   */
  const handleContinue = () => {
    // Add feedback for continue/retry button
    if (isCorrect) {
      playSound('correct');
      triggerHaptic('correct');
    } else {
      playSound('incorrect');
      triggerHaptic('incorrect');
    }
    
    // Auto-scroll to question after button interaction
    setTimeout(() => {
      if (questionRef.current) {
        questionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 100);
    
    if (isCorrect) {
      // Correct answer: advance to next question or reset for standalone
      if (onComplete) {
        // Sequential quiz mode: notify parent component
        onComplete({
          isCorrect: true,
          points: points,
          selectedOption: selected,
          correctOption: correct
        });
      } else {
        // Standalone mode: reset for next question
        resetQuestionState();
      }
    } else {
      // Incorrect answer: always reset to retry current question
      resetQuestionState();
    }
  };

  /**
   * Reset all question state for a fresh start
   * Used for retrying incorrect answers or standalone mode resets
   */
  const resetQuestionState = () => {
    setSelected(null);
    setShowResult(false);
    setProgress(0);
    setShowCelebration(false);
  };

  return (
    <div className={`${styles.quizContainer} ${showCelebration ? styles.celebrating : ''}`}>
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
        <div className={styles.streakBadge}>
          🔥 {streak}
        </div>
      </div>

      {/* Question */}
      <div className={styles.questionContainer} ref={questionRef}>
        <h3 className={styles.question}>{question}</h3>
      </div>

      {/* Options */}
      <div className={styles.optionsContainer}>
        {options.map((option, index) => {
          let optionClass = styles.option;
          
          if (showResult) {
            if (index === correct) {
              optionClass += ` ${styles.correctOption}`;
            } else if (index === selected && index !== correct) {
              optionClass += ` ${styles.incorrectOption}`;
            } else {
              optionClass += ` ${styles.disabledOption}`;
            }
          } else if (selected === index) {
            optionClass += ` ${styles.selectedOption}`;
          }

          return (
            <div
              key={index}
              className={`${optionClass} ${isAnimating && selected === index ? styles.bounce : ''}`}
              onClick={() => handleOptionSelect(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOptionSelect(index);
                }
              }}
            >
              <div className={styles.optionContent}>
                <div className={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className={styles.optionText}>{option}</span>
                {showResult && index === correct && (
                  <div className={styles.checkmark}>✓</div>
                )}
                {showResult && index === selected && index !== correct && (
                  <div className={styles.crossmark}>✗</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Button - only show when answer is selected but result not shown */}
      {selected !== null && !showResult && (
        <button 
          className={`${styles.submitButton} ${styles.active}`}
          onClick={handleSubmit}
        >
          Kiểm tra
          <div className={styles.buttonGlow}></div>
        </button>
      )}

      {/* Result Section */}
      {showResult && (
        <div className={`${styles.resultContainer} ${isCorrect ? styles.correctResult : styles.incorrectResult}`}>
          <div className={styles.resultHeader}>
            <div className={styles.resultIcon}>
              {isCorrect ? '🎉' : '💭'}
            </div>
            <div className={styles.resultTitle}>
              {isCorrect ? 'Xuất sắc!' : 'Gần đúng rồi!'}
            </div>
            {isCorrect && (
              <div className={styles.pointsEarned}>
                +{points} XP
              </div>
            )}
          </div>
          
          <div className={styles.explanation}>
            {explanation}
          </div>
          
          <button 
            className={styles.continueButton}
            onClick={handleContinue}
          >
            {isCorrect ? 'Tiếp theo' : 'Thử lại'}
            <span className={styles.arrow}>→</span>
          </button>
        </div>
      )}

      {/* Celebration Animation */}
      {showCelebration && (
        <div className={styles.celebration}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`${styles.confetti} ${styles[`confetti${i + 1}`]}`}>
              ✨
            </div>
          ))}
        </div>
      )}
    </div>
  );
}