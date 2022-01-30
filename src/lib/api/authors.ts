import { Author } from '@/lib/models/author'
import client from './client'

const getAuthors = () => client.get<Author[]>('/authors')

export const authorsApi = {
  getAuthors,
}
