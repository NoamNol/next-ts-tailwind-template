import type { NextPage } from 'next'
import Head from 'next/head'
import { useAuthors } from '@/lib/api/authors'

const AuthorsPage: NextPage = () => {
  const { authors, error, loading } = useAuthors()

  return (
    <div>
      <Head>
        <title>Authors page</title>
      </Head>
      <div>
        <h1>Authors</h1>
        {loading && <p>Authors are loading...</p>}
        {error && <p>{error?.message}</p>}
        <ul>
          {authors?.map((author) => (
            <li key={author.id}>
              <h2>{author.name}</h2>
              <div>age: {author.age}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AuthorsPage
