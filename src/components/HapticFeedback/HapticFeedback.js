import { useEffect } from 'react';
import { isHapticsSupported, hapticLight, hapticMedium, hapticStrong } from '@site/src/utils/haptics';

/**
 * HapticFeedback Component
 * Automatically adds haptic feedback to interactive elements across the site
 * Works only on touch-enabled devices
 */
export default function HapticFeedback() {
  useEffect(() => {
    // Only run on touch-enabled devices
    if (!isHapticsSupported() || !('ontouchstart' in window)) {
      return;
    }

    /**
     * Add haptic feedback to interactive elements
     */
    const addHapticsToElements = () => {
      // Light haptics for links and subtle interactions
      const lightElements = document.querySelectorAll('a, .navbar__link, .menu__link');
      lightElements.forEach(element => {
        element.addEventListener('touchstart', hapticLight, { passive: true });
      });

      // Medium haptics for buttons and cards
      const mediumElements = document.querySelectorAll(
        'button, .button, .card, [role="button"], input[type="submit"], input[type="button"]'
      );
      mediumElements.forEach(element => {
        element.addEventListener('touchstart', hapticMedium, { passive: true });
      });

      // Strong haptics for primary actions
      const strongElements = document.querySelectorAll(
        '.button--primary, .storyCenterAction button, .progressButton'
      );
      strongElements.forEach(element => {
        element.addEventListener('touchstart', hapticStrong, { passive: true });
      });

      // Haptics for logo
      const logo = document.querySelector('.navbar__logo');
      if (logo) {
        logo.addEventListener('touchstart', hapticMedium, { passive: true });
      }

      // Haptics for sliders (interactive components)
      const sliders = document.querySelectorAll('input[type="range"], .slider');
      sliders.forEach(slider => {
        slider.addEventListener('touchstart', hapticLight, { passive: true });
        slider.addEventListener('change', hapticLight, { passive: true });
      });

      // Haptics for choice buttons in story
      const choiceButtons = document.querySelectorAll('.choiceButton, .storyChoice');
      choiceButtons.forEach(button => {
        button.addEventListener('touchstart', hapticMedium, { passive: true });
      });
    };

    // Initial setup
    addHapticsToElements();

    // Re-apply haptics when route changes (for SPA navigation)
    const observer = new MutationObserver(() => {
      addHapticsToElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // This component doesn't render anything
  return null;
}
