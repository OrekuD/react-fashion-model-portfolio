export const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
    },
  },
};

export const contentVariant = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

export const ease = [0.6, 0.05, -0.01, 0.9];

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
    x: 0,
  },
  animate: {
    x: "50vw",
    transition: {
      ease,
      delay: 0.7,
      duration: 0.9,
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
      delay: 0.9,
      duration: 0.9,
    },
  },
};
