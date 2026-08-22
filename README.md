# TroveBazaar POS

Frontend for **TroveBazaar**, a multi-branch point-of-sale system for secondhand clothing retail (*ropa de paca*).

An offline-first PWA that runs in the phone's browser. The cashier scans a QR code to add an item at its current price tier, closes the ticket, and reconciles the drawer at end of shift. No app install, no dedicated hardware.

> **Status:** early development. Requirements gathering in progress.

---

## Tech stack

### Core

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Vite** | Build tool and dev server |

### State and data

| Technology | Purpose |
|---|---|
| **TanStack Query** | Server state, caching, mutation persistence |
| **TanStack Router** | Type-safe routing |
| **Zustand** | Local cart state only |

TanStack Query's mutation persistence is the backbone of the offline sync layer, not an optional extra.

### Offline support

| Technology | Purpose |
|---|---|
| **vite-plugin-pwa** (Workbox) | Service worker and app shell caching |
| **Dexie.js** | IndexedDB wrapper for the outbox queue |

A sale is written to IndexedDB first with a client-generated `client_sale_id`, queued, and synced when connectivity returns. The server enforces uniqueness on that id, so retries are idempotent and can never duplicate a ticket.

### Scanning

| Technology | Purpose |
|---|---|
| **BarcodeDetector API** | Native browser QR decoding |
| **@zxing/browser** | Fallback for browsers without native support |

### Forms and UI

| Technology | Purpose |
|---|---|
| **Tailwind CSS v4** | Styling |
| **shadcn/ui** | Component primitives |
| **React Hook Form** | Form state |
| **Zod** | Schema validation, shared with API contracts |
| **Recharts** | Dashboard charts |

Touch targets are deliberately larger than default. This is operated one-handed, at speed, at a counter.

### Printing

Price tag sheets are laid out with CSS `@media print` and `@page`. QR images are generated server-side.

### Infrastructure

| Technology | Purpose |
|---|---|
| **Docker** | Multi-stage build, static output |
| **GitHub Actions** | CI — typecheck, lint, tests |
| **Dokploy + Traefik** | Deployment and reverse proxy |

---

## Design notes

**Scanning the same code repeatedly increments quantity** rather than adding duplicate rows.

**Price tiers carry an assigned colour** so the cashier can confirm the scan at a glance without reading the amount.

**The app must remain usable with no network.** A POS that stops working when the wifi drops is not a POS.

---

## Related repositories

- [`trovebazaar-api`](https://github.com/rey0x-dev/trovebazaar-api) — Backend API
