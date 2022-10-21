import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { getPageBySlug } from '~/api/modules/page'
import ArticleLayout from '~/components/layouts/ArticleLayout'
import Markdown from '~/components/universal/Markdown'

import type { PagePostType } from '../../api/modules/page'
import { SEO } from '../../components/biz/Seo/index'
const CommentLazy = dynamic(() =>
  import('~/components/in-page/Posts/comment').then((mo) => mo.Comment),
)

const AboutView: NextPage<Record<'data', PagePostType>> = (about) => {

  if (!about.data) {
    return <div className='flex justify-center'>
      <h1 className='text-4xl'>请先创建页面</h1>
        
    </div>
  }
  const { content, title, created } = about.data
  return (
    <>
      <SEO
        title={title}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: created,
          },
        }}
      />
      <ArticleLayout content={content} title={title} created={created}  Comment={() => <CommentLazy />}>
        <Markdown />
      </ArticleLayout>
    </>
  )
}

AboutView.getInitialProps = async () => {
  const about = await getPageBySlug('about')
  return {
    data:about
  }
}

export default AboutView
