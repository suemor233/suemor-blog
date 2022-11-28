import type { Variants } from 'framer-motion'
import { m } from 'framer-motion'
import MarkdownNavbar from 'markdown-navbar'
import { observer } from 'mobx-react-lite'
import type { FC, PropsWithChildren } from 'react'
import { useEffect, useMemo } from 'react'
import { IoTimeOutline } from 'react-icons/io5'

import { Avatar } from '~/components/universal/Avatar'
import { Comments } from '~/components/universal/comments'
import { useStore } from '~/store'
import type { categoryType, switchType } from '~/types/post'
import { parseDate } from '~/utils/time'

import { ArticleLayoutContextProvider, useArticleLayoutProps } from './hooks'

const NAVBAR_MIDDLE = 250

export interface ArticleLayoutType {
  title: string
  content: string
  created: string
  tags?: string[]
  category?: categoryType
  Comment?: FC
  SwitchArticle?: FC
  last?: switchType
  next?: switchType
}

const ArticleMotion: Variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

const ArticleLayout: FC<ArticleLayoutType & PropsWithChildren> = observer(
  ({
    children,
    title,
    content,
    created,
    Comment,
    category,
    tags,
    SwitchArticle,
    last,
    next,
  }) => {
    const { appStore } = useStore()
    const onScroll = () => {
      const activeItem = document.querySelector('.active') as HTMLElement
      if (activeItem) {
        const offsetTop = activeItem.offsetTop
        const navbar = document.querySelector(
          '.markdown-navigation ',
        ) as Element
        if (offsetTop > NAVBAR_MIDDLE) {
          navbar.scrollTop = offsetTop - NAVBAR_MIDDLE
        } else {
          navbar.scrollTop = 0
        }
      }
    }
    useEffect(() => {
      window.addEventListener('scroll', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [])
    return (
      <ArticleLayoutContextProvider
        value={{ title, content, created, category, tags, last, next }}
      >
        <div className="max-w-[48rem] mx-auto my-0">
          <m.main
            className="card-border px-8 py-4 relative"
            variants={ArticleMotion}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <ArticleTitle />
            <div className="mt-5">{children}</div>
            {!appStore.viewport.mobile && (
              <div className="fixed top-[40%] ml-[-20rem] w-[15rem] whitespace-nowrap tablet:hidden">
                <MarkdownNavbar
                  source={content}
                  declarative={true}
                  ordered={false}
                />
              </div>
            )}
          </m.main>

          {SwitchArticle && <SwitchArticle />}
          <div className="mt-5">
            <Comments term={title} />
          </div>
        </div>
      </ArticleLayoutContextProvider>
    )
  },
)

const ArticleTitle = () => {
  const { title, created, content } = useArticleLayoutProps()
  const { userStore } = useStore()
  return (
    <header className="flex flex-col items-center gap-3">
      <Avatar
        shadow={false}
        imageUrl={userStore.master?.avatar || ''}
        useRandomColor={false}
        size={85}
        lazy={false}
      />

      <h1 className="text-4xl font-ui phone:text-2xl">{title}</h1>
      <div className="flex text-lg text-gray-500 item-center gap-5">
        <time className="">{parseDate(created, 'YYYY-MM-DD dddd')}</time>
        <div className="flex items-center gap-1">
          <IoTimeOutline className="mt-0.5" />
          <p>{useMemo(() => Math.round(content.length / 400), [])}m</p>
        </div>
      </div>
    </header>
  )
}

export default ArticleLayout
