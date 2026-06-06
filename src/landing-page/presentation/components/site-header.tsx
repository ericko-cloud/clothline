import { Link } from '@tanstack/react-router'
import { LayoutDashboard, Menu, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '../stores/cart-store'

export function SiteHeader() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  )

  return (
    <header className='sticky top-0 z-30 border-b bg-background/90 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link to='/' className='flex items-center gap-2 font-semibold'>
          <span className='flex size-9 items-center justify-center rounded-md bg-foreground text-background'>
            CL
          </span>
          Clothline
        </Link>

        <nav className='hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex'>
          <Link to='/' className='transition hover:text-foreground'>
            Home
          </Link>
          <Link to='/catalog' className='transition hover:text-foreground'>
            Katalog
          </Link>
          <Link to='/categories' className='transition hover:text-foreground'>
            Kategori
          </Link>
          <Link to='/about' className='transition hover:text-foreground'>
            Tentang
          </Link>
        </nav>

        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' aria-label='Search product'>
            <Search className='size-4' />
          </Button>
          <Button variant='ghost' size='icon' aria-label='Keranjang' asChild>
            <Link to='/cart' className='relative'>
              <ShoppingBag className='size-4' />
              {cartCount > 0 ? (
                <span className='absolute -top-1 -right-1 flex min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] leading-4 font-semibold text-primary-foreground'>
                  {cartCount}
                </span>
              ) : null}
            </Link>
          </Button>
          <Button variant='outline' className='hidden md:inline-flex' asChild>
            <Link to='/admin'>
              <LayoutDashboard className='size-4' />
              Demo
            </Link>
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='md:hidden'
            aria-label='Open menu'
          >
            <Menu className='size-4' />
          </Button>
        </div>
      </div>
    </header>
  )
}
