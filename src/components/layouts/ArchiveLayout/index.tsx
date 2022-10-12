import { m } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

import type { AllArchiveType } from '~/api/modules/archive'
import { backdropMotion } from '~/components/in-page/Home/artcile-list'

import { ArchiveLayoutContextProvider } from './hooks'

const ArchiveLayout: FC<
  Record<'archives', AllArchiveType> & PropsWithChildren
> = ({ children, archives }) => {
  return (
    <ArchiveLayoutContextProvider value={archives}>
      <div className="mt-10 ml-25 phone:ml-3">
        <m.main
          variants={backdropMotion}
          initial="exit"
          animate="enter"
          exit="exit"
          className="max-w-[45rem] mx-auto my-0"
        >
          <h1 className="text-4xl font-ui text-center">归档</h1>
          <h2 className="text-xl  text-center mt-8">
            总共 {archives.count} 篇文章
          </h2>
          <div className="mt-5 phone:p-2">{children}</div>
        </m.main>
      </div>
    </ArchiveLayoutContextProvider>
  )
}

export default ArchiveLayout
