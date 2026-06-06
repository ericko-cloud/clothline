import { useMemo } from 'react'
import { Link } from '@tanstack/react-router'
import { formatMoney } from '@/landing-page/domain/value-objects/money'
import { useMasterDataStore } from '@/landing-page/presentation/stores/master-data-store'
import {
  BadgePercent,
  CircleDollarSign,
  LayoutGrid,
  PackagePlus,
  Shirt,
  Tags,
  Ticket,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ConfigDrawer } from '@/components/config-drawer'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'

export function Dashboard() {
  const categories = useMasterDataStore((state) => state.categories)
  const products = useMasterDataStore((state) => state.products)
  const discounts = useMasterDataStore((state) => state.discounts)

  const activeDiscounts = discounts.filter((discount) => discount.isActive)
  const catalogValue = products.reduce(
    (total, product) => total + product.price.amount,
    0
  )
  const bestProducts = [...products]
    .sort((first, second) => second.soldCount - first.soldCount)
    .slice(0, 5)
  const categorySummary = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        productCount: products.filter(
          (product) => product.category === category.name
        ).length,
      })),
    [categories, products]
  )

  return (
    <>
      <Header>
        <Search className='me-auto' />
        <ThemeSwitch />
        <ConfigDrawer />
        <ProfileDropdown />
      </Header>

      <Main className='space-y-6'>
        <div className='flex flex-col justify-between gap-4 md:flex-row md:items-end'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>
              Dashboard Clothline
            </h1>
            <p className='text-muted-foreground'>
              Ringkasan data katalog, kategori, dan kode diskon untuk simulasi
              landing page.
            </p>
          </div>
          <Button asChild>
            <Link to='/catalog'>
              <LayoutGrid className='size-4' />
              Lihat Landing Catalog
            </Link>
          </Button>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
          <SummaryCard
            title='Total Produk'
            value={products.length.toString()}
            description='Produk tampil di katalog landing page'
            icon={Shirt}
          />
          <SummaryCard
            title='Total Kategori'
            value={categories.length.toString()}
            description='Kategori belanja yang bisa dipilih customer'
            icon={Tags}
          />
          <SummaryCard
            title='Diskon Aktif'
            value={activeDiscounts.length.toString()}
            description={`${discounts.length} kode tersimpan di master diskon`}
            icon={BadgePercent}
          />
          <SummaryCard
            title='Nilai Katalog'
            value={formatMoney({ amount: catalogValue, currency: 'IDR' })}
            description='Akumulasi harga produk simulasi'
            icon={CircleDollarSign}
          />
        </div>

        <div className='grid gap-4 lg:grid-cols-[1fr_360px]'>
          <Card>
            <CardHeader>
              <CardTitle>Produk Terlaris Simulasi</CardTitle>
              <CardDescription>
                Diurutkan dari nilai terjual pada Master Produk.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {bestProducts.map((product) => (
                <div
                  key={product.id}
                  className='flex items-center justify-between gap-4 rounded-lg border p-3'
                >
                  <div className='flex min-w-0 items-center gap-3'>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className='size-12 rounded-md object-cover'
                    />
                    <div className='min-w-0'>
                      <p className='truncate font-medium'>{product.name}</p>
                      <p className='text-sm text-muted-foreground'>
                        {product.category} · {formatMoney(product.price)}
                      </p>
                    </div>
                  </div>
                  <Badge variant='secondary'>{product.soldCount} terjual</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aksi Cepat</CardTitle>
              <CardDescription>
                Tambah data yang langsung memengaruhi landing page.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              <QuickAction
                to='/master-data/categories'
                title='Master Kategori'
                description='Kelola section kategori'
                icon={Tags}
              />
              <QuickAction
                to='/master-data/products'
                title='Master Produk'
                description='Kelola katalog dan keranjang'
                icon={PackagePlus}
              />
              <QuickAction
                to='/master-data/discounts'
                title='Master Diskon'
                description='Kelola kode diskon checkout'
                icon={Ticket}
              />
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-4 lg:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Produk per Kategori</CardTitle>
              <CardDescription>
                Pastikan tiap kategori memiliki produk yang relevan.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              {categorySummary.map((category) => (
                <div
                  key={category.id}
                  className='flex items-center justify-between gap-4'
                >
                  <div>
                    <p className='font-medium'>{category.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {category.description}
                    </p>
                  </div>
                  <Badge>{category.productCount} produk</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kode Diskon</CardTitle>
              <CardDescription>
                Kode aktif bisa digunakan customer di halaman keranjang.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-3'>
              {discounts.map((discount) => (
                <div
                  key={discount.id}
                  className='flex items-start justify-between gap-4 rounded-lg border p-3'
                >
                  <div>
                    <div className='flex flex-wrap items-center gap-2'>
                      <p className='font-semibold'>{discount.code}</p>
                      <Badge
                        variant={discount.isActive ? 'default' : 'secondary'}
                      >
                        {discount.isActive ? 'Aktif' : 'Nonaktif'}
                      </Badge>
                    </div>
                    <p className='mt-1 text-sm text-muted-foreground'>
                      {discount.title}
                    </p>
                  </div>
                  <p className='shrink-0 text-sm font-medium'>
                    {discount.type === 'percentage'
                      ? `${discount.value}%`
                      : formatMoney({
                          amount: discount.value,
                          currency: 'IDR',
                        })}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Main>
    </>
  )
}

type SummaryCardProps = {
  title: string
  value: string
  description: string
  icon: React.ElementType
}

function SummaryCard({
  title,
  value,
  description,
  icon: Icon,
}: SummaryCardProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <Icon className='size-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  )
}

type QuickActionProps = {
  to:
    | '/master-data/categories'
    | '/master-data/products'
    | '/master-data/discounts'
  title: string
  description: string
  icon: React.ElementType
}

function QuickAction({ to, title, description, icon: Icon }: QuickActionProps) {
  return (
    <Button
      variant='outline'
      className='h-auto w-full justify-start gap-3 p-3 text-left'
      asChild
    >
      <Link to={to}>
        <span className='flex size-9 shrink-0 items-center justify-center rounded-md bg-muted'>
          <Icon className='size-4' />
        </span>
        <span>
          <span className='block font-medium'>{title}</span>
          <span className='block text-xs font-normal text-muted-foreground'>
            {description}
          </span>
        </span>
      </Link>
    </Button>
  )
}
