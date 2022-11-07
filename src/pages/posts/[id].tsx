import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { fetchPostById } from '~/api/modules/posts'
import { Seo } from '~/components/biz/Seo'
import ArticleLayout from '~/components/layouts/ArticleLayout'
import Markdown from '~/components/universal/Markdown'
import type { postType } from '~/types/post'

const ArticleFooterActionLazy = dynamic(() =>
  import('~/components/in-page/Posts/article-footer').then(
    (mo) => mo.ArticleFooterAction,
  ),
)

const SwitchArticleLazy = dynamic(() =>
  import('~/components/in-page/Posts/switch-article').then(
    (mo) => mo.SwitchArticle,
  ),
)

const CommentLazy = dynamic(() =>
  import('~/components/in-page/Posts/comment').then((mo) => mo.Comment),
)

const PostView: NextPage<postType> = (posts) => {
  const {
    post: { title, created, category, tags },
    last,
    next,
    post,
  } = posts
  return (
    <>
      <Seo
        title={title}
        description={category.name}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: created,
            section: category.name,
            tags: tags ?? [],
          },
        }}
      />
      <ArticleLayout
        {...post}
        last={last}
        next={next}
        Comment={() => <CommentLazy />}
        SwitchArticle={() => <SwitchArticleLazy />}
      >
        <Markdown />
        <ArticleFooterActionLazy />
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
