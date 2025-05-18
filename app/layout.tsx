import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import { ReactNode } from 'react'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { Toaster } from './components/toaster'
import { BackToTop } from './components/back-to-top'
import 'keen-slider/keen-slider.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'




export const metadata = {
  title: {
    default: 'Home',
    template: '%s | Anderson Wirth',
  },
  icons: [
    {
      url: '/images/logo22.svg',
    },
  ],
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
