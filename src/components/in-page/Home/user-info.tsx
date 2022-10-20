import { observer } from 'mobx-react-lite'

import { Avatar } from '~/components/universal/Avatar'

import { useStore } from '../../../store/index'

const UserInfo = () => {
  const { userStore } = useStore()
  return (
    <figure className="flex items-center flex-col">
      <Avatar
        shadow={false}
        imageUrl={userStore.master?.avatar || ''}
        useRandomColor={false}
        size={90}
        lazy={false}
        alt={'suemor avatar'}
        className=""
      />

      <p className="text-5xl font-ui">{userStore.username}</p>
      <p className="text-md mt-1 line-clamp-1 overflow-ellipsis overflow-hidden text-gray-500">
        {userStore.introduce}
      </p>
    </figure>
  )
}

export default observer(UserInfo)
