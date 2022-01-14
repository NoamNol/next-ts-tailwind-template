import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { postsApi } from '@/lib/api/posts'
import type { Post } from '@/lib/models/post'

const PostsPage: NextPage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleApi = async () => {
      setLoading(true)

      try {
        const result = await postsApi.getPosts()
        setPosts(result.data)
      } catch (err) {
        setError(err.message || 'Unexpected error')
      } finally {
        setLoading(false)
      }
    }

    handleApi()
  }, [])

  return (
    <div>
      <Head>
        <title>Posts page</title>
      </Head>
      <div>
        <h1>Posts</h1>
        {loading && <p>Posts are loading...</p>}
        {error && <p>{error}</p>}
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
