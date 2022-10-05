import { m } from 'framer-motion'
import MarkdownNavbar from 'markdown-navbar'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useMemo } from 'react'
import { IoTimeSharp } from 'react-icons/io5'

import { backdropMotion } from '~/components/in-page/Home/artcile-list'
import { Avatar } from '~/components/universal/Avatar'
import { useStore } from '~/store'
import type { postType } from '~/types/post'
import { parseDate } from '~/utils/time'
import { ArticleLayoutContextProvider, useArticleLayoutProps } from './hooks'
import 'markdown-navbar/dist/navbar.css'

interface IProps extends PropsWithChildren {
  post: postType
}

const ArticleLayout: FC<IProps> = ({ children, post }) => {
  const NAVBAR_MIDDLE = 250

  const onScroll = () => {
    const activeItem = document.querySelector('.active') as any
    if (activeItem) {
      const offsetTop = activeItem.offsetTop
      const navbar = document.querySelector('.markdown-navigation ') as Element
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
      <ArticleLayoutContextProvider value={post}>
        <m.main
          className="max-w-[48rem] mx-auto my-0 border-gray-200 border-1 rounded-2xl p-8 dark:border-gray-600 bg-white dark-bg relative"
          variants={backdropMotion}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <ArticleTitle />
          <div className="mt-5">{children}</div>
          <div className="fixed top-[40%] ml-[-20rem] w-[15rem] whitespace-nowrap ">
            <MarkdownNavbar source={post.content} declarative={true} ordered={false}/>
          </div>
        </m.main>
      </ArticleLayoutContextProvider>
  )
}

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

      <h1 className="text-4xl font-ui ">{title}</h1>
      <div className="flex text-lg text-gray-500 item-center gap-5">
        <time className="">{parseDate(created, 'YYYY-MM-DD dddd')}</time>
        <div className="flex items-center">
          <p>{useMemo(() => Math.round(content.length / 400), [])} min red</p>
          <IoTimeSharp className="mt-0.5 ml-1" />
        </div>
      </div>
    </header>
  )
}

export default ArticleLayout
