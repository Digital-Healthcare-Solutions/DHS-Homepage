import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Textarea,
    Group,
    TextInput,
    Grid,
    Col,
    Container
} from "@mantine/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import Image from "next/image"
import { AiOutlineCloudUpload } from "react-icons/ai"
import ButtonPrimary from "../../../components/UI-Components/button-primary"
import ButtonSecondary from "../../../components/UI-Components/button-secondary"
import { BsArrowRight, BsArrowDown } from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import {
    MdLockOutline,
    MdOutlineFax,
    MdOutlinePersonPin,
    MdOutlineTrendingUp,
    MdPhonelink,
    MdSettings
} from "react-icons/md"
import { GiBattery100 } from "react-icons/gi"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { RxCircleBackslash } from "react-icons/rx"
import { FaRegClock, FaRegComments } from "react-icons/fa"
import { FiTrendingUp } from "react-icons/fi"
import { IoTrendingUpOutline, IoTrendingUp } from "react-icons/io5"
import Head from "next/head"
import FeatureHeaderSparkle from "../../../components/page-Components/featureHeaderSparkle"
import RequestDemo from "../../../components/page-Components/requestDemo"
import VerticalTabsWithText from "../../../components/UI-Components/verticalTabsWithText"
import ProductCopy from "../../../components/mantine-Components/productCopy"
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2"

const features = [
    {
        icon: MdOutlineTrendingUp,
        title: "Enhanced Efficiency",
        description:
            "Say goodbye to the hassle of paper-based systems, lost faxes, and manual data entry. With Clinic-Connect's digital messaging system, referrals can be sent and received instantly."
    },
    {
        icon: FaRegComments,
        title: "Improved Communication",
        description:
            "Clinic-Connect fosters seamless communication and collaboration among healthcare providers. Make sure you are alwaysreachable so you never miss an important referral."
    },
    {
        icon: MdLockOutline,
        title: "Secure messaging",
        description:
            "Clinic-Connect prioritizes security and compliance by utilizing  encryption protocols and adhering to industry standards.Clinic-Connect ensures secure transmission of sensitive patient information, maintaining confidentiality and security."
    },
    {
        icon: FaRegClock,
        title: "Time and Cost Savings",
        description:
            "With Clinic-Connects advanced AI powered automation features, healthcare providers can save time and money by automating repetitive tasks. You can also reduce the costs associated with paper, ink, and fax machine maintenance."
    }
]
const data = [
    {
        title: "Instant Messaging",
        description:
            "Communicate with other healthcare professionals through secure and compliant instant messaging. Share files, images, and other media with your team or any other healthcare professional on the platform.",
        icon: <HiOutlineChatBubbleOvalLeftEllipsis size={28} />
    },
    {
        title: "Electronic faxes",
        description:
            "Purchase a new fax number or bring your existing number to Clinic Connect and send and receive faxes electronically. We provide advanced automation features such as OCR and fax-to-email.",
        icon: <MdOutlineFax size={28} />
    },
    {
        title: "Web referral portal",
        description:
            "If we build your custom website, we can integrate a web referral portal that allows other practices to securely upload patient information and referrals to your practice on your website.",
        icon: <MdPhonelink size={28} />
    }
]

