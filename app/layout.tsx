import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
        {/* crisp */}
      <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                window.$crisp = [];
                window.CRISP_WEBSITE_ID = "9db5fdc6-91cb-4b77-be50-70b8d433de80";
                (function () {
                  var d = document;
                  var s = d.createElement("script");
                  s.src = "https://client.crisp.chat/l.js";
                  s.async = 1;
                  d.getElementsByTagName("head")[0].appendChild(s);
                  
                  window.CRISP_READY_TRIGGER = function() {
                    window.$crisp.push(["config", "chat:colors", ["#000000", "#ffffff"]]); 
                  }
                })();
              `,
            }}
          />
        <meta name="keywords" content="IPTV, iptv smarters, iptv smarters pro, ip tv, best for iptv, iptv box, box iptv, champions league, streaming" />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
      </>
    </html>
  )
}
