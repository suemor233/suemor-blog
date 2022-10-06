const Footer = () => {
  return (
    <footer className="flex-1 flex items-end justify-center text-gray-600 pb-5 mt-10 ">
      <div className="max-h-10 flex-wrap flex phone:justify-center">
        <span>© 2022&nbsp;</span>
        <a href="http://localhost:3477/" className="text-blue-500">
          SuemorのBlog
        </a>
        <span>.</span>
        <div>
          <span>&nbsp;All Rights Reserved. Theme By&nbsp;</span>
          <a
            href="https://github.com/suemor233/suemor-blog"
            className="text-blue-500"
          >
            Suemor
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
