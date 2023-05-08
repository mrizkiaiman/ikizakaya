import * as React from 'react'
import { WithChildren } from '@/types'
import { cn } from '@/lib/utils'

interface DefaultPageProps extends WithChildren {
  className?: string
}

export const DefaultPage: React.FC<DefaultPageProps> = ({ children, className }) => {
  return <main className={cn('pr-16 h-screen', className)}>{children}</main>
}
