import { Button } from "@/components/ui/Button";
import { useAuth } from "@/provider/AuthProvider";
import { User, links } from "@/types";
import { Outlet, useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "home",
    path: links.home,
  },
  {
    name: "login",
    path: links.login,
  },
  {
    name: "register",
    path: links.register,
  },
  {
    name: "new user",
    path: links.newUser,
  },
  {
    name: "list of users",
    path: links.users,
  },
]
function disabledLink(link: string, userData?: User) {
  if (link === links.users && !userData) return true
  if (link === links.login && userData) return true
  if (link === links.register && userData) return true
  return false
}

export default function Home() {
  const navigate = useNavigate()
  const { userData, setToken, setUser } = useAuth()

  function logout() {
    localStorage.removeItem("token")
    setToken("")
    setUser(undefined)
    navigate(links.login, { replace: true })
  }

  return (
    <div className="grid grid-cols-[min-content,1fr] md:grid-cols-[250px,1fr]">
      <aside className="h-screen bg-muted p-8 px-5 md:px-8">
        <nav>
          <ul>
            {
              navItems.map(item => (
                <li key={item.path}>
                  <Button disabled={disabledLink(item.path, userData)} className="w-full" variant={"link"} onClick={() => navigate(item.path)} data-cy={item.path}>
                    {item.name}
                  </Button>
                </li>
              ))
            }
          </ul>
          {userData && <Button onClick={() => logout()} className="w-full mt-4" data-cy="logout">Logout</Button>}
        </nav>
      </aside>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  )
}
