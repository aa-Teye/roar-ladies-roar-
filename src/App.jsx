import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Conference from './pages/Conference'
import Connect from './pages/Connect'
import Give from './pages/Give'

/* ---------- Announcement Bar with live gathering countdown ---------- */
function AnnouncementBar() {
  const [liveStatus, setLiveStatus] = useState({ isLive: false, text: '' })

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date()
      const utcDay = now.getUTCDay()
      const utcHours = now.getUTCHours()
      const utcMinutes = now.getUTCMinutes()
      
      // Tuesday (2), Thursday (4), Sunday (0) at 9:00 PM GMT (UTC+0)
      const meetingDays = [0, 2, 4]
      const isMeetingDay = meetingDays.includes(utcDay)
      
      // Meeting is 9:00 PM to 10:30 PM UTC (21:00 to 22:30)
      const isLiveTime = (utcHours === 21 && utcMinutes >= 0) || (utcHours === 22 && utcMinutes < 30)
      
      if (isMeetingDay && isLiveTime) {
        let topic = 'Online Gathering'
        if (utcDay === 0) topic = 'Sunday Worship & Teaching'
        if (utcDay === 2) topic = 'Tuesday Midweek Prayer & Word'
        if (utcDay === 4) topic = 'Thursday Fellowship & Encouragement'
        
        setLiveStatus({
          isLive: true,
          text: `🔴 LIVE NOW: ${topic} is in progress! Join us online.`
        })
      } else {
        // Calculate next meeting (Tues, Thurs, Sun @ 21:00 UTC)
        let nextMeeting = null
        for (let i = 0; i < 8; i++) {
          const temp = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + i, 21, 0, 0))
          const tempDay = temp.getUTCDay()
          if (meetingDays.includes(tempDay) && temp.getTime() > now.getTime()) {
            nextMeeting = temp
            break
          }
        }
        
        if (nextMeeting) {
          const diffMs = nextMeeting.getTime() - now.getTime()
          const diffHrs = Math.floor(diffMs / (1000 * 60 * 60))
          const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
          
          let timeStr = ''
          if (diffHrs > 24) {
            const days = Math.floor(diffHrs / 24)
            timeStr = `${days} day${days > 1 ? 's' : ''}`
          } else {
            timeStr = `${diffHrs}h ${diffMins}m`
          }
          
          const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
          const nextDayName = dayNames[nextMeeting.getUTCDay()]
          
          setLiveStatus({
            isLive: false,
            text: `Next online gathering: This ${nextDayName} at 9:00 PM GMT (starts in ${timeStr})`
          })
        }
      }
    }
    
    checkStatus()
    const timer = setInterval(checkStatus, 30000) // update every 30 seconds
    return () => clearInterval(timer)
  }, [])

  if (!liveStatus.isLive) {
    return null
  }

  return (
    <div className="announcement-bar">
      <span className="pulse-dot" />
      <span>{liveStatus.text}</span>
      <a 
        href="https://wa.me/233570116830?text=Hello%20RLR%20Ministry,%20please%20send%20me%20the%20link%20for%20the%20active%20gathering!"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm btn-arrow"
        style={{ 
          background: '#fff', 
          color: 'var(--pink)', 
          boxShadow: 'none', 
          padding: '6px 14px', 
          fontSize: '12px', 
          marginLeft: '10px' 
        }}
      >
        Get link
      </a>
    </div>
  )
}

/* ---------- Floating WhatsApp Chat Bubble ---------- */
function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/233570116830?text=Hello%20Roar%20Ladies%20Roar%20Ministry,%20I%20would%20like%20to%20connect%20and%20join%20the%20community!"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-bubble"
      aria-label="Chat with us on WhatsApp"
      title="Connect via WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  )
}

/* ---------- News Ticker Bar (Newsroom-style) ---------- */
function NewsTickerBar() {
  const headlines = [
    "Welcome to Roar Ladies Roar Ministry — Ladies on Fire for Christ!",
    "Midweek Prayer & Word: Tuesdays at 9:00 PM GMT online",
    "Fellowship & Encouragement: Thursdays at 9:00 PM GMT online",
    "Worship & Teaching: Sundays at 9:00 PM GMT online",
    "Encounter 2026 Conference: Registration is now open! Stand in prayer with over 150 sisters.",
    "Submit your prayer requests or stand in prayer with others on our new interactive Prayer Wall!",
    "Partner with us: Sow a seed on our Give page to support global outreach and leadership training."
  ]

  return (
    <div className="news-ticker-bar">
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

function AppContent() {
  const location = useLocation()

  return (
    <>
      <AnnouncementBar />
      <Header />
      <div key={location.pathname} className="page-transition-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/give" element={<Give />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <WhatsAppBubble />
      <NewsTickerBar />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
