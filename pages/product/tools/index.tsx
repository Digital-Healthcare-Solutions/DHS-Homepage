import React from "react"
import RequestDemo from "../../../components/page-Components/requestDemo"
import { Container } from "@mantine/core"
import FeatureHeaderSparkle from "../../../components/page-Components/featureHeaderSparkle"
import ToolCard from "../../../components/UI-Components/toolCard"
import { MdOutlineTrendingUp } from "react-icons/md"

const tools = [
    {
        title: "EMGPT",
        description: "Upload raw EMG/NCS data and get a full report in seconds",
        icon: <MdOutlineTrendingUp size={25} />,
        // link: "/product/smart-form",
        ai: true,
        comingSoon: true
    },
    {
        title: "Chat with Document",
        description:
            "Upload any document (pdf, doc, etc.) and ask questions about it",
        icon: <MdOutlineTrendingUp size={25} />,
        // link: "/product/web-development",
        ai: true,
        comingSoon: true
    },
    {
        title: "Copay Calculator",
        description:
            "Enter a patient's insurance information and get an estimate of what they owe",
        icon: <MdOutlineTrendingUp size={25} />,
        // link: "/product/web-development",
        ai: false,
        comingSoon: true
    }
]

const Tools = () => {
    return (
        <div>
            <Container size="lg">
                <FeatureHeaderSparkle title="Tools" />
            </Container>
            <Container
                size={1500}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 w-[calc(100% -8rem)] gap-16 mt-10"
            >
                {tools.map((tool) => (
                    <ToolCard key={tool.title} {...tool} />
                ))}
            </Container>
            <Container size="lg">
                <RequestDemo />
            </Container>
        </div>
    )
}

export default Tools
