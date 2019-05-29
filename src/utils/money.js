// @flow

export const dollarsFromCents = (cents, minimumFractionDigits = 0) => {
  const dollars = cents / 100
  if (Intl && Intl.NumberFormat) {
    const options = {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits,
    }
    return Intl.NumberFormat('en-US', options).format(dollars)
  }
  return `$${dollars}`
}
