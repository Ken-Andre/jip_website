"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const testimonials = [
    {
        id: 1,
        quote: {
            fr: "La Journée Internationale des Pasteurs m'a profondément touché. C'est un moment unique de reconnaissance et d'encouragement pour tous ceux qui servent.",
            en: "International Pastors Day deeply touched me. It's a unique moment of recognition and encouragement for all those who serve.",
        },
        author: "Pasteur Jean-Marc",
        role: { fr: "Église de la Foi, Douala", en: "Faith Church, Douala" },
    },
    {
        id: 2,
        quote: {
            fr: "Une initiative bénie qui rappelle l'importance d'honorer ceux qui veillent sur nos âmes. Que Dieu continue de bénir cette vision.",
            en: "A blessed initiative that reminds us of the importance of honoring those who watch over our souls. May God continue to bless this vision.",
        },
        author: "Pasteur Marie Ngono",
        role: { fr: "Assemblée Chrétienne, Yaoundé", en: "Christian Assembly, Yaoundé" },
    },
    {
        id: 3,
        quote: {
            fr: "Cette journée est devenue un pilier dans notre calendrier ecclésiastique. Elle unit les pasteurs et renforce notre mission commune.",
            en: "This day has become a pillar in our church calendar. It unites pastors and strengthens our common mission.",
        },
        author: "Révérend Paul Essama",
        role: { fr: "Union des Églises, Cameroun", en: "Church Union, Cameroon" },
    },
]

export function TestimonialsSection() {
    const { t, language } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const current = testimonials[currentIndex]

    return (
        <section className="bg-background py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                        {t("section.testimonials")}
                    </h2>
                    <div className="mx-auto h-1 w-16 rounded bg-gold" />
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="relative rounded-2xl border border-border bg-card p-8 sm:p-12">
                        {/* Quote icon */}
                        <Quote className="absolute left-6 top-6 h-10 w-10 text-gold/30" />

                        {/* Testimonial content */}
                        <div className="relative text-center">
                            <blockquote className="mb-6 font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                                "{current.quote[language]}"
                            </blockquote>
                            <div className="mb-8">
                                <p className="font-semibold text-foreground">{current.author}</p>
                                <p className="text-sm text-muted-foreground">{current.role[language]}</p>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-center gap-4">
                                <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentIndex(index)}
                                            className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-gold" : "bg-border"
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
