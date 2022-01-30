import type { NextApiRequest, NextApiResponse } from 'next'
import postsData from '@/assets/fakedata/posts.json'
import type { Post } from '@/lib/models/post'

export default function handler(req: NextApiRequest, res: NextApiResponse<Post | ApiError>) {
  const { id } = req.query
  const index = Number(id) // in this simple example we use id as index
  const somePost = postsData.objects[index]
  if (somePost) {
    res.status(200).send(somePost)
  } else {
    res.status(404).send({ error: 'Post not found' })
  }
}
