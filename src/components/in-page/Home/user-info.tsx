import { observer } from 'mobx-react-lite'
import { Avatar } from '~/components/universal/Avatar'
import { useStore } from '../../../store/index';

const UserInfo = () => {
  const {userStore} = useStore()
  return (
    <figure>
      <div className='flex justify-center'>
        <Avatar
          shadow={false}
          imageUrl={userStore.master?.avatar || ''}
          useRandomColor={false}
          size={85}
          lazy={false}
        />
      </div>
      <p className="text-5xl font-ui">{userStore.username}</p>
    </figure>
  )
}

export default observer( UserInfo)
