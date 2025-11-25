"use client"

import { useLanguage } from "@/contexts/language-context"
import { CheckCircle2 } from "lucide-react"

export function VisionContent() {
    const { t } = useLanguage()

    return (
        <div className="space-y-16">
            {/* Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                        Notre Mission
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Nous croyons fermement que les pasteurs jouent un rôle fondamental dans nos communautés. Cette journée spéciale leur est dédiée pour :
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Reconnaitre leur dévouement et leur sacrifice quotidien",
                            "Fournir une formation continue adaptée aux défis actuels",
                            "Créer une communauté mondiale de pasteurs solidaires",
                            "Encourager l'excellence dans le ministère pastoral"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/images/vision-mission.jpg"
                            alt="Mission"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dots-pattern opacity-20" />
                </div>
            </div>

            {/* Values */}
            <div className="bg-primary-900 text-white rounded-3xl p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

                <div className="relative z-10 text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold mb-4">Nos Valeurs</h2>
                    <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Excellence", desc: "Nous visons la qualité dans tout ce que nous faisons" },
                        { title: "Solidarité", desc: "Ensemble, nous sommes plus forts" },
                        { title: "Formation", desc: "L'apprentissage continu est essentiel" },
                        { title: "Inspiration", desc: "Nous voulons ranimer la flamme du ministère" },
                    ].map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                            <h3 className="text-xl font-bold text-secondary-400 mb-2">{item.title}</h3>
                            <p className="text-primary-100">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
