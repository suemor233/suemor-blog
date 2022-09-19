import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
import { useEffect } from 'react'
import type { IconType } from 'react-icons'
import { IoAlbums, IoHome, IoPeopleSharp, IoPersonSharp } from 'react-icons/io5'

import { Avatar } from '~/components/universal/Avatar'

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

const Header = () => {
  const { appStore } = useStore()
  useEffect(() => {
    console.log(appStore.viewport)
  }, [])
  return (
    <header className="flex p-3 justify-between">
      <motion.section whileHover={{ scale: 1.1, type: 'spring' }}>
        <NextLink
          href={'/'}
          className="flex items-center transition-all duration-500 p-2 cursor-pointer rounded-md hover:bg-blue-50"
        >
          <Avatar
            shadow={false}
            imageUrl={'https://y.suemor.com/images89030875.jpeg' || ''}
            useRandomColor={false}
            size={35}
            lazy={false}
          />
          <span className="ml-3 text-blue-500 text-lg select-none phone:hidden">suemor</span>
        </NextLink>
      </motion.section>

      <nav className="flex items-center gap-3 phone:gap-0">
        {navigation.map(({ path, Icon, label }, index) => (
          <motion.section
            key={path}
            whileHover={{ scale: 1.1, type: 'spring' }}
          >
            <NextLink
              href={path}
              className="text-lg transition-all items-center duration-500 rounded-md text-blue-400 px-3  hover:text-blue-600"
            >
              <Icon
                size={appStore.viewport.mobile ? 23 : 15}
                className="mr-2"
              />
              <span className="phone:hidden">{label}</span>
            </NextLink>
          </motion.section>
        ))}
      </nav>
    </header>
  )
}

export default observer(Header)
