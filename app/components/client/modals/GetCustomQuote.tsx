"use client"

import {
    Modal,
    MultiSelect,
    NumberInput,
    TextInput,
    Title
} from "@mantine/core"
import { showNotification } from "@mantine/notifications"
import { useFormik } from "formik"
import React, { useState } from "react"
import * as Yup from "yup"
import ButtonPrimary from "../../../../components/UI-Components/button-primary"

const GetCustomQuote = ({
    isModalOpen,
    setIsModalOpen
}: {
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [features, setFeatures] = useState<string[]>([])
    const [providers, setProviders] = useState(1)

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

    return (
        <Modal
            opened={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            size="md"
            centered
            className="rounded-2xl backdrop-blur-sm"
        >
            <h1 className="text-center">
                <Title order={3}>Let us know more about your business</Title>
                <p className="text-gray-500">
                    Thank you for your interest in our product! Please fill out
                    the form below and we will get back to you as soon as
                    possible.
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
                    onChange={(value) => setProviders(value ?? 1)}
                    error={
                        !providers || providers < 1
                            ? "Must be at least 1"
                            : null
                    }
                />
                <MultiSelect
                    data={["Echo", "Custom Solution"]}
                    label="What features are you interested in?"
                    placeholder="Select features"
                    name="features"
                    mt="md"
                    withAsterisk
                    value={features}
                    onChange={setFeatures}
                />
                <div className="flex justify-center pt-5">
                    <ButtonPrimary type="submit">Submit</ButtonPrimary>
                </div>
            </form>
        </Modal>
    )
}

export default GetCustomQuote
