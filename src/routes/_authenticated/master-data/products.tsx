import { createFileRoute } from '@tanstack/react-router'
import { MasterProducts } from '@/features/master-data/products'

export const Route = createFileRoute('/_authenticated/master-data/products')({
  component: MasterProducts,
})
