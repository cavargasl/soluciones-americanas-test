import { AuthProvider } from "./provider/AuthProvider"
import Router from "./routers"

function App() {

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
