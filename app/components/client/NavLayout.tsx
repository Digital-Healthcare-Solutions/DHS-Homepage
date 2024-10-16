"use client"

import Nav from "./nav/nav"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { toast } from "sonner"
import { Footer } from "./nav/footer"

const NavLayout = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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
            toast.success("You have been added to our newsletter!")
            localStorage.setItem("newsLetter", "true")
            setIsModalOpen(false)
        } else {
            toast.error(data.message || "An error occurred")
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
                {
                    label: "AI Generated Notes",
                    link: "/product/echo"
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
                    label: "Customizable Intake Forms",
                    link: "/product/smart-form"
                },
                {
                    label: "Dictation Software",
                    link: "/product/smart-voice"
                },

                {
                    label: "Chronic Care Management",
                    link: "/product/smart-plan"
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
            ]
        }
    ]

    return (
        <div>
            <Nav />
            {children}
            <Footer setIsModalOpen={setIsModalOpen} data={data} />
            {/* <Modal
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
                <form className="flex flex-col justify-center px-4 rounded-2xl">
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
                        <ButtonPrimary onClick={() => formik.handleSubmit()}>
                            Submit
                        </ButtonPrimary>
                    </div>
                </form>
            </Modal> */}
        </div>
    )
}

export default NavLayout
