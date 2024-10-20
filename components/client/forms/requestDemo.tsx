"use client"

import { useFormik } from "formik"
import * as Yup from "yup"
import React from "react"
import { BsArrowDown, BsArrowRight } from "react-icons/bs"
import Link from "next/link"
import { toast } from "sonner"
import { requestDemo } from "@/lib/requestDemo"
import { useMutation } from "react-query"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

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
            mutate({
                name: formik.values.name,
                email: formik.values.email,
                business: formik.values.businessName
            })
        }
    })

    const { mutate, isLoading } = useMutation(requestDemo, {
        onSuccess: () => {
            toast.success(
                "Thank you for your interest! We will be in touch soon."
            )
            setTimeout(() => {
                formik.resetForm()
            }, 1000)
        },
        onError: (error: Error) => {
            toast.error(error.message || "An error occurred")
        }
    })

    return (
        <div className="py-24" id="request-demo">
            <form
                className="mx-auto max-w-5xl flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20  bg-blue-500  rounded-xl py-8"
                onSubmit={formik.handleSubmit}
            >
                <div className="font-greycliff text-white font-black flex flex-col items-center justify-center h-full mt-16">
                    <h2 className="text-4xl mb-3">Interested?</h2>
                    <div className="flex text-xl items-center pt-3">
                        Request a Demo
                        <BsArrowDown className="ml-2 block lg:hidden" />
                        <BsArrowRight className="ml-2 hidden lg:block" />
                    </div>
                    <p className="text-lg py-4">or</p>
                    <div className="flex justify-center">
                        <Link href="/#contact">
                            <button
                                onClick={() => console.log("clicked")}
                                className="text-lg bg-white text-blue-500 hover:bg-neutral-200 px-4 py-2 rounded transition duration-300"
                            >
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-center bg-white dark:bg-neutral-800 py-8 px-16 rounded-2xl">
                    <Input
                        labelWithAsterisk
                        className="dark:bg-[#25262b]"
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.name && formik.errors.name
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.name && formik.errors.name
                                ? formik.errors.name
                                : ""
                        }
                    />
                    <Input
                        labelWithAsterisk
                        className="dark:bg-[#25262b]"
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && formik.errors.email
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.email && formik.errors.email
                                ? formik.errors.email
                                : ""
                        }
                    />{" "}
                    <Input
                        labelWithAsterisk
                        className="dark:bg-[#25262b] "
                        label="Business Name"
                        placeholder="Your Business"
                        name="businessName"
                        value={formik.values.businessName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.businessName &&
                            formik.errors.businessName
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.businessName &&
                            formik.errors.businessName
                                ? formik.errors.businessName
                                : ""
                        }
                    />
                    <div className="flex justify-center pt-2">
                        <Button
                            loading={isLoading}
                            type="submit"
                            className="bg-blue-500 text-white hover:bg-blue-500/75"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RequestDemo
