import { createFileRoute } from '@tanstack/react-router'
import { ProductDetailRoutePage } from '@/landing-page/presentation/pages/product-detail-page'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetailRoutePage,
})
