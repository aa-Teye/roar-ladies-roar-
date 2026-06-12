import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'

const agenda = [
  { time: 'Friday Evening', title: 'Opening Night & Worship', desc: 'We begin with powerful worship that ushers us into His presence and sets the tone for the entire conference.' },
  { time: 'Saturday Morning', title: 'Word & Equipping Sessions', desc: 'Anointed messages designed to equip, challenge, and ignite purpose in every woman in the room.' },
  { time: 'Saturday Afternoon', title: 'Workshops & Breakouts', desc: 'Intimate sessions covering prayer, leadership, family, faith, and purpose — led by seasoned women of God.' },
  { time: 'Saturday Evening', title: 'Prayer & Consecration Night', desc: 'A sacred time of corporate prayer, intercession, and consecration — meeting God at a deeper level.' },
  { time: 'Sunday', title: 'Sending Service', desc: 'We close with a powerful commissioning service, sending every woman out renewed, bold, and on mission.' },
]

export default function Conference() {
  useReveal()

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Target date: November 6, 2026
    const target = new Date('2026-11-06T18:00:00Z')
    
    const updateTime = () => {
      const now = new Date()
      const diffMs = target.getTime() - now.getTime()
      
      if (diffMs <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)
      
      setTimeLeft({ days, hours, minutes, seconds })
    }
    
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero */}
      <section
        className="section-rlr"
        style={{ background: 'var(--plum)', color: '#F7E9F2', paddingBottom: 'clamp(48px,6vw,90px)' }}
      >
        <div className="container-rlr" style={{ maxWidth: '860px' }}>
          <span className="eyebrow eyebrow-rose reveal">The Annual Encounter Conference</span>
          <h1
            className="display-text text-white mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            A sacred space to encounter God's presence.
          </h1>
          <p
            className="lead-text mt-6 reveal d2"
            style={{ color: '#E7CFDE' }}
          >
            Our annual gathering is designed for spiritual renewal — where women experience God, are equipped to live boldly, and are sent out to pursue their God-given purpose.
          </p>

          <div className="timer-container reveal d2">
            {[
              { label: 'Days', val: timeLeft.days },
              { label: 'Hours', val: timeLeft.hours },
              { label: 'Minutes', val: timeLeft.minutes },
              { label: 'Seconds', val: timeLeft.seconds }
            ].map(({ label, val }) => (
              <div key={label} className="timer-card">
                <span className="timer-val">{String(val).padStart(2, '0')}</span>
                <span className="timer-lbl">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10 reveal d3">
            <Link to="/connect" className="btn btn-primary btn-arrow">Register your interest</Link>
            <Link to="/connect" className="btn btn-ghost-light">Get more info</Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-14 reveal">
            <span className="eyebrow">What to expect</span>
            <h2 className="section-head-h2">An encounter like no other.</h2>
            <p className="lead-text mt-5">
              The Encounter Conference is more than an event — it's a divine appointment. Every element is crafted to bring you face-to-face with God and ignite the fire within you.
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))' }}
          >
            {[
              { num: '01', title: 'Worship', desc: 'Encounter His presence in deep, unhurried worship that shifts atmospheres and transforms hearts.' },
              { num: '02', title: 'Teaching', desc: 'Be equipped through anointed messages to live out your faith with boldness and clarity of purpose.' },
              { num: '03', title: 'Prayer', desc: 'Experience the power of corporate prayer and intercession that moves mountains and shifts nations.' },
              { num: '04', title: 'Fellowship', desc: 'Build meaningful relationships with women who will carry you through the year and beyond.' },
              { num: '05', title: 'Impartation', desc: 'Receive fresh fire, divine impartation, and commissioning to step into your God-given calling.' },
              { num: '06', title: 'Transformation', desc: 'Leave renewed, restored, and fully equipped to impact your world for the Kingdom of God.' },
            ].map(({ num, title, desc }, i) => (
              <article
                key={num}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2', '', 'd1', 'd2'][i]}`}
              >
                <span className="card-num">{num}</span>
                <h3>{title}</h3>
                <p style={{ color: 'var(--muted)' }}>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">Conference Schedule</span>
            <h2 className="section-head-h2">The weekend at a glance</h2>
          </div>
          <div className="flex flex-col gap-0 max-w-[760px] mx-auto">
            {agenda.map(({ time, title, desc }, i) => (
              <div
                key={i}
                className={`flex gap-6 py-7 reveal ${i > 0 ? '' : ''}`}
                style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
              >
                <div className="flex-none w-36 hidden sm:block">
                  <span
                    className="text-[13px] font-bold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--pink)' }}
                  >
                    {time}
                  </span>
                </div>
                <div>
                  <span
                    className="text-[13px] font-bold tracking-[0.1em] uppercase block mb-1 sm:hidden"
                    style={{ color: 'var(--pink)' }}
                  >
                    {time}
                  </span>
                  <h3
                    style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-h3)', marginBottom: '8px' }}
                  >
                    {title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="section-rlr text-center">
        <div className="narrow-rlr reveal">
          <span className="eyebrow eyebrow-center">Don't miss it</span>
          <h2
            className="display-text my-5"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            Save your seat today.
          </h2>
          <p className="lead-text mx-auto" style={{ maxWidth: '540px' }}>
            The Encounter Conference fills up quickly. Register your interest now and be the first to receive updates, dates, and early-bird information.
          </p>
          <div className="flex flex-wrap gap-4 mt-9 justify-center">
            <Link to="/connect" className="btn btn-primary btn-arrow">Register interest</Link>
            <Link to="/give" className="btn btn-ghost">Partner &amp; support</Link>
          </div>
        </div>
      </section>
    </>
  )
}
