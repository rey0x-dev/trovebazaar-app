
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { router } from "./router"

//Crear el cliente
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export function Providers() {
  return (
    //Proporcionar el cliente
    <QueryClientProvider client={queryClient}>
    {/*Renderizar el router*/}
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
