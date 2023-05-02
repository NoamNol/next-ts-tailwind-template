'use client'

import { useSearchParams } from 'next/navigation'
import { ActiveLink } from '@/components/ActiveLink'

import type React from 'react'

export const PlayWithActiveLink: React.FC<{ className: string }> = ({ className }) => {
  const searchParams = useSearchParams()
  const initialIsActive = searchParams.get('active')
  const isActive = initialIsActive === null || initialIsActive === 'true'

  return (
    <div className={className}>
      <ActiveLink
        isActive={isActive}
        searchParams={new URLSearchParams(`active=${!isActive}`).toString()}
      >
        Test ActiveLink
      </ActiveLink>
    </div>
  )
}
