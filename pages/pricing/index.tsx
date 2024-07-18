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
    MultiSelect,
    NumberInput,
    Accordion
} from "@mantine/core"
import { IoAlertCircleOutline } from "react-icons/io5"
import {
    BsArrowDown,
    BsArrowDownRight,
    BsCheck2,
    BsClipboardData,
    BsMic,
    BsQuestionCircle
} from "react-icons/bs"
import {
    MdInfoOutline,
    MdOutlineAutoAwesome,
    MdOutlineExpandLess,
    MdOutlineExpandMore,
    MdOutlinePhone,
    MdOutlinePhoneEnabled,
    MdPhone
} from "react-icons/md"
import Head from "next/head"
import { FiSlash } from "react-icons/fi"
import { useFormik } from "formik"
import * as Yup from "yup"
import { showNotification } from "@mantine/notifications"
import { RxQuestionMarkCircled } from "react-icons/rx"
import { AiOutlineMessage, AiOutlineQuestion } from "react-icons/ai"
import { useTheme } from "next-themes"
import { BackgroundGradient } from "../../components/ui/background-gradient"
import PricingTableSection from "../../components/UI-Components/pricingTableSection"
import { RiComputerLine, RiToolsFill } from "react-icons/ri"
import { FaCheck, FaPlus, FaStar } from "react-icons/fa"

