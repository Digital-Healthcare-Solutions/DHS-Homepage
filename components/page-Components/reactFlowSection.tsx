import { Text } from "@mantine/core"
import React, { useState } from "react"
import HorizontalTabs from "../UI-Components/horizontalTabs"
import { BsArrowDown } from "react-icons/bs"
import SimpleFlow from "../react-flow/simple-flow"
import { TiFlowMerge } from "react-icons/ti"
import { HiOutlineLightningBolt } from "react-icons/hi"
import { FiPhoneForwarded } from "react-icons/fi"
import { GrCycle } from "react-icons/gr"
import FlowWithAgent from "../react-flow/flow-with-agent"
import FlowWithCallForwarding from "../react-flow/flow-with-call-forwarding"
import FlowWithBoth from "../react-flow/flow-with-both"

const ReactFlowSection = () => {
    const [selectedTab, setSelectedTab] = useState<string | null>("simple-flow")
    return (
        <section className="h-fit min-h-[50rem] flex flex-col items-center justify-start p-4 md:px-20 mt-20">
            <Text
                className="text-center text-2xl pb-5"
                fw={500}
                c="neutral-800"
                mb="md"
            >
                Choose the flow that best suits your needs
            </Text>
            <div className="pb-4">
                <HorizontalTabs
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                    tabsList={[
                        {
                            title: "Simple Flow",
                            value: "simple-flow",
                            icon: <TiFlowMerge />
                        },
                        {
                            title: "Flow with call forwarding",
                            value: "flow-with-call-forwarding",
                            icon: <FiPhoneForwarded />
                        },
                        {
                            title: "Flow with AI Agent",
                            value: "flow-with-agent",
                            icon: <HiOutlineLightningBolt />
                        },

                        {
                            title: "Flow with both",
                            value: "flow-with-both",
                            icon: <GrCycle />
                        }
                    ]}
                />
            </div>
            {selectedTab === "simple-flow" ? (
                <SimpleFlow />
            ) : selectedTab === "flow-with-agent" ? (
                <FlowWithAgent />
            ) : selectedTab === "flow-with-call-forwarding" ? (
                <FlowWithCallForwarding />
            ) : selectedTab === "flow-with-both" ? (
                <FlowWithBoth />
            ) : null}
        </section>
    )
}

export default ReactFlowSection
