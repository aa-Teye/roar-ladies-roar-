import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const meetings = [
  { dayKey: 'common.tuesday', defaultDay: 'Tuesday', timeKey: 'connect.tuesdayTime', defaultTime: '9:00 PM', descKey: 'announcement.tuesday', defaultDesc: 'Midweek prayer & word' },
  { dayKey: 'common.thursday', defaultDay: 'Thursday', timeKey: 'connect.thursdayTime', defaultTime: '9:00 PM', descKey: 'announcement.thursday', defaultDesc: 'Fellowship & encouragement' },
  { dayKey: 'common.sunday', defaultDay: 'Sunday', timeKey: 'connect.sundayTime', defaultTime: '9:00 PM', descKey: 'announcement.sunday', defaultDesc: 'Worship & teaching' },
]

const galleryItems = [
  { src: '/gallery-worship-night.JPEG', alt: 'Worship night' },
  { src: '/gallery-worship2.JPEG', alt: 'Women praying' },
  { src: '/gallery-conference-stage.JPEG', alt: 'Conference stage' },
  { src: '/gallery-fellowship.JPEG', alt: 'Fellowship' },
  { src: '/gallery-prayer-circle.JPEG', alt: 'Prayer circle' },
  { src: '/prayer-circle2.JPEG', alt: 'Community gathering' },
]

