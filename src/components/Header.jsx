import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Conference', to: '/conference' },
  { label: 'Connect', to: '/connect' },
  { label: 'Give', to: '/give' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className="sticky top-0 z-[60] border-b transition-shadow duration-300"
      style={{
        background: 'rgba(254,252,253,0.82)',
        backdropFilter: 'saturate(160%) blur(14px)',
        borderColor: 'var(--line)',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="container-rlr flex items-center justify-between" style={{ height: '78px' }}>
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Roar Ladies Roar Ministry home"
        >
          <span className="logo-mark">RLR</span>
          <span className="flex flex-col leading-tight">
            <b className="font-extrabold text-[15px] tracking-[0.14em] uppercase whitespace-nowrap" style={{ color: 'var(--ink)' }}>
              Roar Ladies Roar
            </b>
            <small className="text-[10.5px] tracking-[0.34em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
              Ministry
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-[15px] font-semibold px-4 py-2 rounded-[9px] transition-colors duration-200 ${
                      isActive
                        ? 'text-[color:var(--magenta)]'
                        : 'hover:text-[color:var(--magenta)] hover:bg-[color:var(--blush)]'
                    }`
                  }
                  style={{ color: 'var(--ink)' }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link to="/connect" className="btn btn-primary btn-sm hidden md:inline-flex">
            Join us
          </Link>
          <button
            id="nav-toggle-btn"
            className={`md:hidden flex items-center justify-center flex-col gap-[5px] w-11 h-11 rounded-[11px] border bg-white cursor-pointer transition-colors duration-200 ${menuOpen ? 'nav-open' : ''}`}
            style={{ borderColor: 'var(--line)' }}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`nav-toggle-bar bar-1 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`nav-toggle-bar bar-2 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`nav-toggle-bar bar-3 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 right-0 z-[55] transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{
          top: '78px',
          background: 'var(--paper)',
          borderBottom: '1px solid var(--line)',
          padding: '18px var(--pad-x) 30px',
          boxShadow: 'var(--shadow)',
        }}
      >
        <ul className="flex flex-col gap-1 list-none m-0 p-0">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 text-[18px] font-semibold rounded-[11px] transition-colors duration-200 ${
                    isActive ? 'text-[color:var(--magenta)]' : 'hover:text-[color:var(--magenta)] hover:bg-[color:var(--blush)]'
                  }`
                }
                style={{ color: 'var(--ink)' }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/connect"
          onClick={closeMenu}
          className="btn btn-primary mt-4 w-full"
        >
          Join us
        </Link>
      </div>
    </header>
  )
}
