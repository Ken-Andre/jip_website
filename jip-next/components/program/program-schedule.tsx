"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

export function ProgramSchedule() {
    const { t } = useLanguage()

    const schedule = [
        {
            time: "08:00 - 09:00",
            title: t("program.08h00.title"),
            description: t("program.08h00.desc"),
            type: "general",
        },
        {
            time: "09:00 - 09:30",
            title: t("program.09h00.title"),
            description: t("program.09h00.desc"),
            type: "main",
        },
        {
            time: "09:30 - 11:00",
            title: t("program.09h30.title"),
            description: t("program.09h30.desc"),
            type: "worship",
        },
        {
            time: "11:00 - 11:30",
            title: t("program.11h00.title"),
            description: t("program.11h00.desc"),
            type: "break",
        },
        {
            time: "11:30 - 12:30",
            title: t("program.11h30.title"),
            description: t("program.11h30.desc"),
            type: "workshop",
        },
        {
            time: "12:30 - 14:00",
            title: t("program.12h30.title"),
            description: t("program.12h30.desc"),
            type: "break",
        },
        {
            time: "14:00 - 15:30",
            title: t("program.14h00.title"),
            description: t("program.14h00.desc"),
            type: "main",
        },
        {
            time: "15:30 - 17:00",
            title: t("program.15h30.title"),
            description: t("program.15h30.desc"),
            type: "ceremony",
        },
    ]

    const getTypeColor = (type: string) => {
        switch (type) {
            case "main": return "bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300"
            case "worship": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
            case "workshop": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
            case "break": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
            case "ceremony": return "bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300"
            default: return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="space-y-6">
            {schedule.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div className="min-w-[140px] flex items-center text-gray-500 dark:text-gray-400 font-mono">
                            <Clock className="h-4 w-4 mr-2" />
                            {item.time}
                        </div>

                        <div className="flex-grow">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </div>

                        <Badge className={getTypeColor(item.type) + " border-none"}>
                            {item.type.toUpperCase()}
                        </Badge>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
