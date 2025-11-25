"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Image as ImageIcon, Share2 } from "lucide-react"

export function ResourceList() {
    const { t } = useLanguage()

    const resources = [
        {
            category: t("resources.logos.title"),
            description: t("resources.logos.desc"),
            icon: ImageIcon,
            items: [
                { name: "Logo JIP - PNG", size: "2.5 MB", format: "PNG" },
                { name: "Logo JIP - SVG", size: "1.2 MB", format: "SVG" },
                { name: "Charte Graphique", size: "5.0 MB", format: "PDF" },
            ]
        },
        {
            category: t("resources.documents.title"),
            description: t("resources.documents.desc"),
            icon: FileText,
            items: [
                { name: "Dossier de Presse", size: "3.2 MB", format: "PDF" },
                { name: "Flyer A5", size: "4.1 MB", format: "PDF" },
                { name: "Programme Détaillé", size: "1.5 MB", format: "PDF" },
            ]
        },
        {
            category: t("resources.banners.title"),
            description: t("resources.banners.desc"),
            icon: Share2,
            items: [
                { name: "Bannière Facebook", size: "1.8 MB", format: "JPG" },
                { name: "Story Instagram", size: "1.2 MB", format: "JPG" },
                { name: "Post LinkedIn", size: "1.5 MB", format: "JPG" },
            ]
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((category, index) => (
                <Card key={index} className="flex flex-col">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/10 rounded-lg flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                            <category.icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{category.category}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="space-y-4">
                            {category.items.map((item, idx) => (
                                <li key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                    <div className="flex items-center space-x-3 overflow-hidden">
                                        <div className="flex-shrink-0 w-8 h-8 bg-white dark:bg-gray-900 rounded flex items-center justify-center text-xs font-bold text-gray-500 border border-gray-200 dark:border-gray-700">
                                            {item.format}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {item.name}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {item.size}
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Download className="h-4 w-4" />
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
