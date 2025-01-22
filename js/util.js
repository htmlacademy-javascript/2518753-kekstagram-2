export const CLASS_NAME_HIDDEN = 'hidden';

export const hasKeyEscape = (event) => event.key === 'Escape';
export function debounce(callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
