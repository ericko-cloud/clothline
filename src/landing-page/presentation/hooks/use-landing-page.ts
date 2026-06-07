import { landingPageLocalDatasource } from '@/landing-page/data/datasources/landing-page-local-datasource'
import { useMasterDataStore } from '../stores/master-data-store'

export function useLandingPage() {
  const categories = useMasterDataStore((state) =>
    Array.isArray(state.categories)
      ? state.categories
      : landingPageLocalDatasource.categories
  )
  const discounts = useMasterDataStore((state) =>
    Array.isArray(state.discounts)
      ? state.discounts
      : landingPageLocalDatasource.discounts
  )
  const featuredProducts = useMasterDataStore((state) =>
    Array.isArray(state.products)
      ? state.products
      : landingPageLocalDatasource.featuredProducts
  )
  const sizeGuides = useMasterDataStore((state) =>
    Array.isArray(state.sizeGuides)
      ? state.sizeGuides
      : landingPageLocalDatasource.sizeGuides
  )

  return {
    categories,
    discounts,
    featuredProducts,
    sizeGuides,
    testimonials: landingPageLocalDatasource.testimonials,
  }
}
