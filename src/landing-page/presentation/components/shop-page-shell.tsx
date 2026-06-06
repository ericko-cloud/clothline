import { type ReactNode } from 'react'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

type ShopPageShellProps = {
  children: ReactNode
}

export function ShopPageShell({ children }: ShopPageShellProps) {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
