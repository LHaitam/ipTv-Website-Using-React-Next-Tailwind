import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Whatsapp from '@/components/Whatsapp';

export const metadata: Metadata = {
  title: 'CRISTALE IPTV - Access thousands of TV channels and enjoy the ultimate TV viewing experience!',
  description: 'Discover a new way to watch television by getting an IPTV subscription now. Access thousands of channels, including movies and TV shows, live or on-demand. Never miss your favorite show or live match with our high-quality IPTV service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <>
      <head>
        <meta name="keywords" content="IPTV, iptv smarters, iptv smarters pro, ip tv, best for iptv, iptv box, box iptv, champions league, streaming" />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Whatsapp />
        <Footer />
      </body>
      </>
    </html>
  )
}
