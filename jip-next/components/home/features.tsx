"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Heart, Award } from "lucide-react"

export function Features() {
    const { t } = useLanguage()

    const features = [
        {
            icon: Users,
            title: "Communauté",
            description: "Un réseau mondial de pasteurs unis par la même vision.",
            color: "text-blue-500",
            bg: "bg-blue-50 dark:bg-blue-900/10",
        },
        {
            icon: BookOpen,
            title: "Formation",
            description: "Des ressources et ateliers pour l'excellence ministérielle.",
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/10",
        },
        {
            icon: Heart,
            title: "Soutien",
            description: "Un accompagnement spirituel et matériel pour les serviteurs.",
            color: "text-red-500",
            bg: "bg-red-50 dark:bg-red-900/10",
        },
        {
            icon: Award,
            title: "Reconnaissance",
            description: "Honorer le dévouement et le sacrifice pastoral.",
            color: "text-amber-500",
            bg: "bg-amber-50 dark:bg-amber-900/10",
        },
    ]

    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                        Notre Mission
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Nous œuvrons pour le renforcement et l'épanouissement du corps pastoral à travers quatre piliers fondamentaux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="text-center pb-2">
                                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${feature.bg}`}>
                                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
