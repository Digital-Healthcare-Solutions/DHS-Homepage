import { showNotification } from "@mantine/notifications"
import { useFormik } from "formik"
import * as Yup from "yup"
import React from "react"
import { TextInput, Title } from "@mantine/core"
import { BsArrowDown, BsArrowRight } from "react-icons/bs"
import ButtonSecondary from "../UI-Components/button-secondary"
import Link from "next/link"
import ButtonPrimary from "../UI-Components/button-primary"

const RequestDemo = () => {
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
                message:
                    "Thanks for your interest! A representative will be in touch soon.",
                color: "green",
                autoClose: 5000
            })
            formik.resetForm()
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
    return (
        <form
            className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 my-24 bg-blue-500  rounded-xl  py-8"
            onSubmit={formik.handleSubmit}
        >
            <Title
                order={2}
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    marginTop: "64px"
                })}
                className=" text-white font-black items-center justify-center flex flex-col h-full"
            >
                <span className="text-white text-4xl">Interested ?</span>{" "}
                <div className="flex text-xl justify-center items-center pt-3 text-white">
                    Request a Demo
                    <BsArrowDown className="ml-2 block lg:hidden" />
                    <BsArrowRight className="ml-2 hidden lg:block" />
                </div>
                <p className="text-lg py-4 text-white">or</p>
                <div className="flex justify-center">
                    <Link href="/#contact">
                        <ButtonSecondary
                            onClick={() => console.log("clicked")}
                            className="text-lg bg-white text-blue-500 hover:bg-neutral-200"
                        >
                            Contact Us
                        </ButtonSecondary>
                    </Link>
                </div>
            </Title>
            <div className="flex flex-col justify-center bg-white dark:bg-neutral-800 pb-8 py-6 px-16 rounded-2xl">
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
                    <ButtonPrimary type="submit" onClick={null} className="">
                        Submit
                    </ButtonPrimary>
                </div>
            </div>
        </form>
    )
}

export default RequestDemo
