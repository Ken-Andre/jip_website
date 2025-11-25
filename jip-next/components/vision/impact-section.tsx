"use client"

import { TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ImpactSection() {
    const { t } = useLanguage()

    const stats = [
        { value: "500+", key: "vision.impact.pastors" },
        { value: "10+", key: "vision.impact.countries" },
        { value: "5", key: "vision.impact.years" },
    ]

    return (
        <section className="bg-primary py-20 text-primary-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                        <TrendingUp className="h-8 w-8 text-gold" />
                    </div>
                    <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">{t("vision.impact.title")}</h2>
                    <p className="mb-12 text-lg text-primary-foreground/90">{t("vision.impact.text")}</p>

                    <div className="grid gap-8 sm:grid-cols-3">
                        {stats.map((stat, index) => (
                            <div key={index} className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6">
                                <p className="mb-2 font-serif text-4xl font-bold text-gold">{stat.value}</p>
                                <p className="text-sm text-primary-foreground/80">{t(stat.key)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
