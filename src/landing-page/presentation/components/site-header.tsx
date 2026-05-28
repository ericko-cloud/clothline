import { Link } from '@tanstack/react-router'
import { LayoutDashboard, Menu, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-30 border-b bg-background/90 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <a href='#home' className='flex items-center gap-2 font-semibold'>
          <span className='flex size-9 items-center justify-center rounded-md bg-foreground text-background'>
            CL
          </span>
          Clothline
        </a>

        <nav className='hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex'>
          <a href='#catalog' className='transition hover:text-foreground'>
            Catalog
          </a>
          <a href='#categories' className='transition hover:text-foreground'>
            Category
          </a>
          <a href='#promo' className='transition hover:text-foreground'>
            Promo
          </a>
          <a href='#testimonials' className='transition hover:text-foreground'>
            Review
          </a>
        </nav>

        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Search product'>
            <Search className='size-4' />
          </Button>
          <Button variant='ghost' size='icon' aria-label='Shopping bag'>
            <ShoppingBag className='size-4' />
          </Button>
          <Button variant='outline' className='hidden md:inline-flex' asChild>
            <Link to='/admin'>
              <LayoutDashboard className='size-4' />
              Demo
            </Link>
          </Button>
          <Button variant='outline' size='icon' className='md:hidden' aria-label='Open menu'>
            <Menu className='size-4' />
          </Button>
        </div>
      </div>
    </header>
  )
}
