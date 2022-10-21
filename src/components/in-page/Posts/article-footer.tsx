import { FC, PropsWithChildren } from 'react'
import { IoBookmarkOutline, IoCalendarOutline } from 'react-icons/io5'

import { useArticleLayoutProps } from '~/components/layouts/ArticleLayout/hooks'
import { Divider } from '~/components/universal/Divider'
import { EntypoCreativeCommons } from '~/components/universal/Icons/post'
import { parseDate } from '~/utils/time'

export const ArticleFooterAction = () => {
  const article = useArticleLayoutProps()

  return (
    <footer className="mt-6 flex flex-col text-sm text-gray-500 gap-3 items-center">
      <Divider className='w-full'/>
      <div>
        本文采用
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          创作共用保留署名-非商业-禁止演绎4.0国际许可证
        </a>
      </div>
      <div className="flex  gap-3">
        <IconWrapper>
          <IoCalendarOutline />
          <time>{parseDate(article.created, 'YYYY-MM-DD')}</time>
        </IconWrapper>

        <IconWrapper>
          <IoBookmarkOutline />
          <span>{`${article.category?.name}[ ${article.tags?.map(
            (item) => item,
          )} ]`}</span>
        </IconWrapper>

        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          target={'_blank'}
          className="inline-flex items-center text-current cursor-pointer mt-0.5"
        >
          <span
            title={'创作共用保留署名-非商业-禁止演绎4.0国际许可证'}
            className="inline-flex items-center"
          >
            <EntypoCreativeCommons />
          </span>
        </a>
      </div>
    </footer>
  )
}

const IconWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex gap-1 items-center">{children}</div>
}
