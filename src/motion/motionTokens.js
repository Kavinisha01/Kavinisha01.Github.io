export const springs = {
  gentle: { type: 'spring', stiffness: 120, damping: 20 },
  snappy: { type: 'spring', stiffness: 280, damping: 28 },
  magnetic: { type: 'spring', stiffness: 350, damping: 25 },
  modal: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
};

export const easings = {
  smooth: [0.22, 1, 0.36, 1],
  easeOut: [0.16, 1, 0.3, 1],
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const cardHover = {
  rest: { y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  hover: { y: -4, transition: { duration: 0.25, ease: 'easeOut' } },
};

export const viewportConfig = {
  once: false,
  amount: 0.2,
};
