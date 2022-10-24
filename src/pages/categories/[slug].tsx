import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { IoBookmarkOutline } from 'react-icons/io5'

import { fetchPostByCategory } from '~/api/modules/posts'
import { SEO } from '~/components/biz/Seo'
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
       <SEO title={`分类: ${posts.postList[0].category.name}`}/>
      <div className="text-3xl flex justify-center items-center py-5">
        <IoBookmarkOutline className="mr-2" />
        <h1>
        分类: {posts.postList[0].category.name} ({posts.totalCount} 篇文章)
        </h1>
      </div>

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
