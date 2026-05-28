import { landingPageLocalDatasource } from '../datasources/landing-page-local-datasource'
import { type LandingPageContent } from '@/landing-page/domain/entities/landing-page-content'
import { type LandingPageRepository } from '@/landing-page/domain/repositories/landing-page-repository'

export class LandingPageRepositoryImpl implements LandingPageRepository {
  getContent(): LandingPageContent {
    return landingPageLocalDatasource
  }
}
