import { AnimatePresence } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'


export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
      <AnimatePresence>{children}</AnimatePresence>
  )
}
