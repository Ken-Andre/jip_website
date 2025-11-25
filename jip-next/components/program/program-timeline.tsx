"use client"

import { Clock, Coffee, BookOpen, Users, Award, Heart, Camera } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const programItems = [
    { time: "08:00", key: "08h00", icon: Users, period: "morning" },
    { time: "09:00", key: "09h00", icon: BookOpen, period: "morning" },
    { time: "09:30", key: "09h30", icon: BookOpen, period: "morning" },
    { time: "11:00", key: "11h00", icon: Coffee, period: "morning" },
    { time: "11:30", key: "11h30", icon: Users, period: "morning" },
    { time: "12:30", key: "12h30", icon: Coffee, period: "afternoon" },
    { time: "14:00", key: "14h00", icon: Heart, period: "afternoon" },
    { time: "15:30", key: "15h30", icon: Award, period: "afternoon" },
    { time: "17:00", key: "17h00", icon: Camera, period: "evening" },
]

export function ProgramTimeline() {
    const { t } = useLanguage()

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Period indicators */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {["morning", "afternoon", "evening"].map((period) => (
                        <div
                            key={period}
                            className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
                        >
                            <div
                                className={`h-3 w-3 rounded-full ${period === "morning" ? "bg-gold" : period === "afternoon" ? "bg-primary" : "bg-purple-light"
                                    }`}
                            />
                            <span className="text-sm font-medium text-foreground">{t(`program.${period}`)}</span>
                        </div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical line */}
                    <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-gold via-primary to-purple-light md:left-1/2 md:-ml-px md:block" />

                    <div className="space-y-6">
                        {programItems.map((item, index) => {
                            const Icon = item.icon
                            const isEven = index % 2 === 0

                            return (
                                <div
                                    key={item.key}
                                    className={`relative flex items-start gap-4 md:items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Mobile timeline dot */}
                                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-card shadow md:hidden">
                                        <Clock className="h-5 w-5 text-gold" />
                                    </div>

                                    {/* Content */}
                                    <div
                                        className={`flex-1 rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md ${isEven ? "md:text-right" : ""
                                            }`}
                                    >
                                        <div className={`mb-3 flex items-center gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className="font-serif text-xl font-bold text-gold">{item.time}</span>
                                        </div>
                                        <h3 className="mb-2 font-semibold text-foreground">{t(`program.${item.key}.title`)}</h3>
                                        <p className="text-sm text-muted-foreground">{t(`program.${item.key}.desc`)}</p>
                                    </div>

                                    {/* Desktop center dot */}
                                    <div className="relative z-10 hidden h-4 w-4 shrink-0 rounded-full border-4 border-gold bg-background md:block" />

                                    {/* Empty space for alignment on desktop */}
                                    <div className="hidden flex-1 md:block" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
