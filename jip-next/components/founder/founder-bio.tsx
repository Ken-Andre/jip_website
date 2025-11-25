"use client"

import { useLanguage } from "@/contexts/language-context"
import { Quote } from "lucide-react"

export function FounderBio() {
    const { t } = useLanguage()

    return (
        <div className="space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead text-xl text-gray-600 dark:text-gray-300">
                    {t("founder.bio")}
                </p>
                <p>
                    Le Pasteur Patrick est reconnu pour son engagement indéfectible envers l'excellence ministérielle et son cœur de père pour la jeune génération de serviteurs de Dieu.
                </p>
            </div>

            {/* Quote */}
            <div className="relative bg-primary-50 dark:bg-primary-900/10 p-8 md:p-12 rounded-2xl border-l-4 border-primary-500">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-primary-300 dark:text-primary-700 opacity-50" />
                <blockquote className="relative z-10 text-xl md:text-2xl font-serif italic text-gray-800 dark:text-gray-200 text-center">
                    "{t("founder.quote")}"
                </blockquote>
            </div>

            {/* Vision Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                        {t("founder.calling.title")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {t("founder.calling.text")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Depuis plus de 15 ans, il parcourt les nations pour encourager, former et équiper les pasteurs, convaincu que des leaders forts bâtissent des églises fortes.
                    </p>
                </div>
                <div className="order-1 md:order-2 relative">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/images/founder-preaching.jpg"
                            alt="Founder Preaching"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
