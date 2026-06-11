'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const featured = {
  title: 'The Complete Guide to Ceramic Coating: Is It Worth It in 2026?',
  excerpt: 'Ceramic coating has transformed automotive protection. We break down the science, benefits, costs, and whether it\'s the right choice for your vehicle.',
  category: 'Detailing Guide', readTime: '8 min read', date: 'June 8, 2026',
  author: { name: 'Marcus Chen', role: 'Head Detailer', avatar: 'MC' },
  tags: ['Ceramic Coating', 'Paint Protection', 'Detailing'],
  emoji: '🛡️',
}

const posts = [
  { title: 'How Often Should You Really Wash Your Car?', excerpt: 'Most people either wash too much or too little. We reveal the optimal frequency based on your environment and driving habits.', category: 'Car Care', readTime: '5 min', date: 'June 5, 2026', emoji: '🚿', tags: ['Maintenance', 'Tips'] },
  { title: '7 Signs Your Car Needs an Interior Detail', excerpt: 'From mystery smells to fabric stains — learn to spot when your car\'s interior is overdue for a professional deep clean.', category: 'Interior Care', readTime: '4 min', date: 'June 2, 2026', emoji: '🪑', tags: ['Interior', 'Odor'] },
  { title: 'Electric Vehicles & Car Washing: The Complete Guide', excerpt: 'EVs have unique care requirements. Here\'s everything Tesla, Rivian, and other EV owners need to know about safe washing.', category: 'EV Care', readTime: '6 min', date: 'May 29, 2026', emoji: '⚡', tags: ['EV', 'Tesla', 'Rivian'] },
  { title: 'The Truth About Paint Swirl Marks (And How to Fix Them)', excerpt: 'Those fine circular scratches in your clear coat aren\'t from nowhere. Learn the causes, prevention, and professional correction methods.', category: 'Paint Care', readTime: '7 min', date: 'May 25, 2026', emoji: '🔄', tags: ['Paint', 'Scratch Removal'] },
  { title: 'Fleet Management 101: Keeping Company Vehicles Presentable', excerpt: 'First impressions matter in business. A professional fleet says a lot about your brand. Here\'s how to manage it efficiently.', category: 'Fleet', readTime: '5 min', date: 'May 22, 2026', emoji: '🚛', tags: ['Fleet', 'Business'] },
  { title: 'Rain-X vs Ceramic Coating: Which Actually Works Better?', excerpt: 'We tested both products in real-world conditions over 6 months. The results might surprise you — here\'s what we found.', category: 'Product Review', readTime: '6 min', date: 'May 18, 2026', emoji: '🌧️', tags: ['Products', 'Review'] },
]

const categories = ['All', 'Car Care', 'Detailing Guide', 'Interior Care', 'Paint Care', 'EV Care', 'Fleet', 'Product Review']

export default function BlogPage() {
  return (
    <>
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(135deg, #020818, #071840)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
        <div className="container-max px-4 md:px-8 lg:px-16 relative text-center">
          <span className="section-label" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>📝 Blog</span>
          <h1 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', marginBottom: '1rem' }}>
            Expert <span className="gradient-text-cyan">Car Care</span> Insights
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Detailing tips, product guides, and automotive insights from our team of certified professionals.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-max">
          {/* Featured Post */}
          <div className="glass card-hover mb-12" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} >
            <div style={{ fontSize: '8rem', textAlign: 'center', lineHeight: 1 }}>{featured.emoji}</div>
            <div>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '2rem', background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', fontSize: '0.75rem', fontWeight: 600, color: '#06b6d4' }}>{featured.category}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}><Clock size={11} /> {featured.readTime}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--text-primary)', marginBottom: '0.875rem', lineHeight: 1.3 }}>{featured.title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem', marginBottom: '1.25rem' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.8rem' }}>{featured.author.avatar}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>{featured.author.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{featured.author.role} • {featured.date}</div>
                </div>
              </div>
              <Link href="/blog/ceramic-coating-guide" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem' }}>
                Read Article <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2.5rem' }}>
            {categories.map(c => (
              <button key={c}
                style={{ padding: '0.5rem 1.125rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', border: '1px solid var(--border)', background: c === 'All' ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)', color: c === 'All' ? 'white' : 'var(--text-secondary)', transition: 'all 0.2s' }}
              >{c}</button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="glass card-hover" style={{ padding: '1.75rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}
              >
                <div style={{ fontSize: '2.5rem' }}>{post.emoji}</div>
                <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                  <span style={{ padding: '0.2rem 0.625rem', borderRadius: '2rem', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)', fontSize: '0.7rem', fontWeight: 600, color: '#06b6d4' }}>{post.category}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}><Clock size={10} /> {post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#06b6d4', fontWeight: 600 }}>Read <ArrowRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="glass mt-14" style={{ padding: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(6,182,212,0.05), rgba(167,139,250,0.05))' }}>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Get Car Care Tips in Your Inbox
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Weekly tips, exclusive offers, and detailing secrets from our experts.</p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.75rem', maxWidth: 420, margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input type="email" placeholder="your@email.com"
                style={{ flex: 1, minWidth: 200, padding: '0.75rem 1.25rem', borderRadius: '0.875rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.875rem', outline: 'none' }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
