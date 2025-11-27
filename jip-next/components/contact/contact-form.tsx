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

    return (
        <form
            action="https://formsubmit.co/thekyan@hi2.in" // Updated email
            method="POST"
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
        >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="Nouveau message de contact - JIP Website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/contact?success=true" /> {/* Update for production */}

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
                        <Input id="name" name="name" required placeholder="Samuel Eto'o" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">{t("form.email")}</Label>
                        <Input id="email" name="email" type="email" required placeholder="samuel@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea id="message" name="message" required className="min-h-[150px]" placeholder="..." />
                </div>
            </div>

            <Button type="submit" className="w-full">
                {t("form.submit")}
                <Send className="ml-2 h-4 w-4" />
            </Button>
        </form>
    )
}
