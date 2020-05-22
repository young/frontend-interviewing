/**
 * Debounce invokes `fn()` once `time` has elapsed. The timer is reset if any debounce calls take place
 * before time has elapsed.
 */
function debounce(fn, time) {
    let timeoutId;

    return function() {
      // Check for existing calls
      if (timeoutId) {
        // Reset timer
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        // Invoke fn
        fn.apply(this, arguments);
      }, time);
    }

  }
