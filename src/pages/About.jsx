import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const values = [
  { title: 'Faith', desc: 'We are rooted in the Word of God, trusting Him in every season of life.' },
  { title: 'Community', desc: 'We believe women grow stronger together — in prayer, in love, in purpose.' },
  { title: 'Excellence', desc: 'We pursue God\'s best in every area — spiritual, personal, and professional.' },
  { title: 'Impact', desc: 'We are called to transform our families, communities, and nations through Christ.' },
]

export default function About() {
  useReveal()

  return (
    <>
      {/* Page hero */}
      <section className="section-rlr" style={{ background: 'var(--blush)', paddingBottom: 'clamp(48px,6vw,90px)' }}>
        <div className="container-rlr" style={{ maxWidth: '800px' }}>
          <span className="eyebrow reveal">About Us</span>
          <h1
            className="display-text mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)', color: 'var(--ink)' }}
          >
            Women on fire.<br />
            <span style={{ color: 'var(--pink)', fontStyle: 'italic' }}>On purpose. On mission.</span>
          </h1>
          <p className="lead-text mt-6 reveal d2">
            Roar Ladies Roar Ministry is a global community of prayerful, passionate and purpose-driven women — growing deeper in God, discovering our purpose, and transforming our world through His love.
          </p>
        </div>
      </section>

      {/* ===== NEWS TICKER PLACEHOLDER ===== */}
      <div id="hero-crawler-placeholder" className="h-[46px]"></div>

      {/* Mission & Vision */}
      <section className="section-rlr">
        <div
          className="container-rlr grid gap-[clamp(34px,5vw,72px)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))' }}
        >
          <div className="reveal">
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-head-h2 mt-4">
              To raise women who roar for Christ.
            </h2>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              We exist to equip and empower women to grow in their relationship with God, walk in their God-given purpose, and impact their world with the love and power of Christ.
            </p>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Our Vision</span>
            <h2 className="section-head-h2 mt-4">
              Global dominance through excellence.
            </h2>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              We envision a generation of women who reflect God's glory, advance His kingdom in every sphere of influence, and transform their communities from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div
          className="container-rlr grid gap-[clamp(34px,5vw,72px)] items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))' }}
        >
          <div className="reveal" style={{ maxWidth: '400px' }}>
            <img
              src="/tracy-portrait.jpeg"
              alt="Lady Pastor Mrs Tracy Anyomi"
              className="w-full object-cover rounded-[26px]"
              style={{ aspectRatio: '3/4', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          <div className="reveal d1">
            <span className="eyebrow">Founder &amp; Convener</span>
            <h2 className="section-head-h2 mt-4">Lady Pastor Mrs Tracy Anyomi</h2>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              Lady Pastor Mrs Tracy Anyomi is a woman of God, a visionary leader, and a passionate advocate for women in ministry. With a burning desire to see women walk fully in their God-given purpose, she founded Roar Ladies Roar Ministry — a global platform where women gather, grow, and go out as ambassadors of Christ.
            </p>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              Under her leadership, the ministry has grown into a vibrant online community meeting three times a week, hosting the annual Encounter Conference, and impacting women across Africa, Europe, and beyond.
            </p>
            <blockquote
              className="mt-6 pl-5 italic"
              style={{ borderLeft: '3px solid var(--pink)', color: 'var(--ink)', fontFamily: 'var(--serif)', fontSize: 'clamp(20px,2vw,26px)', lineHeight: '1.4' }}
            >
              "We are women on fire for Christ — raised to roar with a louder voice, reflecting God's glory and advancing His kingdom."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">What we stand for</span>
            <h2 className="section-head-h2">Our core values</h2>
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
          >
            {values.map(({ title, desc }, i) => (
              <div
                key={title}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2', 'd3'][i]}`}
              >
                <span className="card-num">0{i + 1}</span>
                <h3>{title}</h3>
                <p style={{ color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-rlr text-center" style={{ background: 'var(--plum)', color: '#F7E9F2' }}>
        <div className="narrow-rlr reveal">
          <span className="eyebrow eyebrow-rose eyebrow-center">Ready to join us?</span>
          <h2
            className="display-text text-white mt-5 mb-6"
            style={{ fontSize: 'var(--t-h2)' }}
          >
            Your sisterhood is waiting.
          </h2>
          <p style={{ fontSize: 'var(--t-lead)', color: '#E7CFDE' }}>
            There is a place for you in this community. Come and grow with us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/connect" className="btn btn-primary btn-arrow">Join the community</Link>
            <Link to="/conference" className="btn btn-ghost-light">The Encounter Conference</Link>
          </div>
        </div>
      </section>
    </>
  )
}
