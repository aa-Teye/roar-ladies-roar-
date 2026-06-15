import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const givingOptions = [
  {
    titleKey: 'give.monthlyTitle',
    defaultTitle: 'Monthly Partnership',
    descKey: 'give.monthlyDesc',
    defaultDesc: 'Join our circle of faithful partners who sow monthly into the vision of Roar Ladies Roar Ministry. Your consistent giving sustains our online meetings, events, and outreach.',
    highlight: true,
  },
  {
    titleKey: 'give.onetimeTitle',
    defaultTitle: 'One-Time Gift',
    descKey: 'give.onetimeDesc',
    defaultDesc: 'Make a one-time donation to support the ministry. Every seed sown — large or small — makes an eternal difference.',
    highlight: false,
  },
  {
    titleKey: 'give.sponsorshipTitle',
    defaultTitle: 'Conference Sponsorship',
    descKey: 'give.sponsorshipDesc',
    defaultDesc: 'Partner with us to make the Encounter Conference possible. Your sponsorship helps cover venue, equipment, travel, and ministry resources.',
    highlight: false,
  },
]

const whyGive = [
  { num: '01', titleKey: 'give.why1Title', defaultTitle: 'Sustain Online Meetings', descKey: 'give.why1Desc', defaultDesc: 'Your giving keeps our three weekly gatherings running — prayer, fellowship, and worship for women everywhere.' },
  { num: '02', titleKey: 'give.why2Title', defaultTitle: 'Fund the Conference', descKey: 'give.why2Desc', defaultDesc: 'Help us host the annual Encounter Conference — a life-changing gathering that transforms women from the inside out.' },
  { num: '03', titleKey: 'give.why3Title', defaultTitle: 'Reach More Women', descKey: 'give.why3Desc', defaultDesc: 'Support outreach efforts that bring more women into the community and help them discover their purpose in God.' },
  { num: '04', titleKey: 'give.why4Title', defaultTitle: 'Equip Leaders', descKey: 'give.why4Desc', defaultDesc: 'Partner in developing women who will lead their families, communities, and nations in the love and power of Christ.' },
]

export default function Give() {
  useReveal()
  const { t } = useTranslation()
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
          <span className="eyebrow eyebrow-rose reveal">{t('give.heroSub', 'Give & Partner')}</span>
          <h1
            className="display-text text-white mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)' }}
          >
            {t('give.heroTitle1', 'Sow into women.')}<br />
            <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>{t('give.heroTitle2', 'Change the world.')}</span>
          </h1>
          <p
            className="lead-text mt-6 reveal d2"
            style={{ color: '#E7CFDE' }}
          >
            {t('give.heroLead', 'Every gift you give plants a seed of faith, purpose, and transformation in the life of a woman somewhere in the world. Thank you for partnering with us.')}
          </p>
        </div>
      </section>

      {/* Why give */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mb-14 reveal">
            <span className="eyebrow">{t('give.whyGiveTitle', 'Why give')}</span>
            <h2 className="section-head-h2">{t('give.whyGiveSub', 'Your giving creates real impact')}</h2>
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
          >
            {whyGive.map((item, i) => (
              <div
                key={item.num}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2', 'd3'][i]}`}
              >
                <span className="card-num">{item.num}</span>
                <h3>{t(item.titleKey, item.defaultTitle)}</h3>
                <p style={{ color: 'var(--muted)' }}>{t(item.descKey, item.defaultDesc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving options */}
      <section className="section-rlr" style={{ background: 'var(--blush)' }}>
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">{t('give.waysToGiveTitle', 'Ways to give')}</span>
            <h2 className="section-head-h2">{t('give.waysToGiveSub', "Choose how you'd like to partner")}</h2>
          </div>
          <div
            className="grid gap-6 max-w-[900px] mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
          >
            {givingOptions.map((option, i) => (
              <div
                key={option.titleKey}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2'][i]}`}
                style={option.highlight ? { border: '2px solid var(--pink)', position: 'relative' } : {}}
              >
                {option.highlight && (
                  <span
                    className="absolute -top-3 left-6 pill text-white text-[11px] font-bold"
                    style={{ background: 'var(--pink)', color: '#fff', padding: '4px 14px' }}
                  >
                    {t('give.mostPopular', 'Most popular')}
                  </span>
                )}
                <h3>{t(option.titleKey, option.defaultTitle)}</h3>
                <p className="mt-3" style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: '1.6' }}>{t(option.descKey, option.defaultDesc)}</p>
                <a
                  href="https://wa.me/233570116830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-6 w-full justify-center"
                >
                  {t('give.giveNow', 'Give now')}
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
              <span className="eyebrow">{t('give.paymentDetails', 'Payment details')}</span>
              <h2 className="section-head-h2">{t('give.giveDirectly', 'Give directly')}</h2>
              <p className="lead-text mt-4">
                {t('give.giveDirectlyLead', 'You can make a direct transfer or mobile money payment. Please include your name in the description.')}
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
                    {copied ? t('give.copied', 'Copied ✓') : t('give.copyNumber', 'Copy number')}
                  </button>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[15px] reveal" style={{ color: 'var(--muted)' }}>
              {t('give.afterGiving', 'After giving, please send proof via WhatsApp so we can pray over your seed and acknowledge your partnership. 🙏')}
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
            {t('give.scripture', '"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."')}
          </p>
          <p
            className="mt-6 text-[14px] font-bold tracking-[0.14em] uppercase"
            style={{ color: 'var(--pink)' }}
          >
            {t('give.scriptureVerse', 'Luke 6:38')}
          </p>
        </div>
      </section>
    </>
  )
}
