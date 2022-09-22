import { useRouter } from "next/router"

const PostView = () => {
  const router = useRouter()
  return (
    <>
      {router.query.id}
    </>
  )
}

export default PostView