import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Car Wash Services',
  description: 'Premium car wash services including express wash, full detail, ceramic coating, interior detailing, and fleet services. Book online today.',
}

const services = [
  {
    icon: '🚿', name: 'Express Wash', price: '$15', time: '20 min', color: '#06b6d4',
    desc: 'Our fastest service — perfect for a quick, thorough exterior clean.',
    features: ['High-pressure foam pre-soak', 'Touchless wash system', 'Spot-free DI rinse', 'Air dry + blow-off', 'Glass cleaner treatment'],
    addons: ['Tire Shine +$5', 'Air Freshener +$3', 'Rain-X Treatment +$8'],
  },
  {
    icon: '✨', name: 'Premium Wash', price: '$49', time: '60 min', color: '#8b5cf6', popular: true,
    desc: 'Hand-detailed inside and out. The most popular choice among our members.',
    features: ['Everything in Express', 'Hand wash & chamois dry', 'Clay bar decontamination', 'Interior wipe & vacuum', 'Dashboard & console clean', 'Tire dressing', 'Window streak-free clean'],
    addons: ['Odor Treatment +$15', 'Pet Hair Removal +$20', 'Headlight Restoration +$35'],
  },
  {
    icon: '💎', name: 'Deluxe Detail', price: '$149', time: '3–4 hrs', color: '#f59e0b',
    desc: 'The full treatment — paint correction, deep conditioning, and absolute perfection.',
    features: ['Everything in Premium', 'Machine paint polish', 'Carnauba wax coat', 'Leather cleaning & conditioning', 'Engine bay detailing', 'Door jamb clean', 'Carpet shampoo & steam', 'Full interior sanitization'],
    addons: ['Ceramic Sealant +$99', 'Paint Scratch Repair +$149', 'Convertible Top Treatment +$49'],
  },
  {
    icon: '🛡️', name: 'Ceramic Coating', price: 'From $599', time: '1–2 days', color: '#10b981',
    desc: 'Professional-grade nano-ceramic protection that lasts 2–5 years.',
    features: ['Surface decontamination', 'Paint correction (swirls, scratches)', 'Multi-layer ceramic application', '5-year hydrophobic protection', 'UV & chemical resistance', 'Self-cleaning properties', 'Certificate of warranty'],
    addons: ['Windshield Coating +$199', 'Wheel Coating +$149', 'Interior Ceramic +$249'],
  },
  {
    icon: '🪑', name: 'Interior Detail', price: '$99', time: '2–3 hrs', color: '#f43f5e',
    desc: 'Deep-clean every surface, fabric, and crevice inside your vehicle.',
    features: ['Full interior vacuum', 'Steam clean all surfaces', 'Carpet & mat shampoo', 'Seat deep clean & condition', 'Dashboard UV protection', 'Headliner cleaning', 'Door panel detailing', 'Vent & console detail'],
    addons: ['Pet Odor Elimination +$25', 'Smoke Odor Treatment +$35', 'Child Seat Clean +$20'],
  },
  {
    icon: '🚛', name: 'Fleet Services', price: 'Custom Quote', time: 'Flexible', color: '#0ea5e9',
    desc: 'Dedicated fleet management programs with bulk pricing and priority scheduling.',
    features: ['Dedicated account manager', 'Volume discount pricing', 'Priority scheduling', 'Mobile service available', 'Monthly invoicing', 'Fleet tracking dashboard', 'Compliance reporting'],
    addons: ['Branding/Wrap Care +Quote', 'Emergency Detail +Quote', 'Monthly Contract Plans'],
  },
]

const steps = [
  { num: '01', title: 'Choose Your Service', desc: 'Select from our range of wash and detailing packages online or in-app.', icon: '📱' },
  { num: '02', title: 'Pick Date & Time', desc: 'Book any available slot — same day, next day, or schedule weeks ahead.', icon: '📅' },
  { num: '03', title: 'Drop Off or We Come to You', desc: 'Drive to any location or request our premium mobile detailing service.', icon: '🚗' },
  { num: '04', title: 'Relax & Enjoy', desc: 'Track your service in real-time. Collect your spotless vehicle and rewards points!', icon: '✅' },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }} className="dot-grid opacity-30" />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>✦ Services</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            Premium Services,<br /><span className="gradient-text-cyan">Unmatched Results</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 580, margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Every service is performed by certified detailing professionals using industry-leading products and techniques.
          </p>
          <Link href="/booking" className="btn-gold">Book a Service <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="glass card-hover" style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>
                {s.popular && (
                  <div style={{ position: 'absolute', top: 20, right: 20, background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', color: 'white', padding: '0.25rem 0.875rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>⭐ Most Popular</div>
                )}
                <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: `radial-gradient(circle, ${s.color}20, transparent)`, filter: 'blur(30px)' }} />
                <div style={{ bottom: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${s.color}, transparent)`, position: 'absolute' }} />

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{s.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>{s.name}</h2>
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.25rem', color: s.color }}>{s.price}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12} /> {s.time}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Star size={12} className="fill-yellow-400 text-yellow-400" /> 4.9 rated</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{s.desc}</p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {s.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={13} style={{ color: s.color, flexShrink: 0 }} /> {f}
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Add-on Options</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {s.addons.map(a => (
                      <span key={a} style={{ padding: '0.25rem 0.75rem', borderRadius: '2rem', fontSize: '0.75rem', border: `1px solid ${s.color}30`, color: s.color, background: `${s.color}10` }}>{a}</span>
                    ))}
                  </div>
                </div>

                <Link href="/booking" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`, color: 'white', transition: 'all 0.3s' }}
                  className="hover:scale-105"
                >
                  Book {s.name} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-max">
          <div className="text-center mb-14">
            <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}><Zap size={12} /> How It Works</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'var(--text-primary)' }}>
              Ready in <span className="gradient-text-cyan">4 Easy Steps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="glass text-center" style={{ padding: '2rem 1.5rem', position: 'relative' }}>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block" style={{ position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)', zIndex: 10, color: 'var(--text-muted)', fontSize: '1.25rem' }}>→</div>
                )}
                <div style={{ width: 56, height: 56, borderRadius: '1rem', background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.05))', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.75rem' }}>{step.icon}</div>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.75rem', fontWeight: 700, color: '#06b6d4', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>STEP {step.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/booking" className="btn-primary">Start Booking Now <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
