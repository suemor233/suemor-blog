import type { Variants} from 'framer-motion';
import { m } from 'framer-motion'
import { FC } from 'react';
import { PostsPaginateType, postType } from '~/types/post';
import NextLink from 'next/link'

const ArticleList:FC<Record<'posts',PostsPaginateType>> = ({posts}) => {
  console.log(posts);
  return (
    <section className="flex flex-col gap-5 mt-4">
      {
        posts.postList.map(item => <Item key={item._id} post={item}/>)
      }
    </section>
  )
}

const backdropMotion: Variants = {
  exit: {
    scale: 0.8,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
  },
  hover: {
    scale: 1.05,
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    transition: { type: 'spring', stiffness: 300, damping: 17 },
  },
}

const Item:FC<Record<'post',postType>> = ({post}) => {
  const {title,content,created,tags,category,_id} = post
  return (
    <m.article
      variants={backdropMotion}
      initial="exit"
      animate="enter"
      exit="exit"
      whileHover={'hover'}
      className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-md hover:bg-opacity-20"
    >
      <NextLink href={`/posts/${_id}`}>
      <h2 className="text-xl cursor-pointer hover:text-blue-500 inline-block duration-300 transition-all">
        {title}
      </h2>
      </NextLink>
 
      <p className="text-gray-700 mt-2 dark:text-gray-400">
        {content}
      </p>
      <div className="mt-2 flex gap-2 text-blue-500">
        <time>{created}</time>
        <span>{category.name}</span>
        {
          tags.map(item => <span key={item}>{item}</span>)
        }
      </div>
    </m.article>
  )
}

export default ArticleList
