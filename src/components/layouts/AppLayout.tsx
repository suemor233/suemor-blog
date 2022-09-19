import { AnimatePresence } from 'framer-motion'
import { NextSeo } from 'next-seo'
import type { FC, PropsWithChildren } from 'react'

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextSeo
        title={`suemor blog`}
        description={'所谓自由就是可以说二加二等于四的自由'}
      />
      <AnimatePresence>{children}</AnimatePresence>
    </>
  )
}
