import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const givingOptions = [
  {
    title: 'Monthly Partnership',
    desc: 'Join our circle of faithful partners who sow monthly into the vision of Roar Ladies Roar Ministry. Your consistent giving sustains our online meetings, events, and outreach.',
    highlight: true,
  },
  {
    title: 'One-Time Gift',
    desc: 'Make a one-time donation to support the ministry. Every seed sown — large or small — makes an eternal difference.',
    highlight: false,
  },
  {
    title: 'Conference Sponsorship',
    desc: 'Partner with us to make the Encounter Conference possible. Your sponsorship helps cover venue, equipment, travel, and ministry resources.',
    highlight: false,
  },
]

const whyGive = [
  { num: '01', title: 'Sustain Online Meetings', desc: 'Your giving keeps our three weekly gatherings running — prayer, fellowship, and worship for women everywhere.' },
  { num: '02', title: 'Fund the Conference', desc: 'Help us host the annual Encounter Conference — a life-changing gathering that transforms women from the inside out.' },
  { num: '03', title: 'Reach More Women', desc: 'Support outreach efforts that bring more women into the community and help them discover their purpose in God.' },
  { num: '04', title: 'Equip Leaders', desc: 'Partner in developing women who will lead their families, communities, and nations in the love and power of Christ.' },
]

export default function Give() {
  useReveal()
  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* Page hero */}
      <section
        className="section-rlr"
        style={{ background: 'var(--plum)', color: '#F7E9F2', paddingBottom: 'clamp(48px,6vw,80px)' }}
      >
        <div className="container-rlr" style={{ maxWidth: '800px' }}>
          <span className="eyebrow eyebrow-rose reveal">Give & Partner</span>
          <h1
            className="display-text text-white mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            Sow into women.<br />
            <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>Change the world.</span>
          </h1>
          <p
            className="lead-text mt-6 reveal d2"
            style={{ color: '#E7CFDE' }}
          >
            Every gift you give plants a seed of faith, purpose, and transformation in the life of a woman somewhere in the world. Thank you for partnering with us.
          </p>
        </div>
      </section>

      {/* Why give */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-14 reveal">
            <span className="eyebrow">Why give</span>
            <h2 className="section-head-h2">Your giving creates real impact</h2>
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
          >
            {whyGive.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2', 'd3'][i]}`}
              >
                <span className="card-num">{num}</span>
                <h3>{title}</h3>
                <p style={{ color: 'var(--muted)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving options */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">Ways to give</span>
            <h2 className="section-head-h2">Choose how you'd like to partner</h2>
          </div>
          <div
            className="grid gap-6 max-w-[900px] mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
          >
            {givingOptions.map(({ title, desc, highlight }, i) => (
              <div
                key={title}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2'][i]}`}
                style={highlight ? { border: '2px solid var(--pink)', position: 'relative' } : {}}
              >
                {highlight && (
                  <span
                    className="absolute -top-3 left-6 pill text-white text-[11px] font-bold"
                    style={{ background: 'var(--pink)', color: '#fff', padding: '4px 14px' }}
                  >
                    Most popular
                  </span>
                )}
                <h3>{title}</h3>
                <p className="mt-3" style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6' }}>{desc}</p>
                <a
                  href="https://wa.me/233570116830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-6 w-full justify-center"
                >
                  Give now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank details */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto">
            <div className="max-w-[760px] mb-10 reveal">
              <span className="eyebrow">Payment details</span>
              <h2 className="section-head-h2">Give directly</h2>
              <p className="lead-text mt-4">
                You can make a direct transfer or mobile money payment. Please include your name in the description.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Mobile Money (MTN)', detail: '0548 383 543', name: 'Lady Pastor Tracy Anyomi' },
                { label: 'Mobile Money (Vodafone)', detail: '0570 116 830', name: 'Lady Pastor Tracy Anyomi' },
              ].map(({ label, detail, name }) => (
                <div
                  key={label}
                  className="card-rlr flex flex-wrap items-center justify-between gap-4 reveal"
                >
                  <div>
                    <p
                      className="text-[12px] font-bold tracking-[0.2em] uppercase mb-1"
                      style={{ color: 'var(--rose)' }}
                    >
                      {label}
                    </p>
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: '600', color: 'var(--ink)' }}>
                      {detail}
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '14px' }}>{name}</p>
                  </div>
                  <button
                    className="btn btn-ghost"
                    onClick={() => copy(detail)}
                  >
                    {copied ? 'Copied ✓' : 'Copy number'}
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[15px] reveal" style={{ color: 'var(--muted)' }}>
              After giving, please send proof via{' '}
              <a
                href="https://wa.me/233570116830"
                className="textlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>{' '}
              so we can pray over your seed and acknowledge your partnership. 🙏
            </p>
          </div>
        </div>
      </section>

      {/* Scripture CTA */}
      <section className="section-rlr text-center" style={{ background: 'var(--blush)' }}>
        <div className="narrow-rlr reveal">
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(24px,3vw,38px)',
              fontStyle: 'italic',
              color: 'var(--ink)',
              lineHeight: '1.4',
            }}
          >
            "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
          </p>
          <p
            className="mt-6 text-[14px] font-bold tracking-[0.14em] uppercase"
            style={{ color: 'var(--pink)' }}
          >
            Luke 6:38
          </p>
        </div>
      </section>
    </>
  )
}
