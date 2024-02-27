import Head from "next/head"
import { Footer } from "./mantine-Components/footer"
import Nav from "./page-Components/nav"
import { useState, useEffect } from "react"
import { Modal, TextInput, Title } from "@mantine/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import ButtonPrimary from "../components/UI-Components/button-primary"
import { showNotification } from "@mantine/notifications"

const Layout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // useEffect(() => {
    //     if (localStorage.getItem("newsLetter") !== "true") {
    //         setTimeout(() => {
    //             setIsModalOpen(true)
    //         }, 15000)
    //     }
    // }, [])

    const handleCloseModal = () => {
        setIsModalOpen(false)
        localStorage.setItem("newsLetter", "true")
    }

    const subscribeToLaunch = async (
        name: string,
        email: string,
        business: string
    ) => {
        const res = await fetch(
            "https://xmks-s250-ypw0.n7.xano.io/api:5iYyLrKQ/subscribeToNewsLetter",
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
                message: "You have been added to our newsletter!",
                color: "green"
            })
            localStorage.setItem("newsLetter", "true")
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

    const data = [
        {
            title: "Product",
            links: [
                {
                    label: "Secure Chat & E-fax",
                    link: "/product/clinic-connect"
                },
                // {
                //     label: "E-fax",
                //     link: "/product/e-fax"
                // },
                {
                    label: "Automated phone system",
                    link: "/product/call-center"
                },
                // {
                //     label: "SMS with patients",
                //     link: "/product/call-center"
                // },
                // {
                //     label: "Appointment Reminders",
                //     link: "/product/call-center"
                // },
                {
                    label: "Chronic Care Management",
                    link: "/product/smart-plan"
                },
                {
                    label: "AI Generated Notes",
                    link: "/product/echo"
                },
                {
                    label: "Dictation Software",
                    link: "/product/smart-voice"
                },

                {
                    label: "Online Intake Forms",
                    link: "/product/smart-form"
                }
            ]
        },

        {
            title: "About",
            links: [
                {
                    label: "Team",
                    link: "/about-us"
                },
                {
                    label: "Features",
                    link: "/#features"
                },
                {
                    label: "Demo",
                    link: "/product/demos"
                },
                {
                    label: "Pricing",
                    link: "/pricing"
                },
                {
                    label: "Privacy Policy",
                    link: "/privacy-policy"
                },
                { label: "Terms of Service", link: "/terms-of-service" }
            ]
        },
        {
            title: "Learn More",
            links: [
                {
                    label: "Blog",
                    link: "/blog"
                },
                {
                    label: "Request a Demo",
                    link: "/#request-demo"
                },

                {
                    label: "Contact us",
                    link: "/#contact"
                },
                {
                    label: "NewsLetter",
                    link: "/",
                    func: () => {
                        setIsModalOpen(true)
                    }
                }
                // {
                //     label: "Releases",
                //     link: "#"
                // }
            ]
        }
    ]

    return (
        <div>
            <Nav />
            {children}
            {/* @ts-ignore */}
            <Footer setIsModalOpen={setIsModalOpen} data={data} />
            <Modal
                opened={isModalOpen}
                onClose={handleCloseModal}
                size="md"
                centered
                className="rounded-2xl backdrop-blur-sm"
            >
                <h1 className="text-center">
                    <Title order={3}>Sign up for our newsletter</Title>
                    <p className="text-gray-500">
                        Get the latest updates from our team and be the first to
                        know about new features and product releases.
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
                    />{" "}
                    <div className="flex justify-center pt-5">
                        <ButtonPrimary
                            type="submit"
                            onClick={() => console.log("clicked")}
                            className=""
                        >
                            Submit
                        </ButtonPrimary>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Layout
