import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Providers } from "@/app/providers"
import "@/styles/index.css"

async function enableMocking() {
  if (import.meta.env.DEV && import.meta.env.VITE_USE_MOCKS === "true") {
    const { network } = await import("virtual:msw")
    const { handlers } = await import("@/mocks/handlers")

    network.configure({ handlers })
    await network.enable()
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Providers />
    </StrictMode>,
  )
})
