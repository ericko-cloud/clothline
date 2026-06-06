import { Link, useNavigate, useParams } from '@tanstack/react-router'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { ArrowLeft, ShoppingBag, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ShopPageShell } from '../components/shop-page-shell'
import { useLandingPage } from '../hooks/use-landing-page'
import { useCartStore } from '../stores/cart-store'

type ProductDetailPageProps = {
  productId: string
}

export function ProductDetailRoutePage() {
  const { productId } = useParams({ from: '/products/$productId' })

  return <ProductDetailPage productId={productId} />
}

export function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const navigate = useNavigate()
  const { featuredProducts } = useLandingPage()
  const addItem = useCartStore((state) => state.addItem)
  const product = featuredProducts.find((item) => item.id === productId)

  if (!product) {
    return (
      <ShopPageShell>
        <section className='mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-semibold'>Produk tidak ditemukan</h1>
          <p className='mt-3 max-w-md text-muted-foreground'>
            Produk mungkin sudah dihapus dari Master Produk atau belum tersedia
            di katalog.
          </p>
          <Button className='mt-6' asChild>
            <Link to='/catalog'>Kembali ke Katalog</Link>
          </Button>
        </section>
      </ShopPageShell>
    )
  }

  const sizes = product.sizes?.length ? product.sizes : ['S', 'M', 'L']
  const stock = product.stock ?? 0

  const handleAddToCart = () => {
    addItem(product)
    navigate({ to: '/cart' })
  }

  return (
    <ShopPageShell>
      <section className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        <Button variant='ghost' className='mb-6 px-0' asChild>
          <Link to='/catalog'>
            <ArrowLeft className='size-4' />
            Kembali ke Katalog
          </Link>
        </Button>

        <div className='grid gap-10 lg:grid-cols-[0.92fr_1.08fr]'>
          <div className='overflow-hidden rounded-lg bg-muted'>
            <img
              src={product.imageUrl}
              alt={product.name}
              className='aspect-[4/5] size-full object-cover'
            />
          </div>

          <div className='flex flex-col justify-center'>
            <div className='flex flex-wrap items-center gap-2'>
              <Badge variant='secondary'>{product.category}</Badge>
              {product.badge ? <Badge>{product.badge}</Badge> : null}
            </div>

            <h1 className='mt-4 text-4xl font-semibold tracking-normal'>
              {product.name}
            </h1>
            <div className='mt-3 flex items-center gap-3 text-sm text-muted-foreground'>
              <span className='flex items-center gap-1 text-foreground'>
                <Star className='size-4 fill-amber-400 text-amber-400' />
                {product.rating}
              </span>
              <span>{product.soldCount} terjual</span>
              <span>{stock} stok tersedia</span>
            </div>

            <div className='mt-6'>
              <p className='text-3xl font-semibold'>
                {formatMoney(product.price)}
              </p>
              {product.originalPrice ? (
                <p className='mt-1 text-sm text-muted-foreground line-through'>
                  {formatMoney(product.originalPrice)}
                </p>
              ) : null}
            </div>

            <p className='mt-6 max-w-2xl leading-7 text-muted-foreground'>
              {product.description ??
                'Produk Clothline dengan potongan nyaman untuk kebutuhan harian.'}
            </p>

            <Separator className='my-6' />

            <div className='grid gap-5 sm:grid-cols-2'>
              <div>
                <p className='text-sm font-medium'>Bahan</p>
                <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                  {product.material ?? 'Material nyaman untuk pemakaian harian'}
                </p>
              </div>
              <div>
                <p className='text-sm font-medium'>Ukuran tersedia</p>
                <div className='mt-2 flex flex-wrap gap-2'>
                  {sizes.map((size) => (
                    <span
                      key={size}
                      className='flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-sm font-medium'
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button
                size='lg'
                onClick={handleAddToCart}
                disabled={stock === 0}
              >
                <ShoppingBag className='size-4' />
                {stock > 0 ? 'Tambah ke Keranjang' : 'Stok Habis'}
              </Button>
              <Button size='lg' variant='outline' asChild>
                <Link to='/cart'>Lihat Keranjang</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ShopPageShell>
  )
}
