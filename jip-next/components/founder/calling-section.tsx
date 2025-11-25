"use client"

import { Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CallingSection() {
    const { t } = useLanguage()

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                        <Sparkles className="h-8 w-8 text-gold" />
                    </div>
                    <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        {t("founder.calling.title")}
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">{t("founder.calling.text")}</p>
                </div>
            </div>
        </section>
    )
}
