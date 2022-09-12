import 'windi.css'
import 'assets/styles/main.css'
import type { AppProps } from 'next/app'
import type { FC, PropsWithChildren } from 'react'
import { memo, useMemo } from 'react'
import { Content } from '~/components/layouts/AppLayout'
import BasicLayout from '~/components/layouts/BasicLayout'

const App = ({ Component, pageProps }: AppProps) => {
  const Inner = useMemo(() => {
    return (
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
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
