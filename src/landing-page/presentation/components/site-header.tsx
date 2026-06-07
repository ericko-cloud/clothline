import { Link } from '@tanstack/react-router'
import { LayoutDashboard, Menu, Search, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCartStore } from '../stores/cart-store'

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'Katalog', to: '/catalog' },
  { label: 'Kategori', to: '/categories' },
  { label: 'Tentang', to: '/about' },
] as const

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
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className='transition hover:text-foreground'
            >
              {item.label}
            </Link>
          ))}
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='md:hidden'
                aria-label='Open menu'
              >
                <Menu className='size-4' />
              </Button>
            </SheetTrigger>
            <SheetContent className='w-[300px] p-0 md:hidden'>
              <SheetHeader className='border-b p-5 text-left'>
                <SheetTitle>
                  <span className='flex items-center gap-2'>
                    <span className='flex size-9 items-center justify-center rounded-md bg-foreground text-sm text-background'>
                      CL
                    </span>
                    Clothline
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className='flex flex-col p-3'>
                {navigationItems.map((item) => (
                  <SheetClose key={item.to} asChild>
                    <Link
                      to={item.to}
                      className='rounded-md px-3 py-3 text-sm font-medium transition hover:bg-muted'
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    to='/cart'
                    className='flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium transition hover:bg-muted'
                  >
                    Keranjang
                    {cartCount > 0 ? (
                      <span className='flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-xs leading-5 font-semibold text-primary-foreground'>
                        {cartCount}
                      </span>
                    ) : null}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to='/admin'
                    className='mt-2 flex items-center gap-2 rounded-md border px-3 py-3 text-sm font-medium transition hover:bg-muted'
                  >
                    <LayoutDashboard className='size-4' />
                    Admin
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
