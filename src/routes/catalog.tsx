import z from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { CatalogPage } from '@/landing-page/presentation/pages/catalog-page'

const catalogSearchSchema = z.object({
  category: z.string().optional().catch(undefined),
})

export const Route = createFileRoute('/catalog')({
  validateSearch: catalogSearchSchema,
  component: CatalogPage,
})
