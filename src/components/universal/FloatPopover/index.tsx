import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

interface FloatPopoverProps {
  TriggerComponent?: FC
}

export const FloatPopover: FC<FloatPopoverProps & PropsWithChildren> = (props) => {
  const { TriggerComponent, children } = props
  return (
    <div className="relative group">
      {children}
      <div
        className={clsx(
          'absolute pointer-events-none opacity-0 transform -translate-y-4 top-8',
          'bg-white px-2 py-1 rounded-md group-hover:pointer-events-auto group-hover:opacity-100 ',
          'shadow-md transition-all duration-400 group-hover:translate-y-0 flex whitespace-nowrap',
          'justify-center text-gray-600 dark:bg-black dark:text-white',
        )}
      >
        {TriggerComponent && <TriggerComponent />}
      </div>
    </div>
  )
}
