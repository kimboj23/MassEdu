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
    <section
      className="slides-container"
      aria-label="Trình chiếu slide"
      aria-roledescription="carousel"
    >
      {/* Progress indicators */}
      <div className="slides-progress" role="tablist" aria-label="Chọn slide">
        {slides.map((_, index) => (
          <button
            key={index}
            role="tab"
            className={`progress-dot ${index === currentSlide ? 'active' : ''} ${index < currentSlide ? 'completed' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1} trên ${totalSlides}${index < currentSlide ? ', đã hoàn thành' : ''}${index === currentSlide ? ', đang hiển thị' : ''}`}
            aria-selected={index === currentSlide}
            tabIndex={index === currentSlide ? 0 : -1}
          >
            <span aria-hidden="true">{index < currentSlide ? '✓' : index + 1}</span>
          </button>
        ))}
      </div>

      {/* Slide content */}
      <div
        className="slides-content"
        role="tabpanel"
        aria-live="polite"
        aria-atomic="true"
        aria-label={`Slide ${currentSlide + 1} trên ${totalSlides}`}
      >
        <div
          className="slides-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ minWidth: '100%' }}
              aria-hidden={index !== currentSlide}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="slides-navigation" aria-label="Điều hướng slide">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-button prev"
          aria-label={`Slide trước${currentSlide === 0 ? ', không khả dụng' : ''}`}
        >
          <span aria-hidden="true">←</span> Trước
        </button>

        <span className="slide-counter" aria-live="polite" aria-atomic="true">
          <span className="sr-only">Đang xem slide </span>
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="nav-button next"
          aria-label={`Slide tiếp theo${currentSlide === totalSlides - 1 ? ', không khả dụng' : ''}`}
        >
          Tiếp theo <span aria-hidden="true">→</span>
        </button>
      </nav>
    </section>
  );
}

// Individual slide component
export function Slide({ title, children }) {
  return (
    <article className="slide-content">
      {title && <h2 className="slide-title" id={`slide-title-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h2>}
      <div className="slide-body">
        {children}
      </div>
    </article>
  );
}