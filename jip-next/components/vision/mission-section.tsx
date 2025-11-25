"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MissionSection() {
    const { t } = useLanguage()

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        {t("vision.mission.title")}
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground">{t("vision.mission.text")}</p>
                </div>
            </div>
        </section>
    )
}
