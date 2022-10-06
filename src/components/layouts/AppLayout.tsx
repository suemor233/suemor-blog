import { AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import type { FC, PropsWithChildren } from 'react'


export const Content: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <>
      <AnimatePresence>{children}</AnimatePresence>
    </>
  )
})
