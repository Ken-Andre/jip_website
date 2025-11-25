import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata = {
    title: "Galerie | Journée Internationale des Pasteurs",
    description: "Galerie photos des éditions précédentes de la Journée Internationale des Pasteurs.",
}

export default function GalleryPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <GalleryHero />
                <GalleryGrid />
            </main>
            <Footer />
        </div>
    )
}
