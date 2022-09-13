import NextLink from 'next/link'

import { Avatar } from '~/components/universal/Avatar'

type NavItem = {
  label: string
  path: string
}

export const navigation: NavItem[] = [
  {
    label: '首页',
    path: '/',
  },
  {
    label: '归档',
    path: '/archives',
  },
  {
    label: '关于',
    path: '/about',
  },
  {
    label: '朋友',
    path: '/friends',
  },
]

const Header = () => {
  return (
    <header className="flex p-3 justify-between">
      <NextLink href={'/'} className="flex items-center transition-all duration-500 p-2 cursor-pointer rounded-md hover:bg-blue-50 ">
          <Avatar
            shadow={false}
            imageUrl={'https://y.suemor.com/images89030875.jpeg' || ''}
            useRandomColor={false}
            size={35}
            lazy={false}
          />
          <span className="ml-3 text-blue-500 text-lg select-none">
            suemor
          </span>
      </NextLink>
      <nav className="flex items-center gap-3">
        {navigation.map((item, index) => (
          <NextLink
            href={item.path}
            key={item.path}
            className="text-lg transition-all items-center duration-500 rounded-md text-blue-500 px-3 py-2 hover:text-blue-500 hover:bg-blue-50"
          >
            <span>{item.label}</span>
          </NextLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
