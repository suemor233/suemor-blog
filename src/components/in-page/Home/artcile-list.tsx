import { Variants, m } from 'framer-motion'

const ArticleList = () => {
  return (
    <article className="flex flex-col gap-5 mt-4">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />

      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </article>
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

const Item = () => {
  return (
    <m.section
      variants={backdropMotion}
      initial="exit"
      animate="enter"
      exit="exit"
      whileHover={'hover'}
      className="p-4 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-md hover:bg-opacity-20"
    >
      <h2 className="text-xl cursor-pointer hover:text-blue-500 inline-block duration-300 transition-all">
        重学CSS
      </h2>
      <p className="text-gray-700 mt-2 dark:text-gray-400">
        我是 2022 年初开始接触 web 前端的（先前写过 Android
        ），当时我有极其少量的三件套基础，便直接开启了前端工程化的学习。显然这个决定是愚蠢的，要知道当时我连
        es6 都不了解，看着 Vue 的官方文档更是一脸懵逼，就这样懵懵懂懂靠记忆 api
        的方式学习了Vue的基础知识后…
      </p>
      <div className="mt-2 flex gap-2 text-blue-500">
        <time>2021-12-31</time>
        <span>折腾记录</span>
        <span>博客记录</span>
      </div>
    </m.section>
  )
}

export default ArticleList
