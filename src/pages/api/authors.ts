import type { NextApiRequest, NextApiResponse } from 'next'
import authorsData from '@/assets/fakedata/authors.json'
import type { Author } from '@/lib/models/author'

export default function handler(req: NextApiRequest, res: NextApiResponse<Author[]>) {
  res.statusCode = 200
  res.json(authorsData.objects)
}
