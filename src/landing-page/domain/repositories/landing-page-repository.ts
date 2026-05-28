import { type LandingPageContent } from '../entities/landing-page-content'

export interface LandingPageRepository {
  getContent(): LandingPageContent
}
