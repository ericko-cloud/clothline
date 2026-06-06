import { useState } from 'react'
import {
  type Discount,
  type DiscountType,
} from '@/landing-page/domain/entities/discount'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { useMasterDataStore } from '@/landing-page/presentation/stores/master-data-store'
import { Edit, Plus, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
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
  code: '',
  title: '',
  description: '',
  type: 'percentage' as DiscountType,
  value: '0',
  minimumPurchase: '0',
  isActive: true,
}

type DiscountForm = typeof emptyForm

function formToDiscount(form: DiscountForm): Omit<Discount, 'id'> {
  return {
    code: form.code.toUpperCase(),
    title: form.title,
    description: form.description,
    type: form.type,
    value: Number(form.value),
    minimumPurchase: { amount: Number(form.minimumPurchase), currency: 'IDR' },
    isActive: form.isActive,
  }
}

function discountToForm(discount: Discount): DiscountForm {
  return {
    code: discount.code,
    title: discount.title,
    description: discount.description,
    type: discount.type,
    value: String(discount.value),
    minimumPurchase: String(discount.minimumPurchase.amount),
    isActive: discount.isActive,
  }
}

export function MasterDiscounts() {
  const { discounts, addDiscount, updateDiscount, removeDiscount } =
    useMasterDataStore()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<DiscountForm>(emptyForm)

  const editingDiscount = discounts.find(
    (discount) => discount.id === editingId
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const payload = formToDiscount(form)

    if (editingDiscount) {
      updateDiscount({ ...payload, id: editingDiscount.id })
    } else {
      addDiscount(payload)
    }

    setEditingId(null)
    setForm(emptyForm)
  }

  const handleEdit = (discount: Discount) => {
    setEditingId(discount.id)
    setForm(discountToForm(discount))
  }

  return (
    <MasterPageShell
      title='Master Diskon'
      description='Kelola kode diskon yang tampil di landing page sebagai simulasi promo.'
    >
      <div className='grid gap-4 lg:grid-cols-[420px_1fr]'>
        <Card>
          <CardHeader>
            <CardTitle>
              {editingDiscount ? 'Ubah Diskon' : 'Tambah Diskon'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-1'>
                <div className='space-y-2'>
                  <Label htmlFor='discount-code'>Kode diskon</Label>
                  <Input
                    id='discount-code'
                    value={form.code}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        code: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='discount-title'>Judul</Label>
                  <Input
                    id='discount-title'
                    value={form.title}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        title: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2 sm:col-span-2 lg:col-span-1'>
                  <Label htmlFor='discount-description'>Deskripsi</Label>
                  <Textarea
                    id='discount-description'
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
                  <Label htmlFor='discount-type'>Tipe diskon</Label>
                  <select
                    id='discount-type'
                    className='h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'
                    value={form.type}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        type: event.target.value as DiscountType,
                      }))
                    }
                  >
                    <option value='percentage'>Persentase</option>
                    <option value='fixed'>Nominal</option>
                  </select>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='discount-value'>Nilai diskon</Label>
                  <Input
                    id='discount-value'
                    type='number'
                    min='0'
                    value={form.value}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        value: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='discount-minimum'>Minimum belanja</Label>
                  <Input
                    id='discount-minimum'
                    type='number'
                    min='0'
                    value={form.minimumPurchase}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        minimumPurchase: event.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className='flex items-center gap-3 pt-6'>
                  <Switch
                    id='discount-active'
                    checked={form.isActive}
                    onCheckedChange={(checked) =>
                      setForm((current) => ({
                        ...current,
                        isActive: checked,
                      }))
                    }
                  />
                  <Label htmlFor='discount-active'>Aktif</Label>
                </div>
              </div>
              <div className='flex gap-2'>
                <Button type='submit'>
                  <Plus className='size-4' />
                  {editingDiscount ? 'Simpan' : 'Tambah'}
                </Button>
                {editingDiscount ? (
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
            <CardTitle>Data Diskon</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kode</TableHead>
                  <TableHead>Diskon</TableHead>
                  <TableHead>Minimum</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className='text-right'>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {discounts.map((discount) => (
                  <TableRow key={discount.id}>
                    <TableCell>
                      <div className='font-semibold'>{discount.code}</div>
                      <div className='text-sm text-muted-foreground'>
                        {discount.title}
                      </div>
                    </TableCell>
                    <TableCell>
                      {discount.type === 'percentage'
                        ? `${discount.value}%`
                        : formatMoney({
                            amount: discount.value,
                            currency: 'IDR',
                          })}
                    </TableCell>
                    <TableCell>
                      {formatMoney(discount.minimumPurchase)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={discount.isActive ? 'default' : 'secondary'}
                      >
                        {discount.isActive ? 'Aktif' : 'Nonaktif'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className='flex justify-end gap-2'>
                        <Button
                          variant='outline'
                          size='icon'
                          aria-label={`Ubah ${discount.code}`}
                          onClick={() => handleEdit(discount)}
                        >
                          <Edit className='size-4' />
                        </Button>
                        <Button
                          variant='outline'
                          size='icon'
                          aria-label={`Hapus ${discount.code}`}
                          onClick={() => removeDiscount(discount.id)}
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
