import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/shared/ui/button"

export const Route = createFileRoute("/")({
component: HomePage,
})

function HomePage() {
return (
<main className="p-8">
<h1 className="mb-6 text-2xl font-bold">
TroveBazaar
</h1>

  <div className="flex gap-4">
    <Button>
      Boton principal
    </Button>

    <Button variant="outline">
      Botón secundario
    </Button>

    <Button variant="destructive">
      Eliminar
    </Button>

    <Button variant="ghost">
      Cancelar
    </Button>
  </div>
</main>

)
}
