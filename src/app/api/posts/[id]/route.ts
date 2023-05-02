import { NextResponse } from 'next/server'
import postsData from '@/assets/fakedata/posts.json'
import type { Post } from '@/lib/models/post'

export async function GET(request: Request, { params }: {
  params: { id: string }
}) {
  const { id } = params
  const index = Number(id) // in this simple example we use id as index
  const somePost: Post = postsData.objects[index]
  if (somePost) {
    return NextResponse.json(somePost)
  }
  return NextResponse.json({ error: 'Post not found' } as ApiError, { status: 404 })
}
