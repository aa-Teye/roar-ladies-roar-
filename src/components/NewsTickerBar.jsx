import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function NewsTickerBar({ isInline, isSticky }) {
  const location = useLocation()
  const [style, setStyle] = useState({
    display: 'none'
  })

  const headlines = [
    "Welcome to Roar Ladies Roar Ministry — Ladies on Fire for Christ!",
    "Midweek Prayer & Word: Tuesdays at 9:00 PM GMT online",
    "Fellowship & Encouragement: Thursdays at 9:00 PM GMT online",
    "Worship & Teaching: Sundays at 9:00 PM GMT online",
    "Encounter 2026 Conference: Registration is now open! Stand in prayer with over 150 sisters.",
    "Submit your prayer requests or stand in prayer with others on our new interactive Prayer Wall!",
    "Partner with us: Sow a seed on our Give page to support global outreach and leadership training."
  ]

  useEffect(() => {
    if (!isSticky) return
    document.body.classList.add('has-ticker')
    return () => {
      document.body.classList.remove('has-ticker')
    }
  }, [isSticky])

  useEffect(() => {
    if (isInline) return

    const handleScrollAndResize = () => {
      const inlineCrawler = document.getElementById('inline-crawler')
      const footer = document.querySelector('footer')
      
      if (!inlineCrawler) {
        setStyle({ display: 'none' })
        return
      }

      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const viewportBottom = scrollY + viewportHeight

      // Calculate position relative to document
      const inlineRect = inlineCrawler.getBoundingClientRect()
      const inlineY = inlineRect.top + scrollY
      const inlineHeight = inlineRect.height || 46
      const threshold = inlineY - 78 // Header offset

      let footerBottomY = document.documentElement.scrollHeight
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const footerY = footerRect.top + scrollY
        footerBottomY = footerY + footerRect.height
      }

      if (scrollY < threshold) {
        setStyle({ display: 'none' })
      } else if (viewportBottom >= footerBottomY) {
        setStyle({
          position: 'absolute',
          top: `${footerBottomY - inlineHeight}px`,
          bottom: 'auto',
          left: 0,
          right: 0,
          zIndex: 900,
          display: 'flex'
        })
      } else {
        setStyle({
          position: 'fixed',
          bottom: 0,
          top: 'auto',
          left: 0,
          right: 0,
          zIndex: 900,
          display: 'flex'
        })
      }
    }

    const timer = setTimeout(handleScrollAndResize, 100)

    window.addEventListener('scroll', handleScrollAndResize, { passive: true })
    window.addEventListener('resize', handleScrollAndResize, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScrollAndResize)
      window.removeEventListener('resize', handleScrollAndResize)
    }
  }, [isInline, location.pathname])

  if (isInline) {
    return (
      <div 
        id="inline-crawler"
        className="news-ticker-bar" 
        style={{ 
          position: 'relative', 
          width: '100%', 
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '2px solid var(--pink)',
          borderBottom: '2px solid var(--pink)',
          boxShadow: 'none'
        }}
      >
        <div className="strip-track" style={{ animationDuration: '55s' }}>
          {headlines.map((headline, i) => (
            <span key={i} style={{ fontStyle: 'normal', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {headline}
              <i className="not-italic text-[13px] ml-[34px]" style={{ color: 'var(--rose)' }}>✦</i>
            </span>
          ))}
          {/* Duplicate for infinite loop */}
          {headlines.map((headline, i) => (
            <span key={`dup-${i}`} style={{ fontStyle: 'normal', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              {headline}
              <i className="not-italic text-[13px] ml-[34px]" style={{ color: 'var(--rose)' }}>✦</i>
            </span>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="news-ticker-bar" style={style}>
      <div className="strip-track" style={{ animationDuration: '55s' }}>
        {headlines.map((headline, i) => (
          <span key={i} style={{ fontStyle: 'normal', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {headline}
            <i className="not-italic text-[13px] ml-[34px]" style={{ color: 'var(--rose)' }}>✦</i>
          </span>
        ))}
        {/* Duplicate for infinite loop */}
        {headlines.map((headline, i) => (
          <span key={`dup-${i}`} style={{ fontStyle: 'normal', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {headline}
            <i className="not-italic text-[13px] ml-[34px]" style={{ color: 'var(--rose)' }}>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
