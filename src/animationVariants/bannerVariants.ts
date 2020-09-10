export const ease = [0.6, 0.05, -0.01, 0.9];

export const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    delayChildren: 0.5,
  },
};

export const nameVariant = {
  initial: {
    y: 70,
  },
  animate: {
    y: 0,
    transition: {
      ease: ease,
      duration: 0.6,
    },
  },
};

export const descriptionVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: ease,
      duration: 0.6,
    },
  },
};

export const buttonVariant = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: ease,
      duration: 0.6,
      delay: 2,
    },
  },
};

export const overlayVariant = {
  initial: {
    translateX: 0,
  },
  animate: {
    translateX: "100%",
    transition: {
      ease,
      delay: 0.6,
      duration: 0.8,
    },
  },
};

export const imageVariant = {
  initial: {
    scale: 1.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ease,
      delay: 0.8,
      duration: 0.8,
    },
  },
};
