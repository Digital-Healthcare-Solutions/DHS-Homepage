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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { useMediaQuery } from "@/components/hooks/use-media-query"
import { Input } from "@/components/ui/input"
import { getCustomQuote } from "@/lib/getCustomQuote"
import { useFormik } from "formik"
import { User } from "lucide-react"
import React, { HTMLAttributes, useState } from "react"
import { useMutation } from "react-query"
import { toast } from "sonner"
import * as Yup from "yup"
import { cn } from "@/lib/utils"

const GetCustomQuote = ({
  btnClassName,
  btnText,
  enterpriseForm,
  callCenterForm
}: {
  btnClassName?: HTMLAttributes<HTMLButtonElement>["className"]
  btnText: string
  enterpriseForm?: boolean
  callCenterForm?: boolean
}) => {
  const [features, setFeatures] = useState<string[]>([])
  const [providers, setProviders] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const { mutate, isLoading } = useMutation(getCustomQuote, {
    onSuccess: () => {
      toast.success("Thank you for your interest! We will be in touch soon.")
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
      email: Yup.string().email("Invalid email address").required("Required"),
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
          features: enterpriseForm
            ? ["Enterprise"]
            : callCenterForm
            ? ["Call Center"]
            : []
        })
      }
    }
  })

  const FormContent = ({ className = "" }) => (
    <form
      onSubmit={formik.handleSubmit}
      className={`flex flex-col justify-center gap-4 ${className}`}
    >
      <Input
        label="Name"
        labelWithAsterisk
        placeholder="Your name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? true : false}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : ""
        }
      />
      <Input
        label="Email"
        labelWithAsterisk
        placeholder="Your email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email ? true : false}
        helperText={
          formik.touched.email && formik.errors.email ? formik.errors.email : ""
        }
      />
      <Input
        label="Business Name"
        labelWithAsterisk
        placeholder="Your Business"
        name="businessName"
        value={formik.values.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.businessName && formik.errors.businessName
            ? true
            : false
        }
        helperText={
          formik.touched.businessName && formik.errors.businessName
            ? formik.errors.businessName
            : ""
        }
      />
      <Input
        label="Number of Providers"
        labelWithAsterisk
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
      <div className="flex justify-center pt-5">
        <Button type="submit" loading={isLoading} className="w-full md:w-fit">
          Submit
        </Button>
      </div>
    </form>
  )
  if (isDesktop) {
    return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div
            className={cn("cursor-pointer", btnClassName)}
            onClick={() => setIsModalOpen(true)}
          >
            {btnText}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Let us know more about your business</DialogTitle>
            <DialogDescription>
              {callCenterForm
                ? "Thank you for your interest in our AI Call Center! Please fill out the form below and we will get back to you soon."
                : "Thank you for your interest in our product! Please fill out the form below and we will get back to you as soon as possible."}
            </DialogDescription>
          </DialogHeader>
          <FormContent className="px-4" />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DrawerTrigger asChild>
        <div
          className={cn("cursor-pointer", btnClassName)}
          onClick={() => setIsModalOpen(true)}
        >
          {btnText}
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Let us know more about your business</DrawerTitle>
          <DrawerDescription>
            {callCenterForm
              ? "Thank you for your interest in our AI Call Center! Please fill out the form below and we will get back to you soon."
              : "Thank you for your interest in our product! Please fill out the form below and we will get back to you as soon as possible."}
          </DrawerDescription>
        </DrawerHeader>
        <FormContent className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default GetCustomQuote
