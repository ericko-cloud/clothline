import { useMemo, useState } from 'react'
import { type Product } from '@/landing-page/domain/entities/product'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ProductCard } from './product-card'

type CatalogSectionProps = {
  initialCategory?: string
  products: Product[]
}

const statusFilters = ['All', 'Sale', 'New', 'Best Seller'] as const
const allCategoriesValue = 'all-categories'

export function CatalogSection({
  initialCategory,
  products,
}: CatalogSectionProps) {
  const [statusFilter, setStatusFilter] =
    useState<(typeof statusFilters)[number]>('All')
  const [categoryFilter, setCategoryFilter] = useState(
    initialCategory ?? allCategoriesValue
  )
  const [searchQuery, setSearchQuery] = useState('')
  const categories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [products]
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    return products.filter((product) => {
      const matchesStatus =
        statusFilter === 'All' ||
        (statusFilter === 'Sale' &&
          (product.badge === 'Sale' || product.originalPrice)) ||
        product.badge === statusFilter

      const matchesCategory =
        categoryFilter === allCategoriesValue ||
        product.category === categoryFilter

      const matchesSearch =
        !normalizedSearch ||
        [
          product.name,
          product.category,
          product.description,
          product.material,
          product.badge,
        ]
          .filter(Boolean)
          .some((value) => value?.toLowerCase().includes(normalizedSearch))

      return matchesStatus && matchesCategory && matchesSearch
    })
  }, [categoryFilter, products, searchQuery, statusFilter])
  const activeFilterLabel =
    categoryFilter === allCategoriesValue
      ? statusFilter
      : `${statusFilter} / ${categoryFilter}`

  return (
    <section id='catalog' className='border-y bg-muted/35'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end'>
          <div>
            <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
              Catalog
            </p>
            <h2 className='mt-2 text-3xl font-semibold'>
              Produk pilihan minggu ini
            </h2>
          </div>
          <div className='flex flex-col gap-3 lg:items-end'>
            <div className='relative w-full sm:w-[320px]'>
              <Search className='absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground' />
              <Input
                value={searchQuery}
                placeholder='Cari produk...'
                className='ps-9'
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <div className='flex flex-wrap items-center gap-2'>
              {statusFilters.map((filter) => (
                <Button
                  key={filter}
                  variant={filter === statusFilter ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setStatusFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger size='sm' className='w-[180px]'>
                  <SelectValue placeholder='Kategori' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={allCategoriesValue}>
                    Semua kategori
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 ? (
          <div className='mt-10 rounded-lg border bg-background p-8 text-center text-sm text-muted-foreground'>
            Belum ada produk untuk filter {activeFilterLabel}
            {searchQuery.trim() ? ` dengan kata "${searchQuery.trim()}".` : '.'}
          </div>
        ) : null}
      </div>
    </section>
  )
}
