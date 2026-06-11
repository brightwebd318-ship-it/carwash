import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Star, Zap, Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Membership Plans',
  description: 'Join AquaLux membership for unlimited car washes, exclusive discounts, and premium perks. Plans from $29/month.',
}

const plans = [
  {
    name: 'Bronze', price: 29, icon: '🥉', color: '#cd7f32', washes: 4,
    features: ['4 Express Washes/month', '10% off all services', 'Priority booking', 'Member loyalty points', 'Birthday bonus wash'],
    notIncluded: ['Premium wash access', 'Free add-ons', 'Concierge service', 'Guest passes'],
  },
  {
    name: 'Silver', price: 49, icon: '🥈', color: '#94a3b8', washes: 8,
    features: ['8 Express or 4 Premium washes/month', '15% off all services', 'Priority booking', '2x loyalty points', 'Monthly car freshener', 'Birthday bonus wash'],
    notIncluded: ['Unlimited washes', 'Free add-ons', 'Concierge service'],
  },
  {
    name: 'Gold', price: 79, icon: '🥇', color: '#f59e0b', washes: -1, popular: true,
    features: ['Unlimited Express Washes', '6 Premium Washes/month', '20% off all services', '3x loyalty points', 'Free air freshener every visit', '2 guest passes/month', 'Priority booking', 'Quarterly free detail'],
    notIncluded: ['Unlimited Premium washes', 'Concierge service'],
  },
  {
    name: 'Platinum', price: 149, icon: '💎', color: '#a78bfa', washes: -1,
    features: ['Unlimited Express + Premium Washes', '2 Free Deluxe Details/year', '30% off all services', '5x loyalty points', 'All add-ons included', '4 guest passes/month', 'Dedicated concierge', 'Skip-the-line access', 'Annual ceramic discount'],
    notIncluded: [],
  },
]

const rewards = [
  { icon: '⭐', points: 100, reward: '$5 off any service' },
  { icon: '🎁', points: 250, reward: 'Free Premium Wash' },
  { icon: '✨', points: 500, reward: 'Free Deluxe Detail' },
  { icon: '💎', points: 1000, reward: '$100 service credit' },
  { icon: '🚀', points: 2500, reward: 'Free Ceramic Coating' },
]

export default function MembershipPage() {
  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.15), transparent)', filter: 'blur(60px)' }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}><Crown size={12} /> Membership</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            Join the <span className="gradient-text-premium">AquaLux Family</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Save up to 30% on every wash. Earn rewards points. Access exclusive member perks. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((p, i) => (
              <div key={i} className="glass card-hover" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', border: p.popular ? `2px solid ${p.color}60` : '1px solid var(--glass-border)' }}>
                {p.popular && (
                  <>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                    <div style={{ position: 'absolute', top: 16, right: 16, background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, color: 'white', padding: '0.2rem 0.625rem', borderRadius: '2rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>⭐ Best Value</div>
                  </>
                )}
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.15rem', color: p.color, marginBottom: '0.5rem' }}>{p.name} Plan</h2>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: '2.5rem', color: 'var(--text-primary)' }}>${p.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>/month</span>
                </div>
                <div style={{ marginBottom: '1.5rem', fontSize: '0.8rem', color: p.color, fontWeight: 600 }}>
                  {p.washes === -1 ? '∞ Unlimited washes' : `${p.washes} washes/month`}
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={13} style={{ color: p.color, flexShrink: 0, marginTop: 2 }} /> {f}
                    </li>
                  ))}
                  {p.notIncluded.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', opacity: 0.4, textDecoration: 'line-through' }}>
                      <span style={{ fontSize: '0.7rem', marginTop: 2 }}>✗</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/booking" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '0.875rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', background: `linear-gradient(135deg, ${p.color}, ${p.color}aa)`, color: 'white', transition: 'all 0.3s' }}
                  className="hover:opacity-90 hover:scale-105"
                >
                  Join {p.name} — ${p.price}/mo
                </Link>
              </div>
            ))}
          </div>

          {/* Referral */}
          <div className="glass mt-14" style={{ padding: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(6,182,212,0.05), rgba(167,139,250,0.05))' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Refer a Friend — <span className="gradient-text-gold">Earn $20</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Every friend you refer who joins any plan earns you $20 in credit. No limit on how many you can refer!
            </p>
            <Link href="/booking" className="btn-gold">Start Referring Friends <ArrowRight size={16} /></Link>
          </div>

          {/* Rewards */}
          <div className="mt-14">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: 'var(--text-primary)', textAlign: 'center', marginBottom: '0.75rem' }}>
              Loyalty <span className="gradient-text-cyan">Rewards</span> Program
            </h2>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2.5rem' }}>
              Earn 10 points for every $1 spent. Redeem for free services and credits.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {rewards.map((r, i) => (
                <div key={i} className="glass text-center" style={{ padding: '1.5rem 1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{r.icon}</div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.1rem', color: '#06b6d4', marginBottom: '0.25rem' }}>{r.points.toLocaleString()} pts</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.reward}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
