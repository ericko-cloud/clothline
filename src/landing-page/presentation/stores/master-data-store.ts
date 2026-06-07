import { landingPageLocalDatasource } from '@/landing-page/data/datasources/landing-page-local-datasource'
import { type Category } from '@/landing-page/domain/entities/category'
import { type Discount } from '@/landing-page/domain/entities/discount'
import { type Product } from '@/landing-page/domain/entities/product'
import { type SizeGuide } from '@/landing-page/domain/entities/size-guide'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type MasterDataState = {
  categories: Category[]
  products: Product[]
  discounts: Discount[]
  sizeGuides: SizeGuide[]
  addCategory: (category: Omit<Category, 'id'>) => void
  updateCategory: (category: Category) => void
  removeCategory: (categoryId: string) => void
  addProduct: (product: Omit<Product, 'id'>) => void
  updateProduct: (product: Product) => void
  removeProduct: (productId: string) => void
  addDiscount: (discount: Omit<Discount, 'id'>) => void
  updateDiscount: (discount: Discount) => void
  removeDiscount: (discountId: string) => void
}

function createId(prefix: string) {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`
  }

  return `${prefix}-${Date.now()}`
}

export const useMasterDataStore = create<MasterDataState>()(
  persist(
    (set) => ({
      categories: landingPageLocalDatasource.categories,
      products: landingPageLocalDatasource.featuredProducts,
      discounts: landingPageLocalDatasource.discounts,
      sizeGuides: landingPageLocalDatasource.sizeGuides,
      addCategory: (category) =>
        set((state) => ({
          categories: [
            ...state.categories,
            { ...category, id: createId('cat') },
          ],
        })),
      updateCategory: (category) =>
        set((state) => ({
          categories: state.categories.map((item) =>
            item.id === category.id ? category : item
          ),
        })),
      removeCategory: (categoryId) =>
        set((state) => ({
          categories: state.categories.filter((item) => item.id !== categoryId),
        })),
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, id: createId('prd') }],
        })),
      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((item) =>
            item.id === product.id ? product : item
          ),
        })),
      removeProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((item) => item.id !== productId),
        })),
      addDiscount: (discount) =>
        set((state) => ({
          discounts: [
            ...state.discounts,
            { ...discount, id: createId('disc') },
          ],
        })),
      updateDiscount: (discount) =>
        set((state) => ({
          discounts: state.discounts.map((item) =>
            item.id === discount.id ? discount : item
          ),
        })),
      removeDiscount: (discountId) =>
        set((state) => ({
          discounts: state.discounts.filter((item) => item.id !== discountId),
        })),
    }),
    { name: 'clothline-master-data' }
  )
)
