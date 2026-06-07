export type SizeGuideType =
  | 'tops'
  | 'dress'
  | 'bottoms'
  | 'denim'
  | 'outerwear'
  | 'kids'
  | 'activewear'
  | 'accessories'

export type SizeGuide = {
  id: string
  name: string
  columns: string[]
  rows: Record<string, string>[]
}
