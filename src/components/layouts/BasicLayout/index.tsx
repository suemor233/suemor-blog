import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'

import { useCheckOldBrowser } from '~/hooks/use-check-old-browser'
import { store } from '~/store'
import { printToConsole } from '~/utils/console'

import Footer from './Footer'
import Header from './Header'
import styles from './index.module.css'

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
      <div className="theme-container h-screen">
        <Header />
        {children}
        <Footer />
      </div>
      <div className={styles.background} />
    </ThemeProvider>
  )
}

export default BasicLayout
