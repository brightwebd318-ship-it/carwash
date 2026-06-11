import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fleet Services',
  description: 'Premium fleet car wash and detailing services for businesses. Volume discounts, dedicated account managers, and priority scheduling.',
}

const fleetPlans = [
  {
    name: 'Starter Fleet', vehicles: '5–10', price: 12, color: '#06b6d4',
    features: ['Basic Wash per vehicle', '10% volume discount', 'Priority scheduling', 'Monthly invoicing', 'Dedicated rep'],
  },
  {
    name: 'Business Fleet', vehicles: '11–25', price: 10, color: '#8b5cf6', popular: true,
    features: ['Premium Wash per vehicle', '20% volume discount', 'Priority scheduling', 'Monthly invoicing', 'Dedicated account manager', 'Quarterly free detail per vehicle'],
  },
  {
    name: 'Enterprise Fleet', vehicles: '26+', price: 8, color: '#f59e0b',
    features: ['Deluxe wash per vehicle', '30% volume discount', 'On-site mobile service available', 'Custom invoicing', 'Dedicated team', 'Free quarterly detailing', 'Compliance reporting'],
  },
]

const clients = ['FedEx', 'Amazon', 'Uber', 'Lyft', 'Enterprise', 'Hertz', 'LAPD', 'Hilton Hotels']

const benefits = [
  { icon: '💰', title: 'Volume Discounts', desc: 'Save up to 30% with bulk pricing on fleet accounts of 5+ vehicles.' },
  { icon: '📋', title: 'Monthly Invoicing', desc: 'Streamlined billing with detailed reports for your accounting team.' },
  { icon: '👤', title: 'Dedicated Manager', desc: 'Your own account rep handles scheduling, billing, and priority service.' },
  { icon: '🚐', title: 'Mobile Service', desc: 'We come to your facility for Enterprise fleets — no downtime.' },
  { icon: '📊', title: 'Fleet Dashboard', desc: 'Track service history, costs, and schedules for every vehicle.' },
  { icon: '⚡', title: 'Priority Booking', desc: 'Fleet vehicles always get priority slots — no waiting.' },
]

export default function FleetPage() {
  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>🚛 Fleet Services</span>
              <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.15 }}>
                Keep Your Fleet<br /><span className="gradient-text-cyan">Always Pristine</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: 500 }}>
                Professional fleet management programs for businesses of all sizes. Dedicated account managers, volume discounts, and priority service — all in one package.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-gold">Get a Custom Quote <ArrowRight size={16} /></Link>
                <a href="tel:+15551234567" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Phone size={16} /> Call Fleet Team
                </a>
              </div>
            </div>
            <div className="glass" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'white', marginBottom: '1.5rem', fontSize: '1.15rem' }}>Fleet Program Benefits</h3>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: 'white', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{b.title}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', lineHeight: 1.5 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Plans */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Fleet <span className="gradient-text-cyan">Pricing Plans</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>Per vehicle pricing. Billed monthly. Cancel anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {fleetPlans.map((p, i) => (
              <div key={i} className="glass card-hover" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', border: p.popular ? `2px solid ${p.color}50` : '1px solid var(--glass-border)' }}>
                {p.popular && <div style={{ position: 'absolute', top: 16, right: 16, background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, color: 'white', padding: '0.2rem 0.625rem', borderRadius: '2rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Popular</div>}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: p.color, marginBottom: '0.5rem' }}>{p.name}</h3>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>{p.vehicles} vehicles</div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: '2.25rem', color: 'var(--text-primary)' }}>${p.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>/vehicle/wash</span>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={13} style={{ color: p.color, flexShrink: 0, marginTop: 2 }} /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '0.875rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)`, color: 'white' }}>
                  Get Fleet Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="mt-16 text-center">
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Trusted by leading companies</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {clients.map(c => (
                <div key={c} className="glass-sm" style={{ padding: '0.75rem 1.5rem', fontWeight: 700, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{c}</div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass mt-14" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Ready to Start Your Fleet Program?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 450, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Talk to our fleet team today. We'll build a custom plan that fits your vehicle count, budget, and schedule.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Request Fleet Quote <ArrowRight size={16} /></Link>
              <a href="mailto:fleet@aqualuxcarwash.com" className="btn-outline"><Mail size={16} /> Email Fleet Team</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
