import { m } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  IoAlbums,
  IoCloudyNightOutline,
  IoHome,
  IoPartlySunnyOutline,
  IoPeopleSharp,
  IoPersonSharp,
} from 'react-icons/io5'

import { useColorMode } from '~/hooks/use-color-mode'

import { useStore } from '../../../../store/index'
import {
  anchorMotion,
  buttonAnimation,
  hightlightMotion
} from './motion'

type NavItem = {
  label: string
  path: string
  Icon: IconType
}

export const navigation: NavItem[] = [
  {
    label: '首页',
    path: '/',
    Icon: IoHome,
  },
  {
    label: '归档',
    path: '/archives',
    Icon: IoAlbums,
  },
  {
    label: '关于',
    path: '/about',
    Icon: IoPersonSharp,
  },
  {
    label: '朋友',
    path: '/friends',
    Icon: IoPeopleSharp,
  },
]

const Header = () => {
  const { appStore } = useStore()
  const router = useRouter()
  const [currentPath, setCurrentPath] = useState('')
  useEffect(() => {
    setCurrentPath(router.pathname)
  }, [router])
  const { isDark, toggleColorMode } = useColorMode()
  return (
    <header className="flex p-3 justify-between">
      <m.div
        className="cursor-pointer"
        whileHover="whileHover"
        whileTap="whileTap"
        variants={buttonAnimation}
        onClick={() => toggleColorMode()}
      >
        {isDark ? (
          <IoCloudyNightOutline size={20} />
        ) : (
          <IoPartlySunnyOutline size={20} />
        )}
      </m.div>
      <nav
        className="flex items-center flex-row gap-5 phone:gap-0"
        onMouseLeave={() => setCurrentPath(router.pathname)}
      >
        {navigation.map(({ path, Icon, label }, index) => (
          <m.section
            key={path}
            initial="init"
            whileHover="hover"
            whileTap="tap"
          >
            <NextLink
              href={path}
              className="text-lg transition-all items-center duration-500 rounded-md text-blue-500 px-4 py-2 flex relative"
            >
              {currentPath === path && (
                <m.span
                  style={{ translateY: 0 }}
                  className="absolute inset-0 h-full w-full rounded-lg bg-blue-100 -z-1"
                  variants={hightlightMotion}
                  transition={{ type: 'spring', mass: 0.2 }}
                  layoutId="nav-magic"
                />
              )}
              <m.i variants={anchorMotion}>
                <Icon
                  size={appStore.viewport.mobile ? 26 : 15}
                  className="mr-2"
                />
              </m.i>

              <m.span variants={anchorMotion} className="phone:hidden text-xl">
                {label}
              </m.span>
            </NextLink>
          </m.section>
        ))}
      </nav>
    </header>
  )
}

export default observer(Header)
