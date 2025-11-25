"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function GalleryGrid() {
    const { t } = useLanguage()
    const [filter, setFilter] = useState("all")

    const categories = [
        { id: "all", label: "gallery.category.all" },
        { id: "ceremonies", label: "gallery.category.ceremonies" },
        { id: "worship", label: "gallery.category.worship" },
        { id: "fellowship", label: "gallery.category.fellowship" },
    ]

    const images = [
        { id: 1, src: "/images/gallery/1.jpg", category: "ceremonies", alt: "Opening Ceremony" },
        { id: 2, src: "/images/gallery/2.jpg", category: "worship", alt: "Worship Session" },
        { id: 3, src: "/images/gallery/3.jpg", category: "fellowship", alt: "Lunch Break" },
        { id: 4, src: "/images/gallery/4.jpg", category: "ceremonies", alt: "Award Giving" },
        { id: 5, src: "/images/gallery/5.jpg", category: "worship", alt: "Prayer Time" },
        { id: 6, src: "/images/gallery/6.jpg", category: "fellowship", alt: "Networking" },
    ]

    const filteredImages = filter === "all"
        ? images
        : images.filter(img => img.category === filter)

    return (
        <div className="space-y-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <Button
                        key={cat.id}
                        variant={filter === cat.id ? "default" : "outline"}
                        onClick={() => setFilter(cat.id)}
                        className="rounded-full"
                    >
                        {t(cat.label)}
                    </Button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((image) => (
                    <Dialog key={image.id}>
                        <DialogTrigger asChild>
                            <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    )
}
