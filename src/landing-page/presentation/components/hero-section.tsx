import { ArrowRight, LayoutDashboard, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id='home' className='border-b'>
      <div className='mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8'>
        <div className='max-w-2xl'>
          <Badge variant='secondary' className='mb-5 gap-1.5'>
            <Sparkles className='size-3.5' />
            Spring Drop 2026
          </Badge>
          <h1 className='text-4xl font-semibold tracking-normal text-balance sm:text-5xl lg:text-6xl'>
            Pakaian harian yang rapi, nyaman, dan mudah dipadu.
          </h1>
          <p className='mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg'>
            Temukan koleksi dress, kemeja, denim, knitwear, dan outfit anak
            dengan detail bahan yang nyaman untuk aktivitas setiap hari.
          </p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button size='lg' asChild>
              <a href='#catalog'>
                Belanja Catalog
                <ArrowRight className='size-4' />
              </a>
            </Button>
            <Button size='lg' variant='outline' asChild>
              <a href='/admin'>
                <LayoutDashboard className='size-4' />
                Demo Admin
              </a>
            </Button>
          </div>
          <dl className='mt-10 grid max-w-lg grid-cols-3 gap-4 text-sm'>
            <div>
              <dt className='text-2xl font-semibold'>24K+</dt>
              <dd className='text-muted-foreground'>produk terjual</dd>
            </div>
            <div>
              <dt className='text-2xl font-semibold'>4.8</dt>
              <dd className='text-muted-foreground'>rating toko</dd>
            </div>
            <div>
              <dt className='text-2xl font-semibold'>3 hari</dt>
              <dd className='text-muted-foreground'>retur mudah</dd>
            </div>
          </dl>
        </div>

        <div className='relative min-h-[520px] overflow-hidden rounded-lg bg-muted'>
          <img
            src='https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85'
            alt='Koleksi pakaian Clothline'
            className='absolute inset-0 size-full object-cover'
          />
          <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 text-white'>
            <p className='text-sm uppercase tracking-[0.18em] text-white/70'>
              curated looks
            </p>
            <p className='mt-2 max-w-md text-2xl font-semibold'>
              Mix outer, linen, dan denim untuk gaya kerja sampai akhir pekan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
