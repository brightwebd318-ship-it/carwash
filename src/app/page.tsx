'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, ChevronDown, Shield, Award, Users, MapPin, Calendar, TrendingUp, CheckCircle, Car, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

/* ══════════════════════════════════════════
   HERO WITH CAR SLIDER — PREMIUM CINEMATIC
══════════════════════════════════════════ */
const slides = [
  {
    img: '/hero/hero_slide1_ferrari.png',
    tag: 'Ceramic Coating',
    headline: 'Where Luxury\nMeets Immaculate',
    sub: 'Ferrari-grade precision for every vehicle — ceramic coating, full detailing & premium care.',
    cta: 'Book Ceramic Coating',
    accent: '#06b6d4',
    carName: 'Ferrari 488',
  },
  {
    img: '/hero/hero_slide2_bentley.png',
    tag: 'Premium Detail',
    headline: 'Showroom Perfect\nEvery Time',
    sub: 'Hand-finished detailing that turns your Bentley back into a statement piece.',
    cta: 'Book Detailing',
    accent: '#f59e0b',
    carName: 'Bentley Continental',
  },
  {
    img: '/hero/hero_slide3_tesla.png',
    tag: 'EV Specialist',
    headline: 'Futuristic Care\nFor Future Cars',
    sub: 'EV-safe wash systems, touchless technology, and eco-friendly products for your Tesla.',
    cta: 'Book EV Wash',
    accent: '#10b981',
    carName: 'Tesla Model S',
  },
  {
    img: '/hero/hero_slide4_lambo.png',
    tag: 'Hand Wax & Polish',
    headline: 'Your Car Deserves\nThe Best',
    sub: 'Professional hand waxing and paint correction that restores showroom brilliance.',
    cta: 'Book Now',
    accent: '#a78bfa',
    carName: 'Lamborghini Huracán',
  },
]

const SLIDE_DURATION = 6000

