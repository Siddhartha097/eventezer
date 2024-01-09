import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins, Montserrat, Josefin_Sans, Nunito, Barlow } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600','700'], variable: '--font-poppins' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600','700' ], variable: '--font-monsterrat'})
const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: ['400', '500', '600','700' ], variable: '--font-josefin'})
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600','700' ], variable: '--font-nunito'})
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600','700' ], variable: '--font-barlow'})

export const metadata: Metadata = {
  title: 'Eventezer',
  description: 'It is a platform for event management and interaction',
  icons:{
    icon: '/assets/images/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={josefinSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
