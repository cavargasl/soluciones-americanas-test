import { Home } from '@/Layout'
import Login from '@/pages/Login'
import { links } from '@/types'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.home} element={<Home />} >
          <Route index element={<h1>Home View</h1>} />
          <Route path={links.login} element={<Login />} />
          <Route path={links.register} element={<h1>Register view</h1>} />
          <Route path={links.users} element={<h1>Users view</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}