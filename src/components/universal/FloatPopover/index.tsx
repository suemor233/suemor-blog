import clsx from 'clsx'
import { intercept } from 'mobx'
import { FC, PropsWithChildren } from 'react'

import { Content } from '../../layouts/AppLayout'

interface IProps {
  content?: string
  className?: string
}

// TODO FloatPopover
export const FloatPopover: FC<IProps & PropsWithChildren> = (props) => {
  const { content, className, children } = props
  return (
    <a className={clsx(className,'')}>
        {content}
    </a>
    // <div className='flex flex-col'>
    //   <a className="">{children}</a>
    //   <span className='w-full bg-white rounded-md shadow-xl absolute'></span>
    // </div>
  )
}
