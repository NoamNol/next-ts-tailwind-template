import { NextResponse } from 'next/server'
import postsData from '@/assets/fakedata/posts.json'
import type { Post } from '@/lib/models/post'

export async function GET() {
  const data: Post[] = postsData.objects
  return NextResponse.json(data)
}
