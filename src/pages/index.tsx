import { observer } from 'mobx-react-lite'
import type { NextPage } from 'next'

import { postPaginate } from '~/api/modules/posts'
import { SEO } from '~/components/biz/Seo'
import ArticleList from '~/components/in-page/Home/artcile-list'
import UserInfo from '~/components/in-page/Home/user-info'
import { useStore } from '~/store'
import type { PostsPaginateType } from '~/types/post'

const Home: NextPage<PostsPaginateType> = (posts) => {
  const { userStore } = useStore()
  return (
    <div className="flex flex-col items-center">
      <SEO
        title={`${userStore.username}的博客`}
        description={userStore.master?.introduce}
      />
      <div className="w-[52rem] w900:max-w-[45rem] w900:w-auto mt-5 px-5">
        <UserInfo />
        <ArticleList posts={posts} />
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const posts = await postPaginate({ pageCurrent: 1, pageSize: 10 })
 

  return posts
}

export default observer(Home)
