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
        title: "Bespoke Web Development",
        description:
            "Custom-tailored websites that cater specifically to the needs of healthcare providers, enhancing their digital presence and patient engagement."
    },
    {
        icon: FiTrendingUp,
        title: "SEO Optimization",
        description:
            "Expertly optimized websites to improve visibility on search engines, attracting more patients and healthcare partners."
    },
    {
        icon: GiBattery100,
        title: "High Performance & Security",
        description:
            "Fast-loading, secure websites with top-notch performance and data protection for healthcare providers and their patients."
    },
    {
        icon: MdSettings,
        title: "Integrated Healthcare Solutions",
        description:
            "Seamless integration of referral forms, appointment booking systems, and other healthcare-specific functionalities to streamline operations."
    }
]

const data = [
    {
        title: "Custom Referral Forms",
        description:
            "Enable seamless referrals with custom forms integrated into your website, providing a professional and efficient way for other healthcare providers to connect with you.",
        icon: <AiOutlineCloudUpload size={28} />
    },
    {
        title: "Mobile Optimization",
        description:
            "Ensure your website is accessible and performs flawlessly across all devices, making it easy for patients and providers to interact with your practice anytime, anywhere.",
        icon: <BiPhoneCall size={28} />
    },
    {
        title: "Web Analytics",
        description:
            "Gain valuable insights into your website's performance and user behavior to continually improve your online presence and patient engagement strategies.",
        icon: <AiOutlineArrowUp size={28} />
    }
]

const WebDevelopment = () => {
    return (
        <div className="py-10">
            <Head>
                <title>Custom Web Development for Healthcare Providers</title>
                <meta
                    name="description"
                    content="Expert custom web development services tailored for healthcare providers, including referral form integration, SEO optimization, and mobile-friendly designs."
                />
                <meta
                    name="keywords"
                    content="custom web development, healthcare providers, SEO optimization, referral form integration, mobile optimization, web analytics"
                />
                <meta name="author" content="Your Company Name" />
            </Head>
            <Container size="lg">
                <FeatureHeaderSparkle title="Web Development" />
                <ProductCopy
                    title={"Custom Web Solutions for Healthcare Professionals"}
                    subtitle={"Tailored Digital Experiences"}
                    description={
                        "Our custom web development services are designed to meet the unique needs of healthcare providers. From integrating custom referral forms to ensuring your site is SEO optimized and mobile-friendly, we craft digital solutions that enhance your practice's online presence and operational efficiency."
                    }
                    data={data}
                />
            </Container>
            <section className="h-fit min-h-[50rem] bg-neutral-100 dark:bg-neutral-800 flex flex-col items-start justify-start lg:flex-row lg:justify-around lg:items-center p-4 md:px-20">
                <VerticalTabsWithText
                    tabsList={[
                        {
                            title: "Easy Referral and Patient Forms",
                            value: "Easy Referral and Patient Forms",
                            icon: <AiOutlineCloudUpload />
                        },
                        {
                            title: "SEO Optimization",
                            value: "SEO Optimization",
                            icon: <FiTrendingUp />
                        },
                        {
                            title: "Mobile Optimization",
                            value: "Mobile Optimization",
                            icon: <BiPhoneCall />
                        }
                    ]}
                    tabsPanel={[
                        {
                            value: "Easy Referral and Patient Forms",
                            contentMain:
                                "Our service includes a simple drag-and-drop feature for other doctors to refer patients to you through your website. It's like dropping files into a folder - easy and quick. Plus, we add forms on your site where patients can fill out their info before they visit. This means less waiting for them and less paperwork for you.",
                            contentList: [
                                "Quick referrals from other doctors with a simple drop of information on your website.",
                                "Patients can fill out their details online at their convenience, making visits smoother.",
                                "Saves time and reduces paperwork, letting you focus more on care."
                            ],
                            image: "/magnetism-drop-zoneinvisible-area.png"
                        },

                        {
                            value: "SEO Optimization",
                            contentMain:
                                "We ensure your website is fully optimized for search engines, improving your visibility online and attracting more patients and professional referrals. Our SEO strategies are tailored to the healthcare industry, focusing on relevant keywords and content that drive engagement and conversions.",
                            contentList: [
                                "Improve online visibility with targeted SEO strategies.",
                                "Attract more patients and professional referrals through higher search engine rankings.",
                                "Regular analytics and reporting to track performance and adjust strategies as needed."
                            ],
                            image: "/seo.png"
                        },
                        {
                            value: "Mobile Optimization",
                            contentMain:
                                "With the increasing use of mobile devices to access the internet, we ensure your website is optimized for mobile. This means faster load times, responsive design, and an overall better user experience for patients and healthcare providers visiting your site on their smartphones or tablets.",
                            contentList: [
                                "Ensure your website provides an excellent user experience on all devices.",
                                "Responsive design that adapts to any screen size.",
                                "Faster load times and optimized performance for mobile users."
                            ],
                            image: "/mobileWebDesign.jpg"
                        }
                    ]}
                />
            </section>
            <Container size="lg">
                <RequestDemo />
            </Container>
        </div>
    )
}

export default WebDevelopment
