import type { NextPage } from 'next'

import type { FriendsType} from '~/api/modules/friends';
import { getAllFriends } from '~/api/modules/friends'
import { SEO } from '~/components/biz/Seo'
import Friends from '~/components/in-page/Friends'
import FriendsLayout from '~/components/layouts/FriendsLayout'

const FriendsView: NextPage<Record<'data',FriendsType[]>> = (friends) => {
  return (
    <>
      <SEO title="朋友" />
      <FriendsLayout>
        <Friends friends={friends.data}/>
      </FriendsLayout>
    </>
  )
}

FriendsView.getInitialProps = async () => {
  const friends = await getAllFriends()
  return friends
}

export default FriendsView
