import { Home } from '@/Layout'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('@/pages/Login'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} >
          <Route index element={<h1>Home View</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<h1>Register view</h1>} />
          <Route path="users" element={<h1>Users view</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}