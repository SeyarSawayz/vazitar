// Animation.js
export const fadeInUp = (delay) => ({
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, delay: delay } },
});

export const fadeInDown = (delay) => ({
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 0, y: -100, transition: { duration: 1, delay: delay } },
});

export const slideRight = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: delay } },
});

export const slideUp = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: delay } },
});
