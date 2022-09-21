import React from 'react'
import { m } from 'framer-motion'
import ColorMode from './ColorMode'

function ToolBar() {
  return (
    <React.Fragment>
      <m.div
        initial={{ x: '200%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 9, duration: 0.3 }}
        className='fixed bottom-10 right-5 z-layout flex flex-col'
      >
        <ColorMode />
      </m.div>
    </React.Fragment>
  )
}

export default ToolBar
