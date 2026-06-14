import { readdir } from 'fs/promises'

type PostMetadata = {
  title: string
  date: string
  category: string
  quote?: string
  externalLink?: string
  attribution?: string
  attributionLink?: string
  distance?: number
  elevation?: number
  duration?: number
  mountains?: string[]
}

type Post = PostMetadata & {
  slug: string
}

export async function fetchPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir('./app/(main-layout)/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory())

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata }: { metadata: PostMetadata } = await import(
        `../app/(main-layout)/(posts)/${name}/page.mdx`
      )
      return { slug: name, ...metadata }
    })
  )

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  return posts
}
