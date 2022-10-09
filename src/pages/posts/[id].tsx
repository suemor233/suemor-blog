import type { NextPage } from 'next'

import { fetchPostById } from '~/api/modules/posts'
import { Seo } from '~/components/biz/Seo'
import ArticleLayout from '~/components/layouts/ArticleLayout'
import Markdown from '~/components/universal/Markdown'
import type { postType } from '~/types/post'

const PostView: NextPage<postType> = (Post) => {
  const {content,title,created,category,tags} = Post;

  return (
    <>
      <Seo
        title={title}
        description={category.name}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: created,
            section:category.name,
            tags: tags ?? [],
          },
        }}
      />
      <ArticleLayout content={content} title={title} created={created}>
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
