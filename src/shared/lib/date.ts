const date = new Intl.DateTimeFormat("es-MX", { 
    day: "numeric", 
    month: "short", 
    year: "numeric",
    timeZone: "America/Mexico_City" })

export function formatShortDate(iso: string): string {
  return date.format(new Date (iso))
}