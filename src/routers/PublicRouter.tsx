
import { useAuth } from "@/provider/AuthProvider"
import { Navigate } from "react-router-dom"

type PublicRouterProps = {
  children: React.ReactNode
}

export default function PublicRouter({ children }: PublicRouterProps) {
  const { userData } = useAuth()
  return userData ? <Navigate replace to='/' /> : children
}