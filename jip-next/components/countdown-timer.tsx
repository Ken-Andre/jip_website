"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const EVENT_DATE = new Date("2025-12-12T08:00:00")

export function CountdownTimer() {
    const { t } = useLanguage()
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const calculateTimeLeft = () => {
            const difference = EVENT_DATE.getTime() - new Date().getTime()

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                }
            }
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        setTimeLeft(calculateTimeLeft())
        const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)

        return () => clearInterval(timer)
    }, [])

    if (!mounted) {
        return (
            <div className="flex flex-wrap justify-center gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-card shadow-lg sm:h-24 sm:w-24">
                            <span className="font-serif text-3xl font-bold text-primary sm:text-4xl">--</span>
                        </div>
                        <span className="mt-2 text-xs font-medium uppercase tracking-wider countdown-label sm:text-sm">
                            ---
                        </span>
                    </div>
                ))}
            </div>
        )
    }

    const timeUnits = [
        { value: timeLeft.days, label: t("countdown.days") },
        { value: timeLeft.hours, label: t("countdown.hours") },
        { value: timeLeft.minutes, label: t("countdown.minutes") },
        { value: timeLeft.seconds, label: t("countdown.seconds") },
    ]

    return (
        <div className="text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gold">{t("countdown.until")}</p>
            <div className="flex flex-wrap justify-center gap-4">
                {timeUnits.map((unit, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-border bg-card shadow-lg sm:h-24 sm:w-24">
                            <span className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                                {unit.value.toString().padStart(2, "0")}
                            </span>
                        </div>
                        <span className="mt-2 text-xs font-medium uppercase tracking-wider countdown-label sm:text-sm">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
