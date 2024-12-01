// import Link from 'next/link'

// const blogPosts = [
//   {
//     title: 'My First Blog Post',
//     description: 'This is a brief description of my first blog post.',
//     date: '2023-05-01',
//     slug: 'my-first-blog-post',
//   },
//   {
//     title: 'Exploring New Technologies',
//     description: 'A look into some exciting new technologies on the horizon.',
//     date: '2023-05-15',
//     slug: 'exploring-new-technologies',
//   },
//   {
//     title: 'Reflections on My Recent Project',
//     description: 'Thoughts and lessons learned from my latest project.',
//     date: '2023-06-01',
//     slug: 'reflections-on-recent-project',
//   },
// ]

export default function Blog() {
  return (
    <div className="grid container mx-auto py-8 place-content-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white space-x-10 mx-auto px-4 py-8">Blog</h1>
      {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className='grid justify-center place-items-center content-center text-3xl'>
        <h1>Coming Soon...</h1>
      </div>
    </div>
  )
}

