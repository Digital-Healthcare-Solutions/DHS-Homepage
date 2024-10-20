"use client"

import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required")
})

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: ContactSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log("Form submitted:", values)
            setTimeout(() => {
                setSubmitting(false)
            }, 400)
        }
    })

    return (
        <div className="max-w-2xl mx-auto py-32" id="contact">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Have a question? Get in touch!
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            placeholder="Your name"
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
                            className="dark:bg-[#25262b]"
                        />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Your email"
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
                            className="dark:bg-[#25262b]"
                        />
                    </div>
                </div>
                <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                        id="subject"
                        name="subject"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                        placeholder="Subject"
                        error={
                            formik.touched.subject && formik.errors.subject
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.subject && formik.errors.subject
                                ? formik.errors.subject
                                : ""
                        }
                        className="dark:bg-[#25262b]"
                    />
                </div>
                <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        placeholder="Your message"
                        className="h-32 dark:bg-[#25262b]"
                        error={
                            formik.touched.message && formik.errors.message
                                ? true
                                : false
                        }
                        helperText={
                            formik.touched.message && formik.errors.message
                                ? formik.errors.message
                                : ""
                        }
                    />
                </div>
                <div className="text-center">
                    <Button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
                    >
                        SUBMIT
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs
