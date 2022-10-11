import clsx from 'clsx'
import NextLink from 'next/link'
import { FC, PropsWithChildren, useContext, useMemo } from 'react'

import { useArchiveLayoutProps } from '~/components/layouts/ArchiveLayout/hooks'
import { parseDate } from '~/utils/time'

import styles from './index.module.css'

const Archives = () => {
  const { posts } = useArchiveLayoutProps()
  return (
    <div className="relative flex flex-col">
      {posts.map((item, index) => {
        return (
          <article key={item._id} className={clsx(styles['post-item'])}>
            {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              useMemo(() => {
                const currentYear = parseDate(item.created, 'YYYY')
                if (index === 0) {
                  return <BigCircle first={true}>{currentYear}</BigCircle>
                }
                const lastYear = parseDate(posts[index - 1].created, 'YYYY')
                return currentYear !== lastYear ? (
                  <BigCircle>{currentYear}</BigCircle>
                ) : undefined
              }, [])
            }
            <header
              className={clsx(
                styles[
                  index !== posts.length - 1 ? 'post-header' : 'post-last'
                ],
                `flex gap-2 items-center ml-5 py-2`,
              )}
            >
              <p> {parseDate(item.created, 'MM-DD')}</p>
              <NextLink href={`/posts/${item._id}`}>
                <p className="text-blue-600 text-xl hover:outline-blue-600">{item.title}</p>
              </NextLink>
              <div className="flex text-gray-600 text-sm gap-1">
                <p className="">{item.category.name}</p>
                <p>/</p>
                <div className='flex gap-1'>
                {item.tags.map((tag,index) => (
                  <p key={tag}>{tag}{index !== item.tags.length -1 &&','}</p>
                ))}
                </div>
        
              </div>
            </header>
          </article>
        )
      })}
    </div>
  )
}

const BigCircle: FC<{ first?: boolean } & PropsWithChildren> = ({
  children,
  first,
}) => {
  return (
    <p
      className={clsx(
        `text-blue-600 text-3xl ml-8 ${first ? '' : 'py-3'} flex items-center`,
        styles['big-circle'],
      )}
    >
      {children}
    </p>
  )
}

export default Archives
