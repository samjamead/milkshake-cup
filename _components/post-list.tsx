'use client'

import { useState, useEffect } from 'react'
import { PostWithBinaryDate } from '@/_utils/types'
import Link from 'next/link'
import Quote from './quote'
import { useSearchParams } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import * as d3 from 'd3'

export default function PostList({ posts }: { posts: PostWithBinaryDate[] }) {
  const searchParams = useSearchParams()

  const [binaryDates, setBinaryDates] = useState<boolean>(false)

  const category = searchParams.get('category')

  const [postList, setPostList] = useState<PostWithBinaryDate[]>(posts)

  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      category ? post.category === category : post
    )
    setPostList(filteredPosts)
  }, [category, posts])

  return (
    <ul className='flex flex-col gap-12 lg:gap-8'>
      {postList.map((post) => {
        return (
          <li
            key={post.title}
            className='animate-in flex flex-col-reverse items-baseline justify-start gap-2 lg:flex-row lg:gap-8'
          >
            {post.slug && (
              // Most posts

              <Link href={`/${post.slug}`} className='underline'>
                {post.title}
              </Link>
            )}

            {post.externalLink && (
              // Links to external posts, most frequently Observable
              <div className='flex'>
                <a
                  href={post.externalLink}
                  target='_blank'
                  className='underline'
                >
                  {post.title}
                </a>
                <span className='pl-1'>
                  <ArrowUpRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            )}

            {post.quote && post.attribution && (
              // Quotes
              <Quote
                quote={post.quote}
                attribution={post.attribution}
                attributionLink={post.attributionLink}
              />
            )}

            {post.title &&
              !post.slug &&
              !post.externalLink &&
              !post.quote &&
              // Coming soon posts

              post.title}

            <div className='grow'>
              <hr className='border-t-white/10' />
            </div>

            <span className='shrink font-mono text-xs text-white/70'>
              <button
                role='button'
                onClick={() => setBinaryDates(!binaryDates)}
              >
                {binaryDates
                  ? post.binaryDate
                  : d3.timeFormat('%a %d %b %Y')(new Date(post.date))}
              </button>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
