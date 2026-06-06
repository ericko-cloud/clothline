import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

type MasterPageShellProps = {
  title: string
  description: string
  children: React.ReactNode
}

export function MasterPageShell({
  title,
  description,
  children,
}: MasterPageShellProps) {
  return (
    <>
      <Header fixed>
        <Search className='me-auto' />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>
      <Main className='flex flex-1 flex-col gap-4 sm:gap-6'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
          <p className='text-muted-foreground'>{description}</p>
        </div>
        {children}
      </Main>
    </>
  )
}
