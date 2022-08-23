export const debounceRaf = fn => {
  let raf = 0;

  return (...arg) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      fn(...arg);
      raf = 0;
    });
  };
};
