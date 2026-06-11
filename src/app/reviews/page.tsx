'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, ThumbsUp, MessageSquare } from 'lucide-react'

const reviews = [
  { name: 'Sarah M.', vehicle: 'Tesla Model 3', rating: 5, text: 'AquaLux is simply the best. My Tesla looks showroom-perfect every time. The ceramic coating they applied still beads water beautifully after 8 months!', avatar: 'SM', date: '2 days ago', location: 'Beverly Hills', helpful: 24, service: 'Ceramic Coating' },
  { name: 'James R.', vehicle: 'BMW 7 Series', rating: 5, text: 'The Deluxe Detailing service blew me away. Every surface treated with care and precision. Worth every single penny. My BMW has never looked better.', avatar: 'JR', date: '1 week ago', location: 'West Hollywood', helpful: 18, service: 'Deluxe Detail' },
  { name: 'Emily K.', vehicle: 'Porsche Cayenne', rating: 5, text: 'The Gold membership is incredible value. Unlimited washes for $79/month? The service quality never drops. Staff is always professional and friendly.', avatar: 'EK', date: '2 weeks ago', location: 'Malibu', helpful: 31, service: 'Gold Membership' },
  { name: 'David L.', vehicle: 'Mercedes S-Class', rating: 5, text: 'Brought my entire family fleet for detailing. The fleet discount was generous and the results were spectacular. My S-Class looks better than new!', avatar: 'DL', date: '3 weeks ago', location: 'Bel Air', helpful: 15, service: 'Fleet Services' },
  { name: 'Aisha T.', vehicle: 'Range Rover Sport', rating: 5, text: 'Online booking is so convenient. The interior detailing removed years of built-up grime. Staff are true professionals who genuinely care about quality.', avatar: 'AT', date: '1 month ago', location: 'Santa Monica', helpful: 22, service: 'Interior Detail' },
  { name: 'Carlos V.', vehicle: 'Ferrari 488', rating: 5, text: 'When you own a Ferrari, you cannot trust just any car wash. AquaLux treats every vehicle like a masterpiece. The attention to detail is extraordinary.', avatar: 'CV', date: '1 month ago', location: 'Beverly Hills', helpful: 41, service: 'Premium Wash' },
  { name: 'Michelle P.', vehicle: 'Audi Q8', rating: 5, text: 'Best investment for my car. The ceramic coating has held up perfectly. Staff walked me through the whole process and I felt completely confident.', avatar: 'MP', date: '5 weeks ago', location: 'Brentwood', helpful: 19, service: 'Ceramic Coating' },
  { name: 'Tyler H.', vehicle: 'Ford F-150', rating: 4, text: 'Great service overall. My truck was spotless after the Deluxe Detail. Only minor feedback — parking is a bit tight during peak hours. Otherwise 10/10.', avatar: 'TH', date: '6 weeks ago', location: 'Culver City', helpful: 12, service: 'Deluxe Detail' },
  { name: 'Jennifer W.', vehicle: 'Lexus RX 350', rating: 5, text: 'I have been coming here for 2 years and the quality has never wavered. The Silver membership pays for itself within the first two washes. Highly recommend!', avatar: 'JW', date: '2 months ago', location: 'Encino', helpful: 28, service: 'Silver Membership' },
]

const categories = ['All', 'Ceramic Coating', 'Deluxe Detail', 'Premium Wash', 'Interior Detail', 'Membership', 'Fleet Services']

const ratingBreakdown = [
  { stars: 5, count: 2461, pct: 87 },
  { stars: 4, count: 284, pct: 10 },
  { stars: 3, count: 71, pct: 2.5 },
  { stars: 2, count: 20, pct: 0.7 },
  { stars: 1, count: 11, pct: 0.4 },
]

export default function ReviewsPage() {
  const [filter, setFilter] = useState('All')
  const [helpfuls, setHelpfuls] = useState<Record<number, boolean>>({})

  const filtered = filter === 'All' ? reviews : reviews.filter(r => r.service === filter)

  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>⭐ Reviews</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            What <span className="gradient-text-gold">2,847 Customers</span> Say
          </h1>

          {/* Aggregate Rating */}
          <div className="glass" style={{ display: 'inline-flex', gap: '3rem', padding: '1.75rem 2.5rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: '3.5rem', color: 'white', lineHeight: 1 }}>4.9</div>
              <div style={{ display: 'flex', gap: '0.25rem', justifyContent: 'center', margin: '0.5rem 0' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>Overall Rating</div>
            </div>
            <div>
              {ratingBreakdown.map(r => (
                <div key={r.stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', width: 20, textAlign: 'right' }}>{r.stars}★</span>
                  <div style={{ width: 140, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                    <div style={{ width: `${r.pct}%`, height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', borderRadius: 3 }} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', width: 30 }}>{r.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          {/* Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{ padding: '0.5rem 1.125rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: 'none', transition: 'all 0.2s', background: filter === c ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)', color: filter === c ? 'white' : 'var(--text-secondary)' }}
              >{c}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <div key={i} className="glass card-hover" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  {r.rating < 5 && [...Array(5 - r.rating)].map((_, j) => <Star key={j} size={14} style={{ color: 'var(--text-muted)' }} />)}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>"{r.text}"</p>
                <div style={{ padding: '0.5rem 0.875rem', borderRadius: '2rem', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)', fontSize: '0.72rem', color: '#06b6d4', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.375rem', width: 'fit-content' }}>
                  ✓ Verified {r.service}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>{r.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{r.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{r.vehicle} • {r.location} • {r.date}</div>
                    </div>
                  </div>
                  <button onClick={() => setHelpfuls(h => ({ ...h, [i]: !h[i] }))}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: helpfuls[i] ? '#06b6d4' : 'var(--text-muted)', cursor: 'pointer', border: '1px solid', borderColor: helpfuls[i] ? 'rgba(6,182,212,0.3)' : 'var(--border)', padding: '0.25rem 0.625rem', borderRadius: '2rem', background: 'transparent', transition: 'all 0.2s' }}
                  >
                    <ThumbsUp size={11} /> {r.helpful + (helpfuls[i] ? 1 : 0)}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass" style={{ display: 'inline-block', padding: '2rem 3rem', borderRadius: '1.5rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Love AquaLux? Share your experience!</p>
              <a href="https://g.page/r/aqualux/review" target="_blank" rel="noopener noreferrer" className="btn-gold">
                Write a Google Review <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
