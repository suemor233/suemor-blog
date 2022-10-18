import React from 'react'
import { m } from 'framer-motion'
import { FcUp } from 'react-icons/fc'

function ScrollToTop() {
  return (
    <button title='Scroll to top' onClick={() => window.scrollTo({ top: 0 })}>
      <m.i>
        <FcUp className='inline text-4xl' />
      </m.i>
    </button>
  )
}

export default ScrollToTop
