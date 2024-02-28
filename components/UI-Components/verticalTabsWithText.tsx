import { Tabs } from "@mantine/core"
import { MdSettings } from "react-icons/md"
import { ReactNode } from "react"
import Image from "next/image"

type Tab = {
    value: string
    //icon type
    icon: ReactNode
    title: string
}

type TabPanel = {
    value: string
    contentMain: ReactNode | string
    //optional list of content
    contentList?: string[]
    image?: string
}

type VerticalTabsWithTextProps = {
    tabsList: Tab[]
    tabsPanel: TabPanel[]
}

const VerticalTabsWithText = ({
    tabsList = [],
    tabsPanel = []
}: VerticalTabsWithTextProps) => {
    return (
        <Tabs
            variant="pills"
            orientation="vertical"
            defaultValue={tabsList[0].value}
            className="flex flex-col lg:flex-row items-start gap-5 lg:gap-20"
        >
            <Tabs.List grow>
                {tabsList.map((tab, index) => (
                    <Tabs.Tab
                        value={tab.value}
                        icon={tab.icon}
                        key={index}
                        className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-500 bg-gradient-to-r from-transparent to-transparent hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900 dark:hover:to-primary-800 hover:shadow-lg dark:hover:shadow-lg hover:ring-2 ring-primary-500 dark:ring-primary-500 ring-opacity-50 dark:ring-opacity-50 transition-all  ease-in-out rounded-lg p-3 hover:scale-105 dark:hover:scale-105"
                    >
                        {tab.title}
                    </Tabs.Tab>
                ))}
            </Tabs.List>
            <section className="pl-5 text-base lg:text-lg">
                {tabsPanel.map((panel, index) => (
                    <Tabs.Panel
                        value={panel.value}
                        key={index}
                        className="transition-all duration-300 ease-in-out transform  font-rubik"
                    >
                        <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
                            <div className="w-full lg:w-1/2 space-y-4">
                                <p className="text-lg lg:text-xl font-light text-neutral-950 dark:text-gray-200 leading-relaxed">
                                    {panel.contentMain}
                                </p>
                                {panel.contentList && (
                                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                        {panel.contentList.map(
                                            (content, index) => (
                                                <li
                                                    key={index}
                                                    className="text-base lg:text-lg"
                                                >
                                                    {content}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                            {panel.image && (
                                <div className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0">
                                    <Image
                                        src={panel.image}
                                        alt="Panel image"
                                        width={700}
                                        height={700}
                                        className="rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-110"
                                        // Enhanced visual effects for the image
                                    />
                                </div>
                            )}
                        </section>
                    </Tabs.Panel>
                ))}
            </section>
        </Tabs>
    )
}

export default VerticalTabsWithText
