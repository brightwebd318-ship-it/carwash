'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Info } from 'lucide-react'

const vehicleTypes = ['Sedan', 'SUV / Crossover', 'Truck / Pickup', 'Van / Minivan', 'Sports Car', 'Luxury / Exotic']
const vehicleMultiplier: Record<string, number> = { 'Sedan': 1, 'SUV / Crossover': 1.2, 'Truck / Pickup': 1.3, 'Van / Minivan': 1.35, 'Sports Car': 1.15, 'Luxury / Exotic': 1.5 }

const packages = [
  {
    name: 'Express', basePrice: 15, color: '#64748b',
    features: ['Exterior Foam Wash', 'Spot-Free Rinse', 'Air Dry', 'Window Wipe', 'Wheel Rinse'],
    notIncluded: ['Hand Wax', 'Interior Clean', 'Tire Shine', 'Clay Bar', 'Polish'],
  },
  {
    name: 'Premium', basePrice: 49, color: '#06b6d4', popular: true,
    features: ['Everything in Express', 'Hand Wash & Dry', 'Tire Shine', 'Interior Vacuum', 'Dashboard Wipe', 'Air Freshener', 'Window Streak-Free'],
    notIncluded: ['Clay Bar', 'Polish', 'Leather Condition', 'Engine Bay'],
  },
  {
    name: 'Deluxe', basePrice: 149, color: '#f59e0b',
    features: ['Everything in Premium', 'Clay Bar Treatment', 'Machine Polish', 'Carnauba Wax', 'Leather Conditioning', 'Carpet Shampoo', 'Engine Bay Clean', 'Door Jamb Detail'],
    notIncluded: [],
  },
  {
    name: 'Ceramic', basePrice: 599, color: '#10b981',
    features: ['Paint Decontamination', 'Full Paint Correction', 'Multi-Layer Ceramic', '5-Year Warranty', 'UV Protection', 'Hydrophobic Shield', 'Chemical Resistance', 'Self-Cleaning Effect'],
    notIncluded: [],
  },
]

const addons = [
  { name: 'Tire Shine', price: 5, icon: '⚫' },
  { name: 'Air Freshener', price: 3, icon: '🌺' },
  { name: 'Rain-X Treatment', price: 8, icon: '🌧️' },
  { name: 'Odor Elimination', price: 15, icon: '💨' },
  { name: 'Headlight Restore', price: 35, icon: '💡' },
  { name: 'Pet Hair Removal', price: 20, icon: '🐾' },
]

const faqs = [
  { q: 'Is pricing different for larger vehicles?', a: 'Yes! SUVs cost ~20% more, Trucks ~30% more, and Luxury/Exotic vehicles ~50% more than the base Sedan price. Our booking system calculates this automatically.' },
  { q: 'Do prices include tax?', a: 'All listed prices are before applicable sales tax. Tax is calculated at checkout based on your location.' },
  { q: 'Can I add services after booking?', a: 'Yes! Contact us via WhatsApp or call us before your appointment to add services.' },
  { q: 'Is there a membership discount?', a: 'Members save 15–30% on all services. See our Membership page for details.' },
  { q: 'What payment methods do you accept?', a: 'Visa, Mastercard, Amex, Apple Pay, Google Pay, and cash. Secure checkout via Stripe.' },
]

export default function PricingPage() {
  const [vehicle, setVehicle] = useState('Sedan')
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const multiplier = vehicleMultiplier[vehicle]

  const toggleAddon = (name: string) => {
    setSelectedAddons(a => a.includes(name) ? a.filter(x => x !== name) : [...a, name])
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>✦ Pricing</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            Honest, <span className="gradient-text-gold">Transparent</span> Pricing
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            No hidden fees. No surprises. Select your vehicle type to see exact pricing.
          </p>
        </div>
      </section>

      {/* Vehicle Selector */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Select Your Vehicle Type
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {vehicleTypes.map(v => (
                <button key={v} onClick={() => setVehicle(v)}
                  style={{
                    padding: '0.625rem 1.25rem', borderRadius: '2rem', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.3s', border: 'none',
                    background: vehicle === v ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)',
                    color: vehicle === v ? 'white' : 'var(--text-secondary)',
                    boxShadow: vehicle === v ? '0 4px 15px rgba(6,182,212,0.4)' : 'none',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
            {vehicle !== 'Sedan' && (
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '0.375rem', justifyContent: 'center' }}>
                <Info size={13} /> {vehicle} pricing includes a {Math.round((multiplier - 1) * 100)}% size adjustment
              </p>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => {
              const price = Math.round(pkg.basePrice * multiplier)
              return (
                <div key={i} className="glass card-hover" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', border: pkg.popular ? `2px solid ${pkg.color}60` : '1px solid var(--glass-border)' }}>
                  {pkg.popular && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${pkg.color}, transparent)` }} />
                  )}
                  {pkg.popular && (
                    <div style={{ position: 'absolute', top: 16, right: 16, background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`, color: 'white', padding: '0.2rem 0.625rem', borderRadius: '2rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Popular</div>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.05rem', color: pkg.color, marginBottom: '0.5rem' }}>{pkg.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: '2.25rem', color: 'var(--text-primary)' }}>${price}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>/ {vehicle}</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {pkg.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle size={13} style={{ color: pkg.color, flexShrink: 0, marginTop: 2 }} /> {f}
                      </li>
                    ))}
                    {pkg.notIncluded.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', opacity: 0.5 }}>
                        <span style={{ width: 13, height: 13, flexShrink: 0, display: 'inline-block' }}>✗</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking" style={{ display: 'block', textAlign: 'center', padding: '0.75rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'all 0.3s', background: pkg.popular ? `linear-gradient(135deg, ${pkg.color}, ${pkg.color}aa)` : 'transparent', color: pkg.popular ? 'white' : pkg.color, border: `1px solid ${pkg.color}40` }}>
                    Book {pkg.name}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Add-ons */}
          <div className="mt-14">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Enhance with Add-ons
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {addons.map(a => (
                <button key={a.name} onClick={() => toggleAddon(a.name)}
                  className="glass card-hover"
                  style={{ padding: '1.25rem', textAlign: 'center', border: selectedAddons.includes(a.name) ? '1px solid rgba(6,182,212,0.5)' : '1px solid var(--glass-border)', cursor: 'pointer', background: selectedAddons.includes(a.name) ? 'rgba(6,182,212,0.1)' : 'var(--glass-bg)', transition: 'all 0.3s' }}
                >
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{a.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{a.name}</div>
                  <div style={{ fontWeight: 700, color: '#06b6d4', fontSize: '0.875rem' }}>+${a.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-14 max-w-3xl mx-auto">
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>Pricing FAQ</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} className="glass" style={{ padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{faq.q}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
