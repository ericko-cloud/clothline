import { type Product } from '@/landing-page/domain/entities/product'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = Product & {
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  increaseItem: (productId: string) => void
  decreaseItem: (productId: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          return { items: [...state.items, { ...product, quantity: 1 }] }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      increaseItem: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseItem: (productId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === productId
                ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'clothline-cart' }
  )
)
