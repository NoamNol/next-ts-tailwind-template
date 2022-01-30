import type { NextApiRequest, NextApiResponse } from 'next'
import authorsData from '@/assets/fakedata/authors.json'
import type { Author } from '@/lib/models/author'

export default function handler(req: NextApiRequest, res: NextApiResponse<Author | ApiError>) {
  const { id } = req.query
  const index = Number(id) // in this simple example we use id as index
  const someAuthor = authorsData.objects[index]
  if (someAuthor) {
    res.status(200).send(someAuthor)
  } else {
    res.status(404).send({ error: 'Author not found' })
  }
}
