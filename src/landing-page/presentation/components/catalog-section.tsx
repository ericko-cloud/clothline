import { SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from './product-card'
import { type Product } from '@/landing-page/domain/entities/product'

type CatalogSectionProps = {
  products: Product[]
}

const filters = ['All', 'Women', 'Men', 'Kids', 'Sale']

export function CatalogSection({ products }: CatalogSectionProps) {
  return (
    <section id='catalog' className='border-y bg-muted/35'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end'>
          <div>
            <p className='text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Catalog
            </p>
            <h2 className='mt-2 text-3xl font-semibold'>Produk pilihan minggu ini</h2>
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={filter === 'All' ? 'default' : 'outline'}
                size='sm'
              >
                {filter}
              </Button>
            ))}
            <Button variant='outline' size='icon' aria-label='Filter catalog'>
              <SlidersHorizontal className='size-4' />
            </Button>
          </div>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
