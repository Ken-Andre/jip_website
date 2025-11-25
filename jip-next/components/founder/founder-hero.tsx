"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function FounderHero() {
    const { t } = useLanguage()

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-light/30 to-background py-20 lg:py-28">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative mx-auto lg:mx-0">
                        <div className="relative aspect-[3/4] w-80 overflow-hidden rounded-2xl sm:w-96">
                            <Image src="/images/founder.jpg" alt={t("founder.name")} fill className="object-cover" priority />
                        </div>
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-gold/30" />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                            <span className="text-sm font-medium text-gold">{t("founder.title")}</span>
                        </div>
                        <h1 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">{t("founder.name")}</h1>
                        <p className="mb-6 text-lg text-muted-foreground">{t("founder.page.subtitle")}</p>
                        <blockquote className="border-l-4 border-gold pl-4 font-serif text-xl italic text-muted-foreground">
                            {t("founder.quote")}
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
