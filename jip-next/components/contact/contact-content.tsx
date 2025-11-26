"use client"

import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { useLanguage } from "@/contexts/language-context"

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
]

export function ContactContent() {
    const { t } = useLanguage()

    const contactInfo = [
        { icon: Mail, label: t("contact.info.email"), value: "contact@jip.org", href: "mailto:contact@jip.org" },
        { icon: Phone, label: t("contact.info.phone"), value: "+237 6 00 00 00 00", href: "tel:+237600000000" },
        { icon: MapPin, label: t("contact.info.address"), value: "Yaoundé, Cameroun", href: null },
        { icon: Clock, label: t("contact.info.hours.label"), value: t("contact.info.hours.value"), href: null },
    ]

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-5">
                    {/* Form */}
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">{t("contact.form.title")}</h2>
                            <ContactForm />
                        </div>
                    </div>

                    {/* Info Sidebar */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Contact Info */}
                        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                            <h3 className="mb-6 font-serif text-xl font-bold text-foreground">{t("contact.info.title")}</h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon
                                    const content = (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <Icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.label}</p>
                                                <p className="font-medium text-foreground">{item.value}</p>
                                            </div>
                                        </div>
                                    )

                                    return item.href ? (
                                        <a key={index} href={item.href} className="block transition-opacity hover:opacity-80">
                                            {content}
                                        </a>
                                    ) : (
                                        <div key={index}>{content}</div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                            <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{t("contact.social")}</h3>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                            aria-label={link.label}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
