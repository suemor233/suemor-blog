import type { FC, PropsWithChildren } from 'react'
import { createContext, memo, useMemo } from 'react'

import type { UserModel } from '~/store/user'

import { useStore } from '../store/index'

export const InitialContext = createContext({} as UserModel)

export const InitialContextProvider: FC<{ value: UserModel } & PropsWithChildren> = memo(
  (props) => {
    const { userStore } = useStore()
    userStore.setUser(props.value)
    return (
      <InitialContext.Provider
        value={useMemo(() => props.value, [props.value])}
      >
        {props.children}
      </InitialContext.Provider>
    )
  },
)
