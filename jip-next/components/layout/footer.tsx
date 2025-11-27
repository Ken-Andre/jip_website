"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const quickLinks = [
    { key: "nav.vision", href: "/vision" },
    { key: "nav.founder", href: "/fondateur" },
    { key: "nav.program", href: "/programme" },
    { key: "nav.participation", href: "/participation" },
    { key: "nav.testimonials", href: "/temoignages" },
]

const resourceLinks = [
    { key: "nav.gallery", href: "/galerie" },
    { key: "nav.resources", href: "/ressources" },
    { key: "nav.donations", href: "/dons" },
    { key: "nav.contact", href: "/contact" },
]

export function Footer() {
    const { t } = useLanguage()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* About */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                                <span className="font-serif text-lg font-bold text-primary-foreground">JIP</span>
                            </div>
                        </div>
                        <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">{t("footer.about.title")}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{t("footer.about.desc")}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">{t("footer.quicklinks")}</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                        {t(link.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">{t("footer.resources")}</h3>
                        <ul className="space-y-2">
                            {resourceLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                        {t(link.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">{t("footer.contact")}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-gold" />
                                <a href="mailto:contact@jip.org" className="hover:text-primary">
                                    contact@jip.org
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 text-gold" />
                                <a href="tel:+237600000000" className="hover:text-primary">
                                    +237 6 00 00 00 00
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                                <span>Yaoundé, Cameroun</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="mt-4 flex gap-3">
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Journée Internationale des Pasteurs. {t("footer.rights")}.
                    </p>
                </div>
            </div>
        </footer>
    )
}
