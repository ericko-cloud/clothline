import { Truck, Undo2, WalletCards } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    title: 'Gratis ongkir',
    description: 'Untuk pembelian tertentu di area Indonesia.',
    icon: Truck,
  },
  {
    title: 'Retur mudah',
    description: 'Tukar ukuran dalam 3 hari setelah barang diterima.',
    icon: Undo2,
  },
  {
    title: 'Bayar fleksibel',
    description: 'Transfer, e-wallet, dan kartu debit tersedia.',
    icon: WalletCards,
  },
]

export function PromoSection() {
  return (
    <section id='promo' className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='grid overflow-hidden rounded-lg border lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='min-h-[380px] bg-muted'>
          <img
            src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1100&q=85'
            alt='Promo koleksi pakaian'
            className='size-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center p-6 sm:p-10'>
          <p className='text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            Promo
          </p>
          <h2 className='mt-3 max-w-xl text-3xl font-semibold'>
            Diskon sampai 35% untuk koleksi basic dan outerwear.
          </h2>
          <p className='mt-4 max-w-xl leading-7 text-muted-foreground'>
            Lengkapi capsule wardrobe dengan warna netral, bahan breathable,
            dan potongan yang mudah dipakai berulang.
          </p>
          <div className='mt-7 grid gap-4 sm:grid-cols-3'>
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div key={benefit.title}>
                  <Icon className='mb-3 size-5' />
                  <h3 className='font-semibold'>{benefit.title}</h3>
                  <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
          <Button className='mt-8 w-fit' asChild>
            <a href='#catalog'>Ambil Promo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
