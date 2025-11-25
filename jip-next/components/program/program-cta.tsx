"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function ProgramCTA() {
    const { t } = useLanguage()

    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl bg-gradient-to-br from-primary to-purple-dark p-8 text-center sm:p-12">
                    <h2 className="mb-4 font-serif text-2xl font-bold text-primary-foreground sm:text-3xl">
                        {t("hero.cta.register")}
                    </h2>
                    <p className="mb-8 text-primary-foreground/80">{t("hero.subtitle")}</p>
                    <Button asChild size="lg" className="gap-2 bg-gold text-gold-foreground hover:bg-gold/90">
                        <Link href="/participation">
                            {t("hero.cta.register")}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
