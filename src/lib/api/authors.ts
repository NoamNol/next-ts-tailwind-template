import client from './client'
import { Author } from '@/lib/models/author'

const getAuthors = () => client.get<Author[]>('/authors')

export const authorsApi = {
  getAuthors,
}
