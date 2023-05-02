'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'

export const ActiveLink: React.FC<{
  isActive: boolean
  searchParams: string
  children: React.ReactNode
}> = ({ isActive, searchParams, children }) => {
  const pathname = usePathname()

  return (
    <Link
      className={clsx('rounded-lg px-3 py-1 text-sm font-medium no-underline', {
        'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white':
          !isActive,
        'bg-[#0070F3] text-white': isActive,
      })}
      href={`${pathname}?${searchParams}`}
    >
      {children}
    </Link>
  )
}
