'use client'

import type { NextPage } from 'next'
import { useAuthor } from '@/lib/api/authors'

const AuthorPage: NextPage<{ params: { id: string } }> = ({ params }) => {
  const { id } = params
  const { author, error, loading } = useAuthor({ id })

  return (
    <div>
      <div>
        <h1>Author</h1>
        {loading && <p>Author is loading...</p>}
        {error && <p>{error?.message}</p>}
        <div>
          {author && JSON.stringify(author)}
        </div>
      </div>
    </div>
  )
}

export default AuthorPage
