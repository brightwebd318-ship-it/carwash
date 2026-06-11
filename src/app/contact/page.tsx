'use client'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

const locations = [
  {
    name: 'Beverly Hills', address: '123 Luxury Lane', city: 'Beverly Hills, CA 90210',
    phone: '(555) 123-4567', email: 'bh@aqualuxcarwash.com',
    hours: { weekdays: '7:00 AM – 8:00 PM', weekends: '8:00 AM – 6:00 PM' },
    mapEmbed: 'https://maps.google.com/maps?q=Beverly+Hills,CA&output=embed',
  },
  {
    name: 'West Hollywood', address: '456 Sunset Blvd', city: 'West Hollywood, CA 90046',
    phone: '(555) 234-5678', email: 'wh@aqualuxcarwash.com',
    hours: { weekdays: '7:00 AM – 8:00 PM', weekends: '8:00 AM – 6:00 PM' },
    mapEmbed: 'https://maps.google.com/maps?q=West+Hollywood,CA&output=embed',
  },
  {
    name: 'Santa Monica', address: '789 Ocean Ave', city: 'Santa Monica, CA 90401',
    phone: '(555) 345-6789', email: 'sm@aqualuxcarwash.com',
    hours: { weekdays: '7:00 AM – 8:00 PM', weekends: '8:00 AM – 6:00 PM' },
    mapEmbed: 'https://maps.google.com/maps?q=Santa+Monica,CA&output=embed',
  },
]

export default function ContactPage() {
  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>📍 Contact</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            We'd Love to <span className="gradient-text-cyan">Hear From You</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Have questions? Want to book? Need a fleet quote? We're here to help — reach out any way you prefer.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Send Us a Message</h2>
              <div className="glass" style={{ padding: '2rem' }}>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    {[
                      { label: 'First Name', id: 'firstName', placeholder: 'John', type: 'text' },
                      { label: 'Last Name', id: 'lastName', placeholder: 'Smith', type: 'text' },
                    ].map(f => (
                      <div key={f.id}>
                        <label htmlFor={f.id} style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>{f.label}</label>
                        <input id={f.id} type={f.type} placeholder={f.placeholder}
                          style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}
                        />
                      </div>
                    ))}
                  </div>
                  {[
                    { label: 'Email', id: 'email', placeholder: 'john@example.com', type: 'email' },
                    { label: 'Phone', id: 'phone', placeholder: '(555) 000-0000', type: 'tel' },
                  ].map(f => (
                    <div key={f.id} style={{ marginBottom: '1rem' }}>
                      <label htmlFor={f.id} style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>{f.label}</label>
                      <input id={f.id} type={f.type} placeholder={f.placeholder}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="subject" style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Subject</label>
                    <select id="subject"
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}
                    >
                      <option>General Inquiry</option>
                      <option>Booking Question</option>
                      <option>Fleet Services</option>
                      <option>Membership</option>
                      <option>Complaint / Feedback</option>
                      <option>Partnership / Franchise</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Message</label>
                    <textarea id="message" rows={5} placeholder="Tell us how we can help..."
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              </div>

              {/* Quick Contact */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem' }}>
                <a href="tel:+15551234567" className="glass card-hover" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                  <Phone size={20} style={{ color: '#06b6d4' }} />
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Call Us</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(555) 123-4567</div>
                </a>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="glass card-hover" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                  <MessageCircle size={20} style={{ color: '#25d366' }} />
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>WhatsApp</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Message us 24/7</div>
                </a>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Our Locations</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {locations.map((loc, i) => (
                  <div key={i} className="glass" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} style={{ color: '#06b6d4' }} /> {loc.name}
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.8rem' }}>
                      <div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Address</div>
                        <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{loc.address}<br />{loc.city}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Hours</div>
                        <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Mon–Fri: {loc.hours.weekdays}<br />Sat–Sun: {loc.hours.weekends}</div>
                      </div>
                      <a href={`tel:${loc.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#06b6d4', fontWeight: 600, textDecoration: 'none' }}>
                        <Phone size={13} /> {loc.phone}
                      </a>
                      <a href={`mailto:${loc.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#06b6d4', fontWeight: 600, textDecoration: 'none', fontSize: '0.75rem' }}>
                        <Mail size={13} /> {loc.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours summary */}
              <div className="glass mt-4" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                  <Clock size={16} style={{ color: '#06b6d4' }} /> Business Hours (All Locations)
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <tbody>
                    {[
                      ['Monday – Friday', '7:00 AM – 8:00 PM'],
                      ['Saturday', '8:00 AM – 6:00 PM'],
                      ['Sunday', '8:00 AM – 6:00 PM'],
                      ['Holidays', 'Check individual location'],
                    ].map(([day, time]) => (
                      <tr key={day} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.5rem 0', color: 'var(--text-secondary)' }}>{day}</td>
                        <td style={{ padding: '0.5rem 0', color: 'var(--text-primary)', fontWeight: 600, textAlign: 'right' }}>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
