import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { fetchPostById } from '~/api/modules/posts'
import ArticleLayout from '~/components/layouts/ArticleLayout'
import Markdown from '~/components/universal/Markdown'
import type { postType } from '~/types/post'

const PostView: NextPage<postType> = (props) => {
  const router = useRouter()
  return (
    <>
    <ArticleLayout post={props}>
      <Markdown />
    </ArticleLayout>
    </>
  )
}

PostView.getInitialProps = async (ctx) => {
  const { query } = ctx
  const post = await fetchPostById(query.id as string)
  return post
}

export default PostView
