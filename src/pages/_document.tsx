import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="zh-cn">
      <Head>
        <meta charSet="UTF-8" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Noto+Sans+TC&family=Noto+Sans+SC&display=swap"
        />

        {/* Custom Fonts */}
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/CattieRegular-EaBG8.woff2"
          type="font/woff2"
          as="font"
        />
        <link
          rel="preload"
          crossOrigin="anonymous"
          href="/fonts/FZMiaoWu_GB18030.woff2"
          type="font/woff2"
          as="font"
        />
      </Head>
      <body className=" font-content antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
