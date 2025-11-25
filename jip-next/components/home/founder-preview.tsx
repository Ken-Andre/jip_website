"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FounderPreview() {
    const { t } = useLanguage()

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/founder.jpg"
                                alt={t("founder.name")}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs hidden md:block">
                            <p className="font-serif italic text-lg text-gray-800 dark:text-gray-200 mb-2">
                                "{t("founder.quote")}"
                            </p>
                            <p className="text-sm font-bold text-primary-600 dark:text-primary-400">
                                — {t("founder.name")}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium">
                            <span>{t("section.founder")}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                            {t("founder.title")}
                        </h2>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t("founder.bio")}
                        </p>

                        <div className="pt-4">
                            <Link href="/fondateur">
                                <Button variant="outline" size="lg" className="rounded-full">
                                    {t("common.learnmore")}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
