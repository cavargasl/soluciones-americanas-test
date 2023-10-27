import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Link, Outlet } from "react-router-dom";

const navItems = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "login",
    path: "/login",
  },
  {
    name: "register",
    path: "/register",
  },
  {
    name: "list of users",
    path: "/users",
  },
]
export default function Home() {
  return (
    <div className="grid grid-cols-[min-content,1fr] md:grid-cols-[250px,1fr]">
      <aside className="h-screen bg-muted p-8 px-5 md:px-8">
        <nav>
          <ul>
            {
              navItems.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={cn(buttonVariants({ variant: "link" }), "w-full")}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </aside>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  )
}
