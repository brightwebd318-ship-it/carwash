'use client'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, ChevronRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Basic Wash', href: '/services' },
    { label: 'Premium Wash', href: '/services' },
    { label: 'Deluxe Detail', href: '/services' },
    { label: 'Ceramic Coating', href: '/services' },
    { label: 'Interior Detail', href: '/services' },
    { label: 'Fleet Services', href: '/fleet' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '/about' },
    { label: 'Franchise', href: '/franchise' },
    { label: 'Partners', href: '/about' },
  ],
  Support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Membership', href: '/membership' },
    { label: 'Booking', href: '/booking' },
    { label: 'Reviews', href: '/reviews' },
  ],
}

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'Twitter / X', href: '#', icon: '𝕏' },
  { label: 'YouTube', href: '#', icon: '▶' },
  { label: 'WhatsApp', href: 'https://wa.me/15551234567', icon: '💬' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container-max section-pad-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
              <div style={{
                width: 48, height: 48, borderRadius: '14px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(6,182,212,0.4)',
                transition: 'transform 0.3s',
              }} className="group-hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M3 17h18M5 17l2-6h10l2 6M9 11l1-4h4l1 4M7 17v2M17 17v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.5" cy="17.5" r="1.5" fill="white"/>
                  <circle cx="15.5" cy="17.5" r="1.5" fill="white"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.4rem', lineHeight: 1 }}>
                  <span className="gradient-text-cyan">Aqua</span>
                  <span style={{ color: 'var(--text-primary)' }}>Lux</span>
                </div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Premium Car Wash
                </div>
              </div>
            </Link>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 320, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Where luxury meets clean. Experience the finest automotive care with premium wash services and unmatched attention to detail.
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} style={{ fill: '#facc15', color: '#facc15' }} />
                ))}
              </div>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem' }}>4.9</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>/ 2,847 reviews</span>
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
                { icon: Mail, text: 'hello@aqualuxcarwash.com', href: 'mailto:hello@aqualuxcarwash.com' },
                { icon: MapPin, text: '123 Luxury Lane, Beverly Hills CA 90210', href: '#' },
                { icon: Clock, text: 'Mon–Fri 7am–8pm  •  Sat–Sun 8am–6pm', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
                  color: 'var(--text-secondary)', fontSize: '0.875rem',
                  textDecoration: 'none', transition: 'color 0.2s',
                }} className="hover:text-cyan-400">
                  <Icon size={15} style={{ marginTop: 2, flexShrink: 0, color: '#06b6d4' }} />
                  {text}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.625rem', marginTop: '1.5rem' }}>
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer" aria-label={label}
                  style={{
                    width: 38, height: 38, borderRadius: '50%',
                    border: '1px solid var(--border)',
                    background: 'var(--glass-bg)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    fontSize: icon.length === 1 ? '0.85rem' : '0.95rem',
                    fontWeight: 700, transition: 'all 0.3s',
                  }}
                  className="hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 style={{
                fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                marginBottom: '1.25rem', color: 'var(--text-primary)',
                fontSize: '0.95rem', letterSpacing: '0.02em',
              }}>{title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', listStyle: 'none', padding: 0 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{
                      display: 'flex', alignItems: 'center', gap: '0.25rem',
                      color: 'var(--text-secondary)', fontSize: '0.875rem',
                      textDecoration: 'none', transition: 'all 0.2s',
                    }} className="hover:text-cyan-400 group">
                      <ChevronRight size={12} style={{ color: '#06b6d4', opacity: 0, transition: 'opacity 0.2s' }}
                        className="group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/15551234567?text=Hi%20AquaLux!%20I%20want%20to%20book%20a%20car%20wash."
        target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: '6rem', right: '1.5rem',
          width: 52, height: 52, borderRadius: '50%',
          background: '#25d366', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          zIndex: 998, textDecoration: 'none',
          fontSize: '1.4rem', transition: 'transform 0.3s',
        }}
        className="hover:scale-110"
      >
        💬
      </a>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '1.25rem 0' }}>
        <div className="container-max px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} AquaLux Car Wash. All rights reserved.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(link => (
              <a key={link} href="#" style={{
                color: 'var(--text-muted)', fontSize: '0.8rem',
                textDecoration: 'none', transition: 'color 0.2s',
              }} className="hover:text-cyan-400">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
