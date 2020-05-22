/**
  * Throttle limits the number of `fn()` executions until `time` has elapsed.
  *
  */
function throttle(fn, time) {
    let timeoutId;

    return function() {
      // Check for existing calls
      if (timeoutId) {
        // If timer is already running, exit
        return;
      }

      timeoutId = setTimeout(() => {
        // Invoke fn
        fn.apply(this, arguments);
        // Clear timeout to unblock next call
        timeoutId = null;

      }, time);
    }

  }
