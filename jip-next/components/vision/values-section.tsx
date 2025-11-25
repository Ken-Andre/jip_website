"use client"

import { Award, Users, Globe, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const values = [
    { icon: Award, key: "vision.values.excellence" },
    { icon: Users, key: "vision.values.unity" },
    { icon: Globe, key: "vision.values.impact" },
    { icon: Sparkles, key: "vision.values.honor" },
]

export function ValuesSection() {
    const { t } = useLanguage()

    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">{t("vision.values.title")}</h2>
                    <div className="mx-auto h-1 w-16 rounded bg-gold" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => {
                        const Icon = value.icon
                        return (
                            <div key={index} className="rounded-2xl border border-border bg-card p-6 text-center">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                                    <Icon className="h-7 w-7 text-gold" />
                                </div>
                                <h3 className="mb-2 font-serif text-lg font-bold text-foreground">{t(`${value.key}.title`)}</h3>
                                <p className="text-sm text-muted-foreground">{t(`${value.key}.text`)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
