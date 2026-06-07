import { Link } from '@tanstack/react-router'
import { type Product } from '@/landing-page/domain/entities/product'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProductVariantDialog } from './product-variant-dialog'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className='group overflow-hidden rounded-lg border bg-background'>
      <div className='relative aspect-[4/5] overflow-hidden bg-muted'>
        <Link
          to='/products/$productId'
          params={{ productId: product.id }}
          className='block size-full'
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className='size-full object-cover transition duration-500 group-hover:scale-105'
          />
        </Link>
        {product.badge ? (
          <Badge className='absolute top-3 left-3'>{product.badge}</Badge>
        ) : null}
        <Button
          size='icon'
          variant='secondary'
          className='absolute top-3 right-3'
          aria-label={`Save ${product.name}`}
        >
          <Heart className='size-4' />
        </Button>
      </div>
      <div className='space-y-3 p-4'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <p className='text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase'>
              {product.category}
            </p>
            <h3 className='mt-1 font-semibold'>
              <Link
                to='/products/$productId'
                params={{ productId: product.id }}
                className='transition hover:text-muted-foreground'
              >
                {product.name}
              </Link>
            </h3>
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
          <ProductVariantDialog
            product={product}
            trigger={
              <Button size='icon' aria-label={`Add ${product.name} to bag`}>
                <ShoppingBag className='size-4' />
              </Button>
            }
          />
        </div>
        <p className='text-sm text-muted-foreground'>
          {product.soldCount} terjual
        </p>
      </div>
    </article>
  )
}
