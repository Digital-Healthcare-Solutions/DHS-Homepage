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

    const baseFeatures = [
        "$0 fixed monthly cost",
        "SMS starting at $0.05 per message",
        "Calls starting at $0.05 per minute",
        "E-fax starting at $0.04 per page",
        "Echo notes starting at $0.25 per note",
        "Support 9-5 M-F"
    ]

    const premiumFeatures = [
        "EMR integration included",
        "SMS starting at $0.035 per message",
        "Calls starting at $0.035 per minute",
        "E-fax starting at $0.03 per page",
        "Echo notes starting at $0.18 per note",
        "24/7 Support"
    ]

    const enterpriseFeatures = [
        "Everything in Premium",
        // "Custom EMR integrations",
        "Dedicated server and database",
        "Enhanced security and compliance",
        "Custom solutions for your organization",
        "Unlimited staff and provider accounts",
        "Dedicated account manager"
    ]

    return (
        <section className=" flex justify-center items-center pb-20">
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
                        className="text-center text-base md:text-xl my-6 max-w-3xl"
                        color="dimmed"
                    >
                        We believe small to medium-sized businesses should not
                        have to pay the same as large organizations for the same
                        services. That's why we offer usage based pricing for
                        all the services we offer. All tiers also come with
                        custom onboarding, training, and receive any new
                        features we release at no additional cost.
                        <br />
                    </Text>
                </Container>

                <Container
                    size={"xl"}
                    className="flex flex-col md:flex-row justify-around w-full gap-4 my-8"
                >
                    <div className="md:w-1/3 border rounded-lg dark:border-neutral-800 border-neutral-400 p-4 font-rubik shadow-lg">
                        <div className="flex items-center justify-between ">
                            <h3 className="mb-2 font-semibold text-lg lg:text-3xl flex justify-between ">
                                Starter
                            </h3>
                        </div>
                        <Divider />
                        <p className="my-5">
                            <span className="text-3xl lg:text-4xl flex items-center gap-1">
                                <span className="text-xs -translate-y-2">
                                    *
                                </span>
                                <Tooltip
                                    label="* indicates minimum per provider"
                                    position="top"
                                >
                                    <div>$0</div>
                                </Tooltip>
                                <div className="flex flex-col gap-0 ">
                                    <span className="text-xs">per</span>
                                    <span className="text-xs">month</span>
                                </div>
                            </span>
                        </p>
                        <Divider />
                        <p className="my-5">
                            A usage based plan with zero fixed monthly costs for
                            small healthcare businesses.
                        </p>
                        <Divider />
                        <div className="my-8">
                            {baseFeatures.map((item, index) => (
                                <div
                                    className={`flex justify-start items-center text-base p-2 shadow-none border dark:border-neutral-700 border-neutral-300 ${
                                        index % 2 === 1
                                            ? "bg-white border-y  dark:bg-[#25262b] "
                                            : "bg-neutral-100  dark:bg-neutral-900"
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
                            fullWidth
                            className="bg-blue-500"
                        >
                            Get Started
                        </Button>
                    </div>

                    <div className="md:w-1/3 bg-transparent border rounded-lg dark:border-neutral-800 border-neutral-400 p-4 font-rubik shadow-lg">
                        <div className="flex items-center justify-between font-rubik">
                            <h3 className="mb-2 font-semibold text-lg lg:text-3xl flex justify-between ">
                                Premium
                            </h3>
                        </div>
                        <Divider />
                        <p className="my-5">
                            <span className="text-3xl lg:text-4xl flex items-center gap-1">
                                <span className="text-xs -translate-y-2">
                                    *
                                </span>{" "}
                                <Tooltip
                                    label="* indicates minimum per provider"
                                    position="top"
                                >
                                    <div>$200</div>
                                </Tooltip>
                                <div className="flex flex-col gap-0 ">
                                    <span className="text-xs">per</span>
                                    <span className="text-xs">month</span>
                                </div>
                            </span>
                        </p>
                        <Divider />
                        <p className="my-5">
                            A usage based plan with a fixed monthly cost in
                            exchange for lower usage rates.
                        </p>
                        <Divider />
                        <div className="my-8">
                            {premiumFeatures.map((item, index) => (
                                <div
                                    className={`flex justify-start items-center text-base p-2 shadow-none border dark:border-neutral-700 border-neutral-300 ${
                                        index % 2 === 1
                                            ? "bg-white border-y  dark:bg-[#25262b] "
                                            : "bg-neutral-100  dark:bg-neutral-900"
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
                            fullWidth
                            className="bg-blue-500"
                        >
                            Get Started
                        </Button>
                    </div>

                    <div className="md:w-1/3 bg-transparent border rounded-lg dark:border-neutral-800 border-neutral-400 p-4 font-rubik shadow-lg">
                        <div className="flex items-center justify-between font-rubik">
                            <h3 className="mb-2 font-semibold text-lg lg:text-3xl flex justify-between ">
                                Enterprise
                            </h3>
                        </div>
                        <Divider />
                        <p className="my-5">
                            <span className="text-3xl lg:text-4xl flex items-center gap-1">
                                Custom
                            </span>
                        </p>
                        <Divider />
                        <p className="my-5">
                            All the bells and whistles for large organizations
                            with complex requirements.
                        </p>
                        <Divider />
                        <div className="my-8">
                            {enterpriseFeatures.map((item, index) => (
                                <div
                                    className={`flex justify-start items-center text-base p-2 shadow-none border dark:border-neutral-700 border-neutral-300 ${
                                        index % 2 === 1
                                            ? "bg-white border-y  dark:bg-[#25262b] "
                                            : "bg-neutral-100  dark:bg-neutral-900"
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

                        <div className="relative group">
                            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 opacity-20 group-hover:opacity-60 blur duration-500 transition-opacity" />

                            <Button
                                variant="default"
                                color="gray"
                                size="md"
                                fullWidth
                                onClick={() => setIsModalOpen(true)}
                                className="relative z-10 rounded-md bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:brightness-105 px-4 py-2"
                            >
                                Get Custom Quote
                            </Button>
                        </div>
                    </div>
                </Container>
                <p id="pricing-table" className="pb-10"></p>
                <Container size={"xl"}>
                    <h2
                        className={`${classes.header2} text-xl lg:text-3xl mt-14 underline underline-offset-8 hidden md:block`}
                    >
                        All Features:{" "}
                    </h2>{" "}
                    <caption className={`${classes.header2} hidden md:block`}>
                        <p className="text-sm lg:text-base mt-3 font-normal">
                            * All plans include a 30-day free trial.
                        </p>
                    </caption>{" "}
                    <div className="hidden md:flex flex-col gap-6">
                        <PricingTableSection
                            icon={<MdPhone className="mr-2" size={24} />}
                            title="Call Center"
                            description="The core of our platform. Make and receive calls, send and receive text messages, and more."
                            borderColor="border-l-cyan-500"
                            tableRows={[
                                {
                                    feature: "SMS",
                                    starter: (
                                        <div className="font-rubik text-sm">
                                            $0.05 per message
                                        </div>
                                    ),
                                    premium: (
                                        <div className="font-rubik text-sm">
                                            $0.035 per message
                                        </div>
                                    ),
                                    enterprise: (
                                        <div className="font-rubik text-sm">
                                            Custom
                                        </div>
                                    )
                                },
                                {
                                    feature: "Calls",
                                    starter: (
                                        <div className="font-rubik text-sm">
                                            $0.05 per minute
                                        </div>
                                    ),
                                    premium: (
                                        <div className="font-rubik text-sm">
                                            $0.035 per minute
                                        </div>
                                    ),
                                    enterprise: (
                                        <div className="font-rubik text-sm">
                                            Custom
                                        </div>
                                    )
                                },
                                {
                                    feature: "Collaborative inbox",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                // {
                                //     feature: "Assign Messages to team members",
                                //     starter: included,
                                //     premium: included,
                                //     enterprise: included
                                // },
                                {
                                    feature: "Appointment Reminders",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "SMS templates",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Unlimited Voicemail inbox",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Voicemail Transcription",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "AI powered call labeling",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Calller name & line type lookup",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Mobile App integration",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Intelligent call routing",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Import Contacts",
                                    starter: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "AI powered voice assisstant",
                                    starter: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Custom route tree",
                                    starter: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                }
                            ]}
                        />
                        <PricingTableSection
                            icon={
                                <AiOutlineMessage className="mr-2" size={24} />
                            }
                            title="Clinic-Connect"
                            description="Connect with your staff and other providers through our secure messaging and E-fax platform."
                            borderColor="border-l-violet-600"
                            tableRows={[
                                {
                                    feature: "Secure Messaging Platform",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "E-fax",
                                    starter: (
                                        <Tooltip label="$0.05 per page on inbound faxes when OCR is enabled">
                                            <div className="font-rubik text-sm flex items-center gap-1">
                                                $0.04 per page <MdInfoOutline />
                                            </div>
                                        </Tooltip>
                                    ),
                                    premium: (
                                        <Tooltip label="$0.04 per page on inbound faxes when OCR is enabled">
                                            <div className="font-rubik text-sm flex items-center gap-1">
                                                $0.03 per page <MdInfoOutline />
                                            </div>
                                        </Tooltip>
                                    ),
                                    enterprise: (
                                        <div className="font-rubik text-sm">
                                            Custom
                                        </div>
                                    )
                                },
                                {
                                    feature:
                                        "Optical Character Recognition (OCR)",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Auto labeling",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Auto summarization",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Customizable cover pages",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Bring your fax number",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Unlimited fax storage",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Web Referral portal",
                                    starter: notIncluded,
                                    premium: included,
                                    enterprise: included
                                }
                            ]}
                        />
                        <section className="border-l-4 border-cyan-700">
                            <Accordion variant="contained">
                                <Accordion.Item
                                    value={"Custom Web Development"}
                                    // className="bg-white dark:bg-zinc-800"
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
                            title="Clinical Note automation"
                            description="Transcribe your notes and records with ease using our custom trained AI models"
                            borderColor="border-l-blue-500"
                            tableRows={[
                                {
                                    feature: "Dictation Software",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Echo",
                                    starter: (
                                        <div className="font-rubik text-sm">
                                            $0.25 per note
                                        </div>
                                    ),
                                    premium: (
                                        <div className="font-rubik text-sm">
                                            $0.18 per note
                                        </div>
                                    ),
                                    enterprise: (
                                        <div className="font-rubik text-sm">
                                            Custom
                                        </div>
                                    )
                                },
                                {
                                    feature: "Custom auto formatting",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Questionaire template builder",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Record from mobile app",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Customizable templates",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Unlimited note history storage",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Fine Tuning a model",
                                    starter: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Custom AI models",
                                    starter: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                }
                            ]}
                        />
                        <PricingTableSection
                            icon={<RiComputerLine className="mr-2" size={24} />}
                            title="Paperwork automation"
                            description="Automate your forms, questionaires, and paperwork."
                            borderColor="border-l-teal-500"
                            tableRows={[
                                {
                                    feature: "Chronic care management platform",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "SmartForm",
                                    starter: (
                                        <div className="font-rubik text-sm">
                                            $1.50 per form submission
                                        </div>
                                    ),
                                    premium: (
                                        <div className="font-rubik text-sm">
                                            $1.00 per form submission
                                        </div>
                                    ),
                                    enterprise: (
                                        <div className="font-rubik text-sm">
                                            Custom
                                        </div>
                                    )
                                },
                                {
                                    feature: "SmartForm dashboard",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Drag and drop form builder",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "Send form link via SMS",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "Branding on forms",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "Driver's license and insurance card OCR",
                                    starter: notIncluded,
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
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature:
                                        "In person or video guided tutorials / walkthrough",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "BAA signed with your entity",
                                    starter: included,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "24/7 Customer Support",
                                    starter: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },

                                {
                                    feature: "Custom EMR integrations",
                                    starter: notIncluded,
                                    premium: included,
                                    enterprise: included
                                },
                                {
                                    feature: "30 day logging/request history",
                                    starter: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                },
                                {
                                    feature: "IP allowlist",
                                    starter: notIncluded,
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
                                    starter: notIncluded,
                                    premium: notIncluded,
                                    enterprise: included
                                },
                                {
                                    feature: "SSO/SAML",
                                    starter: notIncluded,
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
