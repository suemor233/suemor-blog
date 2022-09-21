import type { NextPage } from 'next'

import ArticleList from '~/components/in-page/Home/artcile-list'
import UserInfo from '~/components/in-page/Home/user-info'
import { useContext } from 'react';
import { InitialContext } from '~/context/initial-data';

const Home: NextPage = () => {
  const context = useContext(InitialContext)
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[45rem] mt-2 px-5">
        <UserInfo />
        <ArticleList />
      </div>
    </div>
  )
}

export default Home
