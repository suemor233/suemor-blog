import { Variants } from 'framer-motion'
import { m } from 'framer-motion'
import NextLink from 'next/link'
import { FC, useEffect, useState } from 'react'

import { postPaginate } from '~/api/modules/posts'
import Pagination from '~/components/universal/Pagination'
import type { PostsPaginateType, postType } from '~/types/post'
import { parseDate } from '~/utils/time'

const ArticleList: FC<Record<'posts', PostsPaginateType>> = ({ posts }) => {
  const [postList, setPostList] = useState<PostsPaginateType>(posts)
  const updatePostList = async (page: number) => {
    const postListData = await postPaginate({ pageCurrent: page, pageSize: 10 })
    postListData && setPostList(postListData)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  if (!postList) {
    return <div className="h-screen">loading...</div>
  }
  return (
    <m.section className="flex flex-col gap-5 mt-4">
      {postList.postList?.map((item) => (
        <Item key={item._id} post={item} />
      ))}
      <div className="flex justify-center mt-5">
        <Pagination
          total={postList.totalPages}
          initialPage={1}
          onChange={(page) => updatePostList(page)}
        />
      </div>
    </m.section>
  )
}

const backdropMotion: Variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    transition: { type: 'spring', stiffness: 300, damping: 17 },
  },
}

const Item: FC<Record<'post', postType>> = ({ post }) => {
  const { title, content, created, tags, category, _id } = post
  return (
    <NextLink href={`/posts/${_id}`}>
      <m.article
        variants={backdropMotion}
        initial="exit"
        animate="enter"
        exit="exit"
        whileHover={'hover'}
        className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-md hover:bg-opacity-20"
      >
        <h2 className="text-xl cursor-pointer hover:text-blue-500 inline-block duration-300 transition-all">
          {title}
        </h2>

        <p className="text-gray-700 mt-2 dark:text-gray-400 line-clamp-3">
          {content}
        </p>
        <div className="mt-2 flex gap-2 text-blue-500">
          <time>{parseDate(created, 'YYYY-MM-DD dddd')}</time>
          <span>{category.name}</span>
          {tags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </m.article>
    </NextLink>
  )
}

export default ArticleList
