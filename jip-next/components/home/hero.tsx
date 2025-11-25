"use client"

import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { useLanguage } from "@/contexts/language-context"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

export function Hero() {
    const { t } = useLanguage()

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 mix-blend-multiply" />
                <img
                    src="/images/hero-bg.jpg"
                    alt="JIP Celebration"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="animate-fade-in space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-4">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium tracking-wide uppercase">{t("hero.date")}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
                        {t("hero.title")}
                    </h1>

                    <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto font-light mb-8">
                        {t("hero.subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <div className="flex items-center text-primary-200">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>{t("hero.date")}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-primary-400 rounded-full" />
                        <div className="flex items-center text-primary-200">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{t("hero.location")}</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            {t("hero.cta.register")}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                            {t("hero.cta.program")}
                        </Button>
                    </div>

                    <CountdownTimer />
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10" />
        </section>
    )
}
