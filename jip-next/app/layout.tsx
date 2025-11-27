import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Journée Internationale des Pasteurs | International Pastors Day",
  description:
    "Honorer ceux qui veillent sur nos âmes - 12 Décembre 2025, Yaoundé, Cameroun. Honoring those who watch over our souls.",
  keywords: ["pasteurs", "pastors", "JIP", "Cameroun", "Yaoundé", "église", "church", "Pasteur Patrick"],
  authors: [{ name: "JIP Organization" }],
  openGraph: {
    title: "Journée Internationale des Pasteurs",
    description: "Honorer ceux qui veillent sur nos âmes - 12 Décembre 2025",
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
  appleWebApp: {
    title: "JIP",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
