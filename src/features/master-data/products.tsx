import { useState } from 'react'
import { type Product } from '@/landing-page/domain/entities/product'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { useMasterDataStore } from '@/landing-page/presentation/stores/master-data-store'
import { Edit, Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'
import { MasterPageShell } from './components/master-page-shell'

const emptyForm = {
  name: '',
  category: '',
  description: '',
  material: '',
  colors: '',
  sizes: '',
  sizeGuideType: 'tops',
  stock: '0',
  imageUrl: '',
  price: '0',
  originalPrice: '',
  badge: '',
  rating: '4.8',
  soldCount: '0',
}

type ProductForm = typeof emptyForm

function formToProduct(form: ProductForm): Omit<Product, 'id'> {
  return {
    name: form.name,
    category: form.category,
    description: form.description,
    material: form.material,
    colors: form.colors
      .split(',')
      .map((color) => color.trim())
      .filter(Boolean),
    sizes: form.sizes
      .split(',')
      .map((size) => size.trim())
      .filter(Boolean),
    sizeGuideType: form.sizeGuideType,
    stock: Number(form.stock),
    imageUrl: form.imageUrl,
    price: { amount: Number(form.price), currency: 'IDR' },
    originalPrice: form.originalPrice
      ? { amount: Number(form.originalPrice), currency: 'IDR' }
      : undefined,
    badge: form.badge || undefined,
    rating: Number(form.rating),
    soldCount: Number(form.soldCount),
  }
}

function productToForm(product: Product): ProductForm {
  return {
    name: product.name,
    category: product.category,
    description: product.description ?? '',
    material: product.material ?? '',
    colors: product.colors?.join(', ') ?? '',
    sizes: product.sizes?.join(', ') ?? '',
    sizeGuideType: product.sizeGuideType ?? 'tops',
    stock: String(product.stock ?? 0),
    imageUrl: product.imageUrl,
    price: String(product.price.amount),
    originalPrice: product.originalPrice
      ? String(product.originalPrice.amount)
      : '',
    badge: product.badge ?? '',
    rating: String(product.rating),
    soldCount: String(product.soldCount),
  }
}

export function MasterProducts() {
  const {
    categories,
    products,
    sizeGuides,
    addProduct,
    updateProduct,
    removeProduct,
  } = useMasterDataStore()
  const [open, setOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<ProductForm>(emptyForm)

  const editingProduct = products.find((product) => product.id === editingId)

  const openCreateDialog = () => {
    setEditingId(null)
    setForm(emptyForm)
    setOpen(true)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const payload = formToProduct(form)

    if (editingProduct) {
      updateProduct({ ...payload, id: editingProduct.id })
    } else {
      addProduct(payload)
    }

    setOpen(false)
    setEditingId(null)
    setForm(emptyForm)
  }

  const handleEdit = (product: Product) => {
    setEditingId(product.id)
    setForm(productToForm(product))
    setOpen(true)
  }

  return (
    <MasterPageShell
      title='Master Produk'
      description='Kelola produk yang tampil di katalog landing page dan simulasi keranjang.'
    >
      <Card>
        <CardHeader className='flex flex-row items-center justify-between gap-4'>
          <CardTitle>Data Produk</CardTitle>
          <Button onClick={openCreateDialog}>
            <Plus className='size-4' />
            Tambah
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produk</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Stok</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className='text-right'>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className='size-12 rounded-md object-cover'
                      />
                      <div>
                        <div className='font-medium'>{product.name}</div>
                        {product.badge ? (
                          <Badge variant='secondary' className='mt-1'>
                            {product.badge}
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock ?? 0}</TableCell>
                  <TableCell>{formatMoney(product.price)}</TableCell>
                  <TableCell>{product.rating}</TableCell>
                  <TableCell>
                    <div className='flex justify-end gap-2'>
                      <Button
                        variant='outline'
                        size='icon'
                        aria-label={`Ubah ${product.name}`}
                        onClick={() => handleEdit(product)}
                      >
                        <Edit className='size-4' />
                      </Button>
                      <Button
                        variant='outline'
                        size='icon'
                        aria-label={`Hapus ${product.name}`}
                        onClick={() => removeProduct(product.id)}
                      >
                        <Trash2 className='size-4' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-3xl'>
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? 'Ubah Produk' : 'Tambah Produk'}
            </DialogTitle>
          </DialogHeader>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div className='grid gap-4 sm:grid-cols-2'>
              <ProductTextField
                id='product-name'
                label='Nama produk'
                value={form.name}
                onChange={(value) =>
                  setForm((current) => ({ ...current, name: value }))
                }
                required
              />
              <div className='space-y-2'>
                <Label htmlFor='product-category'>Kategori</Label>
                <select
                  id='product-category'
                  className='h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                  value={form.category}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      category: event.target.value,
                    }))
                  }
                  required
                >
                  <option value=''>Pilih kategori</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <ProductTextField
                id='product-image'
                label='URL gambar'
                type='url'
                value={form.imageUrl}
                onChange={(value) =>
                  setForm((current) => ({ ...current, imageUrl: value }))
                }
                required
              />
              <ProductTextField
                id='product-material'
                label='Bahan'
                placeholder='Cotton, linen, rayon'
                value={form.material}
                onChange={(value) =>
                  setForm((current) => ({ ...current, material: value }))
                }
                required
              />
              <div className='space-y-2 sm:col-span-2'>
                <Label htmlFor='product-description'>Deskripsi produk</Label>
                <Textarea
                  id='product-description'
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                  required
                />
              </div>
              <ProductTextField
                id='product-colors'
                label='Warna'
                placeholder='White, Navy, Black'
                value={form.colors}
                onChange={(value) =>
                  setForm((current) => ({ ...current, colors: value }))
                }
                required
              />
              <ProductTextField
                id='product-sizes'
                label='Ukuran'
                placeholder='S, M, L, XL'
                value={form.sizes}
                onChange={(value) =>
                  setForm((current) => ({ ...current, sizes: value }))
                }
                required
              />
              <div className='space-y-2'>
                <Label htmlFor='product-size-guide'>Tipe size chart</Label>
                <select
                  id='product-size-guide'
                  className='h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                  value={form.sizeGuideType}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      sizeGuideType: event.target.value,
                    }))
                  }
                  required
                >
                  {sizeGuides.map((sizeGuide) => (
                    <option key={sizeGuide.id} value={sizeGuide.id}>
                      {sizeGuide.name}
                    </option>
                  ))}
                </select>
              </div>
              <ProductTextField
                id='product-stock'
                label='Stok tersedia'
                type='number'
                min='0'
                value={form.stock}
                onChange={(value) =>
                  setForm((current) => ({ ...current, stock: value }))
                }
                required
              />
              <ProductTextField
                id='product-badge'
                label='Badge'
                placeholder='New, Sale, Best Seller'
                value={form.badge}
                onChange={(value) =>
                  setForm((current) => ({ ...current, badge: value }))
                }
              />
              <ProductTextField
                id='product-price'
                label='Harga'
                type='number'
                min='0'
                value={form.price}
                onChange={(value) =>
                  setForm((current) => ({ ...current, price: value }))
                }
                required
              />
              <ProductTextField
                id='product-original-price'
                label='Harga coret'
                type='number'
                min='0'
                value={form.originalPrice}
                onChange={(value) =>
                  setForm((current) => ({ ...current, originalPrice: value }))
                }
              />
              <ProductTextField
                id='product-rating'
                label='Rating'
                type='number'
                min='0'
                max='5'
                step='0.1'
                value={form.rating}
                onChange={(value) =>
                  setForm((current) => ({ ...current, rating: value }))
                }
                required
              />
              <ProductTextField
                id='product-sold-count'
                label='Terjual'
                type='number'
                min='0'
                value={form.soldCount}
                onChange={(value) =>
                  setForm((current) => ({ ...current, soldCount: value }))
                }
                required
              />
            </div>
            <DialogFooter>
              <Button type='submit'>
                <Plus className='size-4' />
                {editingProduct ? 'Simpan' : 'Tambah'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </MasterPageShell>
  )
}

type ProductTextFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  max?: string
  min?: string
  placeholder?: string
  required?: boolean
  step?: string
  type?: string
}

function ProductTextField({
  id,
  label,
  value,
  onChange,
  type = 'text',
  ...props
}: ProductTextFieldProps) {
  return (
    <div className='space-y-2'>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
    </div>
  )
}
