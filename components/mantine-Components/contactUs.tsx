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
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <form
            id="contact"
            onSubmit={formik.handleSubmit}
            className="px-8 w-full md:w-3/4 xl:w-1/2 py-12
            "
        >
            <Title
                order={2}
                size="h1"
                sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`
                })}
                weight={900}
                align="center"
            >
                Get in touch
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
                            : "bg-gray-500 hover:bg-gray-700 hover:text-white ring-red-500"
                    }
                    onClick={
                        formik.isValid
                            ? () => alert("Message sent!")
                            : () => alert("Please fill out all fields.")
                    }
                >
                    Send message
                </ButtonPrimary>
            </Group>
        </form>
    )
}

export default ContactUs
