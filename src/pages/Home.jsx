import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const testimonies = [
  {
    quote: "This ministry rekindled my prayer life. I found a sisterhood that holds me up and a purpose I had buried for years.",
    name: "Adaeze O.",
    location: "Lagos, Nigeria"
  },
  {
    quote: "I joined feeling alone. Today I lead a small group of women in my city. Roar Ladies Roar gave me my voice.",
    name: "Grace M.",
    location: "Accra, Ghana"
  },
  {
    quote: "The Encounter Conference was a turning point. I left renewed, bold and on fire for what God has called me to do.",
    name: "Ruth A.",
    location: "London, UK"
  }
]

/* ---------- Marquee Strip ---------- */
function MarqueeStrip() {
  const words = ['Prayer', 'Fellowship', 'Empowerment', 'Worship', 'Purpose']
  return (
    <div className="overflow-hidden py-[18px]" style={{ background: 'var(--plum)', color: '#fff' }}>
      <div className="strip-track">
        {[...words, ...words].map((w, i) => (
          <span key={i}>
            {w}
            {i < words.length * 2 - 1 && <i className="not-italic text-[14px] ml-[34px]" style={{ color: 'var(--rose)' }}>✦</i>}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Pillar Card ---------- */
function PillarCard({ num, title, desc, delay = '' }) {
  return (
    <article className={`card-rlr hover-card reveal ${delay}`}>
      <span className="card-num">{num}</span>
      <h3>{title}</h3>
      <p style={{ color: 'var(--muted)' }}>{desc}</p>
    </article>
  )
}

/* ---------- Schedule Card ---------- */
function SchedCard({ day, time, desc, delay = '' }) {
  return (
    <div className={`sched-card reveal ${delay}`}>
      <span className="sched-day">{day}</span>
      <span className="sched-time">{time}</span>
      <span style={{ color: 'var(--muted)', fontSize: '15px', marginTop: '6px' }}>{desc}</span>
    </div>
  )
}

/* ---------- Testimony Card ---------- */
function TestiCard({ quote, name, location }) {
  return (
    <figure className="card-rlr flex flex-col justify-between gap-6" style={{ margin: 0, minHeight: '240px' }}>
      <p className="testi-quote">"{quote}"</p>
      <figcaption className="flex items-center gap-4">
        <span className="testi-avatar" />
        <b className="flex flex-col font-bold text-[15px]">
          {name}
          <small className="font-medium text-[13px] mt-0.5" style={{ color: 'var(--muted)' }}>{location}</small>
        </b>
      </figcaption>
    </figure>
  )
}

export default function Home() {
  useReveal()
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-rlr" style={{ paddingTop: 'clamp(40px,5vw,72px)', paddingBottom: 'clamp(48px,6vw,90px)' }}>
        <div
          className="container-rlr grid gap-[clamp(36px,5vw,80px)] items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))' }}
        >
          {/* Copy */}
          <div>
            <span className="eyebrow reveal">A global sisterhood on fire</span>
            <h1 className="hero-title reveal d1">
              Roar, Ladies.<br />
              <span style={{ color: 'var(--pink)', fontStyle: 'italic' }}>Roar.</span>
            </h1>
            <p className="lead-text reveal d2" style={{ maxWidth: '520px' }}>
              A global community of prayerful, passionate and purpose-driven women — growing deeper in God, discovering our purpose, and transforming our world through His love.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 reveal d3">
              <Link to="/connect" className="btn btn-primary btn-arrow">Join the community</Link>
              <Link to="/conference" className="btn btn-ghost">The Encounter Conference</Link>
            </div>
            <p
              className="mt-8 text-[13px] font-bold tracking-[0.18em] uppercase reveal d4"
              style={{ color: 'var(--magenta)' }}
            >
              Ladies on Fire for Christ · Global dominance through excellence
            </p>
          </div>

          {/* Media */}
          <div className="relative reveal d2" style={{ maxWidth: '460px', width: '100%', marginInline: 'auto' }}>
            <img
              src="/worship-hero.JPEG"
              alt="Women in Worship"
              className="w-full object-cover rounded-[26px]"
              style={{ aspectRatio: '4/5', boxShadow: 'var(--shadow-lg)' }}
            />
            <div
              className="absolute flex items-center gap-4 bg-white rounded-[18px]"
              style={{ left: '-26px', bottom: '38px', padding: '18px 22px', boxShadow: 'var(--shadow)' }}
            >
              <span className="font-serif font-bold text-[40px] leading-none" style={{ color: 'var(--pink)', fontFamily: 'var(--serif)' }}>3×</span>
              <span className="text-[13px] font-semibold leading-[1.3]" style={{ color: 'var(--ink)' }}>
                online gatherings<br />every week
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <MarqueeStrip />

      {/* ===== WELCOME ===== */}
      <section className="section-rlr">
        <div
          className="container-rlr grid gap-[clamp(34px,5vw,80px)] items-start"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))' }}
        >
          <div className="reveal">
            <span className="eyebrow">Welcome</span>
            <h2
              className="mt-5"
              style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-h2)', letterSpacing: '-0.01em' }}
            >
              A home for women who are ready to grow, serve and thrive.
            </h2>
          </div>
          <div className="reveal d1">
            <p style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              We are a community of women passionate about deepening our relationship with God and living out our faith with purpose and passion. Our ministry is built on the foundation of prayer, fellowship and empowerment — a place where women grow, serve and thrive together.
            </p>
            <p
              className="flex flex-col leading-[1.2] mt-8"
              style={{ fontFamily: 'var(--serif)', fontSize: '26px', color: 'var(--ink)', fontWeight: '600' }}
            >
              Lady Pastor Mrs Tracy Anyomi
              <span
                className="font-sans text-[13px] tracking-[0.16em] uppercase font-bold mt-1"
                style={{ color: 'var(--pink)' }}
              >
                Founder &amp; Convener
              </span>
            </p>
            <Link to="/about" className="textlink mt-5 block">Read our story</Link>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">What we are built on</span>
            <h2 className="section-head-h2">Three pillars hold us together</h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))' }}>
            <PillarCard
              num="01"
              title="Prayer"
              desc="We cultivate a deeper prayer life — meeting God consistently and interceding for one another, our families and the nations."
            />
            <PillarCard
              num="02"
              title="Fellowship"
              desc="We foster meaningful relationships, gathering online three times a week to encourage, sharpen and walk with one another."
              delay="d1"
            />
            <PillarCard
              num="03"
              title="Empowerment"
              desc="We equip women to discover their purpose and unleash their potential to impact their communities and the world."
              delay="d2"
            />
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="section-rlr">
        <div
          className="container-rlr grid gap-[clamp(34px,5vw,72px)] items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))' }}
        >
          <div className="reveal" style={{ maxWidth: '380px' }}>
            <img
              src="/tracy-portrait.jpeg"
              alt="Lady Pastor Mrs Tracy Anyomi"
              className="w-full object-cover rounded-[26px]"
              style={{ aspectRatio: '3/4', boxShadow: 'var(--shadow)' }}
            />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Founder &amp; Convener</span>
            <blockquote
              className="display-text my-6"
              style={{ fontSize: 'clamp(26px,3vw,40px)', lineHeight: '1.22', fontStyle: 'italic', color: 'var(--ink)', margin: '24px 0 26px' }}
            >
              "We are women on fire for Christ — raised to roar with a louder voice, reflecting God's glory and advancing His kingdom."
            </blockquote>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: '600' }}>
              Lady Pastor Mrs Tracy Anyomi
            </p>
            <p className="text-[15px] mb-5" style={{ color: 'var(--muted)' }}>
              Founder &amp; Convener, Roar Ladies Roar Ministry
            </p>
            <Link to="/about" className="textlink">Meet our founder</Link>
          </div>
        </div>
      </section>

      {/* ===== CONFERENCE TEASER ===== */}
      <section className="section-rlr" style={{ background: 'var(--plum)', color: '#F7E9F2' }}>
        <div
          className="container-rlr grid gap-[clamp(36px,5vw,72px)] items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))' }}
        >
          <div className="reveal">
            <span className="eyebrow eyebrow-rose">The Annual Encounter Conference</span>
            <h2
              className="display-text text-white mt-5 mb-6"
              style={{ fontSize: 'var(--t-h2)' }}
            >
              A sacred space to encounter God's presence.
            </h2>
            <p className="lead-text mb-8" style={{ color: '#E7CFDE' }}>
              Our annual gathering is designed for spiritual renewal — where women experience God, are equipped to live boldly, and are sent out to pursue their God-given purpose.
            </p>
            <Link to="/conference" className="btn btn-primary btn-arrow">Explore the conference</Link>
          </div>
          <ul className="flex flex-col list-none m-0 p-0 reveal d1">
            {[
              ['Worship', 'Encounter His presence in deep, unhurried worship.'],
              ['Teaching', 'Be equipped to live out your faith with boldness.'],
              ['Fellowship', 'Build relationships that carry you through the year.'],
            ].map(([title, desc]) => (
              <li key={title} className="conf-point">
                <span className="conf-point-title">{title}</span>
                <span className="conf-point-desc">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SCHEDULE ===== */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-11 reveal">
            <span className="eyebrow">Gather with us online</span>
            <h2 className="section-head-h2">We meet three times a week, 9:00 PM</h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))' }}>
            <SchedCard day="Tuesday" time="9:00 PM" desc="Midweek prayer &amp; word" />
            <SchedCard day="Thursday" time="9:00 PM" desc="Fellowship &amp; encouragement" delay="d1" />
            <SchedCard day="Sunday" time="9:00 PM" desc="Worship &amp; teaching" delay="d2" />
          </div>
          <p
            className="mt-9 flex flex-wrap items-center gap-3 reveal d2"
            style={{ fontSize: 'var(--t-lead)', color: 'var(--muted)' }}
          >
            All gatherings are online and open to women everywhere.{' '}
            <Link to="/connect" className="textlink">Get the meeting link</Link>
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIES ===== */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-12 reveal">
            <span className="eyebrow eyebrow-center">Voices from the community</span>
            <h2 className="section-head-h2">Lives being transformed</h2>
          </div>
          
          <div className="carousel-container reveal">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonies.map((testi, i) => (
                <div key={i} className="carousel-slide px-4">
                  <TestiCard
                    quote={testi.quote}
                    name={testi.name}
                    location={testi.location}
                  />
                </div>
              ))}
            </div>

            {/* Slider Controls */}
            <div className="flex justify-between items-center mt-8 max-w-[220px] mx-auto">
              <button 
                onClick={() => setActiveSlide((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1))}
                className="carousel-nav-btn"
                aria-label="Previous testimony"
              >
                ←
              </button>
              <div className="carousel-dots">
                {testimonies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`carousel-dot ${activeSlide === i ? 'active' : ''}`}
                    aria-label={`Go to testimony ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => setActiveSlide((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1))}
                className="carousel-nav-btn"
                aria-label="Next testimony"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-9 reveal">
            <div>
              <span className="eyebrow">Moments together</span>
              <h2 className="section-head-h2">Our community in worship</h2>
            </div>
            <Link to="/connect" className="textlink">See the gallery</Link>
          </div>
          <div className="gallery-strip reveal d1">
            {[
              { src: '/gallery-worship-night.JPEG', alt: 'Worship night' },
              { src: '/gallery-worship2.JPEG', alt: 'Women praying' },
              { src: '/gallery-conference-stage.JPEG', alt: 'Conference stage' },
              { src: '/gallery-fellowship.JPEG', alt: 'Fellowship' },
            ].map(({ src, alt }, i) => (
              <img
                key={i}
                src={src}
                alt={alt}
                className="w-full object-cover rounded-[14px]"
                style={{ aspectRatio: '3/4' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOIN CTA ===== */}
      <section className="section-rlr text-center">
        <div className="narrow-rlr reveal">
          <span className="eyebrow eyebrow-center">Your place is waiting</span>
          <h2
            className="display-text my-5"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            Come and roar with us.
          </h2>
          <p className="lead-text mx-auto" style={{ maxWidth: '580px' }}>
            Whether you're seeking community, growth or purpose — there is room for you here. Join a gathering this week.
          </p>
          <div className="flex flex-wrap gap-4 mt-9 justify-center">
            <Link to="/connect" className="btn btn-primary btn-arrow">Join the community</Link>
            <Link to="/give" className="btn btn-ghost">Partner with us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
