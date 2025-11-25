import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DonationsHero } from "@/components/donations/donations-hero"
import { DonationsContent } from "@/components/donations/donations-content"

export const metadata = {
    title: "Dons | Journée Internationale des Pasteurs",
    description: "Soutenez la Journée Internationale des Pasteurs par vos dons généreux.",
}

export default function DonationsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <DonationsHero />
                <DonationsContent />
            </main>
            <Footer />
        </div>
    )
}
