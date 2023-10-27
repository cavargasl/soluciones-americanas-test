import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { newUserSchema } from "@/lib/validations/Auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { newUser } from "./services"

type Inputs = z.infer<typeof newUserSchema>
export default function NewUser() {
  const [customError, setAlert] = useState<{ message: string, type: "error" | "success" }>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    resolver: zodResolver(newUserSchema)
  })
  const { isPending, mutate } = useMutation({
    mutationFn: newUser,
  })
  function onSubmit(data: Inputs) {
    mutate(data, {
      onSuccess: (response) => {
        reset()
        //optional chaining in react-query
        setAlert({ message: JSON.stringify(response.data), type: "success" })
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error.response?.status === 400) {
            return setAlert({ message: error.response.data.error, type: "error" })
          }
          return setAlert({ message: "Something went wrong", type: "error" })
        }
      },
      onSettled: () => {
        setTimeout(() => {
          setAlert(undefined)
        }, 5000)
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
        <legend className="text-2xl font-bold pb-4">New User</legend>
        <Input type="text" placeholder="Name" {...register("name")} />
        <Input type="text" placeholder="Job" {...register("job")} />

        <Button type="submit" disabled={isPending}>New User</Button>
        {
          Object.keys(errors).length > 0 && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {Object.values(errors)[0].message}
              </AlertDescription>
            </Alert>
          )
        }
        {
          customError && (
            <Alert variant={customError.type === "error" ? "destructive" : "default"}>
              <AlertTitle>{customError.type === "error" ? 'Error' : 'Success'}</AlertTitle>
              <AlertDescription>{customError.message}</AlertDescription>
            </Alert>
          )
        }
      </form>
    </>
  )
}
