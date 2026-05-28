import { type Category } from './category'
import { type Product } from './product'
import { type Testimonial } from './testimonial'

export type LandingPageContent = {
  categories: Category[]
  featuredProducts: Product[]
  testimonials: Testimonial[]
}
