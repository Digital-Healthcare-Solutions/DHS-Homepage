import Head from "next/head"
import ContactUs from "../components/mantine-Components/contactUs"
import { FaqSimple } from "../components/mantine-Components/faq"
import HomeCards from "../components/page-Components/HomeCards"
import { motion } from "framer-motion"
import { HeroHomePage2 } from "../components/mantine-Components/heroHompage2"
import { useEffect, useState } from "react"
import { Container } from "@mantine/core"
import { useRouter } from "next/router"
import RequestDemo from "../components/page-Components/requestDemo"
import Features2 from "../components/mantine-Components/features2"
import GetCustomQuote from "../app/components/client/modals/GetCustomQuote"

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const router = useRouter()

    useEffect(() => {
        if (router.query.dialog === "getStarted") {
            setIsModalOpen(true)
        }
    }, [router.query.dialog])

    return (
        <motion.main>
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
                {/* <!-- Google tag (gtag.js) --> */}
            </Head>
            <HeroHomePage2 setIsModalOpen={setIsModalOpen} />
            <Features2 />
            {/* <WaveComponent /> */}
            {/* testimonials */}
            {/* <div className="h-[45rem] rounded-md flex flex-col antialiased bg-white dark:bg-neutral-900 items-center justify-center relative overflow-hidden my-12">
                <InfiniteMovingCards
                    items={testimonials1}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={testimonials2}
                    direction="left"
                    speed="slow"
                />{" "}
                <InfiniteMovingCards
                    items={testimonials3}
                    direction="right"
                    speed="slow"
                />
            </div> */}
            <h3 className="text-center text-5xl font-rubik pb-12">Why us</h3>
            <HomeCards />
            <section
                id="contact"
                className="flex justify-center pt-12 bg-white dark:bg-neutral-900"
            >
                <ContactUs />
            </section>{" "}
            <FaqSimple />
            <Container size="lg" id="request-demo">
                <section className="my-20">
                    <RequestDemo />
                </section>
            </Container>
            <GetCustomQuote
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </motion.main>
    )
}