function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prev2, setPrev2] = useState<number | null>(null)
  const [playing, setPlaying] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    setPrev2(current)
    setCurrent(idx)
    setProgress(0)
    setAnimKey(k => k + 1)
  }, [current])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => { setTimeout(() => setLoaded(true), 80) }, [])

  // Progress bar
  useEffect(() => {
    setProgress(0)
    if (progressRef.current) clearInterval(progressRef.current)
    if (!playing) return
    const step = 100 / (SLIDE_DURATION / 50)
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + step, 100))
    }, 50)
    return () => { if (progressRef.current) clearInterval(progressRef.current) }
  }, [current, playing, animKey])

  // Auto-advance
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (playing) { timerRef.current = setInterval(next, SLIDE_DURATION) }
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [playing, next])

  const slide = slides[current]

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1.08) translate(0%, 0%); }
          100% { transform: scale(1.18) translate(-2%, -1%); }
        }
        @keyframes kenBurns2 {
          0%   { transform: scale(1.08) translate(0%, 0%); }
          100% { transform: scale(1.18) translate(2%, 1%); }
        }
        @keyframes kenBurns3 {
          0%   { transform: scale(1.1) translate(1%, 0%); }
          100% { transform: scale(1.2) translate(-1%, -2%); }
        }
        @keyframes kenBurns4 {
          0%   { transform: scale(1.08) translate(-1%, 1%); }
          100% { transform: scale(1.18) translate(1%, -1%); }
        }
        @keyframes slideContentIn {
          0%   { opacity: 0; transform: translateY(28px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes accentBarIn {
          0%   { width: 0; opacity: 0; }
          100% { width: 60px; opacity: 1; }
        }
        @keyframes progressFill {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .hero-kb-0 { animation: kenBurns  ${SLIDE_DURATION}ms linear forwards; }
        .hero-kb-1 { animation: kenBurns2 ${SLIDE_DURATION}ms linear forwards; }
        .hero-kb-2 { animation: kenBurns3 ${SLIDE_DURATION}ms linear forwards; }
        .hero-kb-3 { animation: kenBurns4 ${SLIDE_DURATION}ms linear forwards; }
        .hero-content-in { animation: slideContentIn 0.75s cubic-bezier(.22,1,.36,1) forwards; }
        .hero-accent-bar { animation: accentBarIn 0.6s cubic-bezier(.22,1,.36,1) 0.3s forwards; }
        .hero-thumb:hover { opacity: 1 !important; transform: scale(1.07); }
        .hero-arrow:hover { background: rgba(255,255,255,0.22) !important; transform: translateY(-50%) scale(1.1); }
        .hero-play:hover { background: rgba(255,255,255,0.2) !important; }
      `}</style>

      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden', background: '#020818' }}>

        {/* ── SLIDE IMAGES with Ken Burns ── */}
        {slides.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, overflow: 'hidden',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.1s cubic-bezier(.4,0,.2,1)',
            zIndex: i === current ? 1 : 0,
          }}>
            <div
              className={i === current ? `hero-kb-${i}` : ''}
              style={{ position: 'absolute', inset: '-5%', transformOrigin: 'center center' }}
            >
              <Image
                src={s.img} alt={s.tag} fill priority={i === 0}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            {/* Cinematic gradients */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(2,8,24,0.93) 0%, rgba(2,8,24,0.65) 45%, rgba(2,8,24,0.18) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(2,8,24,0.85) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,8,24,0.4) 0%, transparent 25%)' }} />
          </div>
        ))}

        {/* ── DOT GRID ── */}
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.18, zIndex: 2, pointerEvents: 'none' }} />

        {/* ── ACCENT GLOW ── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, zIndex: 25,
          background: `linear-gradient(90deg, transparent 0%, ${slide.accent} 50%, transparent 100%)`,
          opacity: 0.7, transition: 'background 1s ease',
        }} />

        {/* ── PROGRESS BAR ── */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, zIndex: 25, background: 'rgba(255,255,255,0.08)' }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${slide.accent}, ${slide.accent}bb)`,
            transition: 'width 0.05s linear, background 0.8s ease',
            boxShadow: `0 0 8px ${slide.accent}`,
          }} />
        </div>

        {/* ── CONTENT ── */}
        <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '7rem 1.25rem 8rem' }}>
          <div style={{ maxWidth: 700, margin: '0 auto 0 0', paddingLeft: 'clamp(1rem, 5vw, 5rem)' }}>

            {/* Tag badge */}
            <div key={`tag-${current}`} className="hero-content-in" style={{ marginBottom: '1.25rem', opacity: loaded ? 1 : 0 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 1rem', borderRadius: '2rem', fontSize: '0.72rem',
                fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                border: `1px solid ${slide.accent}45`,
                color: slide.accent,
                background: `${slide.accent}15`,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.5s ease',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: slide.accent, display: 'inline-block', boxShadow: `0 0 6px ${slide.accent}` }} />
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 key={`h-${current}`} className="hero-content-in"
              style={{
                fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, color: 'white',
                lineHeight: 1.08, fontSize: 'clamp(2.4rem, 6.5vw, 5.25rem)',
                letterSpacing: '-0.035em', marginBottom: '0.5rem', whiteSpace: 'pre-line',
                opacity: loaded ? 1 : 0, animationDelay: '0.08s',
              }}
            >
              {slide.headline.split('\n')[0]}
              <br />
              <span style={{
                color: slide.accent,
                textShadow: `0 0 40px ${slide.accent}55`,
                transition: 'color 0.6s, text-shadow 0.6s',
              }}>
                {slide.headline.split('\n')[1]}
              </span>
            </h1>

            {/* Accent bar */}
            <div key={`bar-${current}`} style={{
              height: 3, background: slide.accent, borderRadius: 2, marginBottom: '1.5rem',
              width: 0, opacity: 0, transition: 'background 0.5s',
            }} className="hero-accent-bar" />

            {/* Sub */}
            <p key={`sub-${current}`} className="hero-content-in"
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.7)',
                maxWidth: 500, lineHeight: 1.8, marginBottom: '2.25rem',
                opacity: loaded ? 1 : 0, animationDelay: '0.18s',
              }}
            >{slide.sub}</p>

            {/* CTAs */}
            <div key={`cta-${current}`} className="hero-content-in"
              style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', opacity: loaded ? 1 : 0, animationDelay: '0.28s' }}
            >
              <Link href="/booking" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 1.75rem', borderRadius: '3rem', fontWeight: 700,
                fontSize: 'clamp(0.85rem, 2vw, 1rem)', textDecoration: 'none', color: '#020818',
                background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent}cc)`,
                boxShadow: `0 4px 28px ${slide.accent}55`,
                transition: 'all 0.3s',
              }} className="hover:scale-105">
                <Calendar size={16} /> {slide.cta}
              </Link>
              <Link href="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 1.75rem', borderRadius: '3rem', fontWeight: 600,
                fontSize: 'clamp(0.85rem, 2vw, 1rem)', textDecoration: 'none', color: 'white',
                border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.07)', transition: 'all 0.3s',
              }} className="hover:border-white/50 hover:bg-white/15">
                <Play size={14} /> View Services
              </Link>
            </div>

            {/* Stats row */}
            <div key={`stats-${current}`} className="hero-content-in"
              style={{
                display: 'flex', gap: 'clamp(1rem, 4vw, 2.5rem)', marginTop: '3rem', flexWrap: 'wrap',
                opacity: loaded ? 1 : 0, animationDelay: '0.4s',
              }}
            >
              {[
                { v: '4.9★', l: '2,847 Reviews' },
                { v: '50K+', l: 'Cars Washed' },
                { v: '3', l: 'Locations' },
                { v: '100%', l: 'Guaranteed' },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: slide.accent, transition: 'color 0.5s' }}>{v}</div>
                  <div style={{ fontSize: 'clamp(0.63rem, 1.4vw, 0.72rem)', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SLIDE COUNTER (top-right) ── */}
        <div style={{
          position: 'absolute', top: '5.5rem', right: 'clamp(1rem, 4vw, 3rem)', zIndex: 20,
          fontFamily: 'var(--font-space-grotesk)', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
            <span style={{ color: 'white', fontWeight: 800, fontSize: '1.6rem', lineHeight: 1 }}>{String(current + 1).padStart(2,'0')}</span>
            <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem' }}>/{String(slides.length).padStart(2,'0')}</span>
          </div>
          <div style={{ fontSize: '0.65rem', color: slide.accent, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, transition: 'color 0.5s' }}>{slide.carName}</div>
        </div>

        {/* ── PREV / NEXT ARROWS ── */}
        <button onClick={prev} aria-label="Previous slide" className="hero-arrow"
          style={{
            position: 'absolute', left: 'clamp(0.75rem, 3vw, 1.75rem)', top: '50%',
            transform: 'translateY(-50%)', zIndex: 20,
            width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'white', transition: 'all 0.25s',
          }}
        ><ChevronLeft size={22} /></button>

        <button onClick={next} aria-label="Next slide" className="hero-arrow"
          style={{
            position: 'absolute', right: 'clamp(0.75rem, 3vw, 1.75rem)', top: '50%',
            transform: 'translateY(-50%)', zIndex: 20,
            width: 48, height: 48, borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'white', transition: 'all 0.25s',
          }}
        ><ChevronRight size={22} /></button>

        {/* ── THUMBNAIL STRIP (right side) ── */}
        <div style={{
          position: 'absolute', right: 'clamp(0.75rem, 3vw, 1.75rem)',
          bottom: '5rem', zIndex: 20,
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)}
              className="hero-thumb"
              style={{
                width: 62, height: 40, borderRadius: '0.6rem', overflow: 'hidden',
                border: i === current ? `2px solid ${slide.accent}` : '2px solid rgba(255,255,255,0.12)',
                cursor: 'pointer', padding: 0,
                transition: 'all 0.3s',
                opacity: i === current ? 1 : 0.45,
                position: 'relative',
                boxShadow: i === current ? `0 0 14px ${slide.accent}55` : 'none',
              }}
            >
              <Image src={s.img} alt={s.tag} fill style={{ objectFit: 'cover' }} sizes="62px" />
              {i === current && (
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `${slide.accent}20`,
                }} />
              )}
            </button>
          ))}
        </div>

        {/* ── DOT INDICATORS + PLAY/PAUSE ── */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)', zIndex: 20,
          display: 'flex', alignItems: 'center', gap: '0.6rem',
        }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? 32 : 8, height: 8, borderRadius: 4,
                border: 'none', cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                background: i === current ? slide.accent : 'rgba(255,255,255,0.28)',
                boxShadow: i === current ? `0 0 8px ${slide.accent}` : 'none',
              }}
            />
          ))}
          <button onClick={() => setPlaying(p => !p)} aria-label="Toggle autoplay" className="hero-play"
            style={{
              width: 30, height: 30, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
              background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white', marginLeft: '0.25rem',
              transition: 'all 0.25s', flexShrink: 0,
            }}
          >
            {playing ? <Pause size={11} /> : <Play size={11} />}
          </button>
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div style={{
          position: 'absolute', bottom: '2.25rem',
          left: 'clamp(1rem, 5vw, 5rem)', zIndex: 20,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem',
        }}>
          <div style={{
            width: 1, height: 36,
            background: `linear-gradient(180deg, transparent, ${slide.accent})`,
            transition: 'background 0.5s',
          }} />
          <ChevronDown size={14} color={slide.accent} style={{ animation: 'float 1.8s ease-in-out infinite', transition: 'color 0.5s' }} />
        </div>

      </section>
    </>
  )
}

/* ══════════════════════════════════════════
   BEFORE / AFTER SLIDER
══════════════════════════════════════════ */
function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const update = (clientX: number) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }

  return (
    <section style={{ padding: 'clamp(3rem,8vw,5rem) 1rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>✦ Before & After</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: 'var(--text-primary)', marginTop: '0.75rem' }}>
            See the <span className="gradient-text-cyan">AquaLux</span> Difference
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0.875rem auto 0', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
            Drag the slider to reveal the transformation
          </p>
        </div>
        <div ref={ref}
          style={{ position: 'relative', borderRadius: 'clamp(0.75rem, 2vw, 1.5rem)', overflow: 'hidden', aspectRatio: '16/7', maxWidth: 860, margin: '0 auto', cursor: 'ew-resize', userSelect: 'none', touchAction: 'none' }}
          onMouseDown={() => { dragging.current = true }}
          onMouseMove={e => { if (dragging.current) update(e.clientX) }}
          onMouseUp={() => { dragging.current = false }}
          onMouseLeave={() => { dragging.current = false }}
          onTouchMove={e => { e.preventDefault(); update(e.touches[0].clientX) }}
          onTouchStart={() => { dragging.current = true }}
          onTouchEnd={() => { dragging.current = false }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#1e293b,#0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: 'clamp(2rem,6vw,4rem)', marginBottom: '0.5rem' }}>✨</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 'clamp(1rem,3vw,1.5rem)', color: '#06b6d4' }}>AFTER</div>
            </div>
            <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(6,182,212,0.85)', color: 'white', padding: '0.375rem 0.875rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700 }}>After AquaLux ✓</div>
          </div>
          <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)`, background: 'linear-gradient(135deg,#4a3728,#2d2218)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: 'clamp(2rem,6vw,4rem)', marginBottom: '0.5rem' }}>🌧️</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 'clamp(1rem,3vw,1.5rem)', color: '#f59e0b' }}>BEFORE</div>
            </div>
            <div style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(245,158,11,0.85)', color: 'white', padding: '0.375rem 0.875rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700 }}>Before ✗</div>
          </div>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${pos}%`, transform: 'translateX(-50%)', width: 3, background: 'white', zIndex: 10, pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 42, height: 42, borderRadius: '50%', background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', userSelect: 'none', cursor: 'ew-resize' }}>↔</div>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.78rem', marginTop: '0.875rem' }}>⟵ Drag to compare ⟶</p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   SERVICES PREVIEW
══════════════════════════════════════════ */
const services = [
  { icon: '🚿', name: 'Express Wash', desc: 'Quick 20-min full exterior wash with spot-free rinse.', price: '$15', color: '#06b6d4', time: '20 min' },
  { icon: '✨', name: 'Premium Detail', desc: 'Hand wash, clay bar, polish, and interior wipe-down.', price: '$49', color: '#8b5cf6', time: '60 min' },
  { icon: '💎', name: 'Deluxe Detailing', desc: 'Full paint correction, leather conditioning, deep clean.', price: '$149', color: '#f59e0b', time: '3–4 hrs' },
  { icon: '🛡️', name: 'Ceramic Coating', desc: '5-year hydrophobic nano-ceramic paint protection.', price: '$599', color: '#10b981', time: '1–2 days' },
  { icon: '🪑', name: 'Interior Detail', desc: 'Steam clean, shampoo, odor elimination, UV protect.', price: '$99', color: '#f43f5e', time: '2–3 hrs' },
  { icon: '🚛', name: 'Fleet Services', desc: 'Bulk pricing for commercial fleets. Volume discounts.', price: 'Custom', color: '#0ea5e9', time: 'Flexible' },
]

function ServicesPreview() {
  return (
    <section style={{ padding: 'clamp(3rem,8vw,5rem) 1rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>✦ Our Services</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.5rem,4vw,3rem)', color: 'var(--text-primary)', margin: '0.75rem 0 0.875rem' }}>
            Every Service, <span className="gradient-text-cyan">Perfected</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', fontSize: 'clamp(0.85rem,2vw,1rem)' }}>
            From quick express washes to full ceramic coating — handled with obsessive care.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))', gap: '1.25rem' }}>
          {services.map((s, i) => (
            <div key={i} className="glass card-hover" style={{ padding: 'clamp(1.25rem,3vw,2rem)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -16, right: -16, width: 80, height: 80, borderRadius: '50%', background: `radial-gradient(circle,${s.color}25,transparent)`, filter: 'blur(16px)' }} />
              <div style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', marginBottom: '0.875rem' }}>{s.icon}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.625rem', gap: '0.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 'clamp(1rem,2vw,1.1rem)', color: 'var(--text-primary)' }}>{s.name}</h3>
                <span style={{ fontWeight: 800, color: s.color, fontSize: 'clamp(0.95rem,2vw,1.1rem)', flexShrink: 0 }}>{s.price}</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem,1.5vw,0.875rem)', lineHeight: 1.6, marginBottom: '0.875rem' }}>{s.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>⏱ {s.time}</span>
                <Link href="/booking" style={{ fontSize: '0.8rem', color: s.color, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                  Book <ArrowRight size={13} />
                </Link>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${s.color},transparent)` }} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/services" className="btn-outline">View All Services <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   STATS COUNTER