const Pricing = () => {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [features, setFeatures] = useState([])
    const [providers, setProviders] = useState(1)

    const { theme } = useTheme()

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

    const included = (
        <Tooltip label="Included in plan" position="top">
            <ThemeIcon
                variant={theme === "dark" ? "light" : "filled"}
                radius="xl"
                size="md"
            >
                <BsCheck2 />
            </ThemeIcon>
        </Tooltip>
    )

    const notIncluded = (
        <Tooltip label="Not Included" position="top">
            <ThemeIcon
                variant={theme === "dark" ? "light" : "default"}
                radius="xl"
                size="md"
            >
                <FiSlash className="text-red-500" />
            </ThemeIcon>
        </Tooltip>
    )

    const plans = [
        {
            title: "Base",
            price: "300",
            description: "Ideal for small practices with 1-3 providers.",
            features: [
                "3000 texts and 3000 call minutes included",
                "$0.05 for each additional text/minute",
                "Smart Form custom form builder",
                "50 AI *assists per month"
            ],
            highlight: false,
            buttonType: "start",
            buttonText: "Start 30 Day Free Trial",
            addOns: [
                {
                    name: "Echo",
                    price: "Starting at $200/month",
                    description: "200 notes included, $1 per additional note"
                },
                {
                    name: "Clinic-Connect",
                    price: "Starting at $200/month",
                    description:
                        "3000 fax pages included, $0.06 per additional page"
                }
            ]
        },
        {
            title: "Premium",
            price: "1000",
            description:
                "For larger practices or practices needing enhanced automation.",
            features: [
                "5000 texts and 5000 call minutes included",
                "$0.05 for each additional text/minute",
                "Enhanced AI automation features",
                "500 AI *assists per month",
                "Smart Form auto analysis"
            ],
            highlight: true,
            buttonType: "start",
            buttonText: "Start 30 Day Free Trial",
            addOns: [
                {
                    name: "Echo",
                    price: "Starting at $500/month",
                    description: "500 notes included, $1 per additional note"
                },
                {
                    name: "Clinic-Connect",
                    price: "Starting at $500/month",
                    description:
                        "7500 fax pages included, $0.06 per additional page"
                }
            ]
        },
        {
            title: "Enterprise",
            price: "Custom",
            description:
                "Tailored solutions for large organizations with complex requirements.",
            features: [
                "Everything in Premium",
                "Custom texts & call minutes",
                "Custom / proprietary solutions",
                "Dedicated servers and database",
                "Enhanced SLA and security",
                "SSO/SAML",
                "Enterprise add-ons available"
            ],
            highlight: false,
            buttonType: "quote",
            buttonText: "Get Custom Quote"
        }
    ]
    const PricingCard = ({
        title,
        price,
        description,
        features,
        highlight,
        onGetStarted,
        buttonType,
        buttonText,
        addOns
    }) => (
        <div
            className={`flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.025] ${
                highlight ? "border-4 border-blue-500" : ""
            }`}
        >
            <div className="px-8 pt-8 pb-2 flex-grow">
                <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
                    {title}
                    {highlight && <FaStar className="text-yellow-400 ml-2" />}
                </h3>
                <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-700 dark:text-blue-400">
                        {price !== "Custom" ? `$${price}` : price}
                    </span>
                    {price !== "Custom" && (
                        <span className="text-blue-600 dark:text-blue-300">
                            /month
                        </span>
                    )}
                </div>
                <p className="text-blue-600 dark:text-blue-300 mb-6">
                    {description}
                </p>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-blue-700 dark:text-gray-300">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>{" "}
            {addOns && addOns.length > 0 && (
                <div className="mt-auto p-8">
                    <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                        {title} Add-ons:
                    </h4>
                    <ul className="space-y-2">
                        {addOns.map((addOn, index) => (
                            <li key={index} className="flex items-start">
                                <FaPlus className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <div>
                                    <span className="text-blue-700 dark:text-gray-300 font-medium">
                                        {addOn.name}:
                                    </span>
                                    <span className="text-blue-600 dark:text-blue-200 ml-1">
                                        {addOn.price}
                                    </span>
                                    <p className="text-sm text-blue-500 dark:text-blue-300">
                                        {addOn.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="p-6 mt-auto">
                <button
                    onClick={onGetStarted}
                    className={`w-full py-3 rounded-md transition-colors duration-300 ${
                        highlight
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-300"
                    }`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )

    return (
        <section className=" flex justify-center items-center pb-20 pt-8">
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

            <div className="flex flex-col items-center drop-shadow-lg pt-4  overflow-x-scroll md:overflow-x-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900 dark:to-gray-900  py-16 px-4 transition-colors duration-300 rounded-lg">
                    <Container size="xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 dark:text-blue-200 mb-4">
                            Choose Your Plan
                        </h1>
                        <Text className="text-center text-lg text-blue-700 dark:text-blue-300 mb-12 max-w-3xl mx-auto">
                            Flexible pricing options to suit healthcare
                            providers of all sizes. All plans include custom
                            onboarding, training, and access to new features.
                        </Text>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {plans.map((plan, index) => (
                                <PricingCard
                                    key={index}
                                    {...plan}
                                    onGetStarted={() => setIsModalOpen(true)}
                                    addOns={plan.addOns}
                                />
                            ))}
                        </div>
                    </Container>
                </div>
                <p id="pricing-table" className="pb-10"></p>

                <Container size={"xl"} className="font-rubik">
                    <div className="mt-20 mb-10">
                        <h2 className="text-xl lg:text-3xl mb-4 text-center font-bold text-blue-900 dark:text-blue-200">
                            All Features
                        </h2>
                        <p className="text-sm lg:text-base mb-8 text-center font-normal text-blue-700 dark:text-blue-300">
                            * All plans include a 30-day free trial.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <PricingTableSection
                            icon={<MdPhone className="mr-2" size={24} />}
                            title="Call Center"
                            description="The core of our platform. Make and receive calls and voicemails, send and receive text messages, create custom AI phone agents and more."
                            borderColor="border-l-cyan-500"
                            tableRows={[
                                {
                                    feature: "Included SMS messages",
                                    base: <div>3000 per month</div>,
                                    premium: <div>5000 per month</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature: "Included Call minutes",
                                    base: <div>3000 per month</div>,
                                    premium: <div>5000 per month</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature: "Per additional text/call",
                                    base: <div>$0.05</div>,
                                    premium: <div>$0.05</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature: "Collaborative inbox",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                // {
                                //     feature: "Assign Messages to team members",
                                //     base: included,
                                //     premium: included,
                                //     enterprise: included
                                // },
                                {
                                    feature: "Appointment Reminders",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "SMS templates",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Auto Text back",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Unlimited Voicemail inbox",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Voicemail Transcription",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "Custom Keypad options",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Calller name & line type lookup",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "AI powered voice assisstant",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "AI assists",
                                    base: <div className="">50 per month</div>,
                                    premium: (
                                        <div className="">500 per month</div>
                                    ),
                                    enterprise: included
                                },
                                {
                                    feature: "Integrated with your EMR",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                }
                            ]}
                        />
                        <PricingTableSection
                            icon={
                                <AiOutlineMessage className="mr-2" size={24} />
                            }
                            title="Clinic-Connect Add on"
                            description="Connect with your staff and other providers through our secure messaging and E-fax platform."
                            borderColor="border-l-violet-600"
                            tableRows={[
                                {
                                    feature: "Secure Messaging Platform",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Fax pages included",
                                    base: <div>3000 per month</div>,
                                    premium: <div>7500 per month</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature: "Per additional page",
                                    base: <div>$0.06</div>,
                                    premium: <div>$0.06</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature:
                                        "Optical Character Recognition (OCR)",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Auto labeling",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Auto summarization",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Customizable cover pages",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Bring your fax number",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Unlimited fax storage",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                }
                            ]}
                        />
                        <section className="border-l-4 border-cyan-700">
                            <Accordion variant="contained">
                                <Accordion.Item
                                    value={"Custom Web Development"}
                                    className="bg-white dark:bg-gray-800 dark:hover:bg-gray-800"
                                >
                                    <Accordion.Control>
                                        {"Custom Web Development"}
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <div className="flex flex-col gap-4">
                                            <p>
                                                We can build custom web
                                                applications and websites for
                                                your business.
                                            </p>
                                            <p>
                                                <span className="font-semibold">
                                                    Starting at $1000{" "}
                                                    <span className="text-xs text-neutral-500">
                                                        (quoted price may vary
                                                        based on requirements)
                                                    </span>
                                                </span>
                                                <br />
                                                <span className="text-sm">
                                                    ( one time fee )
                                                </span>
                                            </p>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </section>
                        <PricingTableSection
                            icon={
                                <MdOutlineAutoAwesome
                                    className="mr-2"
                                    size={24}
                                />
                            }
                            title="Echo Add on"
                            description="Generate your notes in realtime with ease using our AI models"
                            borderColor="border-l-blue-500"
                            tableRows={[
                                {
                                    feature: "Included notes",
                                    base: <div>200</div>,
                                    premium: <div>500</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature: "Per additional note",
                                    base: <div>$1</div>,
                                    premium: <div>$1</div>,
                                    enterprise: <div>Custom</div>
                                },
                                {
                                    feature:
                                        "Realtime Transcription and speaker identification",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "Customizable Questionaires to use as reference",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Custom formatting",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Unlimited note history storage",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "CPT anlaysis mode",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "Automatically generate Patient education materials",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Fine Tuning a model",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                }
                            ]}
                        />
                        <PricingTableSection
                            icon={<RiComputerLine className="mr-2" size={24} />}
                            title="Paperwork automation (Included in all plans)"
                            description="Automate your forms, questionaires, and paperwork."
                            borderColor="border-l-teal-500"
                            tableRows={[
                                {
                                    feature: "Chronic care management platform",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "SmartForm dashboard",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Drag and drop form builder",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Password protected forms",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Send form link via SMS",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Branding on forms",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "Driver's license and insurance card OCR",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "SmartForm auto analysis and CPT suggestions",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                }
                            ]}
                        />
                        <PricingTableSection
                            icon={<RiToolsFill className="mr-2" size={24} />}
                            title="Other features"
                            description="Other features that come with our platform."
                            borderColor="border-l-pink-500"
                            tableRows={[
                                {
                                    feature: "Private Chatrom with our team",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "In person or video guided tutorials / walkthrough",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "In app walkthroughs",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "BAA signed with your entity",
                                    base: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "24/7 Customer Support",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "Custom EMR integrations",
                                    base: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "30 day logging/request history",
                                    base: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                },
                                {
                                    feature: "IP allowlist",
                                    base: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                },
                                {
                                    feature: (
                                        <div>
                                            Single Tenancy
                                            <br />
                                            <span className="text-sm">
                                                ( dedicated server and database
                                                )
                                            </span>
                                        </div>
                                    ),
                                    base: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                },
                                {
                                    feature: "SSO/SAML",
                                    base: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                }
                            ]}
                        />
                    </div>
                </Container>

                <div className="md:flex flex-col items-center mt-4 hidden"></div>
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
                    <NumberInput
                        label="Number of Providers"
                        placeholder="Number of Providers"
                        name="providers"
                        mt="md"
                        step={1}
                        withAsterisk
                        value={providers}
                        onChange={setProviders}
                        error={
                            !providers || providers < 1
                                ? "Must be at least 1"
                                : null
                        }
                    />
                    <MultiSelect
                        data={[
                            "Call Center",
                            "Clinic-Connect",
                            "SmartPlan",
                            "E-Fax",
                            "Dictation Software",
                            "Echo",
                            "SmartForm",
                            "Web Development",
                            "Custom Solutions"
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
                        {/* @ts-ignore */}
                        <ButtonPrimary type="submit">Submit</ButtonPrimary>
                    </div>
                </form>
            </Modal>
        </section>
    )
}

export default Pricing
