import { BlogPosts } from "@/constants"

const Blog = () => {
  return (
    <section className="px-10 lg:container mt-20 mb-32">
      <h1 className="heading-text mb-5">Our Blog Posts</h1>
      <p className="text-primary-text text-center text-base md:text-lg lg:text-xl">Visit our blog page to see recent activities and articles.</p>
      <div className="mt-10 ">
        {
          BlogPosts.length > 0 ? BlogPosts.map((blogs, idx) => (
            <div key={idx}>
              {blogs}
            </div>
          )) : <p className="text-primary text-lg text-center">No blog post to show</p>
        }
      </div>
    </section>
  )
}

export default Blog
