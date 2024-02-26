import React from "react"
import RequestDemo from "../../../components/page-Components/requestDemo"
import { Container } from "@mantine/core"
import FeatureHeaderSparkle from "../../../components/page-Components/featureHeaderSparkle"

const WebDevelopment = () => {
    return (
        <div>
            <Container size="lg">
                <FeatureHeaderSparkle title="Web Development" />
            </Container>
            <RequestDemo />
        </div>
    )
}

export default WebDevelopment
