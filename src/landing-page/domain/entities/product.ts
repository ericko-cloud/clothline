import { type Money } from '../value-objects/money'

export type Product = {
  id: string
  name: string
  category: string
  description?: string
  material?: string
  sizes?: string[]
  stock?: number
  imageUrl: string
  price: Money
  originalPrice?: Money
  badge?: string
  rating: number
  soldCount: number
}
