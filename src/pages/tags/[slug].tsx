import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { IoPricetagsOutline } from 'react-icons/io5'

import { fetchPostByCTag } from '~/api/modules/posts'
import { SEO } from '~/components/biz/Seo'
import ArticleList from '~/components/in-page/Home/artcile-list'
import { PageLayout } from '~/components/layouts/PageLayout'
import type { PostsPaginateType } from '~/types/post'

const TagsView: NextPage<PostsPaginateType> = (posts) => {
  const router = useRouter()
  const fetchPostList = useCallback(
    (page: number) =>
      fetchPostByCTag(router.query.slug as string, {
        pageCurrent: page,
        pageSize: 10,
      }),
    [],
  )

  return (
    <PageLayout>
       <SEO title={`标签: ${router.query.slug}`}/>
      <div className="text-3xl flex justify-center items-center py-5">
        <IoPricetagsOutline className="mr-2" />
        <h1>
          标签: {router.query.slug} ({posts.totalCount} 篇文章)
        </h1>
      </div>

      <ArticleList
        posts={posts}
        fetchPostList={fetchPostList}
        path={`/tags/${router.query.slug}`}
      />
    </PageLayout>
  )
}

TagsView.getInitialProps = async ({ query }) => {
  const posts = await fetchPostByCTag(query.slug as string, {
    pageCurrent: 1,
    pageSize: 10,
  })
  return posts
}

export default TagsView
