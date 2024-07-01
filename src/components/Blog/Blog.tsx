import { BlogPosts } from "@/constants"

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl md:text-4xl">Our Blog Posts</h1>
      <div className="mt-10 ">
        {
          BlogPosts.length > 0 ? BlogPosts.map((blogs) => (
            <div>
              {blogs}
            </div>
          )) : <p className="text-slate-400 text-lg ">No blog post to show</p>
        }
      </div>
    </div>
  )
}

export default Blog
