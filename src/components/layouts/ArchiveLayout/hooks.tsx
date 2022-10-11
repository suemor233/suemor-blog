import { createContext, useContext } from 'react'
import { AllArchiveType } from '~/api/modules/archive'

const ArchiveLayoutContext = createContext<AllArchiveType>({} as AllArchiveType)
export const ArchiveLayoutContextProvider = (ArchiveLayoutContext).Provider
export const useArchiveLayoutProps = () => useContext(ArchiveLayoutContext)
