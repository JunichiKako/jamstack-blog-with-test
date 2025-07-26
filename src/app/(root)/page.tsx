import { getBlogPosts } from '@/lib/microcms/api'
import Hero from './_components/hero'
import PostGrid from '@/components/post-grid'

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <>
      <Hero />
      {/* おすすめ記事 */}
      <PostGrid posts={posts} />
    </>
  )
}
