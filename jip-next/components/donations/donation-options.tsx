"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, CreditCard, Building } from "lucide-react"

export function DonationOptions() {
    const { t } = useLanguage()

    const options = [
        {
            icon: Smartphone,
            title: t("donations.mobile"),
            description: "MTN / Orange Money",
            content: (
                <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/10 rounded-lg border border-yellow-100 dark:border-yellow-800">
                        <p className="font-bold text-yellow-800 dark:text-yellow-200">{t("donations.mobile.name")}</p>
                        <p className="text-xl font-mono">{t("donations.mobile.number")}</p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-800">
                        <p className="font-bold text-orange-800 dark:text-orange-200">{t("donations.mobile.name2")}</p>
                        <p className="text-xl font-mono">{t("donations.mobile.number2")}</p>
                    </div>
                </div>
            ),
        },
        {
            icon: CreditCard,
            title: t("donations.paypal"),
            description: "International",
            content: (
                <div className="text-center space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        {t("donations.paypal.email")}
                    </p>
                    <Button className="w-full bg-[#0070BA] hover:bg-[#003087] text-white">
                        Donate via PayPal
                    </Button>
                </div>
            ),
        },
        {
            icon: Building,
            title: t("donations.bank"),
            description: "Virement",
            content: (
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">{t("donations.bank.name")}</span>
                        <span className="font-medium">UBA Cameroon</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500">{t("donations.bank.account")}</span>
                        <span className="font-medium font-mono">123456789012345</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span className="text-gray-500">{t("donations.bank.iban")}</span>
                        <span className="font-medium font-mono">CM21 10033 ...</span>
                    </div>
                </div>
            ),
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400">
                            <option.icon className="h-6 w-6" />
                        </div>
                        <CardTitle>{option.title}</CardTitle>
                        <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {option.content}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
