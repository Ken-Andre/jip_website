"use client"

import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const programItems = [
    { time: "08:00 - 09:00", key: "program.welcome" },
    { time: "09:00 - 12:00", key: "program.session1" },
    { time: "12:00 - 14:00", key: "program.lunch" },
    { time: "14:00 - 17:00", key: "program.celebration" },
    { time: "17:00 - 18:00", key: "program.closing" },
]

export function ProgramOverview() {
    const { t } = useLanguage()

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">{t("section.program")}</h2>
                    <div className="mx-auto h-1 w-16 rounded bg-gold" />
                </div>

                <div className="mx-auto max-w-3xl">
                    <div className="relative space-y-0">
                        {/* Timeline line */}
                        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border sm:block" />

                        {programItems.map((item, index) => (
                            <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
                                {/* Timeline dot */}
                                <div className="hidden sm:flex">
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-card">
                                        <Clock className="h-5 w-5 text-gold" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 rounded-lg border border-border bg-background p-4 transition-shadow hover:shadow-md sm:ml-4">
                                    <p className="mb-1 text-sm font-semibold text-gold">{item.time}</p>
                                    <p className="font-medium text-foreground">{t(item.key)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Button asChild variant="outline" className="gap-2 bg-transparent">
                        <Link href="/programme">
                            {t("common.viewall")}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
