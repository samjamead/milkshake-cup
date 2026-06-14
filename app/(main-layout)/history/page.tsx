import HistoryFilter from '@/components/history-filter'
import PostList from '@/components/post-list'
import extraPosts from '@/data/posts.json'
import { fetchPosts } from '@/lib/fetchPosts'
import { dateStringToBinary } from '@/lib/helpers'

export const metadata = {
  title: 'History of The Milkshake Cup',
}

export default async function History() {
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
    <div className='w-full py-8'>
      <div className='flex flex-col gap-8 lg:gap-12'>
        <h2 className='text-2xl font-semibold'>History</h2>
        {posts && (
          <div className='flex flex-col gap-8'>
            <HistoryFilter />
            <PostList posts={parsedPosts} />
          </div>
        )}
      </div>
    </div>
  )
}
