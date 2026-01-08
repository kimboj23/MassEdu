/**
 * Haptic Feedback Utility
 * Provides tactile feedback for touch interactions on mobile devices
 * Uses the Vibration API with fallback for unsupported devices
 */

/**
 * Check if haptic feedback is supported
 */
export function isHapticsSupported() {
  return 'vibrate' in navigator || 'mozVibrate' in navigator || 'webkitVibrate' in navigator;
}

/**
 * Trigger light haptic feedback (for taps, hover)
 */
export function hapticLight() {
  if (!isHapticsSupported()) return;

  try {
    navigator.vibrate(10); // Very short vibration
  } catch (error) {
    // Silently fail if vibration is blocked
    console.debug('Haptic feedback not available:', error);
  }
}

/**
 * Trigger medium haptic feedback (for button presses)
 */
export function hapticMedium() {
  if (!isHapticsSupported()) return;

  try {
    navigator.vibrate(20);
  } catch (error) {
    console.debug('Haptic feedback not available:', error);
  }
}

/**
 * Trigger strong haptic feedback (for important actions, errors)
 */
export function hapticStrong() {
  if (!isHapticsSupported()) return;

  try {
    navigator.vibrate([30, 10, 30]); // Pattern: vibrate-pause-vibrate
  } catch (error) {
    console.debug('Haptic feedback not available:', error);
  }
}

/**
 * Trigger success haptic pattern
 */
export function hapticSuccess() {
  if (!isHapticsSupported()) return;

  try {
    navigator.vibrate([10, 10, 10]); // Quick double tap
  } catch (error) {
    console.debug('Haptic feedback not available:', error);
  }
}

/**
 * Add haptic feedback to an element
 * @param {HTMLElement} element - The element to add haptics to
 * @param {string} intensity - 'light', 'medium', or 'strong'
 */
export function addHapticFeedback(element, intensity = 'medium') {
  if (!element || !isHapticsSupported()) return;

  const hapticFunction = {
    light: hapticLight,
    medium: hapticMedium,
    strong: hapticStrong,
    success: hapticSuccess,
  }[intensity] || hapticMedium;

  // Add touch event listeners
  element.addEventListener('touchstart', hapticFunction, { passive: true });
}

/**
 * Add haptic feedback to multiple elements by selector
 * @param {string} selector - CSS selector for elements
 * @param {string} intensity - 'light', 'medium', or 'strong'
 */
export function addHapticsToSelector(selector, intensity = 'medium') {
  if (!isHapticsSupported()) return;

  const elements = document.querySelectorAll(selector);
  elements.forEach(element => addHapticFeedback(element, intensity));
}
