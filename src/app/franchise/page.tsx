'use client'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, MapPin, DollarSign } from 'lucide-react'

const steps = [
  { num: '01', title: 'Initial Inquiry', desc: 'Fill out our franchise application form. Our team reviews and responds within 48 hours.', icon: '📝' },
  { num: '02', title: 'Discovery Call', desc: 'A 30-minute call with our franchise director to discuss your vision, market, and investment capacity.', icon: '📞' },
  { num: '03', title: 'FDD & Agreement', desc: 'Review the Franchise Disclosure Document, ask questions, and sign the franchise agreement.', icon: '📄' },
  { num: '04', title: 'Site Selection', desc: 'Our real estate team helps identify and secure the perfect high-traffic location in your territory.', icon: '📍' },
  { num: '05', title: 'Training Program', desc: '4-week comprehensive training covering operations, marketing, hiring, and customer service.', icon: '🎓' },
  { num: '06', title: 'Grand Opening', desc: 'We support your grand opening with marketing, staffing assistance, and on-site support for 2 weeks.', icon: '🚀' },
]

const investment = [
  { item: 'Franchise Fee', low: 45000, high: 45000 },
  { item: 'Equipment & Technology', low: 80000, high: 120000 },
  { item: 'Leasehold Improvements', low: 60000, high: 100000 },
  { item: 'Initial Inventory', low: 15000, high: 25000 },
  { item: 'Working Capital', low: 30000, high: 50000 },
  { item: 'Training & Launch', low: 10000, high: 15000 },
  { item: 'Miscellaneous', low: 10000, high: 20000 },
]

const totalLow = investment.reduce((s, i) => s + i.low, 0)
const totalHigh = investment.reduce((s, i) => s + i.high, 0)

const perks = [
  { icon: '🏆', title: 'Proven Brand', desc: 'Join a recognized premium brand with 4.9★ ratings and thousands of loyal customers.' },
  { icon: '📊', title: 'Proprietary Systems', desc: 'Our booking software, CRM, and operations platform are yours from day one.' },
  { icon: '📣', title: 'National Marketing', desc: 'Benefit from national campaigns, SEO, social media, and co-op advertising.' },
  { icon: '🧑‍🏫', title: 'Ongoing Training', desc: 'Continuous education, quarterly summits, and a dedicated franchise business coach.' },
  { icon: '💰', title: 'Financing Support', desc: 'We work with SBA-approved lenders and can connect you with franchise financing options.' },
  { icon: '🌍', title: 'Exclusive Territory', desc: 'Protected exclusive territory rights — no competition from within the network.' },
]

export default function FranchisePage() {
  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.1), transparent)', filter: 'blur(60px)' }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>🤝 Franchise</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            Own Your Own<br /><span className="gradient-text-gold">AquaLux Franchise</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: '0 auto 2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Join a fast-growing premium car wash brand with proven systems, national marketing, and unmatched support. Be your own boss in a recession-resistant industry.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {[
              { icon: DollarSign, value: '$250K–$375K', label: 'Total Investment' },
              { icon: TrendingUp, value: '18–24 mo', label: 'Avg. Break-Even' },
              { icon: MapPin, value: '47 States', label: 'Available Territories' },
              { icon: Users, value: '3+', label: 'Current Locations' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.5rem', color: '#f59e0b' }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
          <Link href="#apply" className="btn-gold" style={{ fontSize: '1.05rem', padding: '1rem 2.25rem' }}>
            Apply for Franchise <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Why AquaLux */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Why Choose <span className="gradient-text-cyan">AquaLux?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <div key={i} className="glass card-hover" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              The <span className="gradient-text-gold">Franchise</span> Journey
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="glass" style={{ padding: '1.75rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: '2.5rem', color: 'rgba(6,182,212,0.1)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Investment <span className="gradient-text-cyan">Breakdown</span>
            </h2>
          </div>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div className="glass" style={{ padding: '2rem', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Item</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>Low</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>High</th>
                  </tr>
                </thead>
                <tbody>
                  {investment.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.875rem', color: 'var(--text-primary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle size={14} style={{ color: '#06b6d4', flexShrink: 0 }} /> {row.item}
                      </td>
                      <td style={{ padding: '0.875rem', textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>${row.low.toLocaleString()}</td>
                      <td style={{ padding: '0.875rem', textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>${row.high.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr style={{ background: 'rgba(6,182,212,0.05)' }}>
                    <td style={{ padding: '1rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem' }}>Total Estimated Investment</td>
                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 800, color: '#06b6d4', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem' }}>${totalLow.toLocaleString()}</td>
                    <td style={{ padding: '1rem', textAlign: 'right', fontWeight: 800, color: '#06b6d4', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem' }}>${totalHigh.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div className="text-center mb-10">
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: 'var(--text-primary)' }}>
                Start Your Application
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem' }}>
                Takes under 5 minutes. Our team will respond within 48 hours.
              </p>
            </div>
            <div className="glass" style={{ padding: '2.5rem' }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  {['First Name', 'Last Name'].map(label => (
                    <div key={label}>
                      <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
                      <input type="text" placeholder={label}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                  ))}
                </div>
                {[
                  { label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                  { label: 'Phone Number', type: 'tel', placeholder: '(555) 000-0000' },
                  { label: 'City / State of Interest', type: 'text', placeholder: 'Los Angeles, CA' },
                ].map(f => (
                  <div key={f.label} style={{ marginBottom: '1rem' }}>
                    <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Available Investment Range</label>
                  <select style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}>
                    <option>$250,000 – $300,000</option>
                    <option>$300,000 – $375,000</option>
                    <option>$375,000+</option>
                    <option>Need Financing Options</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Tell us about yourself</label>
                  <textarea rows={4} placeholder="Previous business experience, why AquaLux, target market..."
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center" style={{ fontSize: '1rem', padding: '1rem' }}>
                  Submit Franchise Application <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
