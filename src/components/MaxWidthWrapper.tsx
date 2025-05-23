import React from 'react'
import { cn } from '../lib/utils'
import type { ReactNode } from 'react'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-7 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
