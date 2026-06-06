import { createFileRoute } from '@tanstack/react-router'
import { MasterCategories } from '@/features/master-data/categories'

export const Route = createFileRoute('/_authenticated/master-data/categories')({
  component: MasterCategories,
})
