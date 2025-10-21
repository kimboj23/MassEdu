import React, { useState, useRef, useEffect } from 'react';
import styles from './interactive.module.css';

function formatNum(num) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(num));
}

export default function NumberSlider({
  value: controlledValue,
  onValueChange,
  min = 0,
  max = 1000000,
  step = 1000,
  unit = 'đồng',
  onChange,
  concept,
  calculation,
  calculationLabel = 'Thuế VAT',
  showCalculation = true,
  className = '',
}) {
  const [internalValue, setInternalValue] = useState(controlledValue ?? 0);
  const value = controlledValue ?? internalValue;

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dragStartX = useRef(0);
  const dragStartValue = useRef(value);
  const containerRef = useRef(null);

  const handleValueChange = (newValue) => {
    setInternalValue(newValue);
    if (onValueChange) onValueChange(newValue);
  };

  // Handle drag start
  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    dragStartValue.current = value;
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
  };

  // Handle drag move
  const handleDragMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const deltaX = currentX - dragStartX.current;

    // Sensitivity: 1 pixel = step amount
    const deltaValue = Math.round(deltaX / 2) * step;
    const newValue = Math.max(min, Math.min(max, dragStartValue.current + deltaValue));

    handleValueChange(newValue);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  };

  // Keyboard controls
  const handleKeyDown = (e) => {
    let newValue = value;

    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        newValue = Math.min(max, value + step);
        break;
      case 'ArrowDown':
      case 'ArrowLeft':
        newValue = Math.max(min, value - step);
        break;
      case 'PageUp':
        newValue = Math.min(max, value + step * 10);
        break;
      case 'PageDown':
        newValue = Math.max(min, value - step * 10);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        return;
    }

    e.preventDefault();
    handleValueChange(newValue);
  };

  // Add/remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);

      return () => {
        window.removeEventListener('mousemove', handleDragMove);
        window.removeEventListener('mouseup', handleDragEnd);
        window.removeEventListener('touchmove', handleDragMove);
        window.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [isDragging, value]);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className={`${styles.numberSlider} ${isHovering || isDragging ? styles.active : ''}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => !isDragging && setIsHovering(false)}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label={`Giá trị: ${formatNum(value)} ${unit}`}
      >
        <span className={styles.sliderValue}>
          {formatNum(value)}
        </span>
        <span className={styles.sliderUnit}>{unit}</span>

        {(isHovering || isDragging) && (
          <span className={styles.sliderHandle}>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M7 10 L13 10 M10 7 L10 13" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </span>
        )}
      </div>

    </div>
  );
}

/**
 * NumberSliderGroup - For comparing multiple values
 */
export function NumberSliderGroup({ children, title, description }) {
  return (
    <div className={styles.numberSliderGroup}>
      {title && <h4 className={styles.groupTitle}>{title}</h4>}
      {description && <p className={styles.groupDescription}>{description}</p>}
      <div className={styles.groupSliders}>
        {children}
      </div>
    </div>
  );
}
