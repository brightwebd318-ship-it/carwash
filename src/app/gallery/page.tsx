'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, X, ZoomIn } from 'lucide-react'

const categories = ['All', 'Exterior Wash', 'Interior Detail', 'Ceramic Coating', 'Fleet', 'Before & After']

const gallery = [
  {
    id: 1,
    cat: 'Ceramic Coating',
    title: 'Ferrari 488 — Full Ceramic',
    desc: 'Gyeon Quartz multi-layer ceramic coating. Paint correction + 5-year protection.',
    img: '/carwash/gallery/gallery_ferrari_detail.png',
    color: '#10b981',
    span: 'lg:col-span-2 lg:row-span-2',
    aspectRatio: '4/3',
  },
  {
    id: 2,
    cat: 'Exterior Wash',
    title: 'BMW M5 — Premium Hand Wash',
    desc: 'Full hand wash, foam pre-soak, chamois dry and tire shine.',
    img: '/carwash/gallery/gallery_bmw_wash.png',
    color: '#06b6d4',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 3,
    cat: 'Interior Detail',
    title: 'Rolls Royce Ghost — Interior',
    desc: 'White-glove leather conditioning, steam clean and UV protection.',
    img: '/carwash/gallery/gallery_rolls_interior.png',
    color: '#f43f5e',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 4,
    cat: 'Ceramic Coating',
    title: 'Ceramic Coating Application',
    desc: 'Professional-grade liquid ceramic spray applied under studio lighting.',
    img: '/carwash/gallery/gallery_ceramic_spray.png',
    color: '#8b5cf6',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 5,
    cat: 'Exterior Wash',
    title: 'Audi RS7 — Fresh Reveal',
    desc: 'Water sheeting off perfectly — showroom finish after Deluxe Wash.',
    img: '/carwash/gallery/gallery_audi_reveal.png',
    color: '#06b6d4',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 6,
    cat: 'Before & After',
    title: 'Sports Car Transformation',
    desc: 'Dramatic before & after — from road-worn to showroom perfect.',
    img: '/carwash/gallery/gallery_before_after.png',
    color: '#f59e0b',
    span: 'lg:col-span-2',
    aspectRatio: '16/7',
  },
  {
    id: 7,
    cat: 'Ceramic Coating',
    title: 'Lamborghini Urus — PPF',
    desc: 'Full-body paint protection film + ceramic top coat. 5-year warranty.',
    img: '/carwash/gallery/gallery_urus_ppf.png',
    color: '#10b981',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 8,
    cat: 'Exterior Wash',
    title: 'Porsche 911 — Ceramic Wash',
    desc: 'Water-beading ceramic wash treatment. Water repels in real time.',
    img: '/carwash/gallery/gallery_porsche_ceramic.png',
    color: '#06b6d4',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 9,
    cat: 'Interior Detail',
    title: 'Tesla Model 3 — Interior Detail',
    desc: 'Steam clean, UV dashboard protection, streak-free glass.',
    img: '/carwash/gallery/gallery_tesla_interior.png',
    color: '#f43f5e',
    span: '',
    aspectRatio: '4/3',
  },
  {
    id: 10,
    cat: 'Fleet',
    title: 'Commercial Fleet — 40 Vehicles',
    desc: 'Monthly fleet program — all vehicles serviced simultaneously on-site.',
    img: '/carwash/gallery/gallery_fleet_amazon.png',
    color: '#0ea5e9',
    span: 'lg:col-span-2',
    aspectRatio: '16/7',
  },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<typeof gallery[0] | null>(null)
  const [imgError, setImgError] = useState<Record<number, boolean>>({})

  const filtered = filter === 'All' ? gallery : gallery.filter(g => g.cat === filter)

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '4rem',
        background: 'linear-gradient(135deg, #020818, #071840)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '30%', right: '15%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent)', filter: 'blur(60px)' }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>🖼️ Gallery</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            Our Work <span className="gradient-text-cyan">Speaks</span> For Itself
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 550, margin: '0 auto 2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Real results from real customers. Every photo is an unedited finish from our detailing professionals.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: '50K+', label: 'Cars Detailed' },
              { value: '4.9★', label: 'Google Rating' },
              { value: '100%', label: 'Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.5rem', color: '#06b6d4' }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">

          {/* Filter Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '3rem', justifyContent: 'center' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{
                  padding: '0.5rem 1.375rem', borderRadius: '2rem', fontSize: '0.825rem',
                  fontWeight: 600, cursor: 'pointer', border: 'none', transition: 'all 0.25s',
                  background: filter === c ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)',
                  color: filter === c ? 'white' : 'var(--text-secondary)',
                  boxShadow: filter === c ? '0 4px 20px rgba(6,182,212,0.35)' : 'none',
                  transform: filter === c ? 'translateY(-1px)' : 'none',
                }}
              >{c}</button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
            className="lg:grid-cols-4"
          >
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className={`glass card-hover group ${item.span}`}
                style={{
                  borderRadius: '1.25rem', overflow: 'hidden',
                  cursor: 'pointer', position: 'relative',
                  border: '1px solid var(--glass-border)',
                  transition: 'all 0.4s ease',
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: item.aspectRatio, overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                  {!imgError[item.id] ? (
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      className="group-hover:scale-110"
                      onError={() => setImgError(e => ({ ...e, [item.id]: true }))}
                    />
                  ) : (
                    /* Fallback gradient tile */
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(135deg, ${item.color}25, ${item.color}08)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '4rem',
                    }}>🚗</div>
                  )}

                  {/* Category badge */}
                  <div style={{
                    position: 'absolute', top: 12, left: 12, zIndex: 2,
                    padding: '0.25rem 0.75rem', borderRadius: '2rem',
                    background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
                    border: `1px solid ${item.color}50`,
                    fontSize: '0.7rem', fontWeight: 700, color: item.color,
                    letterSpacing: '0.05em',
                  }}>
                    {item.cat}
                  </div>

                  {/* Hover overlay */}
                  <div style={{
                    position: 'absolute', inset: 0, zIndex: 2,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                    opacity: 0, transition: 'opacity 0.35s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                    className="group-hover:opacity-100"
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transform: 'scale(0.8)', transition: 'transform 0.3s ease',
                    }}
                      className="group-hover:scale-100"
                    >
                      <ZoomIn size={20} color="white" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div style={{ padding: '1.1rem 1.25rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                    fontSize: '0.95rem', color: 'var(--text-primary)',
                    marginBottom: '0.3rem', lineHeight: 1.3,
                  }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>

                {/* Bottom accent */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${item.color}, transparent)`, opacity: 0, transition: 'opacity 0.3s' }}
                  className="group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <div className="glass" style={{ display: 'inline-block', padding: '2.5rem 3.5rem', borderRadius: '2rem', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Ready for Your Transformation?
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Book online in under 2 minutes. Same-day slots available.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/booking" className="btn-primary">
                  Book Now <ArrowRight size={16} />
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 3000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(12px)',
            animation: 'fadeInScale 0.25s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: 860, width: '100%',
              borderRadius: '1.75rem', overflow: 'hidden',
              background: 'var(--bg-card)',
              border: '1px solid var(--glass-border)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', aspectRatio: '16/9', background: 'var(--bg-secondary)' }}>
              {!imgError[selected.id] ? (
                <Image
                  src={selected.img}
                  alt={selected.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="860px"
                />
              ) : (
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${selected.color}20, ${selected.color}05)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6rem' }}>🚗</div>
              )}

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: 16, right: 16, zIndex: 10,
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'white', transition: 'all 0.2s',
                }}
                className="hover:bg-white/20"
              >
                <X size={18} />
              </button>

              {/* Category overlay */}
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                padding: '0.3rem 0.875rem', borderRadius: '2rem',
                background: `${selected.color}dd`, backdropFilter: 'blur(8px)',
                fontSize: '0.75rem', fontWeight: 700, color: 'white',
              }}>
                {selected.cat}
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: '1.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                  {selected.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{selected.desc}</p>
              </div>
              <Link
                href="/booking"
                className="btn-primary"
                onClick={() => setSelected(null)}
                style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem', flexShrink: 0 }}
              >
                Book This Service <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
