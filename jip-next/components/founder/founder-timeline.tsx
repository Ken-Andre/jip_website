"use client"

import { useLanguage } from "@/contexts/language-context"

export function FounderTimeline() {
    const { t } = useLanguage()

    const milestones = [
        { year: "2008", title: t("founder.timeline.2008"), desc: "Début du ministère pastoral à Yaoundé." },
        { year: "2015", title: t("founder.timeline.2015"), desc: "Réception de la vision pour la JIP lors d'une retraite." },
        { year: "2020", title: t("founder.timeline.2020"), desc: "Première édition locale avec 50 pasteurs." },
        { year: "2025", title: t("founder.timeline.2025"), desc: "Lancement de l'édition internationale." },
    ]

    return (
        <div className="relative py-12">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-12">
                {milestones.map((item, index) => (
                    <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                        {/* Content */}
                        <div className="w-5/12">
                            <div className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                <span className="text-primary-600 dark:text-primary-400 font-bold text-xl block mb-2">
                                    {item.year}
                                </span>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-sm" />

                        {/* Spacer */}
                        <div className="w-5/12" />
                    </div>
                ))}
            </div>
        </div>
    )
}
