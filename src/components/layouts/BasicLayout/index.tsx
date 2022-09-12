import { ThemeProvider } from 'next-themes'
import type { FC, PropsWithChildren } from 'react'

import Footer from './Footer'
import Header from './Header'

const BasicLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <div className="theme-container h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default BasicLayout
