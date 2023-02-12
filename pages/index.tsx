import Head from "next/head"
import Image from "next/image"
import ContactUs from "../components/mantine-Components/contactUs"
import { FaqSimple } from "../components/mantine-Components/faq"
import { FeaturesGrid } from "../components/mantine-Components/features"
import { HeroHomePage } from "../components/mantine-Components/heroHomePage"
import HomeCards from "../components/page-Components/HomeCards"

export default function Home() {
    return (
        <main>
            <HeroHomePage />
            <FeaturesGrid
                title="Features"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <HomeCards />
            <section className="flex justify-center bg-gradient-to-b from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900">
                <ContactUs />
            </section>{" "}
            <FaqSimple />
        </main>
    )
}
