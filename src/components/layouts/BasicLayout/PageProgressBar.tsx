import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

function PageProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className='pointer-events-none fixed inset-0 z-top h-[3px] origin-left bg-blue-300 bg-opacity-80'
      style={{ scaleX }}
    />
  )
}

export default PageProgressBar
