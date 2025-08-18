import { Outlet, Link, NavLink } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold">Ask Vedika</Link>
          <div className="hidden md:flex items-center gap-3 text-sm">
            {['about','gpts','articles','book','viyagita','art','community','contact','membership'].map(x => (
              <NavLink key={x} to={`/${x}`} className={({isActive}) => `px-2 py-1 rounded-md hover:bg-gray-100 ${isActive?'font-semibold':''}`}>{x[0].toUpperCase()+x.slice(1)}</NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Ask Vedika</div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="/privacy">Privacy</a>
            <a className="hover:underline" href="/terms">Terms</a>
            <a className="hover:underline" href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
