import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const agenda = [
  { timeKey: 'conference.fridayEvening', defaultTime: 'Friday Evening', titleKey: 'conference.agenda1Title', defaultTitle: 'Opening Night & Worship', descKey: 'conference.agenda1Desc', defaultDesc: 'We begin with powerful worship that ushers us into His presence and sets the tone for the entire conference.' },
  { timeKey: 'conference.saturdayMorning', defaultTime: 'Saturday Morning', titleKey: 'conference.agenda2Title', defaultTitle: 'Word & Equipping Sessions', descKey: 'conference.agenda2Desc', defaultDesc: 'Anointed messages designed to equip, challenge, and ignite purpose in every woman in the room.' },
  { timeKey: 'conference.saturdayAfternoon', defaultTime: 'Saturday Afternoon', titleKey: 'conference.agenda3Title', defaultTitle: 'Workshops & Breakouts', descKey: 'conference.agenda3Desc', defaultDesc: 'Intimate sessions covering prayer, leadership, family, faith, and purpose — led by seasoned women of God.' },
  { timeKey: 'conference.saturdayEvening', defaultTime: 'Saturday Evening', titleKey: 'conference.agenda4Title', defaultTitle: 'Prayer & Consecration Night', descKey: 'conference.agenda4Desc', defaultDesc: 'A sacred time of corporate prayer, intercession, and consecration — meeting God at a deeper level.' },
  { timeKey: 'conference.sunday', defaultTime: 'Sunday', titleKey: 'conference.agenda5Title', defaultTitle: 'Sending Service', descKey: 'conference.agenda5Desc', defaultDesc: 'We close with a powerful commissioning service, sending every woman out renewed, bold, and on mission.' },
]

