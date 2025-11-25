"use client"

import { useLanguage } from "@/contexts/language-context"

const timelineEvents = [
    { year: "2008", key: "founder.timeline.2008" },
    { year: "2015", key: "founder.timeline.2015" },
    { year: "2020", key: "founder.timeline.2020" },
    { year: "2025", key: "founder.timeline.2025" },
]

export function TimelineSection() {
    const { t } = useLanguage()

    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        {t("founder.journey.title")}
                    </h2>
                    <div className="mx-auto h-1 w-16 rounded bg-gold" />
                </div>

                <div className="relative mx-auto max-w-3xl">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />

                    <div className="space-y-8">
                        {timelineEvents.map((event, index) => (
                            <div
                                key={event.year}
                                className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="rounded-lg border border-border bg-card p-6">
                                        <p className="mb-2 font-serif text-2xl font-bold text-gold">{event.year}</p>
                                        <p className="text-muted-foreground">{t(event.key)}</p>
                                    </div>
                                </div>

                                {/* Center dot */}
                                <div className="relative z-10 hidden h-4 w-4 shrink-0 rounded-full border-4 border-gold bg-background md:block" />

                                {/* Empty space for alignment */}
                                <div className="hidden flex-1 md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
