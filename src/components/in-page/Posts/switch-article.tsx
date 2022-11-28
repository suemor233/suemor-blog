import Link from 'next/link'
import type { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

import { useArticleLayoutProps } from '~/components/layouts/ArticleLayout/hooks'

export const SwitchArticle = () => {
  const { next, last } = useArticleLayoutProps()
  return (
    <section className="flex justify-between mt-3">
      {last ? (
        <SwitchButton href={last?._id}>
          <IoChevronBackOutline />
          <p>{last.title}</p>
        </SwitchButton>
      ) : (
        <span />
      )}
      {next ? (
        <SwitchButton href={next?._id} title={next?.title}>
          <p>{next?.title}</p>
          <IoChevronForwardOutline />
        </SwitchButton>
      ) : (
        <span />
      )}
    </section>
  )
}

interface switchbuttontype extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const SwitchButton: FC<PropsWithChildren<switchbuttontype>> = ({
  children,
  href,
  title,
}) => {
  return (
    <Link
      href={href || ''}
      className="text-xl text-blue-500 p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300 flex items-center"
    >
      {children}
    </Link>
  )
}