export default function Connect() {
  useReveal()
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Helper for translating categories dynamically
  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'General': return t('connect.catGeneral', 'General')
      case 'Family': return t('connect.catFamily', 'Family')
      case 'Healing & Health': return t('connect.catHealing', 'Healing & Health')
      case 'Career & Purpose': return t('connect.catCareer', 'Career & Purpose')
      case 'Faith & Growth': return t('connect.catFaith', 'Faith & Growth')
      case 'Marriage & Relationships': return t('connect.catMarriage', 'Marriage & Relationships')
      default: return cat
    }
  }

  // Prayer Wall States & Logic
  const [prayers, setPrayers] = useState(() => {
    const saved = localStorage.getItem('rlr_prayers')
    if (saved) {
      try { return JSON.parse(saved) } catch (e) { }
    }
    return [
      {
        id: 'p1',
        name: 'Rebecca A.',
        category: 'Family',
        text: 'Praying for healing and restoration in my family, especially for my mother who is undergoing surgery next week. I stand on the promise of Jehovah Rapha.',
        count: 24,
        time: '3 hours ago'
      },
      {
        id: 'p2',
        name: 'Dora M.',
        category: 'Faith & Growth',
        text: 'Asking for prayer to rekindle my spiritual fire. I want to grow deeper in intercession and be consistent in my quiet times with God.',
        count: 18,
        time: '6 hours ago'
      },
      {
        id: 'p3',
        name: 'Anonymous',
        category: 'Career & Purpose',
        text: 'I am trusting God for a career breakthrough and direction. I completed my degree but have been waiting for a door to open. Praying for clarity of purpose.',
        count: 31,
        time: '1 day ago'
      }
    ]
  })

  const [prayerForm, setPrayerForm] = useState({ name: '', category: 'General', text: '' })
  const [prayerSubmitted, setPrayerSubmitted] = useState(false)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    localStorage.setItem('rlr_prayers', JSON.stringify(prayers))
  }, [prayers])

  const handlePrayerSubmit = (e) => {
    e.preventDefault()
    if (!prayerForm.text.trim()) return
    const newPrayer = {
      id: 'p_' + Date.now(),
      name: prayerForm.name.trim() || 'Anonymous',
      category: prayerForm.category,
      text: prayerForm.text.trim(),
      count: 1,
      time: 'Just now'
    }
    setPrayers([newPrayer, ...prayers])
    setPrayerForm({ name: '', category: 'General', text: '' })
    setPrayerSubmitted(true)
    setTimeout(() => setPrayerSubmitted(false), 3000)
  }

  // Storing which prayers the current user has stood in prayer for
  const [myPrayed, setMyPrayed] = useState(() => {
    const saved = localStorage.getItem('rlr_my_prayed')
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem('rlr_my_prayed', JSON.stringify(myPrayed))
  }, [myPrayed])

  // Flying hearts state
  const [flyingHearts, setFlyingHearts] = useState([])

  const handlePrayClick = (e, id) => {
    setPrayers(prev => prev.map(p => p.id === id ? { ...p, count: p.count + 1 } : p))
    setMyPrayed(prev => ({ ...prev, [id]: true }))

    const rect = e.currentTarget.getBoundingClientRect()
    const heartId = 'h_' + Date.now() + Math.random()
    const xOffset = Math.random() * 40 - 20
    const newHeart = {
      id: heartId,
      left: e.clientX - rect.left + 'px',
      top: e.clientY - rect.top + 'px',
      xOffset: xOffset + 'px'
    }
    setFlyingHearts(prev => [...prev, newHeart])
    
    setTimeout(() => {
      setFlyingHearts(prev => prev.filter(h => h.id !== heartId))
    }, 1200)
  }

  return (
    <>
      {/* Page hero */}
      <section className="section-rlr" style={{ background: 'var(--blush)', paddingBottom: 'clamp(48px,6vw,80px)' }}>
        <div className="container-rlr" style={{ maxWidth: '760px' }}>
          <span className="eyebrow reveal">{t('nav.connect', 'Connect')}</span>
          <h1
            className="display-text mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)', color: 'var(--ink)' }}
          >
            {t('connect.heroTitle', 'Join a gathering. Find your place.')}
          </h1>
          <p className="lead-text mt-6 reveal d2">
            {t('connect.heroLead', 'Our online meetings are free, open to all women, and full of the presence of God. Find a time that works for you and show up — you will not be the same.')}
          </p>
        </div>
      </section>

      {/* Meeting schedule */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-11 reveal">
            <span className="eyebrow">{t('connect.meetingsTitle', 'Our Meetings')}</span>
            <h2 className="section-head-h2">{t('connect.meetingsSub', 'We meet online three times a week')}</h2>
          </div>
          <div
            className="grid gap-6 mb-10"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))' }}
          >
            {meetings.map(({ dayKey, defaultDay, timeKey, defaultTime, descKey, defaultDesc }, i) => (
              <div
                key={dayKey}
                className={`sched-card reveal ${['', 'd1', 'd2'][i]}`}
              >
                <span className="sched-day">{t(dayKey, defaultDay)}</span>
                <span className="sched-time">{t(timeKey, defaultTime)}</span>
                <span style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '6px' }}>{t(descKey, defaultDesc)}</span>
              </div>
            ))}
          </div>
          <div
            className="card-rlr flex flex-wrap items-center justify-between gap-6 reveal"
            style={{ background: 'var(--blush)' }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-h3)' }}>{t('connect.getLinkTitle', 'Get the meeting link')}</h3>
              <p className="mt-2" style={{ color: 'var(--muted)', fontSize: '16px' }}>
                {t('connect.getLinkDesc', 'Fill in the form below or reach us via WhatsApp to receive the link.')}
              </p>
            </div>
            <a
              href="https://wa.me/233570116830"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('common.whatsappUs', 'WhatsApp us')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div
          className="container-rlr grid gap-[clamp(34px,5vw,72px)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))' }}
        >
          {/* Form */}
          <div className="reveal">
            <span className="eyebrow">{t('connect.messageTitle', 'Send a message')}</span>
            <h2 className="section-head-h2 mt-4">{t('connect.messageSub', "We'd love to hear from you")}</h2>

            {submitted ? (
              <div
                className="mt-8 p-8 rounded-[26px] text-center"
                style={{ background: '#fff', border: '1px solid var(--line)' }}
              >
                <p style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--ink)', fontWeight: '600' }}>
                  {t('connect.messageSuccess', 'Message received! 🙏')}
                </p>
                <p className="mt-3" style={{ color: 'var(--muted)' }}>
                  {t('connect.messageSuccessDesc', "Thank you for reaching out. We'll be in touch shortly.")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-5"
              >
                {[
                  { id: 'name', label: t('connect.fullName', 'Full name'), type: 'text', placeholder: t('connect.fullName', 'Full name') },
                  { id: 'email', label: t('connect.email', 'Email address'), type: 'email', placeholder: 'your@email.com' },
                  { id: 'phone', label: t('connect.phone', 'Phone / WhatsApp'), type: 'tel', placeholder: '+233 000 000 000' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label
                      htmlFor={id}
                      className="text-[13px] font-bold tracking-[0.1em] uppercase"
                      style={{ color: 'var(--ink)' }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required
                      value={form[id]}
                      onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                      className="w-full px-5 py-4 rounded-[14px] text-[16px] outline-none transition-all duration-200"
                      style={{
                        background: '#fff',
                        border: '1.5px solid var(--line)',
                        color: 'var(--ink)',
                        fontFamily: 'var(--sans)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--pink)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[13px] font-bold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--ink)' }}
                  >
                    {t('connect.message', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={t('connect.messagePlaceholder', 'How can we help you?')}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-5 py-4 rounded-[14px] text-[16px] outline-none transition-all duration-200 resize-none"
                    style={{
                      background: '#fff',
                      border: '1.5px solid var(--line)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--sans)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--pink)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--line)')}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-arrow self-start mt-2">
                  {t('connect.sendMessage', 'Send message')}
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="reveal d1">
            <span className="eyebrow">{t('connect.contactTitle', 'Contact details')}</span>
            <h2 className="section-head-h2 mt-4">{t('connect.reachDirectly', 'Reach us directly')}</h2>
            <div className="flex flex-col gap-6 mt-8">
              {[
                { label: t('footer.call', 'Call'), value: '0548 383 543', href: 'tel:0548383543' },
                { label: t('footer.whatsapp', 'WhatsApp'), value: '0570 116 830', href: 'https://wa.me/233570116830' },
                { label: 'Instagram / Facebook / YouTube', value: '@Roar ladies Roar', href: '#' },
                { label: 'TikTok', value: '@Roar_ladies Roar', href: '#' },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p
                    className="text-[12px] font-bold tracking-[0.2em] uppercase mb-1"
                    style={{ color: 'var(--rose)' }}
                  >
                    {label}
                  </p>
                  <a
                    href={href}
                    className="text-[18px] font-semibold transition-colors duration-200 hover:text-[color:var(--pink)]"
                    style={{ color: 'var(--ink)', fontFamily: 'var(--serif)' }}
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Wall */}
      <section className="section-rlr" id="prayer-wall" style={{ borderTop: '1px solid var(--line)', background: 'var(--paper)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mb-12 reveal">
            <span className="eyebrow">{t('connect.prayerWallTitle', 'RLR Prayer Wall')}</span>
            <h2 className="section-head-h2">{t('connect.prayerWallSub', 'Stand in prayer with your sisters')}</h2>
            <p className="lead-text mt-4">
              {t('connect.prayerWallLead', '"For where two or three gather in my name, there am I with them." — Matthew 18:20. Submit your request or lift up a sister in prayer today.')}
            </p>
          </div>

          <div
            className="grid gap-[clamp(34px,5vw,72px)] items-start"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))' }}
          >
            {/* Submit Form */}
            <div className="card-rlr reveal" style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-h3)', marginTop: 0 }}>{t('connect.submitRequest', 'Submit Request')}</h3>
              <p className="mb-6 mt-2 text-[14px]" style={{ color: 'var(--muted)' }}>
                {t('connect.submitRequestDesc', 'Your request will be posted on the wall. You can post anonymously.')}
              </p>

              {prayerSubmitted ? (
                <div className="py-8 text-center bg-[color:var(--blush)] rounded-[14px] border border-[color:var(--line)]">
                  <p className="text-[20px] font-bold" style={{ color: 'var(--pink)' }}>{t('connect.postedSuccess', 'Request Posted! 🙏')}</p>
                  <p className="text-[14px] mt-2 text-gray-600">{t('connect.postedSuccessDesc', 'Sisters are standing in prayer with you.')}</p>
                </div>
              ) : (
                <form onSubmit={handlePrayerSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="p-name" className="text-[12px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink)' }}>{t('connect.nameOptional', 'Name (Optional)')}</label>
                    <input
                      id="p-name"
                      type="text"
                      placeholder="e.g. Grace"
                      value={prayerForm.name}
                      onChange={(e) => setPrayerForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-[11px] outline-none"
                      style={{ border: '1.5px solid var(--line)', background: '#fff', fontSize: '15px' }}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="p-cat" className="text-[12px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink)' }}>{t('connect.category', 'Category')}</label>
                    <select
                      id="p-cat"
                      value={prayerForm.category}
                      onChange={(e) => setPrayerForm(f => ({ ...f, category: e.target.value }))}
                      className="w-full px-4 py-3 rounded-[11px] outline-none"
                      style={{ border: '1.5px solid var(--line)', background: '#fff', fontSize: '15px' }}
                    >
                      {['General', 'Family', 'Healing & Health', 'Career & Purpose', 'Faith & Growth', 'Marriage & Relationships'].map(cat => (
                        <option key={cat} value={cat}>{getCategoryLabel(cat)}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="p-text" className="text-[12px] font-bold uppercase tracking-wider" style={{ color: 'var(--ink)' }}>{t('connect.prayerRequest', 'Prayer Request')}</label>
                    <textarea
                      id="p-text"
                      rows={4}
                      required
                      placeholder={t('connect.prayerPlaceholder', 'What are you trusting God for?')}
                      value={prayerForm.text}
                      onChange={(e) => setPrayerForm(f => ({ ...f, text: e.target.value }))}
                      className="w-full px-4 py-3 rounded-[11px] outline-none resize-none"
                      style={{ border: '1.5px solid var(--line)', background: '#fff', fontSize: '15px' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-2 justify-center w-full">
                    {t('connect.postRequest', 'Post Prayer Request')}
                  </button>
                </form>
              )}
            </div>

            {/* Prayer Feed */}
            <div className="flex flex-col gap-6 reveal d1">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-2">
                {['All', 'General', 'Family', 'Healing & Health', 'Career & Purpose', 'Faith & Growth'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className="pill cursor-pointer"
                    style={{
                      background: filter === cat ? 'var(--pink)' : 'var(--blush)',
                      color: filter === cat ? '#fff' : 'var(--magenta)',
                      border: 'none',
                      padding: '6px 14px',
                      fontSize: '12.5px'
                    }}
                  >
                    {cat === 'All' ? t('connect.filterAll', 'All') : getCategoryLabel(cat)}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-5">
                {prayers
                  .filter(p => filter === 'All' || p.category === filter || (filter === 'Healing & Health' && p.category === 'Healing') || (filter === 'Faith & Growth' && p.category === 'Faith & Growth'))
                  .map(p => (
                    <div
                      key={p.id}
                      className="card-rlr"
                      style={{ 
                        background: '#fff', 
                        padding: '28px', 
                        position: 'relative',
                        overflow: 'hidden',
                        borderColor: myPrayed[p.id] ? 'var(--pink)' : 'var(--line)'
                      }}
                    >
                      <div className="flex justify-between items-start gap-4 flex-wrap mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-bold text-[18px]" style={{ color: 'var(--ink)' }}>
                            {p.name === 'Anonymous' ? t('connect.anonymous', 'Anonymous') : p.name}
                          </span>
                          <span className="text-[13px]" style={{ color: 'var(--muted)' }}>
                            • {p.time === 'Just now' ? t('connect.justNow', 'Just now') : p.time}
                          </span>
                        </div>
                        <span 
                          className="pill text-[11px]" 
                          style={{ background: 'var(--blush)', color: 'var(--magenta)', padding: '4px 10px' }}
                        >
                          {getCategoryLabel(p.category)}
                        </span>
                      </div>
                      
                      <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.65', marginBottom: '20px' }}>
                        {p.text}
                      </p>

                      <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: 'var(--line)' }}>
                        <span className="text-[13px] font-semibold" style={{ color: 'var(--muted)' }}>
                          {t('connect.sistersPrayed', '{{count}} sisters prayed', { count: p.count })}
                        </span>
                        
                        <button
                          onClick={(e) => handlePrayClick(e, p.id)}
                          className="btn btn-ghost btn-sm"
                          style={{
                            borderColor: myPrayed[p.id] ? 'var(--pink)' : 'var(--line)',
                            color: myPrayed[p.id] ? 'var(--pink)' : 'var(--ink)',
                            padding: '8px 18px',
                            background: myPrayed[p.id] ? 'var(--blush)' : 'transparent',
                            position: 'relative'
                          }}
                        >
                          {myPrayed[p.id] ? t('connect.stoodInPrayer', '❤️ Stood in Prayer') : t('connect.standInPrayer', '🙏 Stand in Prayer')}
                          
                          {/* Floating hearts */}
                          {flyingHearts.map(heart => (
                            <span
                              key={heart.id}
                              className="floating-heart"
                              style={{
                                left: heart.left,
                                top: heart.top,
                                '--x-offset': heart.xOffset
                              }}
                            >
                              ❤️
                            </span>
                          ))}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-rlr" id="gallery">
        <div className="container-rlr">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-9 reveal">
            <div>
              <span className="eyebrow">{t('connect.galleryTitle', 'Community gallery')}</span>
              <h2 className="section-head-h2">{t('connect.gallerySub', 'Moments of grace')}</h2>
            </div>
          </div>
          <div
            className="grid gap-4 reveal d1"
            style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))' }}
          >
            {galleryItems.map((item, i) => (
              <img
                key={i}
                src={item.src}
                alt={item.alt}
                className="w-full object-cover rounded-[14px]"
                style={{ aspectRatio: '1/1' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
