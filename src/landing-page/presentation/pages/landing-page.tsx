import { CatalogSection } from '../components/catalog-section'
import { CategorySection } from '../components/category-section'
import { DiscountCodeSection } from '../components/discount-code-section'
import { HeroSection } from '../components/hero-section'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { TestimonialSection } from '../components/testimonial-section'
import { useLandingPage } from '../hooks/use-landing-page'

export function LandingPage() {
  const { categories, discounts, featuredProducts, testimonials } =
    useLandingPage()

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <SiteHeader />
      <main>
        <HeroSection />
        <CategorySection
          categories={categories}
          limit={4}
          mobileLimit={4}
          showAllLink
        />
        <CatalogSection
          products={featuredProducts}
          mobileLimit={12}
          showAllLink
        />
        <DiscountCodeSection discounts={discounts} />
        <TestimonialSection testimonials={testimonials} />
      </main>
      <SiteFooter />
    </div>
  )
}
