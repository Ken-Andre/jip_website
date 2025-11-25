"use client"

import React, { createContext, useContext, useState } from "react"
import frTranslations from "@/locales/fr.json"
import enTranslations from "@/locales/en.json"

type Language = "fr" | "en"

type Translations = typeof frTranslations

type LanguageContextType = {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
    fr: frTranslations,
    en: enTranslations,
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("fr")

    const t = (key: string): string => {
        const keys = key.split(".")
        let value: any = translations[language]

        for (const k of keys) {
            if (value && typeof value === "object" && k in value) {
                value = value[k]
            } else {
                return key // Return the key itself if not found
            }
        }

        return typeof value === "string" ? value : key
    }

    return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
