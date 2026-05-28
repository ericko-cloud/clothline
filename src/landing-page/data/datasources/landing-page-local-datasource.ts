import { type LandingPageContent } from '@/landing-page/domain/entities/landing-page-content'

export const landingPageLocalDatasource: LandingPageContent = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      description: 'Dress, blouse, knitwear, dan outer pilihan.',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'men',
      name: 'Men',
      description: 'Kemeja, denim, jaket, dan daily essentials.',
      imageUrl:
        'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'kids',
      name: 'Kids',
      description: 'Pakaian anak yang ringan, lembut, dan aktif.',
      imageUrl:
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
    },
  ],
  featuredProducts: [
    {
      id: 'linen-midi-dress',
      name: 'Linen Midi Dress',
      category: 'Women',
      imageUrl:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
      price: { amount: 289000, currency: 'IDR' },
      originalPrice: { amount: 349000, currency: 'IDR' },
      badge: 'New',
      rating: 4.8,
      soldCount: 184,
    },
    {
      id: 'oversized-cotton-shirt',
      name: 'Oversized Cotton Shirt',
      category: 'Men',
      imageUrl:
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
      price: { amount: 219000, currency: 'IDR' },
      badge: 'Best Seller',
      rating: 4.9,
      soldCount: 312,
    },
    {
      id: 'wide-leg-trousers',
      name: 'Wide Leg Trousers',
      category: 'Women',
      imageUrl:
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
      price: { amount: 249000, currency: 'IDR' },
      rating: 4.7,
      soldCount: 127,
    },
    {
      id: 'denim-work-jacket',
      name: 'Denim Work Jacket',
      category: 'Men',
      imageUrl:
        'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80',
      price: { amount: 379000, currency: 'IDR' },
      originalPrice: { amount: 429000, currency: 'IDR' },
      badge: 'Sale',
      rating: 4.8,
      soldCount: 91,
    },
    {
      id: 'kids-striped-set',
      name: 'Kids Striped Set',
      category: 'Kids',
      imageUrl:
        'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80',
      price: { amount: 159000, currency: 'IDR' },
      rating: 4.6,
      soldCount: 76,
    },
    {
      id: 'ribbed-knit-top',
      name: 'Ribbed Knit Top',
      category: 'Women',
      imageUrl:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
      price: { amount: 179000, currency: 'IDR' },
      badge: 'Limited',
      rating: 4.9,
      soldCount: 205,
    },
  ],
  testimonials: [
    {
      id: 'nadia',
      name: 'Nadia Putri',
      role: 'Repeat customer',
      quote: 'Bahannya nyaman dipakai harian dan ukuran produknya konsisten.',
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80',
    },
    {
      id: 'raka',
      name: 'Raka Pratama',
      role: 'Office casual shopper',
      quote: 'Pilihan kemejanya gampang dipadu buat kerja dan akhir pekan.',
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    },
  ],
}
