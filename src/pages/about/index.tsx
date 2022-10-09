import type { NextPage } from 'next';
import { getPageBySlug } from '~/api/modules/page';
import ArticleLayout from '~/components/layouts/ArticleLayout';
import Markdown from '~/components/universal/Markdown';
import { SEO } from '../../components/biz/Seo/index';
import type { PagePostType } from '../../api/modules/page';

const AboutView:NextPage<PagePostType> = (about) => {
  const {content,title,created} = about;
  return (
    <>
    <SEO title='关于'/>
    <ArticleLayout content={content} title={title} created={created}>
        <Markdown />
    </ArticleLayout>
    </>
  )
}

AboutView.getInitialProps = async () => {
  const about = await getPageBySlug('about')
  return about
}

export default AboutView