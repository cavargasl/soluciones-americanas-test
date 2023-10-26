import App from '@/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" >
          <Route index element={<App />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}