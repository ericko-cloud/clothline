import { type Product } from '@/landing-page/domain/entities/product'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = Product & {
  cartItemId: string
  selectedColor: string
  selectedSize: string
  quantity: number
}

export type CartSelection = {
  color: string
  size: string
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product, selection?: CartSelection) => void
  removeItem: (cartItemId: string) => void
  increaseItem: (cartItemId: string) => void
  decreaseItem: (cartItemId: string) => void
  clearCart: () => void
}

function createCartItemId(productId: string, selection: CartSelection) {
  return `${productId}-${selection.color}-${selection.size}`
}

function getDefaultSelection(product: Product): CartSelection {
  return {
    color: product.colors?.[0] ?? 'Default',
    size: product.sizes?.[0] ?? 'One Size',
  }
}

function getCartItemId(item: CartItem) {
  return (
    item.cartItemId ??
    createCartItemId(item.id, {
      color: item.selectedColor ?? getDefaultSelection(item).color,
      size: item.selectedSize ?? getDefaultSelection(item).size,
    })
  )
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, selection = getDefaultSelection(product)) =>
        set((state) => {
          const cartItemId = createCartItemId(product.id, selection)
          const existingItem = state.items.find(
            (item) => getCartItemId(item) === cartItemId
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                getCartItemId(item) === cartItemId
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          return {
            items: [
              ...state.items,
              {
                ...product,
                cartItemId,
                selectedColor: selection.color,
                selectedSize: selection.size,
                quantity: 1,
              },
            ],
          }
        }),
      removeItem: (cartItemId) =>
        set((state) => ({
          items: state.items.filter(
            (item) => getCartItemId(item) !== cartItemId
          ),
        })),
      increaseItem: (cartItemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            getCartItemId(item) === cartItemId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseItem: (cartItemId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              getCartItemId(item) === cartItemId
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
