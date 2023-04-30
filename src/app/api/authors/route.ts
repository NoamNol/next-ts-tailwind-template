import { NextResponse } from 'next/server'
import type { Author } from '@/lib/models/author'
import authorsData from '@/assets/fakedata/authors.json'

export async function GET() {
  const data: Author[] = authorsData.objects
  return NextResponse.json(data)
}
