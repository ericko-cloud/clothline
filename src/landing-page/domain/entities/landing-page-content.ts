import { type Category } from './category'
import { type Discount } from './discount'
import { type Product } from './product'
import { type Testimonial } from './testimonial'

export type LandingPageContent = {
  categories: Category[]
  discounts: Discount[]
  featuredProducts: Product[]
  testimonials: Testimonial[]
}
