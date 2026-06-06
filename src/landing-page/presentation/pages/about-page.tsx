import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ShopPageShell } from '../components/shop-page-shell'

export function AboutPage() {
  return (
    <ShopPageShell>
      <section className='border-b'>
        <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8'>
          <div>
            <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
              Tentang
            </p>
            <h1 className='mt-2 text-4xl font-semibold tracking-normal text-balance'>
              Clothline memilih pakaian harian yang nyaman, rapi, dan mudah
              dipadu.
            </h1>
            <p className='mt-5 max-w-2xl text-base leading-7 text-muted-foreground'>
              Prototype ini menampilkan alur belanja sederhana: home sebagai
              halaman utama, katalog produk, kategori koleksi, dan keranjang
              belanja untuk menyimpan pilihan pelanggan.
            </p>
            <Button className='mt-8' asChild>
              <Link to='/catalog'>
                Lihat Katalog
                <ArrowRight className='size-4' />
              </Link>
            </Button>
          </div>
          <div className='overflow-hidden rounded-lg bg-muted'>
            <img
              src='https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1300&q=85'
              alt='Interior butik pakaian Clothline'
              className='aspect-[4/3] size-full object-cover'
            />
          </div>
        </div>
      </section>
    </ShopPageShell>
  )
}
