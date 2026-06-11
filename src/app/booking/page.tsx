'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, Clock, Car, CreditCard, User } from 'lucide-react'

type Step = 1 | 2 | 3 | 4 | 5

const services = [
  { id: 'express', name: 'Express Wash', price: 15, time: '20 min', icon: '🚿', color: '#06b6d4' },
  { id: 'premium', name: 'Premium Wash', price: 49, time: '60 min', icon: '✨', color: '#8b5cf6' },
  { id: 'deluxe', name: 'Deluxe Detail', price: 149, time: '3–4 hrs', icon: '💎', color: '#f59e0b' },
  { id: 'ceramic', name: 'Ceramic Coating', price: 599, time: '1–2 days', icon: '🛡️', color: '#10b981' },
  { id: 'interior', name: 'Interior Detail', price: 99, time: '2–3 hrs', icon: '🪑', color: '#f43f5e' },
]

const vehicleTypes = ['Sedan', 'SUV', 'Truck', 'Van', 'Sports Car', 'Luxury/Exotic']
const vehicleColors = ['⬛ Black', '⬜ White', '🔵 Blue', '🔴 Red', '⬜ Silver', '🟤 Brown', '🟡 Yellow', '🟢 Green']

const times = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM']

const locations = [
  { id: 'bh', name: 'Beverly Hills', address: '123 Luxury Lane, Beverly Hills CA 90210' },
  { id: 'wh', name: 'West Hollywood', address: '456 Sunset Blvd, West Hollywood CA 90046' },
  { id: 'sm', name: 'Santa Monica', address: '789 Ocean Ave, Santa Monica CA 90401' },
]

