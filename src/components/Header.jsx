import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const navItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.about', to: '/about' },
  { labelKey: 'nav.conference', to: '/conference' },
  { labelKey: 'nav.connect', to: '/connect' },
  { labelKey: 'nav.give', to: '/give' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (localStorage.getItem('theme') === null && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ]

  const currentLang = (i18n.resolvedLanguage || i18n.language || 'en').substring(0, 2).toUpperCase()

  const changeLanguage = (code) => {
    console.log('[Translation] Changing language to:', code)
    i18n.changeLanguage(code)
    setLangMenuOpen(false)
  }

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!langMenuOpen) return
    const handleOutsideClick = () => setLangMenuOpen(false)
    window.addEventListener('click', handleOutsideClick)
    return () => window.removeEventListener('click', handleOutsideClick)
  }, [langMenuOpen])

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
          <img
            src="/logo.jpeg"
            alt="RLR Logo"
            className="w-11 h-11 rounded-[13px] object-cover flex-none"
            style={{ boxShadow: '0 8px 20px -8px rgba(164, 24, 124, 0.6)' }}
          />
          <span className="flex flex-col leading-tight">
            <b className="font-extrabold text-[15px] tracking-[0.14em] uppercase whitespace-nowrap" style={{ color: 'var(--ink)' }}>
              Roar Ladies Roar
            </b>
            <small className="text-[10.5px] tracking-[0.34em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
              {t('nav.ministry', 'Ministry')}
            </small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navItems.map(({ labelKey, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-item-rlr text-[15px] font-semibold px-4 py-2 transition-colors duration-200 ${
                      isActive
                        ? 'active text-[color:var(--magenta)]'
                        : 'hover:text-[color:var(--magenta)]'
                    }`
                  }
                  style={{ color: 'var(--ink)' }}
                >
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          {/* Custom Language Globe Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setLangMenuOpen(!langMenuOpen)
              }}
              className="flex items-center justify-center gap-1 md:gap-1.5 px-1.5 md:px-2.5 h-9 md:h-11 rounded-[9px] md:rounded-[11px] border cursor-pointer transition-all duration-200 hover:border-[color:var(--pink)]"
              style={{ 
                borderColor: 'var(--line)', 
                background: 'var(--paper)',
                color: 'var(--ink)'
              }}
              aria-label="Select Language"
              title="Select Language"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span className="text-[10px] md:text-[12px] font-bold tracking-wider">{currentLang}</span>
            </button>

            {langMenuOpen && (
              <div 
                className="absolute right-0 mt-2 py-2 w-40 rounded-[12px] border z-[70]"
                style={{
                  background: 'var(--paper)',
                  borderColor: 'var(--line)',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="flex items-center gap-3 w-full px-4 py-2 text-left text-[14px] font-semibold hover:bg-[color:var(--blush)] hover:text-[color:var(--magenta)] transition-colors duration-150"
                    style={{ color: 'var(--ink)' }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-[9px] md:rounded-[11px] border cursor-pointer transition-all duration-200 hover:border-[color:var(--pink)] flex-none"
            style={{ 
              borderColor: 'var(--line)', 
              background: 'var(--paper)',
              color: 'var(--ink)'
            }}
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <Link to="/connect" className="btn btn-primary btn-sm hidden md:inline-flex">
            {t('common.joinUs')}
          </Link>
          <button
            id="nav-toggle-btn"
            className={`md:hidden flex items-center justify-center flex-col gap-[4px] md:gap-[5px] w-9 h-9 md:w-11 md:h-11 rounded-[9px] md:rounded-[11px] border cursor-pointer transition-colors duration-200 ${menuOpen ? 'nav-open' : ''}`}
            style={{ 
              borderColor: 'var(--line)',
              background: 'var(--paper)',
              color: 'var(--ink)'
            }}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-bar bar-1" />
            <span className="nav-toggle-bar bar-2" />
            <span className="nav-toggle-bar bar-3" />
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
          {navItems.map(({ labelKey, to }) => (
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
                {t(labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/connect"
          onClick={closeMenu}
          className="btn btn-primary mt-4 w-full"
        >
          {t('common.joinUs')}
        </Link>
      </div>
    </header>
  )
}
