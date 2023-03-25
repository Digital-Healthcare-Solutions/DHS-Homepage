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
import { useState, useEffect } from "react"
import { Modal, TextInput, Title } from "@mantine/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import ButtonPrimary from "../components/UI-Components/button-primary"
import { showNotification } from "@mantine/notifications"

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("signUp") !== "true") {
            setTimeout(() => {
                setIsModalOpen(true)
            }, 15000)
        }
    }, [])

    const handleCloseModal = () => {
        setIsModalOpen(false)
        localStorage.setItem("signUp", "true")
    }

    const subscribeToLaunch = async (
        name: string,
        email: string,
        business: string
    ) => {
        const res = await fetch(
            "https://xmks-s250-ypw0.n7.xano.io/api:5iYyLrKQ/subscribeToLaunchList",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    business
                })
            }
        )
        const data = await res.json()
        if (res.ok) {
            showNotification({
                title: "Success",
                message: "You have been added to our launch list",
                color: "green"
            })
            localStorage.setItem("signUp", "true")
            setIsModalOpen(false)
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
            subscribeToLaunch(
                formik.values.name,
                formik.values.email,
                formik.values.businessName
            )
        }
    })

    return (
        <motion.main
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Head>
                <title>Digital Healthcare Solutions - Home</title>
                <meta
                    name="description"
                    content="
                Digital Healthcare Solutions is a healthcare software company that provides a cloud-based practice management platform for healthcare professionals.
                "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroHomePage />
            <SmartPlanDescription />
            <FeaturesGrid
                title="Our solutions"
                description="We offer variety of features that can help you  run your practice more efficiently."
            />
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
            <Modal
                opened={isModalOpen}
                onClose={handleCloseModal}
                size="md"
                centered
                className="rounded-2xl backdrop-blur-sm"
            >
                <h1 className="text-center">
                    <Title order={3}>Get notified when we launch !</Title>
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
                    />{" "}
                    <div className="flex justify-center pt-5">
                        <ButtonPrimary
                            type="submit"
                            onClick={() => console.log("clicked")}
                            className=""
                        >
                            Notify Me
                        </ButtonPrimary>
                    </div>
                </form>
            </Modal>
        </motion.main>
    )
}
