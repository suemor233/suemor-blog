import clsx from 'clsx'
import { m } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { IconType } from 'react-icons'
import {
  IoAlbums,
  IoChevronForwardOutline,
  IoCloudyNightOutline,
  IoHome,
  IoMenuOutline,
  IoPartlySunnyOutline,
  IoPeopleSharp,
  IoPersonSharp,
} from 'react-icons/io5'

import { useColorMode } from '~/hooks/use-color-mode'

import { useStore } from '../../../../store/index'
import { anchorMotion, buttonAnimation } from './motion'

type NavItem = {
  label: string
  path: string
  Icon: IconType
  left: string
}

export const navigation: NavItem[] = [
  {
    label: '首页',
    path: '/',
    Icon: IoHome,
    left: 'left-[50px]',
  },
  {
    label: '归档',
    path: '/archives',
    Icon: IoAlbums,
    left: 'left-[100px]',
  },
  {
    label: '关于',
    path: '/about',
    Icon: IoPersonSharp,
    left: 'left-[150px]',
  },
  {
    label: '朋友',
    path: '/friends',
    Icon: IoPeopleSharp,
    left: 'left-[200px]',
  },
]

const Header = () => {
  const { appStore } = useStore()
  return appStore.viewport.mobile ? <MobileNav /> : <DesktopNav />
}

const DesktopNav = () => {
  const { appStore } = useStore()
  const router = useRouter()
  const groupRef = useRef<HTMLAnchorElement>(null)
  const [ballOffsetLeft, setBallOffsetLeft] = useState(0)
  const ballIndex = useMemo(
    () => navigation.findIndex((item) => item.path == router.pathname),
    [router.pathname],
  )
  useEffect(() => {
    if (!groupRef.current || typeof ballIndex === 'undefined') {
      return
    }
    const $group = groupRef.current
    const $child = $group.children.item(ballIndex) as HTMLElement
    if ($child) {
      console.log($child.offsetLeft + $child.getBoundingClientRect().width / 2)

      setBallOffsetLeft(
        $child.offsetLeft ,
      )
    }
  }, [ballIndex])
  return (
    <m.header className="flex p-3 justify-between shadow-md w-full fixed bg-white z-10 items-center">
      <DarkMode />
      <m.nav className="flex items-center flex-row gap-5 phone:gap-0 relative"           ref={groupRef}>
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
        <m.span
          className={clsx(
            `absolute inset-0 h-full w-[85px] rounded-lg bg-blue-100 -z-1 transition-all duration-500 left-0`,
          )}
          style={{ left: `${ballOffsetLeft}px` }}
        />
      </m.nav>
    </m.header>
  )
}

const MobileNav = () => {
  const ul = useRef<HTMLUListElement>(null)
  const [show, setShow] = useState(false)
  return (
    <header
      className={clsx(
        'flex flex-col pt-3 fixed w-full z-1 gap-3 bg-[#FDFDFD]'
      )}
    >
      <div className="flex justify-between px-5">
        <div className="flex flex-col">
          <IoMenuOutline size={27} onClick={() => setShow(!show)} />
        </div>
        <DarkMode />
      </div>

      <ul
        className={clsx(
          'w-full bg-white h-max-0 overflow-hidden transition-all duration-500 px-5 dark:bg-[#121212] ',
          show && 'h-max-[12rem] shadow-md',
        )}
        ref={ul}
      >
        {navigation.map((item) => (
          <NextLink
            key={item.path}
            className="flex justify-between items-center group text-gray-500"
            href={item.path}
            onClick={() => setShow(false)}
          >
            <div className="flex items-center gap-2 group-hover:text-blue-500">
              <item.Icon size={15} />
              <li className="flex items-center py-3">{item.label}</li>
            </div>
            <IoChevronForwardOutline className="group-hover:text-blue-500 " />
          </NextLink>
        ))}
      </ul>
    </header>
  )
}
const DarkMode = () => {
  const { isDark, toggleColorMode } = useColorMode()
  return (
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
  )
}

export default observer(Header)