const ClinicConnect = () => {
    return (
        <div className="py-10 ">
            <Head>
                <title>
                    Clinic-Connect | Digital Healthcare Solutions | Digital
                    alternative to faxing
                </title>

                <meta
                    name="description"
                    content="Clinic Connect is a digital messaging platform that enables healthcare providers to send and receive referrals instantly."
                />
                <meta
                    name="keywords"
                    content="clinic connect, clinic, connect, digital, 
                    e-fax, electronic fax, HIPPA compliant fax, HIPPA compliant E-fax, messaging, platform, healthcare, providers, send, receive, referrals, instantly, alternative, fax, machine, fax machine, faxing, faxing alternative, secure alternative to faxing"
                />
                <meta name="author" content="Clinic Connect" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    property="og:title"
                    content="Clinic Connect | Digital Healthcare Solutions"
                />
                <meta
                    property="og:description"
                    content="Clinic Connect is a digital messaging platform that enables healthcare providers to send and receive referrals instantly."
                />
                <meta property="og:type" content="website" />
            </Head>
            <Container size="lg">
                {/* <FeatureHeaderSparkle title="Clinic-Connect" /> */}
                <ProductCopy
                    title={
                        "Clinic Connect is a multichannel platform that connects healthcare professionals"
                    }
                    subtitle={"The Clinic Connect ecosystem"}
                    description={
                        "With Clinic-Connect, you'll be able to send and receive instant HIPPA compliant messages with your team and other healthcare professionals. You can also send and receive electronic faxes and integrate a web referral portal into your website. "
                    }
                    data={data}
                />
            </Container>
            <section className="h-fit min-h-[50rem] bg-neutral-100 dark:bg-neutral-800 flex flex-col items-start justify-start lg:justify-around lg:items-center p-4 md:px-20">
                {/* <Text className="text-center text-3xl font-semibold">
                    Clinic-Connect's features
                </Text> */}
                <VerticalTabsWithText
                    tabsList={[
                        {
                            title: "Realtime Chat",
                            value: "Realtime Chat",
                            icon: <MdOutlineTrendingUp />
                        },
                        {
                            title: "Electronic Fax",
                            value: "Electronic Fax",
                            icon: <IoTrendingUp />
                        },
                        {
                            title: "Web Portal",
                            value: "Web Portal",
                            icon: <FaRegComments />
                        }
                    ]}
                    tabsPanel={[
                        {
                            value: "Realtime Chat",
                            contentMain:
                                "Our real-time chat feature revolutionizes communication among healthcare professionals, offering a secure and compliant platform for instant messaging. Designed with the healthcare industry in mind, it's akin to Slack but tailored for the unique needs of medical communication. This feature allows you to effortlessly share files, images, and other media with your team or any healthcare professional registered on the platform. Whether it's for quick consultations, sharing patient reports, or collaborative discussions, our chat system ensures your communications are efficient, secure, and in complete compliance with industry standards.",
                            contentList: [
                                "Offers a secure and compliant instant messaging platform for healthcare professionals to communicate in real time, ensuring privacy and adherence to healthcare regulations.",
                                "Enables the sharing of files, images, and other media within the team or with any healthcare professional on the platform, facilitating efficient information exchange.",
                                "Designed as a healthcare-centric alternative to Slack, it provides a tailored environment for healthcare professionals to collaborate and share critical information seamlessly."
                            ],
                            image: "/clinic-connect.jpeg"
                        },
                        {
                            value: "Electronic Fax",
                            contentMain:
                                "Our Electronic Faxing system leverages advanced AI, including Optical Character Recognition (OCR) and Natural Language Processing (NLP), to revolutionize fax management by automatically extracting, categorizing, and intelligently processing fax content. It's smart routing system achieves a 97% success rate on initial fax attempts, it also features a robust retry mechanism, attempting up to seven additional sends through various channels for unmatched transmission reliability. Instant failure notifications also ensure prompt user response. Particularly beneficial for healthcare providers, the system automatically extracts patient information, such as names and birth dates, streamlining patient data management for future lookup. ",
                            contentList: [
                                "Achieves a 97% success rate on initial fax sends, with up to seven retry attempts across various channels for unparalleled reliability.",
                                "Provides immediate alerts for any transmission issues, ensuring prompt attention and resolution.",
                                "Utilizes Optical Character Recognition (OCR) and Natural Language Processing (NLP) to automatically categorize faxes, extract sender, and patient information, enhancing data management.",
                                "Optimized for healthcare providers, our system efficiently captures essential patient details for accurate and future-proof data handling."
                            ],
                            image: "/efax-sc.jpeg"
                        },
                        {
                            value: "Web Portal",
                            contentMain:
                                "Our web portal enables providers to securely upload patient information and referrals directly to your practice through your website, facilitated by our service's secure connection to the site we create for you. This streamlined approach not only saves time and money for both your practice and referring providers but also enhances your marketing efforts. Moreover, all new referrals can be conveniently viewed and managed from the Clinic Connect dashboard right beside your other referrals, simplifying the referral process and improving overall practice efficiency.",
                            contentList: [
                                "Providers can securely upload patient information and referrals to your practice via a web portal on your website, ensuring data security and privacy.",
                                "Our service seamlessly connects with the website we build for you, allowing for a direct and efficient communication channel that saves time and resources.",
                                "All referrals received through the web portal are easily accessible from the Clinic Connect dashboard, streamlining the management process and enhancing marketing strategies.",
                                "Referrals submitted through the portal also receive the same OCR and NLP processing as faxes, ensuring that all patient information is accurately captured and categorized."
                            ],
                            image: "/cloud-computing.jpg"
                        }
                    ]}
                />
            </section>

            <Container size="lg">
                <div className="py-10 mt-20 ">
                    <Grid gutter={80}>
                        <Col span={12} md={5}>
                            <Title order={2} className="text-3xl">
                                Clinic-Connect makes communication easy again
                            </Title>
                            <Text className="py-6">
                                Sign up today to experience the benefits of
                                Clinic-Connect for yourself.
                            </Text>
                            <Link href="/?dialog=getStarted">
                                <ButtonPrimary
                                    onClick={() => console.log(``)}
                                    className=" bg-gradient-to-tr from-blue-500 to-cyan-400 hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                                >
                                    Get Started
                                </ButtonPrimary>
                            </Link>
                            <div className="hidden lg:block pt-20"></div>
                        </Col>
                        <Col span={12} md={7}>
                            <SimpleGrid
                                cols={2}
                                spacing={30}
                                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                            >
                                {features.map((feature) => (
                                    <div key={feature.title}>
                                        <ThemeIcon
                                            size={44}
                                            radius="md"
                                            variant="gradient"
                                            gradient={{
                                                deg: 133,
                                                from: "blue",
                                                to: "cyan"
                                            }}
                                        >
                                            <feature.icon
                                                size={26}
                                                stroke={"1.5"}
                                            />
                                        </ThemeIcon>
                                        <Text fz="lg" mt="sm" fw={500}>
                                            {feature.title}
                                        </Text>
                                        <Text c="dimmed" fz="sm">
                                            {feature.description}
                                        </Text>
                                    </div>
                                ))}
                            </SimpleGrid>
                        </Col>
                    </Grid>
                </div>
                {/* <div className="flex justify-center mt-8">
                    <Link href="/product/demos">
                        <ButtonSecondary
                            onClick={() => console.log(``)}
                            className=" bg-neutral-100 dark:bg-blue-500 ring-1 dark:ring-blue-500 ring-blue-500  text-blue-500 dark:text-white hover:shadow-lg hover:bg-neutral-200 dark:hover:bg-blue-600 "
                        >
                            Read more
                        </ButtonSecondary>
                    </Link>
                </div> */}
                <RequestDemo />{" "}
            </Container>
        </div>
    )
}

export default ClinicConnect
