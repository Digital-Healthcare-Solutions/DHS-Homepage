import { Table } from "@mantine/core"
import React, { ReactNode } from "react"
import { useTheme } from "next-themes"

export interface PricingTableSectionProps {
    icon: ReactNode
    title: string
    description: string
    borderColor?: string
    tableRows: {
        feature: ReactNode | string
        starter: ReactNode | string
        premium: ReactNode | string
        enterprise: ReactNode | string
    }[]
}

const PricingTableSection = ({
    icon,
    title,
    description,
    tableRows,
    borderColor = "border-l-blue-500"
}: PricingTableSectionProps) => {
    const { theme } = useTheme()
    return (
        <main>
            <div className="hidden md:grid grid-cols-3 mt-4 font-rubik w-full">
                <section className="flex flex-col">
                    <div className=" flex items-center">
                        {icon}
                        <h1 className="text-xl font-semibold">{title}</h1>
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-500 py-2">
                        {description}
                    </div>
                </section>
            </div>
            <Table
                withBorder
                fontSize="lg"
                horizontalSpacing="xl"
                highlightOnHover
                className={`border-l-4 ${borderColor}`}
            >
                <thead className="sticky top-16 lg:top-[75px]  dark:bg-neutral-900 bg-white ">
                    <tr>
                        <th>Feature</th>
                        <th>Starter</th>
                        <th>Premium</th>
                        <th>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map((row, index) => (
                        <tr
                            key={index}
                            className={theme === "light" && "bg-white"}
                        >
                            <td className="w-1/4">
                                <span className="text-base">{row.feature}</span>
                            </td>
                            <td className="w-1/4">{row.starter}</td>
                            <td className="w-1/4">{row.premium}</td>
                            <td className="w-1/4">{row.enterprise}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </main>
    )
}

export default PricingTableSection
