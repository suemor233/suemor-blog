import { Head, Html, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="zh-cn">
      <Head>
        <meta charSet="UTF-8" />
        <link rel='preload' as='font' href={'/fonts/FZMiaoWu_GB18030.woff2'} type='font/woff2' crossOrigin="anonymous"/>
      </Head>
      
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