export default function Conference() {
  useReveal()
  const { t } = useTranslation()
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

  const expectCards = [
    { num: '01', titleKey: 'conference.worshipTitle', descKey: 'conference.worshipDesc', defaultTitle: 'Worship', defaultDesc: 'Encounter His presence in deep, unhurried worship that shifts atmospheres and transforms hearts.' },
    { num: '02', titleKey: 'conference.teachingTitle', descKey: 'conference.teachingDesc', defaultTitle: 'Teaching', defaultDesc: 'Be equipped through anointed messages to live out your faith with boldness and clarity of purpose.' },
    { num: '03', titleKey: 'conference.prayerTitle', descKey: 'conference.prayerDesc', defaultTitle: 'Prayer', defaultDesc: 'Experience the power of corporate prayer and intercession that moves mountains and shifts nations.' },
    { num: '04', titleKey: 'conference.fellowshipTitle', descKey: 'conference.fellowshipDesc', defaultTitle: 'Fellowship', defaultDesc: 'Build meaningful relationships with women who will carry you through the year and beyond.' },
    { num: '05', titleKey: 'conference.impartationTitle', descKey: 'conference.impartationDesc', defaultTitle: 'Impartation', defaultDesc: 'Receive fresh fire, divine impartation, and commissioning to step into your God-given calling.' },
    { num: '06', titleKey: 'conference.transformationTitle', descKey: 'conference.transformationDesc', defaultTitle: 'Transformation', defaultDesc: 'Leave renewed, restored, and fully equipped to impact your world for the Kingdom of God.' },
  ]

  return (
    <>
      {/* Hero */}
      <section
        className="section-rlr"
        style={{ background: 'var(--plum)', color: '#F7E9F2', paddingBottom: 'clamp(48px,6vw,90px)' }}
      >
        <div className="container-rlr" style={{ maxWidth: '860px' }}>
          <span className="eyebrow eyebrow-rose reveal">{t('conference.heroSub', 'The Annual Encounter Conference')}</span>
          <h1
            className="display-text text-white mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            {t('conference.heroTitle', "A sacred space to encounter God's presence.")}
          </h1>
          <p
            className="lead-text mt-6 reveal d2"
            style={{ color: '#E7CFDE' }}
          >
            {t('conference.heroLead', 'Our annual gathering is designed for spiritual renewal — where women experience God, are equipped to live boldly, and are sent out to pursue their God-given purpose.')}
          </p>

          <div className="timer-container reveal d2">
            {[
              { labelKey: 'common.days', defaultLabel: 'Days', val: timeLeft.days },
              { labelKey: 'common.hours', defaultLabel: 'Hours', val: timeLeft.hours },
              { labelKey: 'common.minutes', defaultLabel: 'Minutes', val: timeLeft.minutes },
              { labelKey: 'common.seconds', defaultLabel: 'Seconds', val: timeLeft.seconds }
            ].map(({ labelKey, defaultLabel, val }) => (
              <div key={labelKey} className="timer-card">
                <span className="timer-val">{String(val).padStart(2, '0')}</span>
                <span className="timer-lbl">{t(labelKey, defaultLabel)}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10 reveal d3">
            <Link to="/connect" className="btn btn-primary btn-arrow">{t('conference.scheduleInterest', 'Register your interest')}</Link>
            <Link to="/connect" className="btn btn-ghost-light">{t('conference.getMoreInfo', 'Get more info')}</Link>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-14 reveal">
            <span className="eyebrow">{t('conference.expectTitle', 'What to expect')}</span>
            <h2 className="section-head-h2">{t('conference.expectSub', 'An encounter like no other.')}</h2>
            <p className="lead-text mt-5">
              {t('conference.expectLead', "The Encounter Conference is more than an event — it's a divine appointment. Every element is crafted to bring you face-to-face with God and ignite the fire within you.")}
            </p>
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))' }}
          >
            {expectCards.map((card, i) => (
              <article
                key={card.num}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2', '', 'd1', 'd2'][i]}`}
              >
                <span className="card-num">{card.num}</span>
                <h3>{t(card.titleKey, card.defaultTitle)}</h3>
                <p style={{ color: 'var(--muted)' }}>{t(card.descKey, card.defaultDesc)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">{t('conference.agendaTitle', 'Conference Schedule')}</span>
            <h2 className="section-head-h2">{t('conference.agendaSub', 'The weekend at a glance')}</h2>
          </div>
          <div className="flex flex-col gap-0 max-w-[760px] mx-auto">
            {agenda.map(({ timeKey, defaultTime, titleKey, defaultTitle, descKey, defaultDesc }, i) => (
              <div
                key={i}
                className={`flex gap-6 py-7 reveal`}
                style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)' }}
              >
                <div className="flex-none w-36 hidden sm:block">
                  <span
                    className="text-[13px] font-bold tracking-[0.1em] uppercase"
                    style={{ color: 'var(--pink)' }}
                  >
                    {t(timeKey, defaultTime)}
                  </span>
                </div>
                <div>
                  <span
                    className="text-[13px] font-bold tracking-[0.1em] uppercase block mb-1 sm:hidden"
                    style={{ color: 'var(--pink)' }}
                  >
                    {t(timeKey, defaultTime)}
                  </span>
                  <h3
                    style={{ fontFamily: 'var(--serif)', fontSize: 'var(--t-h3)', marginBottom: '8px' }}
                  >
                    {t(titleKey, defaultTitle)}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6' }}>{t(descKey, defaultDesc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="section-rlr text-center">
        <div className="narrow-rlr reveal">
          <span className="eyebrow eyebrow-center">{t('conference.dontMissTitle', "Don't miss it")}</span>
          <h2
            className="display-text my-5"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            {t('common.saveSeat', 'Save your seat today.')}
          </h2>
          <p className="lead-text mx-auto" style={{ maxWidth: '540px' }}>
            {t('conference.dontMissDesc', 'The Encounter Conference fills up quickly. Register your interest now and be the first to receive updates, dates, and early-bird information.')}
          </p>
          <div className="flex flex-wrap gap-4 mt-9 justify-center">
            <Link to="/connect" className="btn btn-primary btn-arrow">{t('conference.scheduleInterest', 'Register interest')}</Link>
            <Link to="/give" className="btn btn-ghost">{t('conference.partnerSupport', 'Partner & support')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
