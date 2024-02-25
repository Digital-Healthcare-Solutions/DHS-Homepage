import {
    TextInput,
    Textarea,
    SimpleGrid,
    Group,
    Title,
    Button
} from "@mantine/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import ButtonPrimary from "../UI-Components/button-primary"
import { showNotification } from "@mantine/notifications"
import { BackgroundBeams } from "../ui/background-beams"

function ContactUs() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            subject: Yup.string().required("Required"),
            message: Yup.string().required("Required")
        }),
        onSubmit: () => {
            contactFn()
        }
    })

    const contactFn = async () => {
        const res = await fetch(
            "https://xmks-s250-ypw0.n7.xano.io/api:5iYyLrKQ/contact-us",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formik.values.name,
                    email: formik.values.email,
                    subject: formik.values.subject,
                    message: formik.values.message
                })
            }
        )
        const data = await res.json()
        if (!res.ok) {
            showNotification({
                color: "red",
                title: "Error!",
                message: data.message,
                autoClose: 5000
            })
        } else {
            showNotification({
                color: "green",
                title: "Success!",
                message: "We will get back to you soon!",
                autoClose: 5000
            })
            formik.resetForm()
        }
        return data
    }

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="px-8 w-full py-12 h-[40rem] rounded-md
            relative flex flex-col items-center justify-center antialiased"
        >
            {" "}
            {/* <div className="   bg-neutral-950 "> */}
            <div id="contact" className="max-w-2xl mx-auto p-4 z-10">
                {/* <h1 className="relative z-10 text-lg md:text-7xl  ">
                    Join the waitlist
                </h1> */}
                {/* <p></p> */}
                {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on
                    the web. We provide reliable, scalable, and customizable
                    email solutions for your business. Whether you&apos;re
                    sending order confirmations, password reset emails, or
                    promotional campaigns, MailJet has got you covered.
                </p> */}
                {/* <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                /> */}
                <Title
                    order={2}
                    size="h1"
                    sx={(theme) => ({
                        fontFamily: `Greycliff CF, ${theme.fontFamily}`
                    })}
                    weight={900}
                    align="center"
                >
                    Have a question? Get in touch!
                </Title>
                <SimpleGrid
                    cols={2}
                    mt="xl"
                    breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && formik.errors.name}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                    />
                </SimpleGrid>
                <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.subject && formik.errors.subject}
                />
                <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && formik.errors.message}
                />
                <Group position="center" mt="xl">
                    <ButtonPrimary
                        type="submit"
                        className={
                            formik.isValid
                                ? "bg-blue-500 "
                                : "bg-red-400 hover:bg-gray-700 hover:text-red-500 ring-red-500 cursor-not-allowed active:text-red-400 active:ring-red-400"
                        }
                        onClick={() => {
                            console.log("")
                        }}
                    >
                        SUBMIT
                    </ButtonPrimary>
                </Group>
            </div>
            {/* <BackgroundBeams /> */}
            {/* </div> */}
        </form>
    )
}

export default ContactUs
