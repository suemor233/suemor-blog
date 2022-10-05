import React from 'react'
import { m, useScroll, useSpring } from 'framer-motion'

function PageProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <m.div
      className='pointer-events-none fixed inset-0 z-top h-[3px] origin-left bg-blue-300 bg-opacity-80 z-50'
      style={{ scaleX }}
    />
  )
}

export default PageProgressBar
