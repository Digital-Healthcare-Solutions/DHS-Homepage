import Head from "next/head"
import Image from "next/image"
import ContactUs from "../components/mantine-Components/contactUs"
import { FaqSimple } from "../components/mantine-Components/faq"
import { FeaturesGrid } from "../components/mantine-Components/features"
import { HeroHomePage } from "../components/mantine-Components/heroHomePage"
import HomeCards from "../components/page-Components/HomeCards"
import { motion } from "framer-motion"
import SmartPlanDescription from "../components/page-Components/smartplanDescription"

export default function Home() {
    return (
        <motion.main
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <HeroHomePage />
            <SmartPlanDescription />
            <FeaturesGrid
                title="Smartplan's Features"
                description="We have a variety of features that can help you generate more revenue and run your practice more efficiently."
            />
            <HomeCards />
            <section className="flex justify-center bg-gradient-to-b from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900">
                <ContactUs />
            </section>{" "}
            <FaqSimple />
        </motion.main>
    )
}
