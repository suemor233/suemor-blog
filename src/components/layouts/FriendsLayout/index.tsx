import { m } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

import { backdropMotion } from '~/components/in-page/Home/artcile-list'

const FriendsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-10">
      <m.main
        variants={backdropMotion}
        initial="exit"
        animate="enter"
        exit="exit"
        className="max-w-[43rem] mx-auto my-0"
      >
        <h1 className="text-4xl font-ui text-center">我的朋友</h1>
        <div className='mt-10 phone:p-2'>{children}</div>
      </m.main>
    </div>
  )
}

export default FriendsLayout
