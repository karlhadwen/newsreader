export const debounce = (func, wait, immediate, args) => {
  let timeout;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
