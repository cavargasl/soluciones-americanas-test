import { Home } from '@/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} >
          <Route index element={<h1>Home view</h1>} />
          <Route path="login" element={<h1>Login view</h1>} />
          <Route path="register" element={<h1>Register view</h1>} />
          <Route path="users" element={<h1>Users view</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}