import { CatalogSection } from '../components/catalog-section'
import { ShopPageShell } from '../components/shop-page-shell'
import { useLandingPage } from '../hooks/use-landing-page'

export function CatalogPage() {
  const { featuredProducts } = useLandingPage()

  return (
    <ShopPageShell>
      <section className='border-b'>
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <p className='text-sm font-medium tracking-[0.16em] text-muted-foreground uppercase'>
            Katalog
          </p>
          <h1 className='mt-2 text-4xl font-semibold tracking-normal'>
            Semua produk Clothline
          </h1>
          <p className='mt-4 max-w-2xl text-base leading-7 text-muted-foreground'>
            Pilih produk favoritmu, tekan ikon keranjang, lalu produk akan
            langsung masuk ke menu keranjang.
          </p>
        </div>
      </section>
      <CatalogSection products={featuredProducts} />
    </ShopPageShell>
  )
}
