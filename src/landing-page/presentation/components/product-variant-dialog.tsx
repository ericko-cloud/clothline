import { useState } from 'react'
import { type Product } from '@/landing-page/domain/entities/product'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useCartStore } from '../stores/cart-store'

type ProductVariantDialogProps = {
  product: Product
  trigger: React.ReactNode
}

export function ProductVariantDialog({
  product,
  trigger,
}: ProductVariantDialogProps) {
  const colors = product.colors?.length ? product.colors : ['Default']
  const sizes = product.sizes?.length ? product.sizes : ['One Size']
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product, { color: selectedColor, size: selectedSize })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pilih warna dan ukuran</DialogTitle>
          <DialogDescription>
            {product.name} · {formatMoney(product.price)}
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-5'>
          <div>
            <p className='mb-2 text-sm font-medium'>Warna</p>
            <div className='flex flex-wrap gap-2'>
              {colors.map((color) => (
                <Button
                  key={color}
                  type='button'
                  variant={selectedColor === color ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className='mb-2 text-sm font-medium'>Ukuran</p>
            <div className='flex flex-wrap gap-2'>
              {sizes.map((size) => (
                <Button
                  key={size}
                  type='button'
                  variant={selectedSize === size ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <p className='text-sm text-muted-foreground'>
            Stok tersedia: {product.stock ?? 0}
          </p>
        </div>

        <DialogFooter>
          <Button
            onClick={handleAddToCart}
            disabled={(product.stock ?? 0) === 0}
          >
            <ShoppingBag className='size-4' />
            Tambah ke Keranjang
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
