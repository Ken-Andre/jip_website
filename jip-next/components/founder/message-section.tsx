"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MessageSection() {
    const { t } = useLanguage()

    return (
        <section className="bg-primary py-20 text-primary-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
                        <MessageCircle className="h-8 w-8 text-gold" />
                    </div>
                    <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl">{t("founder.message.title")}</h2>
                    <p className="text-lg leading-relaxed text-primary-foreground/90">{t("founder.message.text")}</p>
                    <p className="mt-8 font-serif text-xl font-semibold text-gold">— {t("founder.name")}</p>
                </div>
            </div>
        </section>
    )
}
