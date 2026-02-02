import Link from 'next/link'
import { getBlogPosts } from './utils'

export const metadata = {
  title: 'Blog',
  description: 'Read our latest thoughts and updates.',
}

export default function BlogPage() {
  let allBlogs = getBlogPosts()

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.metadata.publishedAt}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </section>
  )
}