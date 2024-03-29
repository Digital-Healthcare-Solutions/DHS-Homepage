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
import Script from "next/script"
import { useFormik } from "formik"
import * as Yup from "yup"
import { showNotification } from "@mantine/notifications"
import { useEffect, useState } from "react"
import {
    Container,
    Modal,
    MultiSelect,
    NumberInput,
    Text,
    TextInput,
    Title
} from "@mantine/core"
import ButtonPrimary from "../components/UI-Components/button-primary"
import { useRouter } from "next/router"
import { WavyBackground } from "../components/ui/wavy-background"
import WaveComponent from "../components/page-Components/waveComponent"
import { Boxes } from "../components/ui/background-boxes"
import { cn } from "../utils/cn"
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"
import { BackgroundBeams } from "../components/ui/background-beams"
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid"
import { LuClipboard, LuFileText } from "react-icons/lu"
import StatCard from "../components/UI-Components/statCard"
import { MdOutlineRecordVoiceOver, MdPhone } from "react-icons/md"
import { TfiMoney } from "react-icons/tfi"
import { FiClock } from "react-icons/fi"
import RequestDemo from "../components/page-Components/requestDemo"
import Features2 from "../components/mantine-Components/features2"

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [features, setFeatures] = useState([])
    const [providers, setProviders] = useState(1)

    const router = useRouter()

    const items = [
        // {
        //     title: "Patient Growth",
        //     description:
        //         "The impact of our solutions on the growth of your patient base.",
        //     header: (
        //         <StatCard
        //             title="New Patients"
        //             diff={20}
        //             value={25}
        //             valueText={"New Patients per month"}
        //         />
        //     ),

        //     icon: <LuClipboard className="h-4 w-4 text-neutral-500" />
        // },
        {
            title: "Call Center Impact",
            description:
                "The impact of our intuitive call center on your business.",
            header: (
                <StatCard
                    title="Time spent on phones"
                    diff={-50}
                    value={16}
                    valueText={"less hrs spent on the phone per month"}
                />
            ),
            icon: <MdPhone className="h-4 w-4 text-neutral-500" />
        },
        {
            title: "Clinical Efficiency",
            description:
                "The impact of our speech-to-text solutions on clinical efficiency.",
            header: (
                <StatCard
                    title="Time Spent writing notes"
                    diff={-25}
                    value={10}
                    valueText={"less hours spent writing clinical notes"}
                />
            ),
            icon: (
                <MdOutlineRecordVoiceOver className="h-4 w-4 text-neutral-500" />
            )
        },
        // {
        //     title: "Financial Growth",
        //     description: "Based on 1 year long case study.",
        //     header: (
        //         <StatCard
        //             title="Revenue Increase"
        //             diff={10}
        //             value={"$100,000"}
        //             valueText={"Dollar increase in revenue"}
        //         />
        //     ),
        //     icon: <TfiMoney className="h-4 w-4 text-neutral-500" />
        // },
        {
            title: "Paperwork Reduction",
            description:
                "The impact of our solutions on the time spent on paperwork.",
            header: (
                <StatCard
                    title="Time Spent on paperwork "
                    diff={-25}
                    value={12}
                    valueText={"less hrs spent on paperwork per month"}
                />
            ),
            icon: <LuFileText className="h-4 w-4 text-neutral-500" />
        }

        // {
        //     title: "Patient Satisfaction",
        //     description:
        //         "The impact of our solutions on patient satisfaction and engagement",
        //     header: (
        //         <StatCard
        //             title="Time patients have to wait"
        //             diff={-15}
        //             value={"15"}
        //             valueText={"minutes"}
        //         />
        //     ),
        //     icon: <FiClock className="h-4 w-4 text-neutral-500" />
        // },
    ]

    const testimonials1 = [
        {
            quote: "The ease of integration and immediate results were beyond our expectations. Truly a transformative solution.",
            name: "Ethan Brown",
            title: "Pinecrest Dermatology"
        },
        {
            quote: "We've been able to deliver unparalleled patient care thanks to the insights and efficiencies gained.",
            name: "Sophia Martinez",
            title: "Riverside Pediatrics"
        },
        {
            quote: "It's not just a product; it's a revolution in healthcare management. Essential for modern practices.",
            name: "Mason Garcia",
            title: "Sunset Dental Care"
        }
    ]

    const testimonials2 = [
        {
            quote: "This product has revolutionized our daily operations, making everything smoother and more efficient.",
            name: "Emily Thompson",
            title: "Midsouth Neurology"
        },
        {
            quote: "Absolutely in awe of the efficiency and simplicity it brings into our workflow. A total game-changer!",
            name: "James Wilson",
            title: "Smith Cardiology"
        },
        {
            quote: "Our team's productivity has seen a significant boost since we started using this product. Highly recommend it!",
            name: "Isabella Johnson",
            title: "Magnolia Family Health"
        }
    ]
    const testimonials3 = [
        {
            quote: "From skeptic to absolute advocate, this product has proven its value time and again. Fantastic support team too!",
            name: "Olivia Anderson",
            title: "Harborview Mental Health"
        },
        {
            quote: "Incredible results! Our patient satisfaction scores have never been higher. It's been a real game-changer for us.",
            name: "Noah Lee",
            title: "Crestview Rehabilitation"
        },
        {
            quote: "The best investment we've made in technology. It's streamlined our processes and improved patient outcomes significantly.",
            name: "Ava Taylor",
            title: "Willow Women's Health"
        }
    ]

    const getCustomQuote = async (
        name: string,
        email: string,
        business: string,
        providers: number,
        // features is an array of strings
        features: string[]
    ) => {
        const res = await fetch(
            "https://api.digitalhealthcaresolutions.io/api:5iYyLrKQ/customQuote",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    business,
                    providers,
                    features
                })
            }
        )
        const data = await res.json()
        if (res.ok) {
            showNotification({
                title: "Success",
                message:
                    "Thank you for your interest! We will be in touch soon.",
                color: "green",
                autoClose: 5000
            })

            setTimeout(() => {
                setIsModalOpen(false)
                formik.resetForm()
                setFeatures([])
            }, 1000)
        } else {
            showNotification({
                title: "Error",
                message: data.message,
                color: "red",
                autoClose: 5000
            })
        }

        return data
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            businessName: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            businessName: Yup.string().required("Required")
        }),
        onSubmit: () => {
            if (!providers || providers < 1) {
                showNotification({
                    title: "Error",
                    message: "Please enter a valid number of providers",
                    color: "red",
                    autoClose: 5000
                })
                return
            } else if (features.length < 1) {
                showNotification({
                    title: "Error",
                    message: "Please select at least one feature",
                    color: "red",
                    autoClose: 5000
                })
                return
            } else {
                getCustomQuote(
                    formik.values.name,
                    formik.values.email,
                    formik.values.businessName,
                    providers,
                    features
                )
            }
        }
    })

    useEffect(() => {
        if (router.query.dialog === "getStarted") {
            setIsModalOpen(true)
        }
    }, [router.query.dialog])

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
                {/* <!-- Google tag (gtag.js) --> */}
            </Head>
            <HeroHomePage2 setIsModalOpen={setIsModalOpen} />
            {/* <FeaturesGrid
                title="Our solutions"
                description="We offer variety of products that can help you  run your practice more efficiently."
            /> */}
            <Features2 />
            {/* <section className="flex justify-center  bg-blue-50  dark:bg-neutral-800 ">
                <SmartPlanDescription />
            </section> */}
            {/* <WaveComponent /> */}
            {/* testimonials */}
            {/* <div className="h-[45rem] rounded-md flex flex-col antialiased bg-white dark:bg-neutral-900 items-center justify-center relative overflow-hidden my-12">
                <InfiniteMovingCards
                    items={testimonials1}
                    direction="right"
                    speed="slow"
                    // speed="slow"
                />
                <InfiniteMovingCards
                    items={testimonials2}
                    direction="left"
                    speed="slow"
                    // speed="slow"
                />{" "}
                <InfiniteMovingCards
                    items={testimonials3}
                    direction="right"
                    speed="slow"
                    // speed="slow"
                />
            </div> */}
            <h2 className="text-5xl font-bold text-center mt-14">
                The{" "}
                <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    inherit
                >
                    Impact
                </Text>{" "}
                of our solutions
            </h2>
            <BentoGrid className="my-10 pb-28 md:pb-48 px-3">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 0 || i === 3 ? "" : ""}
                    />
                ))}
            </BentoGrid>
            <h3 className="text-center text-5xl font-rubik pb-12">Why us</h3>
            <HomeCards />
            {/* <div className="relative lg:h-[600px] my-12 lg:my-2 w-full overflow-hidden bg-white dark:bg-neutral-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-neutral-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <h1
                    className={cn(
                        "md:text-4xl text-3xl relative z-20 bg-white dark:bg-neutral-900"
                    )}
                >
                    You're in good hands
                </h1>
                <HomePoints />
            </div> */}
            {/* <section className="mt-14">
                <h1 className="text-4xl font-bold text-center"></h1>
            </section>{" "} */}
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
            <Modal
                opened={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                size="md"
                centered
                className="rounded-2xl backdrop-blur-sm"
            >
                <h1 className="text-center">
                    <Title order={3}>
                        Let us know more about your business
                    </Title>
                    <p className="text-gray-500">
                        Thank you for your interest in our product! Please fill
                        out the form below and we will get back to you as soon
                        as possible.
                    </p>
                </h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col justify-center px-4 rounded-2xl"
                >
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        mt="md"
                        name="name"
                        withAsterisk
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && formik.errors.name}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        mt="md"
                        withAsterisk
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                    />{" "}
                    <TextInput
                        label="Business Name"
                        placeholder="Your Business"
                        name="businessName"
                        mt="md"
                        withAsterisk
                        value={formik.values.businessName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.businessName &&
                            formik.errors.businessName
                        }
                    />
                    <NumberInput
                        label="Number of Providers"
                        placeholder="Number of Providers"
                        name="providers"
                        mt="md"
                        step={1}
                        withAsterisk
                        value={providers}
                        onChange={setProviders}
                        error={
                            !providers || providers < 1
                                ? "Must be at least 1"
                                : null
                        }
                    />
                    <MultiSelect
                        data={[
                            "Call Center",
                            "Clinic-Connect",
                            "SmartForm",
                            "SmartPlan",
                            "E-Fax",
                            "Dictation Software",
                            "Echo",
                            "Web Development",
                            "Custom Solution"
                        ]}
                        label="What features are you interested in?"
                        placeholder="Select features"
                        name="features"
                        mt="md"
                        withAsterisk
                        value={features}
                        onChange={setFeatures}
                    />
                    <div className="flex justify-center pt-5">
                        {/* @ts-ignore */}
                        <ButtonPrimary type="submit">Submit</ButtonPrimary>
                    </div>
                </form>
            </Modal>
        </motion.main>
    )
}
