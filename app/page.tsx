import React from "react"
import { Hero } from "../components/client/homepage/Hero"
import RequestDemo from "../components/client/forms/requestDemo"
import FAQ from "@/components/client/homepage/FAQ"
import ContactUs from "@/components/client/homepage/ContactUs"

const Page = () => {
    return (
        <div>
            <Hero />
            <RequestDemo />
            <ContactUs />
            <FAQ />
        </div>
    )
}

export default Page
