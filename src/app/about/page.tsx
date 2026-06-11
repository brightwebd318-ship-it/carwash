import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AquaLux Car Wash — our story, mission, team, and commitment to premium automotive care since 2018.',
}

const timeline = [
  { year: '2018', title: 'Founded in Beverly Hills', desc: 'AquaLux opened its first location with 3 employees and a vision to redefine car wash standards in Los Angeles.' },
  { year: '2019', title: 'Ceramic Coating Launch', desc: 'We became one of the first car washes in LA to offer professional-grade ceramic coating services.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Launched our online booking platform and contactless service options during challenging times.' },
  { year: '2021', title: 'West Hollywood Expansion', desc: 'Opened our second location in West Hollywood, doubling our capacity and team size.' },
  { year: '2022', title: 'Membership Program', desc: 'Launched the AquaLux Loyalty Club, reaching 1,000 members within the first 6 months.' },
  { year: '2023', title: 'Fleet Services Division', desc: 'Established our dedicated fleet services division, partnering with 12 major businesses.' },
  { year: '2024', title: 'Santa Monica Location', desc: 'Third location opens near the beach — our most popular spot yet with ocean air car care.' },
  { year: '2026', title: 'Franchise Launch', desc: 'AquaLux opens its franchise program — inviting entrepreneurs to join our growing family.' },
]

const team = [
  { name: 'Alexander Reed', role: 'Founder & CEO', bio: 'Former automotive engineer with 15 years in luxury vehicle care. Alex started AquaLux after being unable to find a car wash worthy of his Ferrari.', avatar: 'AR', specialty: 'Ceramic Coating Expert' },
  { name: 'Marcus Chen', role: 'Head of Detailing', bio: 'IDA-certified detailer with 12 years of experience. Marcus trained in Japan and brought professional-grade techniques to AquaLux.', avatar: 'MC', specialty: 'Paint Correction Specialist' },
  { name: 'Sofia Rivera', role: 'Operations Director', bio: 'MBA from UCLA, Sofia ensures every location runs like clockwork. She designed our proprietary scheduling and quality control systems.', avatar: 'SR', specialty: 'Process Optimization' },
  { name: 'James Park', role: 'Technology Lead', bio: 'Full-stack developer who built our booking platform, loyalty app, and fleet management dashboard from the ground up.', avatar: 'JP', specialty: 'Digital Innovation' },
  { name: 'Priya Sharma', role: 'Customer Experience', bio: '6 years in luxury hospitality before joining AquaLux. Priya ensures every customer interaction feels five-star from booking to pickup.', avatar: 'PS', specialty: 'Service Excellence' },
  { name: 'David Kim', role: 'Fleet Manager', bio: 'Former logistics professional who manages all fleet relationships and custom enterprise programs with impeccable attention to detail.', avatar: 'DK', specialty: 'B2B Relations' },
]

const values = [
  { icon: '💎', title: 'Obsessive Quality', desc: 'We never cut corners. Every vehicle gets our full attention and the highest-grade products available.' },
  { icon: '🤝', title: 'Honest Service', desc: 'No upselling, no hidden fees. We recommend only what your vehicle actually needs.' },
  { icon: '🌱', title: 'Environmental Care', desc: 'Water recycling systems, biodegradable products, and solar-powered equipment at all locations.' },
  { icon: '⚡', title: 'Innovation First', desc: 'We continuously invest in the latest detailing technology and professional training.' },
]

const certifications = ['IDA Certified', 'Gyeon Certified', 'CarPro Authorized', 'XPEL Certified Installer', 'ISO 9001:2015', 'Green Seal Certified']

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}><Heart size={12} /> Our Story</span>
              <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Born From a<br /><span className="gradient-text-cyan">Passion for Perfection</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
                AquaLux was founded in 2018 by Alexander Reed, a former automotive engineer who was frustrated by the lack of truly premium car wash options in Los Angeles.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                He envisioned a car wash that combined luxury spa-level service with cutting-edge automotive technology — a place where every vehicle, from a Honda to a Ferrari, receives the same obsessive attention to detail.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '8+', label: 'Years Experience', icon: Award },
                { value: '4.9★', label: 'Average Rating', icon: Shield },
                { value: '50K+', label: 'Cars Washed', icon: Zap },
                { value: '3', label: 'Locations', icon: Heart },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass text-center" style={{ padding: '1.75rem' }}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: '2rem', color: '#06b6d4', marginBottom: '0.5rem' }}>{value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Our <span className="gradient-text-cyan">Core Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="glass card-hover text-center" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.625rem', fontSize: '1.05rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Our <span className="gradient-text-gold">Journey</span>
            </h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, #06b6d4, #f59e0b)', transform: 'translateX(-50%)' }} className="hidden md:block" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '1rem', alignItems: 'center' }} className="hidden md:grid">
                  {i % 2 === 0 ? (
                    <>
                      <div className="glass" style={{ padding: '1.25rem', textAlign: 'right' }}>
                        <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, color: '#06b6d4', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.year}</div>
                        <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.375rem' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', margin: '0 auto', boxShadow: '0 0 0 4px var(--bg-secondary)' }} />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #d97706)', margin: '0 auto', boxShadow: '0 0 0 4px var(--bg-secondary)' }} />
                      <div className="glass" style={{ padding: '1.25rem' }}>
                        <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, color: '#f59e0b', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.year}</div>
                        <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.375rem' }}>{item.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
              {/* Mobile timeline */}
              <div className="md:hidden flex flex-col gap-4">
                {timeline.map((item, i) => (
                  <div key={i} className="glass" style={{ padding: '1.25rem', borderLeft: `3px solid ${i % 2 === 0 ? '#06b6d4' : '#f59e0b'}` }}>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, color: i % 2 === 0 ? '#06b6d4' : '#f59e0b', fontSize: '0.85rem', marginBottom: '0.25rem' }}>{item.year}</div>
                    <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '0.375rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Meet the <span className="gradient-text-cyan">Team</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '1rem auto 0' }}>
              Our certified detailing professionals and operations experts are the heart of AquaLux.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="glass card-hover" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'white', fontWeight: 800, fontSize: '1.25rem', boxShadow: '0 4px 20px rgba(6,182,212,0.3)' }}>{member.avatar}</div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.05rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                <div style={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.825rem', marginBottom: '0.25rem' }}>{member.role}</div>
                <div style={{ display: 'inline-block', padding: '0.2rem 0.625rem', borderRadius: '2rem', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#f59e0b', fontSize: '0.7rem', fontWeight: 600, marginBottom: '0.875rem' }}>{member.specialty}</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-pad-sm" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="text-center mb-8">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Industry Certifications & Authorizations</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center' }}>
              {certifications.map(c => (
                <div key={c} className="glass-sm" style={{ padding: '0.625rem 1.25rem', fontWeight: 600, fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#06b6d4' }}>✓</span> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
