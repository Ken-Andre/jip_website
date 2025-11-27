import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TestimonialsGrid } from "@/components/testimonials/testimonials-grid"

export default function TestimonialsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="bg-muted/30 py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Témoignages</h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Découvrez ce que les participants disent de la Journée Internationale des Pasteurs.
                            </p>
                        </div>
                        <TestimonialsGrid />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
