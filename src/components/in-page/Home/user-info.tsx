import { m } from 'framer-motion'
import { observer } from 'mobx-react-lite'

import { Avatar } from '~/components/universal/Avatar'

import { socialIcon } from '../../../constants/social-icon'
import { useStore } from '../../../store/index'
import { titleAnimation } from '../Archives/motion'

const UserInfo = () => {
  const { userStore } = useStore()
  return (
    <figure className="flex justify-center gap-5">
      <Avatar
        shadow={false}
        imageUrl={userStore.master?.avatar || ''}
        useRandomColor={false}
        size={90}
        lazy={false}
        alt={'suemor avatar'}
      />
      <div className="flex flex-col justify-center items-start">
        <p className="text-3xl phone:text-xl">{userStore.username}</p>
        <p className="text-md mt-1 line-clamp-1 overflow-ellipsis overflow-hidden">{userStore.introduce}</p>
        <div className="flex gap-5 justify-center text-blue-400 mt-2 text-2xl">
          {Object.keys(userStore.master?.socialIds || {}).map((key) => (
            <m.a
              key={key}
              whileHover="whileHover"
              whileTap="whileTap"
              variants={titleAnimation}
              target="_blank"
              href={userStore.master?.socialIds?.[key]}
              aria-label={key}
            >
              {socialIcon(key)}
            </m.a>
          ))}
        </div>
      </div>
    </figure>
  )
}

export default observer(UserInfo)
