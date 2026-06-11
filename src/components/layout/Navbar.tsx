'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon, Phone, Star } from 'lucide-react'
import { useTheme } from '@/components/shared/ThemeProvider'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/membership', label: 'Membership' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          transition: 'all 0.4s ease',
          background: scrolled ? 'var(--navbar-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div className="container-max flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div style={{
              width: 44, height: 44, borderRadius: '12px',
              background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(6,182,212,0.4)',
              transition: 'transform 0.3s ease',
            }}
            className="group-hover:scale-110"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 17h18M5 17l2-6h10l2 6M9 11l1-4h4l1 4M7 17v2M17 17v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="17.5" r="1.5" fill="white"/>
                <circle cx="15.5" cy="17.5" r="1.5" fill="white"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '1.2rem', lineHeight: 1 }}>
                <span className="gradient-text-cyan">Aqua</span>
                <span style={{ color: 'var(--text-primary)' }}>Lux</span>
              </div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Car Wash</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map(link => (
              <Link key={link.href} href={link.href}
                style={{ padding: '0.5rem 0.875rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'all 0.2s' }}
                className="hover:text-cyan-400 hover:bg-cyan-400/5"
              >{link.label}</Link>
            ))}
            <div style={{ width: 1, height: 20, background: 'var(--border)', margin: '0 0.5rem' }} />
            <Link href="/blog" style={{ padding: '0.5rem 0.875rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'all 0.2s' }}
              className="hover:text-cyan-400">Blog</Link>
            <Link href="/contact" style={{ padding: '0.5rem 0.875rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'all 0.2s' }}
              className="hover:text-cyan-400">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={toggleTheme}
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', color: 'var(--text-secondary)' }}
              className="hover:border-cyan-400 hover:text-cyan-400"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="tel:+15551234567"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', border: '1px solid var(--border)', transition: 'all 0.3s' }}
              className="hover:border-cyan-400 hover:text-cyan-400"
            >
              <Phone size={14} /> (555) 123-4567
            </a>
            <Link href="/booking"
              className="btn-primary"
              style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme}
              style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button onClick={() => setOpen(!open)}
              style={{ width: 40, height: 40, borderRadius: '0.5rem', border: '1px solid var(--border)', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{ borderTop: '1px solid var(--border)', background: 'var(--navbar-bg)', backdropFilter: 'blur(20px)', padding: '1rem' }}>
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)', display: 'block', transition: 'all 0.2s' }}
                  className="hover:bg-cyan-400/10 hover:text-cyan-400"
                >{link.label}</Link>
              ))}
              <Link href="/booking" className="btn-primary mt-2 w-full" onClick={() => setOpen(false)}>
                Book Now — Online
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
