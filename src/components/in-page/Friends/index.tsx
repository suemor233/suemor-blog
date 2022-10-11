import type { Variants} from 'framer-motion';
import { m } from 'framer-motion'
import { FC, memo, useState, useEffect } from 'react';

import { Avatar } from '~/components/universal/Avatar'

import type { FriendsType } from '../../../api/modules/friends'
import InputArea from '../../universal/Input/input-area'
import { useStore } from '../../../store/index';
import { observer } from 'mobx-react-lite';
import { isServerSide, isClientSide } from '~/utils/env';
import { FloatPopover } from '~/components/universal/FloatPopover';

const containerVariants: Variants = {
  exit: {
    y: '20%',
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.2,
    },
  },
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300, damping: 17 },
  },
}
const isMobile =isServerSide() ||  window.innerWidth <= 568
const Friends: FC<Record<'friends', FriendsType[]>> = memo(({ friends }) => {
  const {userStore} = useStore()
  const [url,setUrl] = useState('')
  useEffect(()=>{
    setUrl(window.location.host)
  },[])
  return (
    <m.div
      className="grid grid-cols-2 phone:grid-cols-1 gap-5 p-2"
      variants={ isMobile ? undefined : containerVariants}
      initial="exit"
      exit="exit"
      whileInView={'enter'}
    >
      {friends.length ? (
        friends.map((item) => (
          <m.a
            key={item._id}
            variants={containerVariants}
            whileHover={'hover'}
            href={item.url}
            target="_blank"
            className="flex hover:bg-blue-100 dark:hover:bg-gray-700 rounded-xl transition-colors cursor-pointer hover:bg-opacity-80 dark:hover:bg-opacity-100 p-2"
          >
            <div>
              <Avatar imageUrl={item.avatar} lazy={false} />
            </div>
            <div className="ml-2 flex flex-col justify-center">
              <p className="text-xl text-blue-500">{item.name}</p>
              <p className="text-sm text-deepgray line-clamp-2 break-all">
                {item.description}
              </p>
            </div>
          </m.a>
        ))
      ) : (
        <h1 className="mx-auto my-0 text-xl font-ui text-center">
          呜呜呜，博主好像还没有朋友诶 🙃
        </h1>
      )}
      <div className='col-span-2 phone:col-span-1 flex flex-col gap-4 mt-10'>
        <h1 className='font-ui text-xl border-l-blue-500 border-l-3 pl-2'>友链申请</h1>
        <InputArea />
      </div>

      <div className='col-span-2 phone:col-span-1 flex flex-col gap-4 mt-10'>
        <h1 className='font-ui text-xl border-l-blue-500 border-l-3 pl-2'>本站信息</h1>
        <div className='flex flex-col gap-2'>
          <div className='flex'>
            <p className='  font-semibold font-ui'>站点标题:&nbsp;</p>
            <p >{userStore.username}的博客</p>
          </div>
          <div className='flex'>
            <p className='font-semibold font-ui'>站点描述:&nbsp;</p>
            <p >{userStore.master?.introduce}</p>
          </div>
          <div className='flex'>
            <p className=' font-semibold font-ui'>博主头像:&nbsp;</p>
            <a href={userStore.master?.avatar} target='_blank' className='text-blue-600'>{userStore.master?.avatar}</a>
          </div>
          <div className='flex'>
            <p className=' font-semibold font-ui'>网站地址:&nbsp;</p>
            <a href={userStore.master?.avatar} target='_blank' className='text-blue-600'>https://{url}</a>
          </div>
        </div>
      </div>
    </m.div>
  )
})

export default Friends
