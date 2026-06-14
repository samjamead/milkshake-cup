import { fetchPosts } from '@/lib/fetchPosts'
import { dateStringToBinary } from '@/lib/helpers'
import PostList from '@/components/post-list'
import extraPosts from '@/data/posts.json'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

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
      <div className='flex flex-col gap-16'>
        <Hero />

        <div className='mx-auto w-full max-w-4xl px-4'>
          {posts && <PostList posts={parsedPosts} />}
        </div>

        <Footer />
      </div>
    </div>
  )
}
