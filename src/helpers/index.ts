export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currrency",
    currency: "USD",
  }).format(amount);
}
