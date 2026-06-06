import { createFileRoute } from '@tanstack/react-router'
import { CategoriesPage } from '@/landing-page/presentation/pages/categories-page'

export const Route = createFileRoute('/categories')({
  component: CategoriesPage,
})
