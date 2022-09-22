import { LazyMotion, domMax } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'

import { useCheckOldBrowser } from '~/hooks/use-check-old-browser'
import { store } from '~/store'
import { printToConsole } from '~/utils/console'

import Footer from './Footer'
import Header from './Header'
import PageProgressBar from './PageProgressBar'
import ToolBar from './ToolBar/ToolBar'

const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
  const { check: checkBrowser } = useCheckOldBrowser()
  useEffect(() => {
    checkBrowser()
    printToConsole()
    store.appUIStore.updateViewport()
    window.onresize = () => {
      store.appUIStore.updateViewport()
    }
  }, [])

  return (
    <ThemeProvider attribute="class">
      <PageProgressBar />
      <LazyMotion strict features={domMax}>
        <div className="theme-container flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
        <ToolBar />
      </LazyMotion>
      <div className={'bg-pic'} />
    </ThemeProvider>
  )
}

export default BasicLayout
