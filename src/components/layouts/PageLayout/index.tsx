import type { FC, PropsWithChildren } from 'react';
export const PageLayout:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex flex-col items-center">
    <div className="w-[52rem] w900:max-w-[45rem] w900:w-auto mt-6 px-5">
      {children}
    </div>
  </div>
  )

}
