export function formatRupiah(amount: number) {
  return amount
    .toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace('IDR', '')
    .trim();
}
