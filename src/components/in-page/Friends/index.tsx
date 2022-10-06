import { AnimatePresence, Variants, m } from 'framer-motion'
import { FC } from 'react'

import { Avatar } from '~/components/universal/Avatar'

import { FriendsType } from '../../../api/modules/friends'

const containerVariants: Variants = {
  exit: {
    y: '100%',
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

const Friends: FC<Record<'friends', FriendsType[]>> = ({ friends }) => {
  return (
    <div className="grid grid-cols-2 phone:grid-cols-1 gap-5">
      <AnimatePresence initial mode="wait">
        {friends.length ? (
          friends.map((item) => (
            <m.a
              key={item._id}
              variants={containerVariants}
              initial="exit"
              exit="exit"
              whileInView={'enter'}
              whileHover={'hover'}
              href={item.url}
              target="_blank"
              className="flex hover:bg-blue-100 dark:hover:bg-gray-700 rounded-xl transition-colors p-2 cursor-pointer hover:bg-opacity-80  dark:hover:bg-opacity-100"
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
      </AnimatePresence>
    </div>
  )
}

export default Friends
