import React, { useState } from 'react';
import MultipleChoice from './MultipleChoice';
import styles from './Quiz.module.css';

/**
 * Sequential Quiz Component - Displays questions one at a time
 * 
 * Features:
 * - One question per screen with auto-progression on correct answers
 * - Must answer correctly to advance (incorrect answers allow retry)
 * - Tracks overall progress, points, and streak across questions
 * - Shows completion screen with detailed results and restart option
 * 
 * @param {Array} questions - Array of question objects with {question, options, correct, explanation, points}. The `correct` property is a 0-based index referring to the correct option in the `options` array.
 * @param {boolean} enableSounds - Enable audio feedback (default: false)
 * @param {boolean} enableHaptics - Enable vibration feedback (default: true)
 * @param {function} onQuizComplete - Callback when entire quiz is finished
 */
export default function SequentialQuiz({ 
  questions = [], 
  enableSounds = false,
  enableHaptics = true,
  onQuizComplete = null,
  readingDelay = 1500 // ms, configurable reading time between questions
}) {
  // Quiz State Management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  // Current question index (0-based)
  const [answers, setAnswers] = useState([]);                           // Array of completed answers
  const [totalPoints, setTotalPoints] = useState(0);                    // Cumulative points earned
  const [streak, setStreak] = useState(0);                              // Current correct answer streak
  const [isComplete, setIsComplete] = useState(false);                  // Whether quiz is finished

  // Derived values
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  /**
   * Handle completion of individual questions
   * Only advances to next question on correct answers
   * @param {Object} result - Result object from MultipleChoice component
   */
  const handleQuestionComplete = (result) => {
    if (result.isCorrect) {
      // Correct answer: record result and advance
      const newAnswers = [...answers, result];
      setAnswers(newAnswers);
      setTotalPoints(prev => prev + result.points);
      setStreak(prev => prev + 1);

      if (isLastQuestion) {
        // Last question completed - finish quiz
        setIsComplete(true);
        if (onQuizComplete) {
          onQuizComplete({
            totalPoints: totalPoints + result.points,
            answers: newAnswers,
            correctAnswers: newAnswers.filter(a => a.isCorrect).length,
            totalQuestions: questions.length,
            finalStreak: streak + 1
          });
        }
      } else {
        // More questions remaining - auto-advance after reading time
        setTimeout(() => {
          setCurrentQuestionIndex(prev => prev + 1);
        }, readingDelay); // configurable delay to read explanation
      }
    } else {
      // Incorrect answer: reset streak but stay on current question
      // User can retry via the "Thử lại" button in MultipleChoice
      setStreak(0);
    }
  };

  /**
   * Reset quiz to initial state for retaking
   */
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTotalPoints(0);
    setStreak(0);
    setIsComplete(false);
  };

  if (questions.length === 0) {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.emptyState}>
          <h3>Không có câu hỏi nào</h3>
          <p>Vui lòng thêm câu hỏi vào bài quiz.</p>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const correctCount = answers.filter(a => a.isCorrect).length;
    const accuracy = Math.round((correctCount / questions.length) * 100);
    
    return (
      <div className={styles.quizContainer}>
        <div className={styles.completionContainer}>
          <div className={styles.completionHeader}>
            <div className={styles.completionIcon}>
              {accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎉' : '💪'}
            </div>
            <h2 className={styles.completionTitle}>
              {accuracy >= 80 ? 'Xuất sắc!' : accuracy >= 60 ? 'Làm tốt lắm!' : 'Cố gắng thêm nha!'}
            </h2>
            <div className={styles.completionStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{correctCount}/{questions.length}</span>
                <span className={styles.statLabel}>Đúng</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{accuracy}%</span>
                <span className={styles.statLabel}>Độ chính xác</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{totalPoints}</span>
                <span className={styles.statLabel}>XP</span>
              </div>
            </div>
          </div>
          
          <div className={styles.resultsBreakdown}>
            <h4>Kết quả chi tiết:</h4>
            {questions.map((question, index) => (
              <div 
                key={index} 
                className={`${styles.resultItem} ${answers[index]?.isCorrect ? styles.resultCorrect : styles.resultIncorrect}`}
              >
                <span className={styles.resultNumber}>Q{index + 1}</span>
                <span className={styles.resultStatus}>
                  {answers[index]?.isCorrect ? '✓' : '✗'}
                </span>
                <span className={styles.resultText}>
                  {question.question.length > 50 
                    ? question.question.substring(0, 50) + '...' 
                    : question.question}
                </span>
              </div>
            ))}
          </div>

          <button 
            className={styles.restartButton}
            onClick={handleRestart}
          >
            Làm lại
            <span className={styles.arrow}>🔄</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sequentialQuizContainer}>
      {/* Overall Progress */}
      <div className={styles.overallProgress}>
        <div className={styles.progressInfo}>
          <span className={styles.progressText}>
            Câu {currentQuestionIndex + 1} / {questions.length}
          </span>
          <span className={styles.pointsDisplay}>
            {totalPoints} XP
          </span>
        </div>
        <div className={styles.overallProgressBar}>
          <div 
            className={styles.overallProgressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current Question */}
      <MultipleChoice
        key={currentQuestionIndex} // Force re-mount when question changes
        question={currentQuestion.question}
        options={currentQuestion.options}
        correct={currentQuestion.correct}
        explanation={currentQuestion.explanation}
        points={currentQuestion.points || 10}
        streak={streak}
        enableSounds={enableSounds}
        enableHaptics={enableHaptics}
        onComplete={handleQuestionComplete}
      />
    </div>
  );
}