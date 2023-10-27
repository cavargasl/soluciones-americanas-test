
export default function Home() {
  return (
    <div className="grid grid-cols-[300px,1fr]">
      <aside className="h-screen bg-muted p-8">
        <nav>
          <ul>
            <li>home</li>
            <li>login</li>
            <li>register</li>
            <li>list of users</li>
          </ul>
        </nav>
      </aside>
      <main className="p-8">
        working
      </main>
    </div>
  )
}
