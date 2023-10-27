import { Home } from '@/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} >
          
        </Route>

      </Routes>
    </BrowserRouter>
  )
}