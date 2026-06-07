import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { type Category } from '@/landing-page/domain/entities/category'
import { Button } from '@/components/ui/button'

type CategorySectionProps = {
  categories: Category[]
  limit?: number
  mobileLimit?: number
  showAllLink?: boolean
}

export function CategorySection({
  categories,
  limit,
  mobileLimit,
  showAllLink,
}: CategorySectionProps) {
  const visibleCategories = useMemo(
    () => (limit ? categories.slice(0, limit) : categories),
    [categories, limit]
  )
  const mobileCategories = mobileLimit
    ? visibleCategories.slice(0, mobileLimit)
    : visibleCategories

  return (
    <section
      id='categories'
      className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'
    >
      <div className='mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
        <div>
          <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
            Category
          </p>
          <h2 className='mt-2 text-3xl font-semibold'>Pilih gaya belanjamu</h2>
        </div>
        <div className='flex max-w-md flex-col gap-4 sm:items-end'>
          {showAllLink ? (
            <Button variant='outline' size='sm' asChild>
              <Link to='/categories'>Lihat semua kategori</Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-3 sm:hidden'>
        {mobileCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className='hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
        {visibleCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to='/catalog'
      search={{ category: category.name }}
      className='group relative min-h-[220px] overflow-hidden rounded-lg bg-muted sm:min-h-[330px]'
    >
      <img
        src={category.imageUrl}
        alt={category.name}
        className='absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 p-5 text-white'>
        <h3 className='text-xl font-semibold sm:text-2xl'>{category.name}</h3>
        <p className='mt-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6'>
          {category.description}
        </p>
      </div>
    </Link>
  )
}
