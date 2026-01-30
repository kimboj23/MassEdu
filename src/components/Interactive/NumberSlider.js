import React, { useState, useRef, useEffect } from 'react';
import Icon from '@site/src/components/Icon';
import styles from './interactive.module.css';

function formatNum(num) {
  return new Intl.NumberFormat('vi-VN').format(Math.round(num));
}

export default function NumberSlider({
  value: controlledValue,
  defaultValue,
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
  ariaLabel = null,
}) {
  // Determine if controlled or uncontrolled
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue ?? controlledValue ?? 0);
  const value = isControlled ? controlledValue : internalValue;

  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dragStartX = useRef(0);
  const dragStartValue = useRef(value);
  const containerRef = useRef(null);
  const handleDragMoveRef = useRef(null);
  const handleDragEndRef = useRef(null);

  // Store handler params in refs so they're always current
  const paramsRef = useRef({ min, max, step });
  paramsRef.current = { min, max, step };

  // Store callback ref that gets updated
  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;

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

  // Update drag handlers on every render to capture latest closures
  useEffect(() => {
    handleDragMoveRef.current = (e) => {
      e.preventDefault();
      const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const deltaX = currentX - dragStartX.current;

      // Reduced sensitivity: 8 pixels per step (was 2) for slower, more controlled changes
      const { min, max, step } = paramsRef.current;
      const pixelsPerStep = 8;
      const deltaValue = Math.round(deltaX / pixelsPerStep) * step;
      const newValue = Math.max(min, Math.min(max, dragStartValue.current + deltaValue));

      setInternalValue(newValue);
      if (onValueChangeRef.current) onValueChangeRef.current(newValue);
    };

    handleDragEndRef.current = () => {
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  });

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
      const handleMove = handleDragMoveRef.current;
      const handleEnd = handleDragEndRef.current;

      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove, { passive: false });
      window.addEventListener('touchend', handleEnd);

      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging]);

  const defaultAriaLabel = `Giá trị: ${formatNum(value)} ${unit}. Sử dụng phím mũi tên để điều chỉnh`;

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
        aria-valuetext={`${formatNum(value)} ${unit}`}
        aria-label={ariaLabel || defaultAriaLabel}
      >
        <span className={styles.sliderValue} aria-hidden="true">
          {formatNum(value)}
        </span>
        <span className={styles.sliderUnit} aria-hidden="true">{unit}</span>

        {(isHovering || isDragging) && (
          <span className={styles.sliderHandle} aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
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

/**
 * NumberSliderWithCalculation - Slider with live VAT calculation
 */
export function NumberSliderWithCalculation({
  defaultValue = 25000,
  min = 15000,
  max = 50000,
  step = 5000,
  unit = 'đồng',
  vatRate = 10,
  calculationLabel = 'Thuế VAT',
  showExplanation = false,
}) {
  const [value, setValue] = useState(defaultValue);

  const taxAmount = Math.round(value / (1 + 100 / vatRate));

  return (
    <div className={styles.numberSliderContainer}>
      <NumberSlider
        value={value}
        onValueChange={setValue}
        min={min}
        max={max}
        step={step}
        unit={unit}
      />
      <div className={styles.calculationDisplay}>
        <div className={styles.calculationLabel}>{calculationLabel} ({vatRate}%):</div>
        <div className={styles.calculationValue}>
          {new Intl.NumberFormat('vi-VN').format(taxAmount)} {unit}
        </div>
      </div>
      {showExplanation && (
        <div className={styles.sliderExplanation}>
          <p>
            <strong>Giải thích:</strong> Khi bạn mua một món hàng giá{' '}
            <strong>{formatNum(value)} {unit}</strong>, bạn đang đóng khoảng{' '}
            <strong>{formatNum(taxAmount)} {unit} thuế VAT</strong> (thuế giá trị gia tăng).
            Con số này <strong>ẩn</strong> trong giá bán - bạn không thấy nó trên tờ tiền,
            nhưng nó đã được tính vào rồi!
          </p>
        </div>
      )}
      <div className={styles.sliderHint}>
        <Icon name="lightbulb" decorative size="small" /> Di chuột vào số để kéo thay đổi giá trị.
      </div>
    </div>
  );
}