══════════════════════════════════════════ */
function useCountUp(target: number, decimal = false, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [started])
  useEffect(() => {
    if (!started) return
    const step = target / (duration / 16)
    let cur = 0
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target)
      setCount(decimal ? Math.round(cur * 10) / 10 : Math.floor(cur))
      if (cur >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration, decimal])
  return { count, ref }
}

const stats = [
  { value: 50000, suffix: '+', label: 'Cars Washed', icon: Car },
  { value: 4.9, suffix: '★', label: 'Rating', icon: Star, decimal: true },
  { value: 2847, suffix: '+', label: 'Customers', icon: Users },
  { value: 3, suffix: '', label: 'Locations', icon: MapPin },
  { value: 99, suffix: '%', label: 'Satisfaction', icon: TrendingUp },
  { value: 8, suffix: 'yr', label: 'Experience', icon: Award },
]

function StatCard({ value, suffix, label, icon: Icon, decimal }: any) {
  const { count, ref } = useCountUp(value, decimal)
  return (
    <div ref={ref} className="glass text-center" style={{ padding: 'clamp(1.25rem,3vw,2rem) clamp(0.875rem,2vw,1.5rem)' }}>
      <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.875rem' }}>
        <Icon size={20} style={{ color: '#06b6d4' }} />
      </div>
      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: 'clamp(1.5rem,4vw,2.25rem)', color: 'var(--text-primary)', lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.7rem,1.5vw,0.8rem)', marginTop: '0.4rem' }}>{label}</div>
    </div>
  )
}

