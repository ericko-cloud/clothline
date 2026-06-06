import { createFileRoute } from '@tanstack/react-router'
import { CatalogPage } from '@/landing-page/presentation/pages/catalog-page'

export const Route = createFileRoute('/catalog')({
  component: CatalogPage,
})
