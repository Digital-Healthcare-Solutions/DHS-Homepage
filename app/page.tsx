import React from "react"
import { Hero } from "../components/client/homepage/Hero"
import RequestDemo from "../components/client/forms/requestDemo"
import FAQ from "@/components/client/homepage/FAQ"
import ContactUs from "@/components/client/homepage/ContactUs"
import { ProductDemoVideo } from "@/components/client/homepage/ProductDemoVideo"
import EchoSettingsVideo from "@/components/client/homepage/echoSettingsVideo"

const Page = () => {
    return (
        <div>
            <Hero />
            <ProductDemoVideo />
            <RequestDemo />
            <EchoSettingsVideo />
            <ContactUs />
            <FAQ />
        </div>
    )
}

export default Page
