import Head from "next/head"
import Image from "next/image"
import ContactUs from "../components/mantine-Components/contactUs"
import { FaqSimple } from "../components/mantine-Components/faq"
import { FeaturesGrid } from "../components/mantine-Components/features"
import { HeroHomePage } from "../components/mantine-Components/heroHomePage"
import HomeCards from "../components/page-Components/HomeCards"
import { motion } from "framer-motion"
import SmartPlanDescription from "../components/page-Components/smartplanDescription"
import HomePoints from "../components/page-Components/homePoints"
import { HeroHomePage2 } from "../components/mantine-Components/heroHompage2"

export default function Home() {
    return (
        <motion.main
        // initial={{ x: -200, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.6 }}
        >
            <Head>
                <title>Digital Healthcare Solutions | Home</title>
                <meta
                    name="description"
                    content="
                    Level up your practice with our next-generation communication platform for healthcare providers.
                "
                />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />
                <meta name="author" content="Digital Healthcare Solutions" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroHomePage2 />
            <FeaturesGrid
                title="Our solutions"
                description="We offer variety of features that can help you  run your practice more efficiently."
            />{" "}
            <section className="flex justify-center  bg-blue-50  dark:bg-neutral-800 ">
                <SmartPlanDescription />
            </section>
            <HomeCards />
            <section
                id="contact"
                className="flex justify-center bg-gradient-to-b from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900"
            >
                <ContactUs />
            </section>{" "}
            <section className="mt-14">
                <h1 className="text-4xl font-bold text-center">
                    You're in good hands
                </h1>
                <HomePoints />
            </section>
            <FaqSimple />
        </motion.main>
    )
}
