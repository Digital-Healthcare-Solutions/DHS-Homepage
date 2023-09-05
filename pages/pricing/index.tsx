import Link from "next/link"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import { useState } from "react"
import { useRouter } from "next/router"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { AnimatePresence, motion } from "framer-motion"

import {
    Button,
    Alert,
    Paper,
    Text,
    ThemeIcon,
    Group,
    Tooltip,
    ActionIcon,
    createStyles,
    Table,
    Card,
    Container,
    Divider,
    Modal,
    Title,
    TextInput,
    MultiSelect
} from "@mantine/core"
import { IoAlertCircleOutline } from "react-icons/io5"
import {
    BsArrowDown,
    BsArrowDownRight,
    BsCheck2,
    BsClipboardData,
    BsQuestionCircle
} from "react-icons/bs"
import {
    MdOutlineExpandLess,
    MdOutlineExpandMore,
    MdOutlinePhone
} from "react-icons/md"
import Head from "next/head"
import { FiSlash } from "react-icons/fi"
import { useFormik } from "formik"
import * as Yup from "yup"
import { showNotification } from "@mantine/notifications"

const Pricing = () => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [features, setFeatures] = useState([])

    const useStyles = createStyles((theme) => ({
        header: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            textAlign: "center",
            fontWeight: 900,
            color: theme.colorScheme === "dark" ? "#fff" : "#000"
        },
        header2: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            textAlign: "center",
            fontWeight: 700,
            color: theme.colorScheme === "dark" ? "#fff" : "#000"
        },

        controls: {
            marginTop: `20px`,

            [theme.fn.smallerThan("sm")]: {
                marginTop: theme.spacing.xl
            }
        },

        control: {
            height: 54,
            paddingLeft: 38,
            paddingRight: 38,

            [theme.fn.smallerThan("sm")]: {
                height: 54,
                paddingLeft: 18,
                paddingRight: 18
            }
        }
    }))

    const { classes } = useStyles()

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
            businessName: "",
            providers: 1
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            businessName: Yup.string().required("Required"),
            providers: Yup.number().required("Required")
        }),
        onSubmit: () => {
            getCustomQuote(
                formik.values.name,
                formik.values.email,
                formik.values.businessName,
                formik.values.providers,
                features
            )
        }
    })

    const included = (
        <Tooltip label="Included in plan" position="top">
            <ThemeIcon variant="light" radius="xl" size="lg">
                <BsCheck2 />
            </ThemeIcon>
        </Tooltip>
    )

    const notIncluded = (
        <Tooltip label="Not Included" position="top">
            <ThemeIcon variant="light" radius="xl" size="lg">
                <FiSlash className="text-red-500" />
            </ThemeIcon>
        </Tooltip>
    )

    const baseFeatures = [
        "Premium Add-ons available",
        "Limits on some data usage"
    ]

    const premiumFeatures = [
        "Communication platform",
        "Dictation software",
        "Chronic Care Management platform",
        "Automated workflows"
    ]

    const enterpriseFeatures = [
        "Custom EMR integrations",
        "Enhanced security and compliance",
        "Tailored solutions for your organization",
        "Unlimited staff accounts"
    ]

    return (
        <section className="bg-gradient-to-b from-white to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 flex justify-center items-center pb-20">
            <Head>
                <title>Pricing | Digital Healthcare Solutions</title>
                <meta
                    name="description"
                    content="Digital Healthcare Solutions is a software company that provides innovative solutions for healthcare professionals. We offer a variety of plans to fit your business' needs."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Digital Healthcare Solutions" />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="flex flex-col items-center drop-shadow-lg pt-4">
                <h1 className={`${classes.header} text-2xl lg:text-5xl`}>
                    Pricing
                </h1>
                <Container size="lg" className="flex flex-col items-center">
                    <Text
                        className="text-center text-base md:text-xl my-6 max-w-2xl"
                        color="dimmed"
                    >
                        We provide personalized quotes tailored to each
                        customer's specific needs, size, and budget. All tiers
                        come with custom onboarding, training, support, and
                        receive any new features we release at no additional
                        cost.
                        <br />
                    </Text>
                </Container>
                {/* <Group className={classes.controls}>
                    <Link href="https://app.digitalhealthcaresolutions.io/login">
                        <button className="text-lg shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-neutral-500 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-[11px] px-6 rounded font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
                            Get Custom Quote
                        </button>
                    </Link>
                    <Link href="/product/smart-plan#request-demo">
                        <Button
                            size="lg"
                            variant="default"
                            className={classes.control}
                        >
                            Request Demo
                        </Button>
                    </Link>
                </Group> */}
                <Container
                    size={"lg"}
                    className="flex flex-col md:flex-row justify-around w-full gap-4 my-8"
                >
                    {/* <Card className="md:w-1/3 bg-transparent border md:border-0 dark:border-neutral-800 border-neutral-400">
                        <h3 className="mb-2 font-semibold text-lg lg:text-2xl ">
                            Premium
                        </h3>
                        <Divider />
                        <p className="my-5">
                            A flexible plan for small healthcare businesses that
                            can grow with you.
                        </p>
                        <Divider />
                        <div className="my-8">
                            {baseFeatures.map((item, index) => (
                                <div
                                    className={`flex justify-start items-center text-base p-2 rounded-md ${
                                        index % 2 === 1
                                            ? "bg-transparent"
                                            : "bg-neutral-100 dark:bg-neutral-800"
                                    }`}
                                >
                                    <BsCheck2
                                        className="text-blue-500 mr-2"
                                        size={18}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="default"
                            color="gray"
                            size="md"
                            className="w-full"
                        >
                            Get Custom Quote
                        </Button>
                    </Card> */}

                    <Card className="md:w-1/2 bg-transparent border md:border-0 dark:border-neutral-800 border-neutral-400">
                        <h3 className="mb-2 font-semibold text-lg lg:text-2xl flex justify-between ">
                            Premium
                        </h3>
                        <Divider />
                        <p className="my-5">
                            A plan for medium sized businesses with more data
                            and customization needs.
                        </p>
                        <Divider />
                        <div className="my-8">
                            {premiumFeatures.map((item, index) => (
                                <div
                                    className={`flex justify-start items-center text-base p-2 rounded-md ${
                                        index % 2 === 1
                                            ? "bg-transparent"
                                            : "bg-neutral-100  dark:bg-neutral-800 "
                                    }`}
                                >
                                    <BsCheck2
                                        className="text-blue-500 mr-2"
                                        size={18}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => setIsModalOpen(true)}
                            size="md"
                            className="w-full bg-blue-500"
                        >
                            Get Custom Quote
                        </Button>
                    </Card>

                    <Card className="md:w-1/2 bg-transparent border md:border-0 dark:border-neutral-800 border-neutral-400">
                        <h3 className="mb-2 font-semibold text-lg lg:text-2xl ">
                            Enterprise
                        </h3>
                        <Divider />
                        <p className="my-5">
                            All the bells and whistles for large organizations
                            with complex requirements.
                        </p>
                        <Divider />
                        <div className="my-8">
                            {enterpriseFeatures.map((item, index) => (
                                <div
                                    className={`flex justify-start items-center text-base p-2 rounded-md ${
                                        index % 2 === 1
                                            ? "bg-transparent"
                                            : "bg-neutral-100 dark:bg-neutral-800"
                                    }`}
                                >
                                    <BsCheck2
                                        className="text-blue-500 mr-2"
                                        size={18}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="default"
                            color="gray"
                            size="md"
                            className="w-full"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Get Custom Quote
                        </Button>
                    </Card>
                </Container>
                <h2
                    className={`${classes.header2} text-xl lg:text-3xl mt-14 underline underline-offset-8 hidden md:block`}
                >
                    All Features:
                </h2>

                <div className="md:flex flex-col items-center mt-4 hidden">
                    <Table
                        withBorder
                        striped
                        verticalSpacing="lg"
                        fontSize="lg"
                        className="w-full"
                        horizontalSpacing="xl"
                    >
                        <caption>
                            {" "}
                            <p className="text-sm lg:text-base mt-3">
                                * All plans include a 30-day free trial.
                            </p>
                        </caption>
                        <thead className="sticky top-16 lg:top-[75px]  dark:bg-neutral-900 bg-neutral-100 dark:brightness-[1.22]">
                            <tr>
                                <th>Feature</th>
                                {/* <th>Base</th> */}
                                <th>Premium</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>IntelliCall</td>
                                {/* <td>
                                    {included} <br />{" "}
                                    <span className="text-sm">
                                        (limited data)
                                    </span>
                                </td> */}
                                <td>
                                    {included}
                                    {/* <br />{" "}
                                    <span className="text-sm">(unlimited)</span> */}
                                </td>
                                <td>
                                    {included}
                                    {/* <br />{" "} */}
                                    {/* <span className="text-sm">(unlimited)</span> */}
                                </td>
                            </tr>
                            <tr>
                                <td>Clinic-Connect</td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>
                                    E-fax <br />
                                    <span className="text-sm">
                                        (coming soon)
                                    </span>
                                </td>
                                {/* <td>
                                    {included} <br />{" "}
                                    <span className="text-sm">
                                        (limited data)
                                    </span>
                                </td> */}
                                <td>
                                    {included}
                                    {/* <br />{" "}
                                    <span className="text-sm">(unlimited)</span> */}
                                </td>
                                <td>
                                    {included}
                                    {/* <br />{" "}
                                    <span className="text-sm">(unlimited)</span> */}
                                </td>
                            </tr>
                            <tr>
                                <td>Dictation Software</td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>Smartplan</td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            {/* <tr>
                                <td>Automation workflow builder</td>
                                <td>{included}</td>
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr> */}
                            <tr>
                                <td>Private Chatrom with our team</td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>
                                    In person or video guided
                                    tutorials/walkthrough
                                </td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>24/7 Customer Support</td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>BAA signed with your entity</td>
                                {/* <td>{included}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            {/* <tr>
                                <td>Easy Auth</td>
                                <td>Available as add on</td>
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr> */}
                            <tr>
                                <td>Health Scribe</td>
                                {/* <td>Available as add on</td> */}
                                <td>Available as add on</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>Custom E-forms made for your Business</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{included}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>Unlimited staff accounts</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>Custom EMR integrations</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr>
                            {/* <tr>
                                <td>
                                    Compliance Center
                                    <br />
                                    <span className="text-sm">
                                        ( Bird's eye view of all data and
                                        activity of your organization )
                                    </span>
                                </td>
                                <td>{notIncluded}</td>
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr> */}
                            <tr>
                                <td>30 day logging/request history</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr>
                            <tr>
                                <td>IP allowlist</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr>
                            {/* <tr>
                                <td>
                                    Single Tenancy
                                    <br />
                                    <span className="text-sm">
                                        ( dedicated server and database )
                                    </span>
                                </td>
                                <td>{notIncluded}</td>
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr> */}
                            <tr>
                                <td>SSO/SAML</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr>
                            {/* <tr>
                                <td>Custom dashboards</td>
                                <td>{notIncluded}</td>
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr> */}
                            {/* <tr>
                                <td>Customized reporting and analytics</td>
                                <td>{notIncluded}</td>
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr> */}
                            <tr>
                                <td>API access</td>
                                {/* <td>{notIncluded}</td> */}
                                <td>{notIncluded}</td>
                                <td>{included}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            <Modal
                opened={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                size="md"
                centered
                className="rounded-2xl backdrop-blur-sm"
            >
                <h1 className="text-center">
                    <Title order={3}>
                        Get a custom quote for your business
                    </Title>
                    <p className="text-gray-500">
                        Thank you for your interest in our product! Please fill
                        out the form below and we will get back to you as soon
                        as possible.
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
                    <TextInput
                        label="Number of Providers"
                        placeholder="Number of Providers"
                        name="providers"
                        mt="md"
                        withAsterisk
                        value={formik.values.providers}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.providers && formik.errors.providers
                        }
                    />
                    <MultiSelect
                        data={[
                            "IntelliCall",
                            "Clinic-Connect",
                            "SmartPlan",
                            "E-Fax",
                            "Dictation Software"
                        ]}
                        label="What features are you interested in?"
                        placeholder="Select features"
                        name="features"
                        mt="md"
                        withAsterisk
                        value={features}
                        onChange={setFeatures}
                    />
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
        </section>
    )
}

export default Pricing
