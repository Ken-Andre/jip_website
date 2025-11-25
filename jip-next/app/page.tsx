import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProgramOverview } from "@/components/home/program-overview"
import { FounderHighlight } from "@/components/home/founder-highlight"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProgramOverview />
        <TestimonialsSection />
        <FounderHighlight />
      </main>
      <Footer />
    </div>
  )
}
