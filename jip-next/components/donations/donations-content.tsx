"use client"

import { Smartphone, CreditCard, Building2, QrCode, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function DonationsContent() {
    const { t } = useLanguage()
    const [copiedField, setCopiedField] = useState<string | null>(null)

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    return (
        <section className="bg-card py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Why Donate */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-serif text-2xl font-bold text-foreground sm:text-3xl">{t("donations.why.title")}</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">{t("donations.why.text")}</p>
                </div>

                {/* Payment Methods */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Mobile Money */}
                    <div className="rounded-2xl border border-border bg-background p-6">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                            <Smartphone className="h-7 w-7 text-gold" />
                        </div>
                        <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{t("donations.mobile.title")}</h3>

                        <div className="space-y-4">
                            {/* MTN */}
                            <div className="rounded-lg bg-muted/50 p-4">
                                <p className="mb-1 text-sm font-medium text-foreground">{t("donations.mobile.name")}</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-muted-foreground">{t("donations.mobile.number")}</p>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => copyToClipboard("+237600000000", "mtn")}
                                    >
                                        {copiedField === "mtn" ? (
                                            <Check className="h-4 w-4 text-green-600" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Orange */}
                            <div className="rounded-lg bg-muted/50 p-4">
                                <p className="mb-1 text-sm font-medium text-foreground">{t("donations.mobile.name2")}</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-muted-foreground">{t("donations.mobile.number2")}</p>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => copyToClipboard("+237600000000", "orange")}
                                    >
                                        {copiedField === "orange" ? (
                                            <Check className="h-4 w-4 text-green-600" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PayPal */}
                    <div className="rounded-2xl border border-border bg-background p-6">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                            <CreditCard className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{t("donations.paypal.title")}</h3>

                        <div className="rounded-lg bg-muted/50 p-4">
                            <p className="mb-1 text-sm font-medium text-foreground">Email PayPal</p>
                            <div className="flex items-center justify-between">
                                <p className="font-mono text-muted-foreground">{t("donations.paypal.email")}</p>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() => copyToClipboard("dons@jip.org", "paypal")}
                                >
                                    {copiedField === "paypal" ? (
                                        <Check className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* QR Code placeholder */}
                        <div className="mt-4 flex justify-center">
                            <div className="flex h-32 w-32 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30">
                                <QrCode className="h-12 w-12 text-muted-foreground" />
                            </div>
                        </div>
                    </div>

                    {/* Bank Transfer */}
                    <div className="rounded-2xl border border-border bg-background p-6">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                            <Building2 className="h-7 w-7 text-gold" />
                        </div>
                        <h3 className="mb-4 font-serif text-xl font-bold text-foreground">{t("donations.bank.title")}</h3>

                        <div className="space-y-4">
                            <div className="rounded-lg bg-muted/50 p-4">
                                <p className="mb-1 text-sm font-medium text-foreground">{t("donations.bank.name")}</p>
                                <p className="font-mono text-sm text-muted-foreground">Banque Atlantique</p>
                            </div>

                            <div className="rounded-lg bg-muted/50 p-4">
                                <p className="mb-1 text-sm font-medium text-foreground">N° Compte</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-sm text-muted-foreground">{t("donations.bank.account")}</p>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => copyToClipboard("XXXXXXXXXX", "account")}
                                    >
                                        {copiedField === "account" ? (
                                            <Check className="h-4 w-4 text-green-600" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-lg bg-muted/50 p-4">
                                <p className="mb-1 text-sm font-medium text-foreground">IBAN</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-mono text-xs text-muted-foreground">{t("donations.bank.iban")}</p>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => copyToClipboard("CM XX XXXX XXXX XXXX XXXX", "iban")}
                                    >
                                        {copiedField === "iban" ? (
                                            <Check className="h-4 w-4 text-green-600" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impact Section */}
                <div className="mt-16 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
                    <h3 className="mb-4 font-serif text-2xl font-bold">{t("donations.impact.title")}</h3>
                    <p className="mx-auto max-w-2xl text-primary-foreground/80">{t("donations.impact.text")}</p>
                </div>
            </div>
        </section>
    )
}
