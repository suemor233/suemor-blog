import { m } from 'framer-motion'
import type { FC, PropsWithChildren} from 'react';
import { useMemo } from 'react'
import { IoTimeSharp } from 'react-icons/io5'
import { backdropMotion } from '~/components/in-page/Home/artcile-list'

import { Avatar } from '~/components/universal/Avatar'
import { useStore } from '~/store'
import type { postType } from '~/types/post'
import { parseDate } from '~/utils/time'

import { ArticleLayoutContextProvider, useArticleLayoutProps } from './hooks'

interface IProps extends PropsWithChildren {
  post: postType
}

const ArticleLayout: FC<IProps> = ({ children, post }) => {
  return (
    <ArticleLayoutContextProvider value={post}>
      <m.main
        className="max-w-[48rem] mx-auto my-0 border-gray-200 border-1 rounded-2xl p-8 dark:border-gray-600"
        variants={backdropMotion}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <ArticleTitle />
        <div className="mt-5">{children}</div>
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
