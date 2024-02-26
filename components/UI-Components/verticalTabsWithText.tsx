import { Tabs } from "@mantine/core"
import { MdSettings } from "react-icons/md"
import { ReactNode } from "react"

type Tab = {
    value: string
    //icon type
    icon: ReactNode
    title: string
}

type TabPanel = {
    value: string
    content: ReactNode | string
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
            className="border border-neutral-500 rounded"
        >
            <Tabs.List>
                {tabsList.map((tab, index) => (
                    <Tabs.Tab value={tab.value} icon={tab.icon} key={index}>
                        {tab.title}
                    </Tabs.Tab>
                ))}
            </Tabs.List>
            <section className="pl-5 text-base">
                {tabsPanel.map((panel, index) => (
                    <Tabs.Panel value={panel.value} key={index}>
                        {panel.content}
                    </Tabs.Panel>
                ))}
            </section>
        </Tabs>
    )
}

export default VerticalTabsWithText
