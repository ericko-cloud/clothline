import { createFileRoute } from '@tanstack/react-router'
import { CartPage } from '@/landing-page/presentation/pages/cart-page'

export const Route = createFileRoute('/cart')({
  component: CartPage,
})
