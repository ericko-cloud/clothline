import { useMemo, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { type Discount } from '@/landing-page/domain/entities/discount'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ShopPageShell } from '../components/shop-page-shell'
import { useCartStore } from '../stores/cart-store'
import { useMasterDataStore } from '../stores/master-data-store'

function calculateDiscountAmount(discount: Discount, subtotal: number) {
  if (subtotal < discount.minimumPurchase.amount) {
    return 0
  }

  if (discount.type === 'percentage') {
    return Math.min(subtotal, Math.round((subtotal * discount.value) / 100))
  }

  return Math.min(subtotal, discount.value)
}

function getCartItemSelection(item: {
  colors?: string[]
  selectedColor?: string
  selectedSize?: string
  sizes?: string[]
}) {
  return {
    color: item.selectedColor ?? item.colors?.[0] ?? 'Default',
    size: item.selectedSize ?? item.sizes?.[0] ?? 'One Size',
  }
}

function getCartItemDisplayId(item: {
  colors?: string[]
  id: string
  cartItemId?: string
  selectedColor?: string
  selectedSize?: string
  sizes?: string[]
}) {
  const selection = getCartItemSelection(item)

  return item.cartItemId ?? `${item.id}-${selection.color}-${selection.size}`
}

export function CartPage() {
  const { items, increaseItem, decreaseItem, removeItem, clearCart } =
    useCartStore()
  const discounts = useMasterDataStore((state) => state.discounts)
  const [discountCode, setDiscountCode] = useState('')
  const [appliedDiscountCode, setAppliedDiscountCode] = useState('')
  const subtotal = items.reduce(
    (total, item) => total + item.price.amount * item.quantity,
    0
  )
  const activeDiscounts = useMemo(
    () =>
      Array.isArray(discounts)
        ? discounts.filter((discount) => discount.isActive)
        : [],
    [discounts]
  )
  const appliedDiscount = useMemo(
    () =>
      activeDiscounts.find(
        (discount) => discount.code.toUpperCase() === appliedDiscountCode
      ),
    [activeDiscounts, appliedDiscountCode]
  )
  const discountAmount = appliedDiscount
    ? calculateDiscountAmount(appliedDiscount, subtotal)
    : 0
  const total = Math.max(0, subtotal - discountAmount)
  const enteredDiscount = activeDiscounts.find(
    (discount) =>
      discount.code.toUpperCase() === discountCode.trim().toUpperCase()
  )
  const discountMessage = appliedDiscount
    ? discountAmount > 0
      ? `Kode ${appliedDiscount.code} berhasil digunakan.`
      : `Minimum belanja ${formatMoney(appliedDiscount.minimumPurchase)} untuk kode ${appliedDiscount.code}.`
    : discountCode.trim() && !enteredDiscount
      ? 'Kode diskon tidak ditemukan atau belum aktif.'
      : ''

  const handleApplyDiscount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setAppliedDiscountCode(enteredDiscount?.code.toUpperCase() ?? '')
  }

  return (
    <ShopPageShell>
      <section className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
          <div>
            <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
              Keranjang
            </p>
            <h1 className='mt-2 text-4xl font-semibold tracking-normal'>
              Produk pilihanmu
            </h1>
          </div>
          {items.length > 0 ? (
            <Button variant='outline' onClick={clearCart}>
              Kosongkan Keranjang
            </Button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className='flex min-h-[360px] flex-col items-center justify-center rounded-lg border bg-muted/30 px-6 text-center'>
            <div className='mb-4 flex size-14 items-center justify-center rounded-full bg-background'>
              <ShoppingBag className='size-6' />
            </div>
            <h2 className='text-2xl font-semibold'>Keranjang masih kosong</h2>
            <p className='mt-3 max-w-md text-sm leading-6 text-muted-foreground'>
              Pilih produk dari katalog, lalu klik ikon keranjang pada kartu
              produk untuk menambahkannya.
            </p>
            <Button className='mt-6' asChild>
              <Link to='/catalog'>Belanja Katalog</Link>
            </Button>
          </div>
        ) : (
          <div className='grid gap-8 lg:grid-cols-[1fr_360px]'>
            <div className='space-y-4'>
              {items.map((item) => (
                <article
                  key={getCartItemDisplayId(item)}
                  className='grid gap-4 rounded-lg border bg-background p-4 sm:grid-cols-[120px_1fr_auto]'
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className='aspect-square w-full rounded-md object-cover sm:w-[120px]'
                  />
                  <div>
                    <p className='text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase'>
                      {item.category}
                    </p>
                    <h2 className='mt-1 font-semibold'>{item.name}</h2>
                    <p className='mt-2 text-sm text-muted-foreground'>
                      {formatMoney(item.price)}
                    </p>
                    <p className='mt-1 text-sm text-muted-foreground'>
                      Warna: {getCartItemSelection(item).color} · Ukuran:{' '}
                      {getCartItemSelection(item).size}
                    </p>
                    <div className='mt-4 flex w-fit items-center rounded-md border'>
                      <Button
                        variant='ghost'
                        size='icon'
                        aria-label={`Kurangi ${item.name}`}
                        onClick={() => decreaseItem(getCartItemDisplayId(item))}
                      >
                        <Minus className='size-4' />
                      </Button>
                      <span className='w-10 text-center text-sm font-medium'>
                        {item.quantity}
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        aria-label={`Tambah ${item.name}`}
                        onClick={() => increaseItem(getCartItemDisplayId(item))}
                      >
                        <Plus className='size-4' />
                      </Button>
                    </div>
                  </div>
                  <div className='flex items-start justify-between gap-4 sm:flex-col sm:items-end'>
                    <p className='font-semibold'>
                      {formatMoney({
                        amount: item.price.amount * item.quantity,
                        currency: item.price.currency,
                      })}
                    </p>
                    <Button
                      variant='ghost'
                      size='icon'
                      aria-label={`Hapus ${item.name}`}
                      onClick={() => removeItem(getCartItemDisplayId(item))}
                    >
                      <Trash2 className='size-4' />
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <aside className='h-fit rounded-lg border bg-background p-5'>
              <h2 className='text-lg font-semibold'>Ringkasan belanja</h2>
              <Separator className='my-4' />
              <form className='space-y-2' onSubmit={handleApplyDiscount}>
                <label
                  htmlFor='cart-discount-code'
                  className='text-sm font-medium'
                >
                  Kode diskon
                </label>
                <div className='flex gap-2'>
                  <Input
                    id='cart-discount-code'
                    value={discountCode}
                    placeholder='SPRING35'
                    onChange={(event) => {
                      setDiscountCode(event.target.value.toUpperCase())
                      setAppliedDiscountCode('')
                    }}
                  />
                  <Button type='submit'>Pakai</Button>
                </div>
                {discountMessage ? (
                  <p
                    className={
                      discountAmount > 0
                        ? 'text-sm text-emerald-600'
                        : 'text-sm text-muted-foreground'
                    }
                  >
                    {discountMessage}
                  </p>
                ) : null}
              </form>
              <Separator className='my-4' />
              <div className='space-y-3 text-sm'>
                <div className='flex justify-between gap-4'>
                  <span className='text-muted-foreground'>Subtotal</span>
                  <span className='font-medium'>
                    {formatMoney({ amount: subtotal, currency: 'IDR' })}
                  </span>
                </div>
                <div className='flex justify-between gap-4'>
                  <span className='text-muted-foreground'>Pengiriman</span>
                  <span className='font-medium'>Dihitung nanti</span>
                </div>
                {appliedDiscount ? (
                  <div className='flex justify-between gap-4'>
                    <span className='text-muted-foreground'>
                      Diskon {appliedDiscount.code}
                    </span>
                    <span className='font-medium text-emerald-600'>
                      -
                      {formatMoney({ amount: discountAmount, currency: 'IDR' })}
                    </span>
                  </div>
                ) : null}
              </div>
              <Separator className='my-4' />
              <div className='flex justify-between gap-4 text-base font-semibold'>
                <span>Total</span>
                <span>{formatMoney({ amount: total, currency: 'IDR' })}</span>
              </div>
              <Button className='mt-5 w-full'>Checkout</Button>
            </aside>
          </div>
        )}
      </section>
    </ShopPageShell>
  )
}
