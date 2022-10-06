import merge from 'lodash-es/merge'
import { observer } from 'mobx-react-lite'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'
import type { OpenGraph } from 'next-seo/lib/types'
import type { FC } from 'react'

import { useStore } from '../../../store'

type SEOProps = {
  title: string
  description?: string
  openGraph?: { type?: 'website' | 'article' } & OpenGraph
} & NextSeoProps

export const SEO: FC<SEOProps> = observer((props) => {
  const { title, description, openGraph, ...rest } = props
  const { userStore } = useStore()

  const Title = `${title}`

  return (
    <NextSeo
      {...{
        title,
        titleTemplate:title,
        openGraph: merge(
          {
            profile: {
              username: userStore.username,
            },
            type: 'article',
            locale: 'zh-cn',
            site_name: userStore.introduce || '',
            description: description || userStore.introduce || '',
            article: {
              authors: [userStore.username as string],
            },
            title: Title,
          } as OpenGraph,
          openGraph,
        ),
        description: description || userStore.introduce || '',
        ...rest,
      }}
    />
  )
})

export const Seo = SEO
