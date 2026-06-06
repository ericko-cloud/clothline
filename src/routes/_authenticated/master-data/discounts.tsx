import { createFileRoute } from '@tanstack/react-router'
import { MasterDiscounts } from '@/features/master-data/discounts'

export const Route = createFileRoute('/_authenticated/master-data/discounts')({
  component: MasterDiscounts,
})
