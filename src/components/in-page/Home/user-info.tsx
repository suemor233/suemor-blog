import { Avatar } from '~/components/universal/Avatar'

const UserInfo = () => {
  return (
    <figure>
      <div className='flex justify-center'>
        <Avatar
          shadow={false}
          imageUrl={'https://y.suemor.com/images89030875.jpeg' || ''}
          useRandomColor={false}
          size={85}
          lazy={false}
        />
      </div>
      <p className="text-5xl font-ui">suemor</p>
    </figure>
  )
}

export default UserInfo
