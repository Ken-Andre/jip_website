"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

export function Testimonials() {
    const { t } = useLanguage()

    const testimonials = [
        {
            name: "Pasteur Jean",
            role: "Église de la Grâce",
            content: "Une initiative qui a transformé ma vision du ministère. La JIP est une bénédiction.",
            image: "/images/testimonials/1.jpg",
        },
        {
            name: "Révérend Sarah",
            role: "Centre Chrétien",
            content: "Enfin une journée pour nous ressourcer et être encouragés. Merci pour cette vision.",
            image: "/images/testimonials/2.jpg",
        },
        {
            name: "Apôtre Michel",
            role: "Mission Internationale",
            content: "L'excellence et l'onction sont au rendez-vous. Je recommande à tous les leaders.",
            image: "/images/testimonials/3.jpg",
        },
    ]

    return (
        <section className="py-24 bg-primary-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        {t("section.testimonials")}
                    </h2>
                    <div className="w-24 h-1 bg-secondary-500 mx-auto rounded-full" />
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="bg-white/10 border-white/10 backdrop-blur-sm text-white h-full">
                                        <CardContent className="flex flex-col items-center p-8 text-center h-full">
                                            <Quote className="w-10 h-10 text-secondary-400 mb-6 opacity-50" />
                                            <p className="text-lg mb-8 italic text-gray-200 flex-grow">
                                                "{testimonial.content}"
                                            </p>
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                                    {/* Placeholder image if actual image fails */}
                                                    <div className="w-full h-full bg-primary-800 flex items-center justify-center text-xs font-bold">
                                                        {testimonial.name.charAt(0)}
                                                    </div>
                                                </div>
                                                <div className="text-left">
                                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                    <p className="text-sm text-primary-300">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-8 gap-4">
                        <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
                        <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
