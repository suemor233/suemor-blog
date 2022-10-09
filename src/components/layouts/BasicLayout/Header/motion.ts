import type { Variants } from "framer-motion"

export const buttonAnimation: Variants = {
  whileHover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 17,
    },
  },
  whileTap: {
    scale: 1,
  },
}

export const hightlightMotion: Variants = {
  init: {
    scale: 1.0,
  },
  tap: {
    scale: 0.9,
  },
}

export const anchorMotion: Variants = {
  init: {
    scale: 1.0,
  },
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
}
