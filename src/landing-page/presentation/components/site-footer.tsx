import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className='border-t bg-muted/30'>
      <div className='mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] md:gap-10 md:py-12 lg:px-8'>
        <div className='text-center sm:text-left'>
          <Link to='/' className='flex items-center gap-2 font-semibold'>
            <span className='flex size-9 items-center justify-center rounded-md bg-foreground text-background'>
              CL
            </span>
            Clothline
          </Link>
          <p className='mx-auto mt-4 max-w-sm text-sm leading-6 text-muted-foreground sm:mx-0'>
            Kurasi pakaian harian yang rapi, nyaman, dan mudah dipadu untuk
            kerja, akhir pekan, dan kebutuhan keluarga.
          </p>
          <div className='mt-5 flex items-center justify-center gap-2 sm:justify-start'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noreferrer'
              className='flex size-9 items-center justify-center rounded-md border bg-background transition hover:text-foreground'
              aria-label='Instagram Clothline'
            >
              <Send className='size-4' />
            </a>
            <a
              href='mailto:hello@clothline.local'
              className='flex size-9 items-center justify-center rounded-md border bg-background transition hover:text-foreground'
              aria-label='Email Clothline'
            >
              <Mail className='size-4' />
            </a>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-6 md:contents'>
          <FooterColumn title='Belanja'>
            <FooterLink to='/catalog'>Katalog</FooterLink>
            <FooterLink to='/categories'>Kategori</FooterLink>
            <FooterLink to='/cart'>Keranjang</FooterLink>
          </FooterColumn>

          <FooterColumn title='Clothline'>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/about'>Tentang</FooterLink>
            <FooterLink to='/admin'>Admin</FooterLink>
          </FooterColumn>
        </div>

        <div className='rounded-lg border bg-background/60 p-4 md:border-0 md:bg-transparent md:p-0'>
          <h2 className='text-sm font-semibold'>Bantuan</h2>
          <div className='mt-4 space-y-3 text-sm text-muted-foreground'>
            <p className='flex items-start gap-2'>
              <MapPin className='mt-0.5 size-4 shrink-0' />
              Bandung, Indonesia
            </p>
            <p className='flex items-start gap-2'>
              <Phone className='mt-0.5 size-4 shrink-0' />
              +62 812 0000 2026
            </p>
            <p className='flex items-start gap-2 break-all'>
              <Mail className='mt-0.5 size-4 shrink-0' />
              hello@clothline.local
            </p>
          </div>
        </div>
      </div>

      <div className='border-t'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left lg:px-8'>
          <p>© 2026 Clothline. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className='text-sm font-semibold'>{title}</h2>
      <div className='mt-3 flex flex-col gap-2.5 text-sm text-muted-foreground md:mt-4 md:gap-3'>
        {children}
      </div>
    </div>
  )
}

type FooterLinkProps = {
  to: '/' | '/about' | '/admin' | '/cart' | '/catalog' | '/categories'
  children: React.ReactNode
}

function FooterLink({ to, children }: FooterLinkProps) {
  return (
    <Link to={to} className='transition hover:text-foreground'>
      {children}
    </Link>
  )
}
