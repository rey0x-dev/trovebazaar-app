const currency = new Intl.NumberFormat("es-MX", { style: "currency",currency:"MXN" })

export function formatMXN(cents: number): string {
  return currency.format(cents/100)
}

// formatPercent(0.16) -> "16 %"