import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/shared/ChatBot'
import ThemeProvider from '@/components/shared/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AquaLux Car Wash — Where Luxury Meets Clean',
    template: '%s | AquaLux Car Wash',
  },
  description:
    'Premium car wash & detailing services. Book online, enjoy ceramic coating, interior detailing, and luxury auto care. Serving multiple locations with 5-star rated service.',
  keywords: [
    'car wash', 'premium car wash', 'auto detailing', 'ceramic coating',
    'interior detailing', 'car cleaning', 'luxury car care', 'AquaLux',
  ],
  authors: [{ name: 'AquaLux Car Wash' }],
  creator: 'AquaLux Car Wash',
  metadataBase: new URL('https://aqualuxcarwash.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aqualuxcarwash.com',
    siteName: 'AquaLux Car Wash',
    title: 'AquaLux Car Wash — Where Luxury Meets Clean',
    description: 'Premium car wash & detailing services. Book online today.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AquaLux Car Wash' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaLux Car Wash — Where Luxury Meets Clean',
    description: 'Premium car wash & detailing services. Book online today.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  manifest: '/manifest.json',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020818' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'AquaLux Car Wash',
              description: 'Premium car wash and auto detailing services',
              url: 'https://aqualuxcarwash.com',
              telephone: '+1-555-AQUA-LUX',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Luxury Lane',
                addressLocality: 'Beverly Hills',
                addressRegion: 'CA',
                postalCode: '90210',
                addressCountry: 'US',
              },
              geo: { '@type': 'GeoCoordinates', latitude: 34.0736, longitude: -118.4004 },
              openingHours: ['Mo-Fr 07:00-20:00', 'Sa-Su 08:00-18:00'],
              priceRange: '$$',
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2847' },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
