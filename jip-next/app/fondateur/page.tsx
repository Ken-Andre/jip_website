import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FounderHero } from "@/components/founder/founder-hero"
import { CallingSection } from "@/components/founder/calling-section"
import { TimelineSection } from "@/components/founder/timeline-section"
import { MessageSection } from "@/components/founder/message-section"

export const metadata = {
    title: "Fondateur | Journée Internationale des Pasteurs",
    description: "Découvrez Pasteur Patrick, fondateur de la Journée Internationale des Pasteurs.",
}

export default function FounderPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <FounderHero />
                <CallingSection />
                <TimelineSection />
                <MessageSection />
            </main>
            <Footer />
        </div>
    )
}
