import { LazyMotion, domMax } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import dynamic from 'next/dynamic'
import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'

import { useCheckOldBrowser } from '~/hooks/use-check-old-browser'
import { store } from '~/store'
import { printToConsole } from '~/utils/console'

import Footer from './Footer'
import Header from './Header'

const PageProgressBar = dynamic(
  () => import('~/components/layouts/BasicLayout/PageProgressBar'),
  { ssr: false },
)
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
      <LazyMotion strict features={domMax}>
        <PageProgressBar />
        <main className="theme-container flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </LazyMotion>
      <div className={'bg-pic'} />
    </ThemeProvider>
  )
}

export default BasicLayout
