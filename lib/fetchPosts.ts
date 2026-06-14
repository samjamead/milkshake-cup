import { readdir } from 'fs/promises'

export async function fetchPosts(): Promise<any[]> {
  // Retrieve slugs from post routes
  const slugs = (
    await readdir('./app/(main-layout)/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory())

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `../app/(main-layout)/(posts)/${name}/page.mdx`
      )
      return { slug: name, ...metadata }
    })
  )

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate))

  return posts
}
