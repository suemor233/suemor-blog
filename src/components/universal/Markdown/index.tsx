import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { useArticleLayoutProps } from '~/components/layouts/ArticleLayout/hooks'
const CodehightLight = dynamic(() => import('./code-hight-light'), {
  ssr: false,
})

const Markdown = () => {
  const { content } = useArticleLayoutProps()
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className="markdown-body"
      components={{
        code({inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <CodehightLight match={match} props={props}>
              {children}
            </CodehightLight>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default Markdown
