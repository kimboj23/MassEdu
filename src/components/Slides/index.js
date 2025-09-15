import React, { useState } from 'react';
import './slides.css';

export default function Slides({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = React.Children.toArray(children);
  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slides-container">
      {/* Progress indicators */}
      <div className="slides-progress">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`progress-dot ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Đi đến slide ${index + 1}`}
          >
            {index < currentSlide ? '✓' : index + 1}
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div className="slides-content">
        <div
          className="slides-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide" style={{ minWidth: '100%' }}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="slides-navigation">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-button prev"
          aria-label="Slide trước"
        >
          ← Trước
        </button>

        <span className="slide-counter">
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="nav-button next"
          aria-label="Slide tiếp theo"
        >
          Tiếp theo →
        </button>
      </div>
    </div>
  );
}

// Individual slide component
export function Slide({ title, children }) {
  return (
    <div className="slide-content">
      {title && <h2 className="slide-title">{title}</h2>}
      <div className="slide-body">
        {children}
      </div>
    </div>
  );
}