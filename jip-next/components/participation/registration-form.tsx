"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"

export function RegistrationForm() {
    const { t } = useLanguage()

    return (
        <form
            action="https://formsubmit.co/thekyan@hi2.in"
            method="POST"
            className="space-y-6"
        >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="Nouvelle inscription - JIP 2025" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/participation?success=true" />

            {/* Name */}
            <div className="space-y-2">
                <Label htmlFor="name">{t("form.name")} *</Label>
                <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Samuel Eto'o"
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email">{t("form.email")} *</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="samuel@example.com"
                />
            </div>

            {/* Phone */}
            <div className="space-y-2">
                <Label htmlFor="phone">{t("form.phone")} *</Label>
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+237 6 00 00 00 00"
                />
            </div>

            {/* Church */}
            <div className="space-y-2">
                <Label htmlFor="church">{t("form.church")} *</Label>
                <Input
                    id="church"
                    name="church"
                    required
                    placeholder="Église de la Grâce"
                />
            </div>

            {/* Participation Type */}
            <div className="space-y-2">
                <Label htmlFor="type">{t("form.type")} *</Label>
                <select
                    id="type"
                    name="type"
                    required
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <option value="">Sélectionnez...</option>
                    <option value="pastor">{t("form.type.pastor")}</option>
                    <option value="leader">{t("form.type.leader")}</option>
                    <option value="member">{t("form.type.member")}</option>
                    <option value="visitor">{t("form.type.visitor")}</option>
                </select>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full">
                {t("form.submit")}
            </Button>
        </form>
    )
}
