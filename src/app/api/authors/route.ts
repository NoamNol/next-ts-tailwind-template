import { NextResponse } from 'next/server'
import authorsData from '@/assets/fakedata/authors.json'
import type { Author } from '@/lib/models/author'

export async function GET() {
  const data: Author[] = authorsData.objects
  return NextResponse.json(data)
}
