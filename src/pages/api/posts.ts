import type { NextApiRequest, NextApiResponse } from 'next'
import postsData from '@/assets/fakedata/posts.json'
import type { Post } from '@/lib/models/post'

export default function handler(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  res.statusCode = 200
  res.json(postsData.objects)
}
