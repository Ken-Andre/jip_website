"use client"

import { useLanguage } from "@/contexts/language-context"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function DonationImpact() {
    const { t } = useLanguage()

    const data = [
        { name: "Organisation", value: 40, color: "#8b5cf6" },
        { name: "Formation", value: 30, color: "#f59e0b" },
        { name: "Soutien Social", value: 20, color: "#10b981" },
        { name: "Communication", value: 10, color: "#3b82f6" },
    ]

    const chartConfig = {
        value: {
            label: "Distribution",
        },
        Organisation: {
            label: "Organisation",
            color: "#8b5cf6",
        },
        Formation: {
            label: "Formation",
            color: "#f59e0b",
        },
        "Soutien Social": {
            label: "Soutien Social",
            color: "#10b981",
        },
        Communication: {
            label: "Communication",
            color: "#3b82f6",
        },
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                    {t("donations.impact.title")}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                    {t("donations.impact.text")}
                </p>
            </div>

            <div className="h-[300px] w-full">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                </ChartContainer>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                            {item.name} ({item.value}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
