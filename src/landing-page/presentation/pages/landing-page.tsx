import { CatalogSection } from '../components/catalog-section'
import { CategorySection } from '../components/category-section'
import { HeroSection } from '../components/hero-section'
import { PromoSection } from '../components/promo-section'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { TestimonialSection } from '../components/testimonial-section'
import { useLandingPage } from '../hooks/use-landing-page'

export function LandingPage() {
  const { categories, featuredProducts, testimonials } = useLandingPage()

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategorySection categories={categories} />
        <CatalogSection products={featuredProducts} />
        <PromoSection />
        <TestimonialSection testimonials={testimonials} />
      </main>
      <SiteFooter />
    </div>
  )
}
