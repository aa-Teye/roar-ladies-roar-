import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const meetings = [
  { day: 'Tuesday', time: '9:00 PM', desc: 'Midweek prayer & word' },
  { day: 'Thursday', time: '9:00 PM', desc: 'Fellowship & encouragement' },
  { day: 'Sunday', time: '9:00 PM', desc: 'Worship & teaching' },
]

const galleryItems = [
  { label: 'worship night' },
  { label: 'women praying' },
  { label: 'conference stage' },
  { label: 'fellowship' },
  { label: 'prayer circle' },
  { label: 'community gathering' },
]

export default function Connect() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Page hero */}
      <section className="section-rlr" style={{ background: 'var(--blush)', paddingBottom: 'clamp(48px,6vw,80px)' }}>
        <div className="container-rlr" style={{ maxWidth: '760px' }}>
          <span className="eyebrow reveal">Connect</span>
          <h1
            className="display-text mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)', color: 'var(--ink)' }}
          >
            Join a gathering.<br />
            <span style={{ color: 'var(--pink)', fontStyle: 'italic' }}>Find your place.</span>
          </h1>
          <p className="lead-text mt-6 reveal d2">
            Our online meetings are free, open to all women, and full of the presence of God. Find a time that works for you and show up — you will not be the same.
          </p>
        </div>
      </section>

      {/* Meeting schedule */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-11 reveal">
            <span className="eyebrow">Our Meetings</span>
            <h2 className="section-head-h2">We meet online three times a week</h2>
          </div>
          <div
            className="grid gap-6 mb-10"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))' }}
          >
            {meetings.map(({ day, time, desc }, i) => (
              <div
                key={day}
                className={`sched-card reveal ${['', 'd1', 'd2'][i]}`}
              >
                <span className="sched-day">{day}</span>
                <span className="sched-time">{time}</span>
                <span style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '6px' }}>{desc}</span>
              </div>
            ))}
          </div>
          <div
            className="card-rlr flex flex-wrap items-center justify-between gap-6 reveal"
            style={{ background: 'var(--blush)' }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-h3)' }}>Get the meeting link</h3>
              <p className="mt-2" style={{ color: 'var(--muted)', fontSize: '16px' }}>
                Fill in the form below or reach us via WhatsApp to receive the link.
              </p>
            </div>
            <a
              href="https://wa.me/233570116830"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
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
            <span className="eyebrow">Send a message</span>
            <h2 className="section-head-h2 mt-4">We'd love to hear from you</h2>

            {submitted ? (
              <div
                className="mt-8 p-8 rounded-[26px] text-center"
                style={{ background: '#fff', border: '1px solid var(--line)' }}
              >
                <p style={{ fontFamily: 'var(--serif)', fontSize: '28px', color: 'var(--ink)', fontWeight: '600' }}>
                  Message received! 🙏
                </p>
                <p className="mt-3" style={{ color: 'var(--muted)' }}>
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-5"
              >
                {[
                  { id: 'name', label: 'Full name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email address', type: 'email', placeholder: 'your@email.com' },
                  { id: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+233 000 000 000' },
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
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
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
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="reveal d1">
            <span className="eyebrow">Contact details</span>
            <h2 className="section-head-h2 mt-4">Reach us directly</h2>
            <div className="flex flex-col gap-6 mt-8">
              {[
                { label: 'Phone', value: '0548 383 543', href: 'tel:0548383543' },
                { label: 'WhatsApp', value: '0570 116 830', href: 'https://wa.me/233570116830' },
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

      {/* Gallery */}
      <section className="section-rlr" id="gallery">
        <div className="container-rlr">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-9 reveal">
            <div>
              <span className="eyebrow">Community gallery</span>
              <h2 className="section-head-h2">Moments of grace</h2>
            </div>
          </div>
          <div
            className="grid gap-4 reveal d1"
            style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))' }}
          >
            {galleryItems.map(({ label }, i) => (
              <div
                key={i}
                className="ph-placeholder"
                data-label={label}
                style={{ aspectRatio: '1/1' }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
