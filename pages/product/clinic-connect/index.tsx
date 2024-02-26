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
                <FeatureHeaderSparkle title="Clinic-Connect" />
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
                <VerticalTabsWithText
                    tabsList={[
                        {
                            title: "Instant Messaging",
                            value: "Instant Messaging",
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
                            value: "Instant Messaging",
                            content: "Instant Messaging Content"
                        },
                        {
                            value: "Electronic Fax",
                            content: "Electronic Fax Content"
                        },
                        {
                            value: "Web Portal",
                            content: "Web Portal Content"
                        }
                    ]}
                />
                {/* <section className="flex flex-col lg:flex-row items-start gap-20">
                    <div className="flex flex-col items-center justify-between gap-8">
                        <div className="text-lg max-w-lg">
                            <h2 className="text-blue-500 underline underline-offset-4 font-semibold mb-3">
                                The Problem :
                            </h2>
                            <p>
                                Old fashioned ways of communicating between
                                healthcare providers get in the way of providing
                                the best care for patients. Fax machines can be
                                slow, unreliable, and error prone. Medical
                                practices spend hundreds of dollars per month in
                                paper and ink costs, waste hours of staff time
                                on sorting and filing faxes, and risk losing
                                important patient information. Many times, faxes
                                are sent to the wrong number or the fax machine
                                is out of paper and the fax is never received.
                                This can lead to serious consequences for
                                patients and providers.
                            </p>
                        </div>{" "}
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/faxing-sucks.jpeg"
                            width={300}
                            height={300}
                            alt="Fax machine"
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-between gap-8 ">
                        <div className="text-lg max-w-lg">
                            <h2 className="text-blue-500 underline underline-offset-4 font-semibold mb-3">
                                Our Solution :
                            </h2>
                            <p>
                                Clinic-Connect serves as a cutting-edge
                                communication platform, facilitating real-time
                                patient referrals among healthcare providers via
                                the internet. Our solution streamlines
                                communication in a modern, efficient, and secure
                                manner, eliminating the need for outdated fax
                                machines. Whether through real-time chat or
                                electronic fax, Clinic-Connect ensures HIPAA
                                compliant, rapid , and reliable transmission of
                                patient information. Experience the future of
                                healthcare connectivity with Clinic-Connect,
                                where innovation meets reliability.
                            </p>
                        </div>{" "}
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/cloud-computing.jpg"
                            width={360}
                            height={360}
                            alt="Cloud computing"
                            priority={true}
                        />
                    </div>
                </section> */}

                <div className="py-10 mt-20 ">
                    <Container size="lg">
                        <Grid gutter={80}>
                            <Col span={12} md={5}>
                                <Title order={2} className="text-3xl">
                                    Clinic-Connect makes communication easy
                                    again
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
                    </Container>
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
                <RequestDemo />
            </Container>
        </div>
    )
}

export default ClinicConnect
