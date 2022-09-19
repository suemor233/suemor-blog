import type { NextPage } from 'next'
import UserInfo from '~/components/in-page/Home/user-info';

const Home: NextPage = () => {
  return (
    <div className='flex justify-center'>
      <UserInfo/>
    </div>
  )
}

export default Home;
