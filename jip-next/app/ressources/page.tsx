import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ResourcesHero } from "@/components/resources/resources-hero"
import { ResourcesContent } from "@/components/resources/resources-content"

export const metadata = {
    title: "Ressources | Journée Internationale des Pasteurs",
    description: "Téléchargez le kit média officiel de la Journée Internationale des Pasteurs.",
}

export default function ResourcesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <ResourcesHero />
                <ResourcesContent />
            </main>
            <Footer />
        </div>
    )
}
