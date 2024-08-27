import { fetchPosts } from '@/_utils/fetchPosts'
import { dateStringToBinary } from '@/_utils/helpers'
import PostList from '@/_components/post-list'
import extraPosts from '@/_data/posts.json'

export const metadata = {
  title: 'The Milkshake Cup',
}

export default async function Home() {
  const posts = await fetchPosts()

  const allPosts = [...extraPosts, ...posts].sort(
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
      <div className='mx-auto flex max-w-6xl flex-col gap-8'>
        {posts && <PostList posts={parsedPosts} />}
      </div>
    </div>
  )
}
