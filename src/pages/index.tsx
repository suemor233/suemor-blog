import { observer } from 'mobx-react-lite'
import type { NextPage } from 'next'
import { useCallback } from 'react'

import { postPaginate } from '~/api/modules/posts'
import { SEO } from '~/components/biz/Seo'
import ArticleList from '~/components/in-page/Home/artcile-list'
import UserInfo from '~/components/in-page/Home/user-info'
import { useStore } from '~/store'
import type { PostsPaginateType } from '~/types/post'

import { PageLayout } from '../components/layouts/PageLayout/index'

const Home: NextPage<PostsPaginateType> = (posts) => {
  const { userStore } = useStore()
  const fetchPostList = useCallback(
    (page: number) =>
      postPaginate({
        pageCurrent: page,
        pageSize: 10,
      }),
    [],
  )
  return (
    <PageLayout>
      <SEO
        title={`${userStore.username}的博客`}
        description={userStore.master?.introduce}
      />
      <UserInfo />
      <ArticleList posts={posts} fetchPostList={fetchPostList} />
    </PageLayout>
  )
}

Home.getInitialProps = async () => {
  const posts = await postPaginate({ pageCurrent: 1, pageSize: 10 })
  return posts
}

export default observer(Home)
