"use client"

import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
    const { t } = useLanguage()

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-light/30 to-background py-20 lg:py-32">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                        <span className="text-sm font-medium text-gold">JIP 2025</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                        {t("hero.title")}
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">{t("hero.subtitle")}</p>

                    {/* Event Details */}
                    <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-foreground">
                            <CalendarDays className="h-5 w-5 text-gold" />
                            <span className="font-medium">{t("hero.date")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                            <MapPin className="h-5 w-5 text-gold" />
                            <span className="font-medium">{t("hero.location")}</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        <Button asChild size="lg" className="bg-primary px-8 hover:bg-primary/90">
                            <Link href="/participation">{t("hero.cta.register")}</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="px-8 border-gold text-gold hover:bg-gold/10 bg-transparent"
                        >
                            <Link href="/programme">{t("hero.cta.program")}</Link>
                        </Button>
                    </div>

                    {/* Countdown */}
                    <CountdownTimer />
                </div>
            </div>
        </section>
    )
}
