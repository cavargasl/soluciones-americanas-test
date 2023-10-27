import { Home } from '@/Layout'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { links } from '@/types'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.home} element={<Home />} >
          <Route index element={<h1>Home View</h1>} />
          <Route path={links.login} element={<Login />} />
          <Route path={links.register} element={<Register />} />
          <Route path={links.users} element={<PrivateRouter><h1>Users view</h1></PrivateRouter>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}