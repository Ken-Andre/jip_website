"use client"

import { FolderDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ResourcesHero() {
    const { t } = useLanguage()

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-light/30 to-background py-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                        <FolderDown className="h-4 w-4 text-gold" />
                        <span className="text-sm font-medium text-gold">JIP 2025</span>
                    </div>
                    <h1 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
                        {t("resources.hero.title")}
                    </h1>
                    <p className="text-lg text-muted-foreground">{t("resources.hero.subtitle")}</p>
                </div>
            </div>
        </section>
    )
}
