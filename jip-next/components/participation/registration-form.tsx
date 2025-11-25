"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

interface FormData {
    name: string
    email: string
    phone: string
    church: string
    type: string
}

interface FormErrors {
    name?: string
    email?: string
    phone?: string
    church?: string
    type?: string
}

export function RegistrationForm() {
    const { t } = useLanguage()
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        church: "",
        type: "",
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const validate = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = t("form.required")
        }

        if (!formData.email.trim()) {
            newErrors.email = t("form.required")
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t("form.invalid.email")
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t("form.required")
        }

        if (!formData.church.trim()) {
            newErrors.church = t("form.required")
        }

        if (!formData.type) {
            newErrors.type = t("form.required")
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validate()) return

        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSuccess(true)
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">{t("form.register.success")}</h3>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
                <Label htmlFor="name">{t("form.name")} *</Label>
                <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email">{t("form.email")} *</Label>
                <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
                <Label htmlFor="phone">{t("form.phone")} *</Label>
                <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>

            {/* Church */}
            <div className="space-y-2">
                <Label htmlFor="church">{t("form.church")} *</Label>
                <Input
                    id="church"
                    value={formData.church}
                    onChange={(e) => setFormData({ ...formData, church: e.target.value })}
                    className={errors.church ? "border-destructive" : ""}
                />
                {errors.church && <p className="text-sm text-destructive">{errors.church}</p>}
            </div>

            {/* Participation Type */}
            <div className="space-y-2">
                <Label>{t("form.type")} *</Label>
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger className={errors.type ? "border-destructive" : ""}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pastor">{t("form.type.pastor")}</SelectItem>
                        <SelectItem value="leader">{t("form.type.leader")}</SelectItem>
                        <SelectItem value="member">{t("form.type.member")}</SelectItem>
                        <SelectItem value="visitor">{t("form.type.visitor")}</SelectItem>
                    </SelectContent>
                </Select>
                {errors.type && <p className="text-sm text-destructive">{errors.type}</p>}
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t("form.registering") : t("form.submit")}
            </Button>
        </form>
    )
}
