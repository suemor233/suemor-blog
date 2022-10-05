import { createContext, useContext } from 'react'

import type { postType } from '~/types/post'

const ArticleLayoutContext = createContext<postType>({} as postType)
export const ArticleLayoutContextProvider = ArticleLayoutContext.Provider
export const useArticleLayoutProps = () => useContext(ArticleLayoutContext)
