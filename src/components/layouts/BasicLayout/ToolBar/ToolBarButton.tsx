import React from 'react'
import { m } from 'framer-motion'
import clsx from 'clsx'

type Props = {
  title: string
  onClick: () => void
  className?: string
  children: React.ReactNode
}

function ToolBarButton({ title, onClick, className, children }: Props) {
  return (
    <m.button
      type='button'
      title={title}
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
      className={clsx(
        'theme-container m-1 inline-block rounded-lg p-1 dark:bg-opacity-70',
        className
      )}
    >
      {children}
    </m.button>
  )
}

export default ToolBarButton
