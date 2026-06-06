import { CategorySection } from '../components/category-section'
import { ShopPageShell } from '../components/shop-page-shell'
import { useLandingPage } from '../hooks/use-landing-page'

export function CategoriesPage() {
  const { categories } = useLandingPage()

  return (
    <ShopPageShell>
      <section className='border-b bg-muted/35'>
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
            Kategori
          </p>
          <h1 className='mt-2 text-4xl font-semibold tracking-normal'>
            Temukan koleksi berdasarkan kebutuhan
          </h1>
        </div>
      </section>
      <CategorySection categories={categories} />
    </ShopPageShell>
  )
}
