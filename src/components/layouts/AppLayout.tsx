import { AnimatePresence } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { NextSeo } from 'next-seo'
import type { FC, PropsWithChildren } from 'react'

import { useStore } from '../../store/index'

export const Content: FC<PropsWithChildren> = observer(({ children }) => {
  const { userStore } = useStore()
  return (
    <>
      <NextSeo
        title={`${userStore.username}的博客`}
        description={userStore.master?.introduce}
      />
      <AnimatePresence>{children}</AnimatePresence>
    </>
  )
})
