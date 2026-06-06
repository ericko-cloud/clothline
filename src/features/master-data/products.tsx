import { useState } from 'react'
import { type Product } from '@/landing-page/domain/entities/product'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { useMasterDataStore } from '@/landing-page/presentation/stores/master-data-store'
import { Edit, Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
  sizes: '',
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
    sizes: form.sizes
      .split(',')
      .map((size) => size.trim())
      .filter(Boolean),
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
    sizes: product.sizes?.join(', ') ?? '',
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
  const { categories, products, addProduct, updateProduct, removeProduct } =
    useMasterDataStore()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<ProductForm>(emptyForm)

  const editingProduct = products.find((product) => product.id === editingId)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const payload = formToProduct(form)

    if (editingProduct) {
      updateProduct({ ...payload, id: editingProduct.id })
    } else {
      addProduct(payload)
    }

    setEditingId(null)
    setForm(emptyForm)
  }

  const handleEdit = (product: Product) => {
    setEditingId(product.id)
    setForm(productToForm(product))
  }

  return (
    <MasterPageShell
      title='Master Produk'
      description='Kelola produk yang tampil di katalog landing page dan simulasi keranjang.'
    >
      <div className='grid gap-4 xl:grid-cols-[420px_1fr]'>
        <Card>
          <CardHeader>
            <CardTitle>
              {editingProduct ? 'Ubah Produk' : 'Tambah Produk'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-1'>
                <div className='space-y-2'>
                  <Label htmlFor='product-name'>Nama produk</Label>
                  <Input
                    id='product-name'
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
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
                <div className='space-y-2'>
                  <Label htmlFor='product-image'>URL gambar</Label>
                  <Input
                    id='product-image'
                    type='url'
                    value={form.imageUrl}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        imageUrl: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2 sm:col-span-2 xl:col-span-1'>
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
                <div className='space-y-2'>
                  <Label htmlFor='product-material'>Bahan</Label>
                  <Input
                    id='product-material'
                    value={form.material}
                    placeholder='Cotton, linen, rayon'
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        material: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-sizes'>Ukuran</Label>
                  <Input
                    id='product-sizes'
                    value={form.sizes}
                    placeholder='S, M, L, XL'
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        sizes: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-stock'>Stok tersedia</Label>
                  <Input
                    id='product-stock'
                    type='number'
                    min='0'
                    value={form.stock}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        stock: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-badge'>Badge</Label>
                  <Input
                    id='product-badge'
                    value={form.badge}
                    placeholder='New, Sale, Best Seller'
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        badge: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-price'>Harga</Label>
                  <Input
                    id='product-price'
                    type='number'
                    min='0'
                    value={form.price}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        price: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-original-price'>Harga coret</Label>
                  <Input
                    id='product-original-price'
                    type='number'
                    min='0'
                    value={form.originalPrice}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        originalPrice: event.target.value,
                      }))
                    }
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-rating'>Rating</Label>
                  <Input
                    id='product-rating'
                    type='number'
                    min='0'
                    max='5'
                    step='0.1'
                    value={form.rating}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        rating: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='product-sold-count'>Terjual</Label>
                  <Input
                    id='product-sold-count'
                    type='number'
                    min='0'
                    value={form.soldCount}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        soldCount: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>
              <div className='flex gap-2'>
                <Button type='submit'>
                  <Plus className='size-4' />
                  {editingProduct ? 'Simpan' : 'Tambah'}
                </Button>
                {editingProduct ? (
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => {
                      setEditingId(null)
                      setForm(emptyForm)
                    }}
                  >
                    Batal
                  </Button>
                ) : null}
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Produk</CardTitle>
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
      </div>
    </MasterPageShell>
  )
}
