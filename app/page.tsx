import React from "react"
import { Hero } from "../components/client/homepage/Hero"
import RequestDemo from "../components/client/forms/requestDemo"
import FAQ from "@/components/client/homepage/FAQ"
import ContactUs from "@/components/client/homepage/ContactUs"
import { ProductDemoVideo } from "@/components/client/homepage/ProductDemoVideo"
import EchoSettingsVideo from "@/components/client/homepage/EchoSettingsVideo"
import FeatureHighlights from "@/components/client/homepage/FeatureHighlights"
import InviteUsers from "@/components/client/homepage/InviteUsers"
import Devices from "@/components/client/homepage/Devices"
import InteractiveDragandDropDemo from "@/components/client/interactive"

const Page = () => {
    return (
        <div>
            <Hero />
            <ProductDemoVideo />
            <FeatureHighlights />
            <EchoSettingsVideo />
            <InteractiveDragandDropDemo />
            <InviteUsers />
            <Devices />
            <RequestDemo />
            {/* <ContactUs /> */}
            <FAQ />
        </div>
    )
}

export default Page
