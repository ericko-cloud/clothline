import { type Discount } from '@/landing-page/domain/entities/discount'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { BadgePercent, Ticket } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type DiscountCodeSectionProps = {
  discounts?: Discount[]
}

export function DiscountCodeSection({
  discounts = [],
}: DiscountCodeSectionProps) {
  const activeDiscounts = discounts.filter((discount) => discount.isActive)

  return (
    <section
      id='discount-codes'
      className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'
    >
      <div className='grid overflow-hidden rounded-lg border lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='min-h-[380px] bg-muted'>
          <img
            src='https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1100&q=85'
            alt='Kode diskon koleksi pakaian'
            className='size-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center p-6 sm:p-10'>
          <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
            Kode Diskon
          </p>
          <h2 className='mt-3 max-w-xl text-3xl font-semibold'>
            Gunakan kode diskon aktif dari Master Diskon.
          </h2>
          <div className='mt-6 grid gap-3 sm:grid-cols-2'>
            {activeDiscounts.length > 0 ? (
              activeDiscounts.map((discount) => (
                <div key={discount.id} className='rounded-lg border p-4'>
                  <div className='mb-3 flex items-center justify-between gap-3'>
                    <Badge variant='secondary' className='gap-1.5'>
                      <Ticket className='size-3.5' />
                      {discount.code}
                    </Badge>
                    <BadgePercent className='size-5 text-muted-foreground' />
                  </div>
                  <h3 className='font-semibold'>{discount.title}</h3>
                  <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                    {discount.description}
                  </p>
                  <p className='mt-3 text-sm font-medium'>
                    {discount.type === 'percentage'
                      ? `${discount.value}% off`
                      : `${formatMoney({ amount: discount.value, currency: 'IDR' })} off`}
                    <span className='ml-1 font-normal text-muted-foreground'>
                      min. {formatMoney(discount.minimumPurchase)}
                    </span>
                  </p>
                </div>
              ))
            ) : (
              <div className='rounded-lg border p-4 text-sm text-muted-foreground sm:col-span-2'>
                Belum ada kode diskon aktif.
              </div>
            )}
          </div>
          <Button className='mt-8 w-fit' asChild>
            <a href='#catalog'>Pakai Kode Diskon</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
