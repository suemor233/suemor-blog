import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { IoBookmarkOutline } from 'react-icons/io5'

import { fetchPostByCategory } from '~/api/modules/posts'
import ArticleList from '~/components/in-page/Home/artcile-list'
import { PageLayout } from '~/components/layouts/PageLayout'
import type { PostsPaginateType } from '~/types/post'

const CategoryView: NextPage<PostsPaginateType> = (posts) => {
  const router = useRouter()
  const fetchPostList = useCallback(
    (page: number) =>
      fetchPostByCategory(router.query.slug as string, {
        pageCurrent: page,
        pageSize: 10,
      }),
    [],
  )

  return (
    <PageLayout>
      <h1 className="text-3xl  text-center">
      <IoBookmarkOutline className='mr-1'/>
        分类: {posts.postList[0].category.name} ({posts.totalCount} 篇文章)
      </h1>
      <ArticleList
        posts={posts}
        fetchPostList={fetchPostList}
        path={`/categories/${router.query.slug}`}
      />
    </PageLayout>
  )
}

CategoryView.getInitialProps = async ({ query }) => {
  const posts = await fetchPostByCategory(query.slug as string, {
    pageCurrent: 1,
    pageSize: 10,
  })
  return posts
}

export default CategoryView
