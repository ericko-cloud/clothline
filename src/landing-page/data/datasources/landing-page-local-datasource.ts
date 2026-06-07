import { type LandingPageContent } from '@/landing-page/domain/entities/landing-page-content'

export const landingPageLocalDatasource: LandingPageContent = {
  categories: [
    {
      id: 'dress',
      name: 'Dress',
      description: 'Dress harian yang ringan, rapi, dan mudah dipadukan.',
      imageUrl:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'shirt',
      name: 'Shirt',
      description: 'Kemeja dan atasan berkerah untuk kerja hingga kasual.',
      imageUrl:
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'trousers',
      name: 'Trousers',
      description: 'Celana panjang dengan potongan nyaman dan rapi.',
      imageUrl:
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'jacket',
      name: 'Jacket',
      description: 'Outer dan jaket untuk layering harian.',
      imageUrl:
        'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'kidswear',
      name: 'Kidswear',
      description: 'Pakaian anak yang lembut dan fleksibel untuk bergerak.',
      imageUrl:
        'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'knitwear',
      name: 'Knitwear',
      description: 'Rajut ringan untuk tampilan clean dan nyaman.',
      imageUrl:
        'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'skirt',
      name: 'Skirt',
      description: 'Rok dengan siluet modern untuk daily styling.',
      imageUrl:
        'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'blouse',
      name: 'Blouse',
      description: 'Blouse ringan untuk tampilan feminin dan profesional.',
      imageUrl:
        'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'denim',
      name: 'Denim',
      description: 'Denim essentials untuk gaya santai yang tahan lama.',
      imageUrl:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'outerwear',
      name: 'Outerwear',
      description: 'Layer luar yang mudah dipakai untuk banyak kesempatan.',
      imageUrl:
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'activewear',
      name: 'Activewear',
      description: 'Pakaian aktif yang ringan untuk gerak harian.',
      imageUrl:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Aksesori pelengkap outfit agar tampilan lebih utuh.',
      imageUrl:
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
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
      category: 'Dress',
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
      category: 'Shirt',
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
      category: 'Trousers',
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
      category: 'Jacket',
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
      category: 'Kidswear',
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
      category: 'Knitwear',
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
    {
      id: 'pleated-midi-skirt',
      name: 'Pleated Midi Skirt',
      category: 'Skirt',
      description:
        'Rok midi lipit dengan jatuhan ringan untuk gaya kantor, kampus, dan akhir pekan.',
      material: 'Polyester chiffon blend',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 22,
      imageUrl:
        'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=900&q=80',
      price: { amount: 229000, currency: 'IDR' },
      badge: 'New',
      rating: 4.7,
      soldCount: 118,
    },
    {
      id: 'silky-office-blouse',
      name: 'Silky Office Blouse',
      category: 'Blouse',
      description:
        'Blouse halus dengan detail clean yang mudah dipadukan dengan trouser atau rok.',
      material: 'Satin polyester',
      sizes: ['S', 'M', 'L'],
      stock: 16,
      imageUrl:
        'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=900&q=80',
      price: { amount: 199000, currency: 'IDR' },
      rating: 4.8,
      soldCount: 142,
    },
    {
      id: 'straight-leg-jeans',
      name: 'Straight Leg Jeans',
      category: 'Denim',
      description:
        'Jeans straight leg warna medium wash untuk tampilan santai yang tetap rapi.',
      material: 'Cotton denim stretch',
      sizes: ['28', '30', '32', '34', '36'],
      stock: 30,
      imageUrl:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
      price: { amount: 299000, currency: 'IDR' },
      originalPrice: { amount: 349000, currency: 'IDR' },
      badge: 'Sale',
      rating: 4.9,
      soldCount: 233,
    },
    {
      id: 'lightweight-trench-coat',
      name: 'Lightweight Trench Coat',
      category: 'Outerwear',
      description:
        'Trench coat ringan dengan potongan longline untuk layering saat cuaca berubah.',
      material: 'Water-repellent twill',
      sizes: ['S', 'M', 'L', 'XL'],
      stock: 10,
      imageUrl:
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80',
      price: { amount: 459000, currency: 'IDR' },
      badge: 'Limited',
      rating: 4.8,
      soldCount: 64,
    },
    {
      id: 'performance-training-set',
      name: 'Performance Training Set',
      category: 'Activewear',
      description:
        'Set activewear dengan bahan cepat kering untuk olahraga ringan dan aktivitas harian.',
      material: 'Nylon spandex dry-fit',
      sizes: ['S', 'M', 'L'],
      stock: 26,
      imageUrl:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      price: { amount: 259000, currency: 'IDR' },
      rating: 4.6,
      soldCount: 98,
    },
    {
      id: 'canvas-everyday-tote',
      name: 'Canvas Everyday Tote',
      category: 'Accessories',
      description:
        'Tote bag kanvas dengan ruang besar untuk membawa kebutuhan kerja dan belanja.',
      material: 'Heavyweight cotton canvas',
      sizes: ['One Size'],
      stock: 40,
      imageUrl:
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      price: { amount: 129000, currency: 'IDR' },
      badge: 'Best Seller',
      rating: 4.9,
      soldCount: 276,
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
