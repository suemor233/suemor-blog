import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren} from 'react';
import { useEffect } from 'react'
import styles from './index.module.css';
import Footer from './Footer'
import Header from './Header'
import { useCheckOldBrowser } from '~/hooks/use-check-old-browser';
import { printToConsole } from '~/utils/console';
const BasicLayout: FC<PropsWithChildren> = ({ children }) => {

  const { check: checkBrowser } = useCheckOldBrowser()

  useEffect(()=>{
    checkBrowser()
    printToConsole()
  },[])
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
