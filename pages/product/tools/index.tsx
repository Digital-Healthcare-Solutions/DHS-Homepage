import React from "react"
import RequestDemo from "../../../components/page-Components/requestDemo"
import { Container } from "@mantine/core"
import FeatureHeaderSparkle from "../../../components/page-Components/featureHeaderSparkle"

const Tools = () => {
    return (
        <div>
            <Container size="lg">
                <FeatureHeaderSparkle title="Tools" />
            </Container>
            <RequestDemo />
        </div>
    )
}

export default Tools
