import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProgramHero } from "@/components/program/program-hero"
import { ProgramTimeline } from "@/components/program/program-timeline"
import { ProgramCTA } from "@/components/program/program-cta"

export const metadata = {
    title: "Programme | Journée Internationale des Pasteurs",
    description: "Programme détaillé de la Journée Internationale des Pasteurs - 12 Décembre 2025 à Yaoundé.",
}

export default function ProgramPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <ProgramHero />
                <ProgramTimeline />
                <ProgramCTA />
            </main>
            <Footer />
        </div>
    )
}
