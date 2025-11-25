import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ParticipationHero } from "@/components/participation/participation-hero"
import { ParticipationContent } from "@/components/participation/participation-content"

export const metadata = {
    title: "Participation | Journée Internationale des Pasteurs",
    description: "Inscrivez-vous à la Journée Internationale des Pasteurs - 12 Décembre 2025 à Yaoundé.",
}

export default function ParticipationPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <ParticipationHero />
                <ParticipationContent />
            </main>
            <Footer />
        </div>
    )
}
