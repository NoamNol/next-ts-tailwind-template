import type { Post } from '@/lib/models/post'
import client from './client'

const getPosts = () => client.get<Post[]>('/posts')

export const postsApi = {
  getPosts,
}
