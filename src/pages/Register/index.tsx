import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { registerSchema } from "@/lib/validations/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof registerSchema>
export default function Register() {
  const [customError, setCustomError] = useState()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(registerSchema)
  })
  console.log("🚀 ~ file: index.tsx:16 ~ Register ~ errors:", errors)

  function onSubmit(data: Inputs) {
    try {
      console.log("🚀 ~ file: index.tsx:20 ~ onSubmit ~ data:", data)
      /* const response = await LoginApi(data)
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        setUser(data)
        setToken(response.data.token)
        navigate(links.users, { replace: true })
      } */
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          setCustomError(error.response.data.error)
        }
      }
    } finally {
      (setTimeout(() => {
        setCustomError(undefined)
      }, 4000))
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md">
        <legend className="text-2xl font-bold pb-4">Register</legend>
        <Input type="text" placeholder="Username" {...register("username")} />
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
        <Button type="submit">Register</Button>
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
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{customError}</AlertDescription>
            </Alert>
          )
        }
      </form>
    </>
  )
}
