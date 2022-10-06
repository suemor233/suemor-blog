import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { fetchPostById } from '~/api/modules/posts'
import { Seo } from '~/components/biz/Seo'
import ArticleLayout from '~/components/layouts/ArticleLayout'
import Markdown from '~/components/universal/Markdown'
import type { postType } from '~/types/post'

const PostView: NextPage<postType> = (props) => {
  const router = useRouter()
  console.log(props.title);
  return (
    <>
      <Seo
        title={props.title}
        description={props.category.name}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: props.created,
            section: props.category.name,
            tags: props.tags ?? [],
          },
        }}
      />
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
