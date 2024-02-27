import { Tabs } from "@mantine/core"
import { MdSettings } from "react-icons/md"
import { FormEvent, ReactNode } from "react"
import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

type Tab = {
    value: string
    //icon type
    icon: ReactNode
    title: string
}
interface HorizontalTabsProps {
    tabsList: Tab[]
    selectedTab: string
    setSelectedTab: (value: string) => void
}

const HorizontalTabs = ({
    tabsList = [],
    selectedTab,
    setSelectedTab
}: HorizontalTabsProps) => {
    return (
        <section>
            <Tabs
                variant="pills"
                orientation="horizontal"
                className="flex flex-col lg:flex-row items-start gap-5 lg:gap-20"
                value={selectedTab}
                onTabChange={(value) => setSelectedTab(value)}
            >
                <Tabs.List grow>
                    {tabsList.map((tab, index) => (
                        <Tabs.Tab
                            value={tab.value}
                            icon={tab.icon}
                            key={index}
                            className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-500 bg-gradient-to-r from-transparent to-transparent hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900 dark:hover:to-primary-800 hover:shadow-lg dark:hover:shadow-lg hover:ring-2 ring-primary-500 dark:ring-primary-500 ring-opacity-50 dark:ring-opacity-50 transition-all ease-in-out rounded-lg p-3 hover:scale-105 dark:hover:scale-105"
                        >
                            {tab.title}
                        </Tabs.Tab>
                    ))}
                </Tabs.List>
            </Tabs>
        </section>
    )
}

export default HorizontalTabs
