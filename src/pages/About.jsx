import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'

const values = [
  { num: '01', titleKey: 'about.faithTitle', descKey: 'about.faithDesc', defaultTitle: 'Faith', defaultDesc: 'We are rooted in the Word of God, trusting Him in every season of life.' },
  { num: '02', titleKey: 'about.communityTitle', descKey: 'about.communityDesc', defaultTitle: 'Community', defaultDesc: 'We believe women grow stronger together — in prayer, in love, in purpose.' },
  { num: '03', titleKey: 'about.excellenceTitle', descKey: 'about.excellenceDesc', defaultTitle: 'Excellence', defaultDesc: "We pursue God's best in every area — spiritual, personal, and professional." },
  { num: '04', titleKey: 'about.impactTitle', descKey: 'about.impactDesc', defaultTitle: 'Impact', defaultDesc: 'We are called to transform our families, communities, and nations through Christ.' },
]

export default function About() {
  useReveal()
  const { t } = useTranslation()

  return (
    <>
      {/* Page hero */}
      <section className="section-rlr" style={{ background: 'var(--blush)', paddingBottom: 'clamp(48px,6vw,90px)' }}>
        <div className="container-rlr" style={{ maxWidth: '800px' }}>
          <span className="eyebrow reveal">{t('nav.about', 'About Us')}</span>
          <h1
            className="display-text mt-5 reveal d1"
            style={{ fontSize: 'var(--t-h1)', color: 'var(--ink)' }}
          >
            {t('about.heroTitle1', 'Women on fire.')}<br />
            <span style={{ color: 'var(--pink)', fontStyle: 'italic' }}>{t('about.heroTitle2', 'On purpose. On mission.')}</span>
          </h1>
          <p className="lead-text mt-6 reveal d2">
            {t('about.heroLead', 'Roar Ladies Roar Ministry is a global community of prayerful, passionate and purpose-driven women — growing deeper in God, discovering our purpose, and transforming our world through His love.')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-rlr">
        <div
          className="container-rlr grid gap-[clamp(34px,5vw,72px)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))' }}
        >
          <div className="reveal">
            <span className="eyebrow">{t('about.missionTitle', 'Our Mission')}</span>
            <h2 className="section-head-h2 mt-4">
              {t('about.missionSub', 'To raise women who roar for Christ.')}
            </h2>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              {t('about.missionDesc', 'We exist to equip and empower women to grow in their relationship with God, walk in their God-given purpose, and impact their world with the love and power of Christ.')}
            </p>
          </div>
          <div className="reveal d1">
            <span className="eyebrow">{t('about.visionTitle', 'Our Vision')}</span>
            <h2 className="section-head-h2 mt-4">
              {t('about.visionSub', 'Global dominance through excellence.')}
            </h2>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              {t('about.visionDesc', "We envision a generation of women who reflect God's glory, advance His kingdom in every sphere of influence, and transform their communities from the inside out.")}
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
            <span className="eyebrow">{t('about.founderTitle', 'Founder & Convener')}</span>
            <h2 className="section-head-h2 mt-4">{t('about.founderName', 'Lady Pastor Mrs Tracy Anyomi')}</h2>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              {t('about.founderDesc1', 'Lady Pastor Mrs Tracy Anyomi is a woman of God, a visionary leader, and a passionate advocate for women in ministry. With a burning desire to see women walk fully in their God-given purpose, she founded Roar Ladies Roar Ministry — a global platform where women gather, grow, and go out as ambassadors of Christ.')}
            </p>
            <p className="mt-5" style={{ fontSize: 'var(--t-lead)', lineHeight: '1.6', color: 'var(--muted)' }}>
              {t('about.founderDesc2', 'Under her leadership, the ministry has grown into a vibrant online community meeting three times a week, hosting the annual Encounter Conference, and impacting women across Africa, Europe, and beyond.')}
            </p>
            <blockquote
              className="mt-6 pl-5 italic"
              style={{ borderLeft: '3px solid var(--pink)', color: 'var(--ink)', fontFamily: 'var(--serif)', fontSize: 'clamp(20px,2vw,26px)', lineHeight: '1.4' }}
            >
              {t('about.founderQuote', '"We are women on fire for Christ — raised to roar with a louder voice, reflecting God\'s glory and advancing His kingdom."')}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-rlr">
        <div className="container-rlr">
          <div className="max-w-[760px] mx-auto text-center mb-14 reveal">
            <span className="eyebrow eyebrow-center">{t('about.valuesTitle', 'What we stand for')}</span>
            <h2 className="section-head-h2">{t('about.valuesSub', 'Our core values')}</h2>
          </div>
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))' }}
          >
            {values.map((v, i) => (
              <div
                key={v.num}
                className={`card-rlr hover-card reveal ${['', 'd1', 'd2', 'd3'][i]}`}
              >
                <span className="card-num">{v.num}</span>
                <h3>{t(v.titleKey, v.defaultTitle)}</h3>
                <p style={{ color: 'var(--muted)' }}>{t(v.descKey, v.defaultDesc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-rlr text-center" style={{ background: 'var(--plum)', color: '#F7E9F2' }}>
        <div className="narrow-rlr reveal">
          <span className="eyebrow eyebrow-rose eyebrow-center">{t('about.ctaTitle', 'Ready to join us?')}</span>
          <h2
            className="display-text text-white mt-5 mb-6"
            style={{ fontSize: 'var(--t-h2)' }}
          >
            {t('about.ctaSub', 'Your sisterhood is waiting.')}
          </h2>
          <p style={{ fontSize: 'var(--t-lead)', color: '#E7CFDE' }}>
            {t('about.ctaDesc', 'There is a place for you in this community. Come and grow with us.')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/connect" className="btn btn-primary btn-arrow">{t('about.ctaButton1', 'Join the community')}</Link>
            <Link to="/conference" className="btn btn-ghost-light">{t('about.ctaButton2', 'The Encounter Conference')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
