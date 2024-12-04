export const heroCenterAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut', delay: 0.75 },
};

export const headshotAnimation = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1 },
};

export const logoAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 0.6, opacity: 0.1 },
  transition: { duration: 1.2 },
};

export const statsAnimation = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};
