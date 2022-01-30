import type { NextPage } from 'next'
import Head from 'next/head'
import { usePosts } from '@/lib/api/posts'

const PostsPage: NextPage = () => {
  const { posts, error, loading } = usePosts()

  return (
    <div>
      <Head>
        <title>Posts page</title>
      </Head>
      <div>
        <h1>Posts</h1>
        {loading && <p>Posts are loading...</p>}
        {error && <p>{error?.message}</p>}
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <div>{post.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PostsPage
