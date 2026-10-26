
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ApiError } from "@/shared/api/client"
import { useCreateBranch } from "./queries"
import {
  createBranchSchema,
  type CreateBranchInput,
} from "./schemas"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/shared/ui/card"

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/shared/ui/field"

import { Input } from "@/shared/ui/input"
import { Button } from "@/shared/ui/button"

export function BranchForm() {
  const mutation = useCreateBranch()

  const form = useForm<CreateBranchInput>({
    resolver: zodResolver(createBranchSchema),
    defaultValues: {
      name: "",
      location: "",
    },
  })

  function onSubmit(values: CreateBranchInput) {
    mutation.mutate(values, {
      onSuccess: () =>  {
        form.reset()
      },
        onError: (error) => {
          if (error instanceof ApiError && (error.status === 400 || error.status === 409)) {
            form.setError(
            "name",
            { message: "Ya existe una sucursal con ese nombre" },
            { shouldFocus: true },
            )
          }},
      })
  }

  const error = mutation.error
  const isNameConflict = error instanceof ApiError && (error.status === 400 || error.status === 409)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nueva sucursal</CardTitle>
        <CardDescription>
          Registra una sucursal para comenzar a administrarla.
        </CardDescription>
      </CardHeader>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Nombre
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Ej. Coacalco"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>
                    Ubicación
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Ej. coacalco"
                    aria-invalid={fieldState.invalid}
                  />

                  <FieldDescription>
                    Municipio donde se encuentra la sucursal
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </CardContent>

        <CardFooter className="flex flex-col items-stretch gap-3 sm:justify-between">
          {error && !isNameConflict && (
        <p role="alert" className="text-sm text-destructive">
        {error.message}
        </p>
        )}

          <div className="flex justify-end gap-2 sm:ml-auto">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                form.reset()
                mutation.reset()
              }}
            >
              Cancelar
            </Button>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? "Creando…" : "Crear sucursal"}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
