import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata = {
    title: "Contact | Journée Internationale des Pasteurs",
    description: "Contactez l'équipe de la Journée Internationale des Pasteurs.",
}

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <ContactHero />
                <ContactContent />
            </main>
            <Footer />
        </div>
    )
}
