import { Home } from '@/Layout'
import ListUsers from '@/pages/ListUsers'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import NewUser from '@/pages/newUser'
import { links } from '@/types'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={links.home} element={<Home />} >
          <Route index element={<h1>Home View</h1>} />
          <Route path={links.login} element={<PublicRouter><Login /></PublicRouter>} />
          <Route path={links.register} element={<PublicRouter><Register /></PublicRouter>} />
          <Route path={links.newUser} element={<NewUser />} />
          <Route path={links.users} element={<PrivateRouter><ListUsers /></PrivateRouter>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}