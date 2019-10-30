function debounce(fn, time) {
    let timeoutId;

    return function() {

      // Check for existing calls
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        // Invoke fn
        fn.apply(this, arguments);
        // Clear timeout
        timeoutId = null;

      }, time);
    }

  }
