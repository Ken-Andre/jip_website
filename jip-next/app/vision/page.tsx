import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { VisionHero } from "@/components/vision/vision-hero"
import { MissionSection } from "@/components/vision/mission-section"
import { ValuesSection } from "@/components/vision/values-section"
import { ImpactSection } from "@/components/vision/impact-section"

export const metadata = {
    title: "Vision | Journée Internationale des Pasteurs",
    description:
        "Découvrez la vision et la mission de la Journée Internationale des Pasteurs - honorer ceux qui veillent sur nos âmes.",
}

export default function VisionPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <VisionHero />
                <MissionSection />
                <ValuesSection />
                <ImpactSection />
            </main>
            <Footer />
        </div>
    )
}
