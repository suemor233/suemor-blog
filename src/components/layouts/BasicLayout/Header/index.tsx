import { Variants, m } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
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

const buttonAnimation: Variants = {
  whileHover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 17,
    },
  },
  whileTap: {
    scale: 0.8,
  },
}

const Header = () => {
  const { appStore } = useStore()
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
      <nav className="flex items-center flex-row gap-3 phone:gap-0">
        {navigation.map(({ path, Icon, label }, index) => (
          <m.section
            key={path}
            whileHover="whileHover"
            whileTap="whileTap"
            animate="animate"
            variants={buttonAnimation}
          >
            <NextLink
              href={path}
              className="text-lg transition-all items-center duration-500 rounded-md text-blue-500 px-3  hover:text-blue-600 flex"
            >
              <Icon
                size={appStore.viewport.mobile ? 23 : 15}
                className="mr-2"
              />
              <span className="phone:hidden">{label}</span>
            </NextLink>
          </m.section>
        ))}
      </nav>
    </header>
  )
}

export default observer(Header)
