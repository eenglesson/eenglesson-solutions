export const desktopVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    filter: 'blur(12px)',
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      opacity: {
        type: 'spring',
        bounce: 0,
        duration: 1.5,
        delay: custom * 0.1,
      },
      y: {
        type: 'spring',
        bounce: 0,
        duration: 1.5,
        delay: custom * 0.1,
      },
      filter: {
        type: 'spring',
        bounce: 0,
        duration: 1.5,
        delay: custom * 0.1,
      },
    },
  }),
};
