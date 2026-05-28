import { type Category } from '@/landing-page/domain/entities/category'

type CategorySectionProps = {
  categories: Category[]
}

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section id='categories' className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
        <div>
          <p className='text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            Category
          </p>
          <h2 className='mt-2 text-3xl font-semibold'>Pilih gaya belanjamu</h2>
        </div>
        <p className='max-w-md text-sm leading-6 text-muted-foreground'>
          Koleksi dipisahkan agar pembeli cepat menemukan outfit yang sesuai
          kebutuhan dan ukuran.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {categories.map((category) => (
          <a
            key={category.id}
            href='#catalog'
            className='group relative min-h-[330px] overflow-hidden rounded-lg bg-muted'
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className='absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent' />
            <div className='absolute inset-x-0 bottom-0 p-5 text-white'>
              <h3 className='text-2xl font-semibold'>{category.name}</h3>
              <p className='mt-2 text-sm leading-6 text-white/75'>
                {category.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
