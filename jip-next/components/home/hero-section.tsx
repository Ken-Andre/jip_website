"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
    const { t } = useLanguage()
    const parallaxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY
                const rate = scrolled * 0.5 // Parallax speed
                parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                    style={{
                        backgroundImage: "url('/images/hero-banner.jpg')",
                        height: '110%', // Slightly taller for parallax
                        top: '-5%'
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" /> {/* Overlay for contrast */}
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="glass-liquid rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-md">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                        <span className="text-sm font-medium text-gold">JIP 2025</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                        {t("hero.title")}
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">{t("hero.subtitle")}</p>

                    {/* Event Details */}
                    <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-white">
                            <CalendarDays className="h-5 w-5 text-gold" />
                            <span className="font-medium">{t("hero.date")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <MapPin className="h-5 w-5 text-gold" />
                            <span className="font-medium">{t("hero.location")}</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary px-8 hover:bg-primary/90 border-none shadow-lg hover:shadow-xl transition-all">
                            <Link href="/participation">{t("hero.cta.register")}</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="px-8 border-gold text-gold hover:bg-gold/10 bg-transparent hover:text-gold-light transition-all"
                        >
                            <Link href="/programme">{t("hero.cta.program")}</Link>
                        </Button>
                    </div>

                    {/* Countdown */}
                    <div className="text-white">
                        <CountdownTimer />
                    </div>
                </div>
            </div>
        </section>
    )
}
