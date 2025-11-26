"use client"

import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function ContactInfo() {
    const { t } = useLanguage()

    const contactDetails = [
        {
            icon: Mail,
            label: t("contact.info.email"),
            value: "contact@jip.org",
            href: "mailto:contact@jip.org",
        },
        {
            icon: Phone,
            label: t("contact.info.phone"),
            value: "+237 600 000 000",
            href: "tel:+237600000000",
        },
        {
            icon: MapPin,
            label: t("contact.info.address"),
            value: "Yaoundé, Cameroun",
            href: "#",
        },
        {
            icon: Clock,
            label: t("contact.info.hours.label"),
            value: t("contact.info.hours.value"),
            href: "#",
        },
    ]

    return (
        <div className="space-y-8">
            <div className="bg-primary-50 dark:bg-primary-900/10 p-8 rounded-2xl border border-primary-100 dark:border-primary-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
                    {t("contact.info.title")}
                </h3>
                <div className="space-y-6">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm text-primary-600 dark:text-primary-400">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {item.label}
                                </p>
                                <a
                                    href={item.href}
                                    className="text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    {item.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-serif">
                    {t("contact.social")}
                </h3>
                <div className="flex space-x-4">
                    {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                        <a
                            key={index}
                            href="#"
                            className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all duration-300"
                        >
                            <Icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
