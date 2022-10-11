import clsx from 'clsx'
import { m } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
import type { FC, PropsWithChildren } from 'react'
import { useMemo } from 'react'

import { useArchiveLayoutProps } from '~/components/layouts/ArchiveLayout/hooks'
import { buttonAnimation } from '~/components/layouts/BasicLayout/Header/motion'
import { useStore } from '~/store'
import { isServerSide } from '~/utils/env'
import { parseDate } from '~/utils/time'
import { titleAnimation } from './motion'

const Archives = observer(() => {
  const { posts } = useArchiveLayoutProps()
  const { appStore } = useStore()
  const isMobile = isServerSide() || window.innerWidth <= 568
  return (
    <div className="relative flex flex-col gap-3">
      <div className="h-[97%] absolute w-0.5 bg-blue-300 -z-1 mt-5" />
      {posts.map((item, index) => {
        return (
          <article key={item._id}>
            {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useMemo(() => {
                const currentYear = parseDate(item.created, 'YYYY')
                if (index === 0) {
                  return <BigCircle>{currentYear}</BigCircle>
                }
                const lastYear = parseDate(posts[index - 1].created, 'YYYY')
                return currentYear !== lastYear ? (
                  <BigCircle>{currentYear}</BigCircle>
                ) : undefined
              }, [])
            }
            <header className={clsx(`flex gap-2 items-center -ml-1`)}>
              <span className="w-2.5 h-2.5 rounded-full border-blue-500 border-1 bg-[#FDFDFD]" />
              <p
                className="ml-3 flex-shrink-0"
              >
              
                {parseDate(item.created, 'MM-DD')}
              </p>
              <NextLink href={`/posts/${item._id}`}>
                <m.p className="text-blue-600 dark:text-blue-500 text-xl hover:underline transition-all"
                      whileHover="whileHover"
                      whileTap="whileTap"
                      variants={titleAnimation}
                >
                  {item.title}
                </m.p>
              </NextLink>

              <div className="flex text-gray-600 text-sm gap-1">
                <p className="flex-shrink-0">{item.category.name}</p>
                {!appStore.viewport.mobile && (
                  <>
                    <p>/</p>
                    <div className="flex gap-1">
                      {item.tags.map((tag, index) => (
                        <p key={tag}>
                          {tag}
                          {index !== item.tags.length - 1 && ','}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </header>
          </article>
        )
      })}
    </div>
  )
})

const BigCircle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-center -ml-2.1 py-3">
      <span className="w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500" />
      <p
        className={clsx(
          `text-blue-600 dark:text-blue-500 text-3xl ml-5 flex items-center`,
        )}
      >
        {children}
      </p>
    </div>
  )
}

export default Archives
