import { useState } from 'react'
import { type Category } from '@/landing-page/domain/entities/category'
import { useMasterDataStore } from '@/landing-page/presentation/stores/master-data-store'
import { Edit, Plus, Trash2 } from 'lucide-react'
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
  description: '',
  imageUrl: '',
}

type CategoryForm = typeof emptyForm

export function MasterCategories() {
  const { categories, addCategory, updateCategory, removeCategory } =
    useMasterDataStore()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<CategoryForm>(emptyForm)

  const editingCategory = categories.find(
    (category) => category.id === editingId
  )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (editingCategory) {
      updateCategory({ ...editingCategory, ...form })
    } else {
      addCategory(form)
    }

    setEditingId(null)
    setForm(emptyForm)
  }

  const handleEdit = (category: Category) => {
    setEditingId(category.id)
    setForm({
      name: category.name,
      description: category.description,
      imageUrl: category.imageUrl,
    })
  }

  return (
    <MasterPageShell
      title='Master Kategori'
      description='Kelola kategori yang tampil di section kategori landing page.'
    >
      <div className='grid gap-4 lg:grid-cols-[380px_1fr]'>
        <Card>
          <CardHeader>
            <CardTitle>
              {editingCategory ? 'Ubah Kategori' : 'Tambah Kategori'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <div className='space-y-2'>
                <Label htmlFor='category-name'>Nama kategori</Label>
                <Input
                  id='category-name'
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
                <Label htmlFor='category-description'>Deskripsi</Label>
                <Textarea
                  id='category-description'
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
                <Label htmlFor='category-image'>URL gambar</Label>
                <Input
                  id='category-image'
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
              <div className='flex gap-2'>
                <Button type='submit'>
                  <Plus className='size-4' />
                  {editingCategory ? 'Simpan' : 'Tambah'}
                </Button>
                {editingCategory ? (
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
            <CardTitle>Data Kategori</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Deskripsi</TableHead>
                  <TableHead className='text-right'>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className='flex items-center gap-3'>
                        <img
                          src={category.imageUrl}
                          alt={category.name}
                          className='size-12 rounded-md object-cover'
                        />
                        <span className='font-medium'>{category.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className='max-w-[360px] whitespace-normal text-muted-foreground'>
                      {category.description}
                    </TableCell>
                    <TableCell>
                      <div className='flex justify-end gap-2'>
                        <Button
                          variant='outline'
                          size='icon'
                          aria-label={`Ubah ${category.name}`}
                          onClick={() => handleEdit(category)}
                        >
                          <Edit className='size-4' />
                        </Button>
                        <Button
                          variant='outline'
                          size='icon'
                          aria-label={`Hapus ${category.name}`}
                          onClick={() => removeCategory(category.id)}
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
