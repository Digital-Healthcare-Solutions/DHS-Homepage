import { Table, createStyles } from "@mantine/core"
import React, { ReactNode } from "react"
import { useTheme } from "next-themes"

export interface PricingTableSectionProps {
    icon: ReactNode
    title: string
    description: string
    borderColor?: string
    tableRows: {
        feature: ReactNode | string
        base: ReactNode | string
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-2">
                    {icon}
                    <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 ml-2">
                        {title}
                    </h2>
                </div>
                <p className="text-blue-600 dark:text-blue-400">
                    {description}
                </p>
            </div>
            <div className={`border-l-4 ${borderColor}`}>
                <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-700 font-semibold text-sm text-blue-900 dark:text-blue-300">
                    <div>Feature</div>
                    <div className="text-center">Base</div>
                    <div className="text-center">Premium</div>
                    <div className="text-center">Enterprise</div>
                </div>
                {tableRows.map((row, index) => (
                    <div
                        key={index}
                        className={`grid grid-cols-4 gap-4 p-4 text-sm ${
                            index % 2 === 0
                                ? "bg-white dark:bg-gray-900"
                                : "bg-gray-50 dark:bg-gray-800"
                        }`}
                    >
                        <div className="text-blue-700 dark:text-blue-300">
                            {row.feature}
                        </div>
                        <div className="text-center text-blue-600 dark:text-blue-400">
                            {row.base}
                        </div>
                        <div className="text-center text-blue-600 dark:text-blue-400">
                            {row.premium}
                        </div>
                        <div className="text-center text-blue-600 dark:text-blue-400">
                            {row.enterprise}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingTableSection

// <main>
//             <div className="grid grid-cols-2 md:grid-cols-3 mt-4 font-rubik w-full">
//                 <section className="flex flex-col">
//                     <div className="flex items-center">
//                         {icon}
//                         <h1 className="text-xl font-semibold dark:text-neutral-200">
//                             {title}
//                         </h1>
//                     </div>
//                     <div className="text-sm text-neutral-600 dark:text-gray-400 py-2">
//                         {description}
//                     </div>
//                 </section>
//             </div>
//             <section className={`border-l-4 ${borderColor}`}>
//                 <Table
//                     withBorder
//                     fontSize="lg"
//                     horizontalSpacing="xl"
//                     highlightOnHover
//                 >
//                     <thead className="sticky top-16 lg:top-[75px] dark:bg-neutral-900 bg-white">
//                         <tr>
//                             <th>Feature</th>
//                             <th>Base</th>
//                             <th>Premium</th>
//                             <th>Enterprise</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {tableRows.map((row, index) => (
//                             <tr
//                                 key={index}
//                                 className={theme === "light" ? "bg-white" : ""}
//                             >
//                                 <td className="w-1/4">
//                                     <span className="text-base">
//                                         {row.feature}
//                                     </span>
//                                 </td>
//                                 <td className="w-1/4">{row.base}</td>
//                                 <td className="w-1/4">{row.premium}</td>
//                                 <td className="w-1/4">{row.enterprise}</td>
//                             </tr>
//                         ))}

//                     </tbody>
//                 </Table>
//             </section>
//         </main>
