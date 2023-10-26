import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" >
          <Route index element={<p>working</p>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}