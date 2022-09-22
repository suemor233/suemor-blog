import 'windi.css'
import 'assets/styles/main.css'
import NextApp from 'next/app'
import type { FC, PropsWithChildren } from 'react'
import { memo, useMemo } from 'react'
import { aggregateInfo } from '~/api/modules/aggregate'
import { NoDataErrorView } from '~/components/app/Error/no-data'
import { Content } from '~/components/layouts/AppLayout'
import BasicLayout from '~/components/layouts/BasicLayout'
import { InitialContextProvider } from '~/context/initial-data'
import { RootStoreProvider } from '~/context/root-store'
import type { UserModel } from '~/store/user'

export interface DataModel {
  initData: UserModel
}

const App: FC<DataModel & { Component: any; pageProps: any; err: any }> = (
  props,
) => {
  const { initData, Component, pageProps } = props
  const Inner = useMemo(() => {
    return initData ? (
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    ) : (
      <NoDataErrorView />
    )
  }, [Component, pageProps])
  return (
    <RootStoreProvider>
      <InitialContextProvider value={initData}>{Inner}</InitialContextProvider>
    </RootStoreProvider>
  )
}

const Wrapper: FC<PropsWithChildren> = memo((props) => {
  return (
    <BasicLayout>
      <Content>{props.children}</Content>
    </BasicLayout>
  )
})

// @ts-ignore
App.getInitialProps = async (props: AppContext) => {
  const initialData = await aggregateInfo()
  const appProps = await (async () => {
    return await NextApp.getInitialProps(props)
  })()
  return {
    ...appProps,
    initData: initialData,
  }
}

export default App
