"use client"

import { Download, FileImage, FileText, Layout, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

const resourceCategories = [
    {
        key: "logos",
        icon: ImageIcon,
        files: [
            { name: "JIP Logo (PNG)", format: "PNG", size: "500 KB" },
            { name: "JIP Logo (SVG)", format: "SVG", size: "15 KB" },
            { name: "JIP Logo White", format: "PNG", size: "480 KB" },
        ],
    },
    {
        key: "posters",
        icon: FileImage,
        files: [
            { name: "Affiche A3", format: "PDF", size: "2.5 MB" },
            { name: "Affiche A4", format: "PDF", size: "1.8 MB" },
            { name: "Flyer", format: "PDF", size: "1.2 MB" },
        ],
    },
    {
        key: "banners",
        icon: Layout,
        files: [
            { name: "Facebook Cover", format: "PNG", size: "800 KB" },
            { name: "Twitter Header", format: "PNG", size: "650 KB" },
            { name: "Instagram Post", format: "PNG", size: "700 KB" },
            { name: "Web Banner (728x90)", format: "PNG", size: "250 KB" },
        ],
    },
    {
        key: "documents",
        icon: FileText,
        files: [
            { name: "Brochure JIP", format: "PDF", size: "3.5 MB" },
            { name: "Communiqué de Presse", format: "DOCX", size: "45 KB" },
            { name: "Guide du Participant", format: "PDF", size: "1.5 MB" },
        ],
    },
]

export function ResourcesContent() {
    const { t } = useLanguage()

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Download All Button */}
                <div className="mb-12 text-center">
                    <Button size="lg" className="gap-2 bg-gold text-secondary-foreground hover:bg-gold/90">
                        <Download className="h-5 w-5" />
                        {t("resources.download.all")}
                    </Button>
                </div>

                {/* Resource Categories */}
                <div className="grid gap-8 lg:grid-cols-2">
                    {resourceCategories.map((category) => {
                        const Icon = category.icon
                        return (
                            <div key={category.key} className="rounded-2xl border border-border bg-background p-6">
                                <div className="mb-6 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-foreground">
                                            {t(`resources.${category.key}.title`)}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{t(`resources.${category.key}.desc`)}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {category.files.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                                            <div>
                                                <p className="font-medium text-foreground">{file.name}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {t("resources.format")}: {file.format} • {t("resources.size")}: {file.size}
                                                </p>
                                            </div>
                                            <Button variant="ghost" size="icon" className="shrink-0">
                                                <Download className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
