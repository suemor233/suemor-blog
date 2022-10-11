import type { Variants } from "framer-motion"

export const titleAnimation: Variants = {
  whileHover: {
    scale: 1.03,
    transition: {
      type: 'spring',
      duration:0.1
    },
  },
  whileTap: {
    scale: 1,
  },
}