function Stats() {
  return (
    <section style={{ padding: 'clamp(3rem,8vw,5rem) 1rem', background: 'linear-gradient(135deg,#020818,#040f2a)', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>✦ By The Numbers</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.5rem,4vw,3rem)', color: 'white', marginTop: '0.75rem' }}>
            Trusted by <span className="gradient-text-gold">Thousands</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(140px,100%), 1fr))', gap: '1rem' }}>
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   PRICING PREVIEW
══════════════════════════════════════════ */
const plans = [
  { name: 'Basic', price: 15, color: '#64748b', features: ['Exterior Wash', 'Spot-Free Rinse', 'Air Dry', 'Window Clean'] },
  { name: 'Premium', price: 49, color: '#06b6d4', features: ['Everything in Basic', 'Hand Wax', 'Interior Wipe', 'Tire Shine', 'Air Freshener'], popular: true },
  { name: 'Deluxe', price: 149, color: '#f59e0b', features: ['Everything in Premium', 'Clay Bar', 'Leather Conditioning', 'Engine Bay', 'Paint Polish'] },
]

function PricingPreview() {
  return (
    <section style={{ padding: 'clamp(3rem,8vw,5rem) 1rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>✦ Pricing</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.5rem,4vw,3rem)', color: 'var(--text-primary)', margin: '0.75rem 0 0.875rem' }}>
            Simple, <span className="gradient-text-cyan">Transparent</span> Pricing
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem,2vw,1rem)' }}>No hidden fees. No surprises.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px,100%), 1fr))', gap: '1.25rem', maxWidth: 900, margin: '0 auto' }}>
          {plans.map((p, i) => (
            <div key={i} className="glass card-hover" style={{ padding: 'clamp(1.5rem,3vw,2rem)', position: 'relative', overflow: 'hidden', border: p.popular ? `2px solid ${p.color}60` : '1px solid var(--glass-border)' }}>
              {p.popular && <div style={{ position: 'absolute', top: 14, right: 14, background: `linear-gradient(135deg,${p.color},${p.color}bb)`, color: 'white', padding: '0.2rem 0.625rem', borderRadius: '2rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Popular</div>}
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: p.color, marginBottom: '0.5rem', fontSize: 'clamp(0.95rem,2vw,1.1rem)' }}>{p.name} Wash</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 900, fontSize: 'clamp(1.75rem,4vw,2.5rem)', color: 'var(--text-primary)' }}>${p.price}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>/wash</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', padding: 0, listStyle: 'none' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.78rem,1.5vw,0.875rem)', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={13} style={{ color: p.color, flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/booking" style={{ display: 'block', textAlign: 'center', padding: '0.7rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', background: p.popular ? `linear-gradient(135deg,${p.color},${p.color}aa)` : 'transparent', color: p.popular ? 'white' : p.color, border: `1px solid ${p.color}40`, transition: 'all 0.3s' }}>
                Book {p.name}
              </Link>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.25rem' }}>
          <Link href="/pricing" className="btn-outline">See Full Pricing & Vehicle Types <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════ */
const testimonials = [
  { name: 'Sarah M.', vehicle: 'Tesla Model 3', rating: 5, text: 'AquaLux is simply the best. My Tesla looks showroom-perfect every time. The ceramic coating still beads water perfectly after 8 months!', avatar: 'SM', location: 'Beverly Hills' },
  { name: 'James R.', vehicle: 'BMW 7 Series', rating: 5, text: 'The Deluxe Detailing blew me away. Every surface treated with care and precision. Worth every single penny.', avatar: 'JR', location: 'West Hollywood' },
  { name: 'Emily K.', vehicle: 'Porsche Cayenne', rating: 5, text: 'The Gold membership is incredible value. Unlimited washes for $79/month and the quality never drops. Staff is always professional.', avatar: 'EK', location: 'Malibu' },
  { name: 'David L.', vehicle: 'Mercedes S-Class', rating: 5, text: 'Brought my entire family fleet for detailing. The fleet discount was generous and results were spectacular.', avatar: 'DL', location: 'Bel Air' },
  { name: 'Aisha T.', vehicle: 'Range Rover Sport', rating: 5, text: 'Online booking is so convenient and WhatsApp reminders are a nice touch. Interior detailing removed years of built-up grime.', avatar: 'AT', location: 'Santa Monica' },
  { name: 'Carlos V.', vehicle: 'Ferrari 488', rating: 5, text: 'When you own a Ferrari, you cannot trust any car wash. AquaLux treats every vehicle like a masterpiece.', avatar: 'CV', location: 'Beverly Hills' },
]

function Testimonials() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 4500)
    return () => clearInterval(t)
  }, [])
  return (
    <section style={{ padding: 'clamp(3rem,8vw,5rem) 1rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem,5vw,3.5rem)' }}>
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1rem' }}>✦ Reviews</span>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.5rem,4vw,3rem)', color: 'var(--text-primary)', marginTop: '0.75rem' }}>
            What Our <span className="gradient-text-gold">Customers</span> Say
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px,100%), 1fr))', gap: '1.25rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="glass card-hover" style={{ padding: 'clamp(1.25rem,3vw,1.75rem)', display: 'flex', flexDirection: 'column', gap: '0.875rem', border: i === active ? '1px solid rgba(6,182,212,0.4)' : '1px solid var(--glass-border)', transition: 'border 0.4s' }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} style={{ fill: '#facc15', color: '#facc15' }} />)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem,1.5vw,0.875rem)', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#06b6d4,#0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.78rem', flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.vehicle} • {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{ width: i === active ? 22 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === active ? '#06b6d4' : 'var(--border)' }} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/reviews" className="btn-outline">Read All 2,847 Reviews <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   BOOKING CTA
══════════════════════════════════════════ */
function BookingCTA() {
  return (
    <section style={{ padding: 'clamp(3.5rem,8vw,5rem) 1rem', background: 'linear-gradient(135deg,#020818,#071840)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '60vw', height: '60vw', maxWidth: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(6,182,212,0.1),transparent)', filter: 'blur(60px)' }} />
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>🚀 Ready?</span>
        <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.75rem,5vw,3.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>
          Your Car Deserves<br /><span className="gradient-text-cyan">The Best</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 480, margin: '0 auto 2.25rem', fontSize: 'clamp(0.9rem,2vw,1.05rem)', lineHeight: 1.7 }}>
          Book your premium wash in under 2 minutes. Choose your service, pick a time, we handle the rest.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/booking" className="btn-gold" style={{ fontSize: 'clamp(0.9rem,2vw,1.05rem)', padding: 'clamp(0.75rem,2vw,1rem) clamp(1.25rem,3vw,2.25rem)' }}>
            <Calendar size={16} /> Book Now — Online
          </Link>
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', fontSize: 'clamp(0.9rem,2vw,1.05rem)', padding: 'clamp(0.75rem,2vw,1rem) clamp(1.25rem,3vw,2.25rem)' }}>
              💬 WhatsApp Us
            </a>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════
   PAGE EXPORT
══════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <BeforeAfter />
      <ServicesPreview />
      <Stats />
      <PricingPreview />
      <Testimonials />
      <BookingCTA />
    </>
  )
}
