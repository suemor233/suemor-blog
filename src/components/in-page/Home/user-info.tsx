import { Avatar } from '~/components/universal/Avatar';

const UserInfo = () => {
  return (
    <div>
        <Avatar
            shadow={false}
            imageUrl={'https://y.suemor.com/images89030875.jpeg' || ''}
            useRandomColor={false}
            size={85}
            lazy={false}
          />
      <p>suemor</p>
    </div>
  )  
}

export default UserInfo