export default function BookingPage() {
  const [step, setStep] = useState<Step>(1)
  const [form, setForm] = useState({
    service: '', vehicleType: '', vehicleColor: '', date: '', time: '',
    location: '', name: '', email: '', phone: '', notes: '', whatsapp: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const selected = services.find(s => s.id === form.service)

  const set = (key: string, val: any) => setForm(f => ({ ...f, [key]: val }))

  const stepLabels = ['Service', 'Vehicle', 'Date & Time', 'Details', 'Confirm']

  if (submitted) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)', paddingTop: '6rem' }}>
      <div className="glass text-center" style={{ padding: '3rem', maxWidth: 480, margin: '1rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.75rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Booking Confirmed!</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Your <strong>{selected?.name}</strong> for <strong>{form.vehicleType}</strong> is booked on <strong>{form.date}</strong> at <strong>{form.time}</strong>. A confirmation has been sent to <strong>{form.email}</strong>.
        </p>
        <div style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '1rem', padding: '1rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: '#06b6d4' }}>
          📍 {locations.find(l => l.id === form.location)?.address}
        </div>
        <Link href="/" className="btn-primary w-full justify-center">Back to Home <ArrowRight size={16} /></Link>
      </div>
    </div>
  )

  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '2rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative">
          <div className="text-center mb-8">
            <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>📅 Online Booking</span>
            <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: 'white' }}>
              Book Your <span className="gradient-text-cyan">Premium Wash</span>
            </h1>
          </div>
          {/* Stepper */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', maxWidth: 700, margin: '0 auto' }}>
            {stepLabels.map((label, i) => {
              const n = (i + 1) as Step
              const done = step > n
              const active = step === n
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < 4 ? 1 : 'none' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem',
                      background: done ? '#06b6d4' : active ? 'white' : 'rgba(255,255,255,0.1)',
                      color: done ? 'white' : active ? '#020818' : 'rgba(255,255,255,0.5)',
                      transition: 'all 0.3s',
                    }}>
                      {done ? '✓' : n}
                    </div>
                    <span style={{ fontSize: '0.65rem', color: active ? 'white' : 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', fontWeight: active ? 600 : 400 }}>{label}</span>
                  </div>
                  {i < 4 && <div style={{ flex: 1, height: 2, background: done ? '#06b6d4' : 'rgba(255,255,255,0.1)', margin: '0 0.5rem', marginBottom: '1.25rem', transition: 'background 0.3s' }} />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 1rem' }}>
          {/* Step 1: Service */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Choose Your Service</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {services.map(s => (
                  <button key={s.id} onClick={() => set('service', s.id)}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '1rem', border: form.service === s.id ? `2px solid ${s.color}` : '1px solid var(--border)', background: form.service === s.id ? `${s.color}10` : 'var(--bg-secondary)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', width: '100%' }}
                  >
                    <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem' }}>{s.name}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.125rem' }}>⏱ {s.time}</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.25rem', color: s.color }}>${s.price}</div>
                    {form.service === s.id && <CheckCircle size={20} style={{ color: s.color, flexShrink: 0 }} />}
                  </button>
                ))}
              </div>
              <button className="btn-primary mt-6 w-full" onClick={() => form.service && setStep(2)} style={{ opacity: form.service ? 1 : 0.4 }}>
                Next: Choose Vehicle <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Step 2: Vehicle */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Your Vehicle</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.75rem' }}>Vehicle Type</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                  {vehicleTypes.map(v => (
                    <button key={v} onClick={() => set('vehicleType', v)}
                      style={{ padding: '0.5rem 1.125rem', borderRadius: '2rem', fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.2s', background: form.vehicleType === v ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)', color: form.vehicleType === v ? 'white' : 'var(--text-secondary)' }}
                    >{v}</button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.75rem' }}>Vehicle Color</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                  {vehicleColors.map(c => (
                    <button key={c} onClick={() => set('vehicleColor', c)}
                      style={{ padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.8rem', cursor: 'pointer', border: 'none', transition: 'all 0.2s', background: form.vehicleColor === c ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)', color: form.vehicleColor === c ? 'white' : 'var(--text-secondary)' }}
                    >{c}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn-outline flex-1" onClick={() => setStep(1)}><ArrowLeft size={16} /> Back</button>
                <button className="btn-primary flex-1" onClick={() => form.vehicleType && setStep(3)} style={{ opacity: form.vehicleType ? 1 : 0.4 }}>Next: Date & Time <ArrowRight size={16} /></button>
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Pick Date & Time</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.75rem' }}>Location</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {locations.map(loc => (
                    <button key={loc.id} onClick={() => set('location', loc.id)}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.25rem', borderRadius: '1rem', border: form.location === loc.id ? '2px solid rgba(6,182,212,0.6)' : '1px solid var(--border)', background: form.location === loc.id ? 'rgba(6,182,212,0.05)' : 'var(--bg-secondary)', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
                    >
                      <span>📍</span>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{loc.name}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{loc.address}</div>
                      </div>
                      {form.location === loc.id && <CheckCircle size={18} style={{ color: '#06b6d4', marginLeft: 'auto', flexShrink: 0 }} />}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.75rem' }}>Date</label>
                <input type="date" value={form.date} onChange={e => set('date', e.target.value)} min={new Date().toISOString().split('T')[0]}
                  style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.875rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none' }}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', display: 'block', marginBottom: '0.75rem' }}>Available Times</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {times.map(t => (
                    <button key={t} onClick={() => set('time', t)}
                      style={{ padding: '0.5rem 1rem', borderRadius: '0.625rem', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', border: 'none', transition: 'all 0.2s', background: form.time === t ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)', color: form.time === t ? 'white' : 'var(--text-secondary)' }}
                    >{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn-outline flex-1" onClick={() => setStep(2)}><ArrowLeft size={16} /> Back</button>
                <button className="btn-primary flex-1" onClick={() => form.date && form.time && form.location && setStep(4)} style={{ opacity: (form.date && form.time && form.location) ? 1 : 0.4 }}>Next: Your Details <ArrowRight size={16} /></button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {step === 4 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Your Details</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Smith', icon: User },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com', icon: CreditCard },
                  { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '(555) 000-0000', icon: Car },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
                    <input type={type} value={(form as any)[key]} onChange={e => set(key, e.target.value)} placeholder={placeholder}
                      style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.875rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>Special Notes (Optional)</label>
                  <textarea value={form.notes} onChange={e => set('notes', e.target.value)} placeholder="Any special requests or notes about your vehicle..."
                    style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.875rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none', resize: 'vertical', minHeight: 100 }}
                  />
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', padding: '1rem', borderRadius: '0.875rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
                  <input type="checkbox" checked={form.whatsapp} onChange={e => set('whatsapp', e.target.checked)} style={{ width: 18, height: 18, accentColor: '#25d366' }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    💬 Send me WhatsApp reminders & booking confirmation
                  </span>
                </label>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                <button className="btn-outline flex-1" onClick={() => setStep(3)}><ArrowLeft size={16} /> Back</button>
                <button className="btn-primary flex-1" onClick={() => form.name && form.email && setStep(5)} style={{ opacity: (form.name && form.email) ? 1 : 0.4 }}>Review Booking <ArrowRight size={16} /></button>
              </div>
            </div>
          )}

          {/* Step 5: Confirm */}
          {step === 5 && (
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Confirm Your Booking</h2>
              <div className="glass" style={{ padding: '1.75rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {selected?.icon} Booking Summary
                </h3>
                {[
                  { label: 'Service', value: selected?.name },
                  { label: 'Vehicle', value: `${form.vehicleType} — ${form.vehicleColor}` },
                  { label: 'Location', value: locations.find(l => l.id === form.location)?.name },
                  { label: 'Date', value: form.date },
                  { label: 'Time', value: form.time },
                  { label: 'Name', value: form.name },
                  { label: 'Email', value: form.email },
                  { label: 'Phone', value: form.phone || '—' },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1px solid var(--border)', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{value}</span>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Total</span>
                  <span style={{ fontWeight: 900, color: '#06b6d4', fontFamily: 'var(--font-space-grotesk)' }}>${selected?.price}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="btn-outline flex-1" onClick={() => setStep(4)}><ArrowLeft size={16} /> Back</button>
                <button className="btn-gold flex-1" onClick={() => setSubmitted(true)}>
                  <CheckCircle size={18} /> Confirm & Pay ${selected?.price}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
