"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MultiSelect } from "@/components/ui/multi-select"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { getCustomQuote } from "@/lib/getCustomQuote"
import { useFormik } from "formik"
import { User } from "lucide-react"
import React, { HTMLAttributes, useState } from "react"
import { useMutation } from "react-query"
import { toast } from "sonner"
import * as Yup from "yup"

const GetCustomQuote = ({
    btnClassName,
    btnText,
    btnVariant = "default",
    btnSize = "default"
}: {
    btnClassName?: HTMLAttributes<HTMLButtonElement>["className"]
    btnText: string
    btnVariant?:
        | "default"
        | "link"
        | "destructive"
        | "outline"
        | "secondary"
        | "ghost"
        | null
        | undefined
    btnSize?: "sm" | "lg" | "icon" | "default" | null | undefined
}) => {
    const [features, setFeatures] = useState<string[]>([])
    const [providers, setProviders] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { mutate, isLoading } = useMutation(getCustomQuote, {
        onSuccess: () => {
            toast.success(
                "Thank you for your interest! We will be in touch soon."
            )
            setTimeout(() => {
                setIsModalOpen(false)
                formik.resetForm()
                setFeatures([])
            }, 1000)
        },
        onError: (error: Error) => {
            toast.error(error.message || "An error occurred")
        }
    })

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
                toast.error("Please enter a valid number of providers")
                return
            } else {
                mutate({
                    name: formik.values.name,
                    email: formik.values.email,
                    business: formik.values.businessName,
                    providers: providers,
                    features: ["Echo"]
                })
            }
        }
    })

    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger className="w-full">
                <div
                    className={btnClassName}
                    onClick={() => setIsModalOpen(true)}
                >
                    {btnText}
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Let us know more about your business
                    </DialogTitle>
                    <DialogDescription>
                        Thank you for your interest in our product! Please fill
                        out the form below and we will get back to you as soon
                        as possible.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col justify-center gap-4 px-4 rounded-2xl"
                >
                    <Input
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
                    />
                    <Input
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
                    <Input
                        label="Number of Providers"
                        type="number"
                        placeholder="Number of Providers"
                        name="providers"
                        value={providers}
                        onChange={(e) => setProviders(parseInt(e.target.value))}
                        error={!providers || providers < 1 ? true : false}
                        helperText={
                            !providers || providers < 1
                                ? "Please enter a valid number of providers"
                                : ""
                        }
                    />
                    <MultiSelect
                        placeholder="Select features"
                        value={features}
                        onValueChange={(value) => setFeatures(value)}
                        options={[
                            { label: "Echo", value: "Echo1", icon: User },
                            { label: "Echo2", value: "Echo2", icon: User },
                            { label: "Echo3", value: "Echo3", icon: User }
                        ]}
                    />

                    <div className="flex justify-center pt-5">
                        <Button type="submit" loading={isLoading}>
                            Submit
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default GetCustomQuote
