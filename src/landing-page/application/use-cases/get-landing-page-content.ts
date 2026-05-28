import { LandingPageRepositoryImpl } from '@/landing-page/data/repositories/landing-page-repository-impl'

const repository = new LandingPageRepositoryImpl()

export function getLandingPageContent() {
  return repository.getContent()
}
