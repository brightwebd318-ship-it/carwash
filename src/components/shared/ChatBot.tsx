'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

const faqs = [
  { q: 'What are your hours?', a: 'We\'re open Mon–Fri 7am–8pm and Sat–Sun 8am–6pm. Book online anytime!' },
  { q: 'How do I book a wash?', a: 'You can book online at /booking, call (555) 123-4567, or message us on WhatsApp. Takes under 2 minutes!' },
  { q: 'What services do you offer?', a: 'We offer Basic Wash, Premium Wash, Deluxe Detail, Ceramic Coating, Interior Detailing, and Fleet Services. See /services for details.' },
  { q: 'How long does a wash take?', a: 'Basic wash: 20–30 min. Premium: 45–60 min. Deluxe Detail: 2–4 hours. Ceramic Coating: 1–2 days.' },
  { q: 'Do you offer memberships?', a: 'Yes! We have Bronze, Silver, Gold, and Platinum plans starting at $29/month. Unlimited washes + exclusive perks. See /membership.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, Apple Pay, Google Pay, and cash. Stripe & Razorpay powered checkout.' },
  { q: 'Do you have fleet pricing?', a: 'Yes! We offer special discounted rates for fleets of 5+ vehicles. Visit /fleet or call us for a custom quote.' },
]

type Message = { role: 'bot' | 'user'; text: string }

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '👋 Hi! I\'m Aqua, your AquaLux assistant. How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [pulse, setPulse] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const findAnswer = (q: string) => {
    const lower = q.toLowerCase()
    for (const faq of faqs) {
      const keywords = faq.q.toLowerCase().split(' ')
      if (keywords.some(kw => kw.length > 3 && lower.includes(kw))) return faq.a
    }
    if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) return 'Our pricing starts at $15 for a Basic Wash. Check /pricing for full details or tell me your vehicle type!'
    if (lower.includes('location') || lower.includes('address') || lower.includes('where')) return 'We\'re located at 123 Luxury Lane, Beverly Hills CA. Multiple locations available — see /contact for a map!'
    if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return 'Hello! 👋 I\'m here to help with bookings, pricing, services, and more. What can I assist you with?'
    return 'Great question! For the most accurate answer, you can call us at (555) 123-4567 or check our website. I\'m also happy to help with bookings, pricing, hours, and services!'
  }

  const send = () => {
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', text: input.trim() }
    setMessages(m => [...m, userMsg])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      const answer = findAnswer(userMsg.text)
      setMessages(m => [...m, { role: 'bot', text: answer }])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 1000,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(6,182,212,0.5)',
          border: 'none', cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: open ? 'scale(0.9)' : 'scale(1)',
        }}
        className="hover:scale-110"
        aria-label="Open chat"
      >
        {open ? <X size={22} color="white" /> : <MessageCircle size={22} color="white" />}
        {pulse && !open && (
          <span style={{
            position: 'absolute', top: -2, right: -2, width: 16, height: 16,
            borderRadius: '50%', background: '#f59e0b',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 9, color: 'white', fontWeight: 700,
          }}>1</span>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '5rem', right: '1.5rem', zIndex: 1000,
          width: 360, maxHeight: 520, borderRadius: '1.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeInScale 0.3s ease',
        }}>
          {/* Header */}
          <div style={{ padding: '1rem 1.25rem', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={20} color="white" />
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>Aqua Assistant</div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                Online — replies instantly
              </div>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Sparkles size={18} color="rgba(255,255,255,0.7)" />
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.role === 'bot' && (
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4 }}>
                    <Bot size={14} color="white" />
                  </div>
                )}
                <div style={{
                  maxWidth: '75%', padding: '0.625rem 0.875rem', borderRadius: msg.role === 'user' ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #06b6d4, #0891b2)' : 'var(--bg-secondary)',
                  color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                  fontSize: '0.85rem', lineHeight: 1.5,
                }}>
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 4, border: '1px solid var(--border)' }}>
                    <User size={14} style={{ color: 'var(--text-muted)' }} />
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={14} color="white" />
                </div>
                <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1rem', borderRadius: '1rem 1rem 1rem 0.25rem', display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                  {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }} />)}
                </div>
              </div>
            )}
            {/* Quick replies */}
            {messages.length === 1 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                {['Book a wash 🚗', 'Pricing 💰', 'Our services 🌟', 'Membership ♾️'].map(q => (
                  <button key={q} onClick={() => { setInput(q); setTimeout(send, 50) }}
                    style={{ padding: '0.375rem 0.75rem', borderRadius: '2rem', fontSize: '0.775rem', border: '1px solid rgba(6,182,212,0.3)', background: 'rgba(6,182,212,0.05)', color: '#06b6d4', cursor: 'pointer', transition: 'all 0.2s' }}
                    className="hover:bg-cyan-400/20"
                  >{q}</button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              style={{ flex: 1, padding: '0.625rem 0.875rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '0.85rem', outline: 'none' }}
            />
            <button onClick={send}
              style={{ width: 40, height: 40, borderRadius: '0.75rem', background: 'linear-gradient(135deg, #06b6d4, #0891b2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', flexShrink: 0 }}
            >
              <Send size={16} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
