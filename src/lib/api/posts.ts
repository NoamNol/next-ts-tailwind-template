import useSWR from 'swr'
import type { Post } from '@/lib/models/post'
import client from './client'

/* getPosts - get all posts */

const getPosts = {
  key: () => '/posts',
  get() { return client.get<Post[]>(this.key()) },
  data() { return this.get().then((res) => res.data) },
}

export function usePosts() {
  const { data, error } = useSWR<Post[]>(getPosts.key, () => getPosts.data())

  return {
    posts: data,
    error,
    loading: !error && !data,
  }
}

/* getPost - get one post */

const getPost = {
  key: ({ id }: IdArg) => `/posts/${id}`,
  get(arg: IdArg) { return client.get<Post>(this.key(arg)) },
  data(arg: IdArg) { return this.get(arg).then((res) => res.data) },
}

export function usePost(arg: MaybeIdArg) {
  const nArg = arg.id ? arg as IdArg : null
  const { data, error } = useSWR<Post>(nArg && getPost.key(nArg), () => getPost.data(nArg!))

  return {
    post: data,
    error,
    loading: !error && !data,
  }
}

export const postsApi = {
  getPosts,
  getPost,
}
