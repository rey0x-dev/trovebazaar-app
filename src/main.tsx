import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "@/app/router"
import "@/styles/index.css"

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { network } = await import("virtual:msw")
    const { handlers } = await import("@/mocks/handlers")

    network.configure({ handlers })
    await network.enable()
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
})
