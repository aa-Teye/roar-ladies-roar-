import { Link } from 'react-router-dom'

const socials = [
  { label: 'Instagram', abbr: 'IG', href: '#' },
  { label: 'Facebook', abbr: 'FB', href: '#' },
  { label: 'TikTok', abbr: 'TT', href: '#' },
  { label: 'YouTube', abbr: 'YT', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--plum)', color: '#E7CFDE', paddingTop: 'clamp(60px,7vw,96px)', paddingBottom: '46px' }}>
      <div className="container-rlr">
        <div
          className="grid gap-10 pb-14"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3" aria-label="Home">
              <img
                src="/logo.jpeg"
                alt="RLR Logo"
                className="w-11 h-11 rounded-[13px] object-cover flex-none"
              />
              <span className="flex flex-col leading-tight">
                <b className="font-extrabold text-[15px] tracking-[0.14em] uppercase text-white whitespace-nowrap">Roar Ladies Roar</b>
                <small className="text-[10.5px] tracking-[0.34em] uppercase font-semibold text-white">Ministry</small>
              </span>
            </Link>
            <p className="mt-5 max-w-[300px] text-[15px]" style={{ color: '#C9A9BD' }}>
              A global community of prayerful, passionate, purpose-driven women — on fire for Christ.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map(({ label, abbr, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-btn text-[#E7CFDE] hover:text-white"
                >
                  {abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="text-[12px] tracking-[0.2em] uppercase font-bold mb-5"
              style={{ color: 'var(--rose)' }}
            >
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-[15px] list-none m-0 p-0">
              {[['About', '/about'], ['Conference', '/conference'], ['Connect', '/connect'], ['Give', '/give']].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="transition-colors duration-200 hover:text-white" style={{ color: '#E7CFDE' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gather */}
          <div>
            <h4
              className="text-[12px] tracking-[0.2em] uppercase font-bold mb-5"
              style={{ color: 'var(--rose)' }}
            >
              Gather
            </h4>
            <ul className="flex flex-col gap-3 text-[15px] list-none m-0 p-0" style={{ color: '#E7CFDE' }}>
              <li>Tuesdays · 9 PM</li>
              <li>Thursdays · 9 PM</li>
              <li>Sundays · 9 PM</li>
              <li>
                <Link to="/connect" className="transition-colors duration-200 hover:text-white" style={{ color: '#E7CFDE' }}>
                  Get the link
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach us */}
          <div>
            <h4
              className="text-[12px] tracking-[0.2em] uppercase font-bold mb-5"
              style={{ color: 'var(--rose)' }}
            >
              Reach us
            </h4>
            <ul className="flex flex-col gap-3 text-[15px] list-none m-0 p-0" style={{ color: '#E7CFDE' }}>
              <li>
                Call{' '}
                <a href="tel:0548383543" className="hover:text-white transition-colors duration-200">
                  0548 383 543
                </a>
              </li>
              <li>
                WhatsApp{' '}
                <a href="https://wa.me/233570116830" className="hover:text-white transition-colors duration-200">
                  0570 116 830
                </a>
              </li>
              <li>@Roar ladies Roar</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className="flex flex-wrap justify-between items-center gap-4 py-6"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.12)',
            fontSize: '13.5px',
            color: '#B892A8',
          }}
        >
          <span>© 2026 Roar Ladies Roar Ministry. All rights reserved.</span>
          <span>Ladies on Fire for Christ 🔥</span>
        </div>
      </div>
    </footer>
  )
}
