import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { registerSchema } from "@/lib/validations/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerUser } from "./services";

type Inputs = z.infer<typeof registerSchema>
export default function Register() {
  const [customError, setAlert] = useState<{ message: string, type: "error" | "success" }>()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
    resolver: zodResolver(registerSchema)
  })
  const { isPending, mutate } = useMutation({
    mutationFn: registerUser,
  })
  function onSubmit({ email, password, username }: Inputs) {
    mutate({ email, password, username }, {
      onSuccess: () => {
        reset()
        //optional chaining in react-query
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
        }, 4000)
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
        <legend className="text-2xl font-bold pb-4">Register</legend>
        <Input type="text" placeholder="Username" {...register("username")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
        <Button type="submit" disabled={isPending}>Register</Button>
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
