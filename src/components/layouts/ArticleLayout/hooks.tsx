import { createContext, useContext } from 'react'
import { ArticleLayoutType } from '.'

const ArticleLayoutContext = createContext<ArticleLayoutType>({} as ArticleLayoutType)
export const ArticleLayoutContextProvider = (ArticleLayoutContext).Provider
export const useArticleLayoutProps = () => useContext(ArticleLayoutContext)
