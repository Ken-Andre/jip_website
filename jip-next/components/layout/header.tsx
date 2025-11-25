"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import { cn } from "@/lib/utils"

const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.vision", href: "/vision" },
    { key: "nav.founder", href: "/fondateur" },
    { key: "nav.program", href: "/programme" },
    { key: "nav.participation", href: "/participation" },
    { key: "nav.gallery", href: "/galerie" },
    { key: "nav.donations", href: "/dons" },
    { key: "nav.contact", href: "/contact" },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { language, setLanguage, t } = useLanguage()
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                        <span className="font-serif text-lg font-bold text-primary-foreground">JIP</span>
                    </div>
                    <span className="hidden font-serif text-lg font-semibold text-foreground sm:block">
                        {language === "fr" ? "Journée des Pasteurs" : "Pastors' Day"}
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Language Toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                        className="gap-1.5"
                    >
                        <Globe className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase">{language}</span>
                    </Button>

                    {/* Theme Toggle */}
                    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                        {mounted ? (
                            theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
                        ) : (
                            <div className="h-4 w-4" />
                        )}
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={cn("overflow-hidden border-t border-border/40 lg:hidden", isOpen ? "max-h-96" : "max-h-0")}>
                <nav className="flex flex-col gap-1 p-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
