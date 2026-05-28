import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type Product } from '@/landing-page/domain/entities/product'
import { formatMoney } from '@/landing-page/domain/value-objects/money'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className='group overflow-hidden rounded-lg border bg-background'>
      <div className='relative aspect-[4/5] overflow-hidden bg-muted'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='size-full object-cover transition duration-500 group-hover:scale-105'
        />
        {product.badge ? (
          <Badge className='absolute left-3 top-3'>{product.badge}</Badge>
        ) : null}
        <Button
          size='icon'
          variant='secondary'
          className='absolute right-3 top-3'
          aria-label={`Save ${product.name}`}
        >
          <Heart className='size-4' />
        </Button>
      </div>
      <div className='space-y-3 p-4'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <p className='text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground'>
              {product.category}
            </p>
            <h3 className='mt-1 font-semibold'>{product.name}</h3>
          </div>
          <div className='flex items-center gap-1 text-sm'>
            <Star className='size-4 fill-amber-400 text-amber-400' />
            {product.rating}
          </div>
        </div>
        <div className='flex items-center justify-between gap-3'>
          <div>
            <div className='font-semibold'>{formatMoney(product.price)}</div>
            {product.originalPrice ? (
              <div className='text-sm text-muted-foreground line-through'>
                {formatMoney(product.originalPrice)}
              </div>
            ) : null}
          </div>
          <Button size='icon' aria-label={`Add ${product.name} to bag`}>
            <ShoppingBag className='size-4' />
          </Button>
        </div>
        <p className='text-sm text-muted-foreground'>{product.soldCount} terjual</p>
      </div>
    </article>
  )
}
