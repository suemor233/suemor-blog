import 'windi.css'
import 'assets/styles/main.css'

import type { AppProps } from 'next/app'
import type { FC, PropsWithChildren } from 'react'
import { memo, useMemo } from 'react'

import { Content } from '~/components/layouts/AppLayout'
import BasicLayout from '~/components/layouts/BasicLayout'
import { RootStoreProvider } from '~/context/root-store'

const App = ({ Component, pageProps }: AppProps) => {
  const Inner = useMemo(() => {
    return (
      <RootStoreProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </RootStoreProvider>
    )
  }, [Component, pageProps])
  return Inner
}

const Wrapper: FC<PropsWithChildren> = memo((props) => {
  return (
    <BasicLayout>
      <Content>{props.children}</Content>
    </BasicLayout>
  )
})

export default App
