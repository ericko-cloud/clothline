export type Money = {
  amount: number
  currency: 'IDR'
}

export function formatMoney(money: Money) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: money.currency,
    maximumFractionDigits: 0,
  }).format(money.amount)
}
