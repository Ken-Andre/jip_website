"use client"

import { CalendarDays, MapPin, Globe, Ticket } from "lucide-react"
import { RegistrationForm } from "@/components/participation/registration-form"
import { useLanguage } from "@/contexts/language-context"

export function ParticipationContent() {
    const { t } = useLanguage()

    const infoItems = [
        { icon: CalendarDays, label: t("participation.info.date"), value: t("hero.date") },
        { icon: MapPin, label: t("participation.info.location"), value: "Yaoundé, Cameroun" },
        { icon: Ticket, label: t("participation.info.free"), value: "✓" },
        { icon: Globe, label: t("participation.info.languages.label"), value: t("participation.info.languages.value") },
    ]

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Form */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">{t("participation.form.title")}</h2>
                            <RegistrationForm />
                        </div>
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                            <h3 className="mb-6 font-serif text-xl font-bold text-foreground">{t("participation.info.title")}</h3>
                            <div className="space-y-4">
                                {infoItems.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="font-medium text-foreground">{item.value}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
