import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { usePost } from '@/lib/api/posts'

const PostPage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string | undefined
  const { post, error, loading } = usePost({ id })

  return (
    <div>
      <Head>
        <title>Post page</title>
      </Head>

      <div>
        <h1>Post</h1>
        {loading && <p>Post is loading...</p>}
        {error && <p>{error?.message}</p>}
        <div>
          {post && JSON.stringify(post)}
        </div>
      </div>
    </div>
  )
}

export default PostPage
