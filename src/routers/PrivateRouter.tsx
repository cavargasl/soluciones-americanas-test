import { useAuth } from "@/provider/AuthProvider"
import { Navigate } from "react-router-dom"

type PrivateRouterProps = {
  children: React.ReactNode
}
export default function PrivateRouter({ children }: PrivateRouterProps) {
  const { userData } = useAuth()
  return userData ? children : <Navigate to="/login" />
}