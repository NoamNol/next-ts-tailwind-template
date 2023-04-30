import { NextResponse } from 'next/server'
import type { Post } from '@/lib/models/post'
import postsData from '@/assets/fakedata/posts.json'

export async function GET() {
  const data: Post[] = postsData.objects
  return NextResponse.json(data)
}
