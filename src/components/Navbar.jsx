import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="font-heading text-xl font-extrabold text-primary">
          Blue Ridge Academy
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-md border border-slate-200 p-2 text-primary md:hidden"
          aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-nav"
        >
          ☰
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-secondary' : 'text-slate-600 hover:text-primary'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium ${
                  isActive ? 'bg-blue-50 text-secondary' : 'text-slate-700 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
