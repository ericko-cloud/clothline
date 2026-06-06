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
  discounts: [
    {
      id: 'spring35',
      code: 'SPRING35',
      title: 'Diskon koleksi spring',
      description: 'Potongan untuk koleksi basic, linen, dan outerwear.',
      type: 'percentage',
      value: 35,
      minimumPurchase: { amount: 300000, currency: 'IDR' },
      isActive: true,
    },
    {
      id: 'clothline50',
      code: 'CLOTHLINE50',
      title: 'Voucher belanja pertama',
      description: 'Kode diskon simulasi untuk pelanggan baru Clothline.',
      type: 'fixed',
      value: 50000,
      minimumPurchase: { amount: 250000, currency: 'IDR' },
      isActive: true,
    },
  ],
  featuredProducts: [
    {
      id: 'linen-midi-dress',
      name: 'Linen Midi Dress',
      category: 'Women',
      description:
        'Dress midi ringan dengan potongan santai untuk kerja, brunch, atau agenda akhir pekan.',
      material: '55% linen, 45% rayon',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 24,
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
      description:
        'Kemeja oversized berbahan katun yang mudah dipakai sebagai outer atau atasan utama.',
      material: '100% cotton poplin',
      sizes: ['M', 'L', 'XL'],
      stock: 36,
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
      description:
        'Celana wide leg dengan drape rapi untuk tampilan kantor dan kasual yang tetap nyaman.',
      material: 'Polyester twill stretch',
      sizes: ['S', 'M', 'L'],
      stock: 18,
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
      description:
        'Jaket denim workwear dengan struktur kuat dan kantong fungsional untuk layering harian.',
      material: '12 oz cotton denim',
      sizes: ['M', 'L', 'XL', 'XXL'],
      stock: 12,
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
      description:
        'Setelan anak motif garis yang lembut dan fleksibel untuk aktivitas sepanjang hari.',
      material: 'Cotton jersey',
      sizes: ['2Y', '4Y', '6Y', '8Y'],
      stock: 20,
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
      description:
        'Atasan rib knit dengan siluet clean yang cocok dipadukan dengan denim, rok, atau trouser.',
      material: 'Viscose rib knit blend',
      sizes: ['S', 'M', 'L'],
      stock: 28,
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
