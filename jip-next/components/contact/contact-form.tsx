"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
    const { t } = useLanguage()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
                    {t("contact.form.title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    {t("contact.hero.subtitle")}
                </p>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">{t("form.name")}</Label>
                        <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{t("form.email")}</Label>
                        <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea id="message" required className="min-h-[150px]" placeholder="..." />
                </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                    t("form.sending")
                ) : isSuccess ? (
                    t("form.send.success")
                ) : (
                    <>
                        {t("form.submit")}
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    )
}
