import { fetchPosts } from '@/_utils/fetchPosts'
import { dateStringToBinary } from '@/_utils/helpers'
import PostList from '@/_components/post-list'
import extraPosts from '@/_data/posts.json'
import Hero from '@/_components/hero'

export const metadata = {
  title: 'The Milkshake Cup',
}

export default async function Home() {
  const posts = await fetchPosts()

  const allPosts = [...posts, ...extraPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const parsedPosts = allPosts.map((post) => {
    const binaryDate = dateStringToBinary(post.date)
    return {
      ...post,
      binaryDate,
    }
  })

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-16 pt-4 md:pt-12 lg:pt-20'>
        <Hero />
        {posts && <PostList posts={parsedPosts} />}
      </div>
    </div>
  )
}
