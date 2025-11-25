"use client"

import { CalendarDays, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ProgramHero() {
    const { t } = useLanguage()

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-light/30 to-background py-20 lg:py-28">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                        <CalendarDays className="h-4 w-4 text-gold" />
                        <span className="text-sm font-medium text-gold">{t("program.hero.date")}</span>
                    </div>
                    <h1 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
                        {t("program.hero.title")}
                    </h1>
                    <p className="mb-8 text-lg text-muted-foreground sm:text-xl">{t("program.hero.subtitle")}</p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center gap-2 text-foreground">
                            <MapPin className="h-5 w-5 text-gold" />
                            <span>Yaoundé, Cameroun</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                            <Clock className="h-5 w-5 text-gold" />
                            <span>08:00 - 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
