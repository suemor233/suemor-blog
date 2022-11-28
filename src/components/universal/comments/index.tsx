import type { FC } from 'react'

import Giscus from '@giscus/react'

export const Comments: FC<{ term: string }> = ({ term }) => {
  return (
    <Giscus
      repo="suemor233/suemor-blog"
      repoId="R_kgDOH-7YVw"
      category="Announcements"
      categoryId="DIC_kwDOH-7YV84CSzM-"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
