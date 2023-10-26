import { Token, User } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext)
}

type AuthProviderProps = {
  children: React.ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUser] = useState<User>();
  const [token, setToken] = useState<Token>();

  const logOut = () => {
    setUser(undefined)
  }

  useEffect(() => {
    if(userData && token) return setUser(userData)
    if(!token) return setUser(undefined)
  }, [token, userData]);

  const value = {
    userData,
    setToken,
    setUser,
    logOut
  }

  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}