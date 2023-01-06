import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import { ArticleLayoutContextProvider } from '~/components/layouts/ArticleLayout/hooks'

import Markdown from '..'
// @ts-ignore
import md from './test-text.md?raw'

describe('Markdown', () => {
  it('markdown render', () => {
    const markdown = render(
      <ArticleLayoutContextProvider value={{ content: md }}>
        <Markdown />
      </ArticleLayoutContextProvider>,
    )

    expect(markdown.container).matchSnapshot()
  })
})
