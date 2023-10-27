import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { authSchema } from "@/lib/validations/Auth";
import { User, links } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginApi } from "./services";

export default function Login() {
  const navigate = useNavigate()
  const [customError, setCustomError] = useState()
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: zodResolver(authSchema)
  })

  const onSubmit = async (data: User) => {
    try {
      const response = await LoginApi(data)
      if (response.data.token) {
        //localStorage.setItem('token', response.data.token)
        navigate(links.users, { replace: true })
      }
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
        <legend className="text-2xl font-bold pb-4">Login</legend>
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input type="password" placeholder="Password" {...register("password")} />
        <Button type="submit">Login</Button>
        {
          Object.keys(errors).length > 0 && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {errors.email?.message || errors.password?.message}
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
