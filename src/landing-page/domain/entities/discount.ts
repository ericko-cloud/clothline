import { type Money } from '../value-objects/money'

export type DiscountType = 'percentage' | 'fixed'

export type Discount = {
  id: string
  code: string
  title: string
  description: string
  type: DiscountType
  value: number
  minimumPurchase: Money
  isActive: boolean
}
