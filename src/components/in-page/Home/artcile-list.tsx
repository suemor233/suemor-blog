import { m } from 'framer-motion'
import type { Variants } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useEffect, useMemo, useState } from 'react'

import { postPaginate } from '~/api/modules/posts'
import Pagination from '~/components/universal/Pagination'
import type { PostsPaginateType, postType } from '~/types/post'
import { parseDate } from '~/utils/time'

const ArticleList: FC<Record<'posts', PostsPaginateType>> = ({ posts }) => {
  const [postList, setPostList] = useState<PostsPaginateType>(posts)
  const router = useRouter()
  const updatePostList = async (page: number) => {
    const postListData = await postPaginate({
      pageCurrent: page,
      pageSize: 10,
    })
    postListData && setPostList(postListData)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    if (router.query.page) {
      updatePostList(Number(router.query.page))
    }
  }, [router.query])
  if (postList.postList.length <= 0) {
    return <div className="h-screen">主人还没写过博客</div>
  }
  return (
    <m.section className="flex flex-col gap-5 mt-4">
      {postList.postList?.map((item) => (
        <Item key={item._id} post={item} />
      ))}
      <div className="flex justify-center mt-5">
        {postList.totalPages > 1 &&
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useMemo(
            () => (
              <Pagination
                total={postList.totalPages}
                initialPage={Number(router.query.page) || 1}
                onChange={(page) => router.push(`/?page=${page}`)}
              />
            ),
            [postList.totalPages, router],
          )}
      </div>
    </m.section>
  )
}

export const backdropMotion: Variants = {
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
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    transition: { type: 'spring', stiffness: 300, damping: 17 },
  },
}

const Item: FC<Record<'post', postType>> = ({ post }) => {
  const { title, content, created, tags, category, _id } = post
  return (
    <m.article
      variants={backdropMotion}
      initial="exit"
      animate="enter"
      exit="exit"
      whileHover={'hover'}
      className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-md hover:bg-opacity-20 "
    >
      <NextLink href={`/posts/${_id}`}>
        <h2 className="text-2xl cursor-pointer inline-block duration-300 transition-all hover:text-blue-500">
          {title}
        </h2>
      </NextLink>

      <p className="text-gray-500 mt-2 dark:text-gray-400 line-clamp-3 text-lg ">
        {content}
      </p>
      <div className="mt-2 flex gap-2 text-blue-500 text-xl">
        <time>{parseDate(created, 'YYYY-MM-DD')}</time>
        <span>{category.name}</span>
        {tags.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </m.article>
  )
}

export default ArticleList
