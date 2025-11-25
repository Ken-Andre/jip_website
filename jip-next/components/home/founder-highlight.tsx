"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function FounderHighlight() {
    const { t } = useLanguage()

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                            <Image src="/images/founder.jpg" alt={t("founder.name")} fill className="object-cover" />
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-gold/30" />
                    </div>

                    {/* Content */}
                    <div>
                        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gold">{t("section.founder")}</p>
                        <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl">{t("founder.name")}</h2>

                        {/* Quote */}
                        <blockquote className="mb-6 border-l-4 border-gold pl-4 font-serif text-xl italic text-muted-foreground">
                            {t("founder.quote")}
                        </blockquote>

                        <p className="mb-8 leading-relaxed text-muted-foreground">{t("founder.bio")}</p>

                        <Button asChild className="gap-2">
                            <Link href="/fondateur">
                                {t("common.learnmore")}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
