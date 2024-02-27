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
import { MdOutlinePersonPin } from "react-icons/md"
import { GiBattery100 } from "react-icons/gi"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { RxCircleBackslash } from "react-icons/rx"
import Head from "next/head"
import FeatureHeaderSparkle from "../../../components/page-Components/featureHeaderSparkle"
import RequestDemo from "../../../components/page-Components/requestDemo"
import ThreeCardProductCopy from "../../../components/UI-Components/threeCardProductCopy"
import { LampContainer } from "../../../components/ui/lamp"
import { motion } from "framer-motion"
import VerticalAccordionsWithImage from "../../../components/UI-Components/verticalAccordionsWithImage"
import HorizontalTabs from "../../../components/UI-Components/horizontalTabs"
import SimpleFlow from "../../../components/react-flow/simple-flow"
import { useState } from "react"
import ReactFlowSection from "../../../components/page-Components/reactFlowSection"

const features = [
    {
        icon: BiPhoneCall,
        title: "Efficient Communication",
        description:
            "Our Call Center is essentially your clinic's shared iPhone, allowing you to communicate with patients in a way that is more efficient and convenient for both your staff and your patients."
    },
    {
        icon: AiOutlineArrowUp,
        title: "Increase reimbursement",
        description:
            "With Our Call Center, all phone communication is documented and kept until you delete it. This allows you to monitor all patient communication and ensure that you are reimbursed for extra time you spend on the phone with patients."
    },
    {
        icon: RxCircleBackslash,
        title: "Cut costs and save time",
        description:
            "Choose Our Call Center as your primary office phone number. Save an average of 50% on your phone bill. Respond to patients anywhere, anytime. No office constraints or sharing your personal phone number."
    },
    {
        icon: MdOutlinePersonPin,
        title: "Personalized Patient Experience:",
        description:
            "Our solution allows you to communicate with patients in a way that feels more personal and engaging. By using Our Call Center, you can enhance your patient's experience and show them that you care about their needs."
    }
]
const features2 = [
    {
        icon: <GiBattery100 size={25} className="text-blue-600" />,
        title: "Revolutionary Call Management",
        description:
            "Elevate your communication with our state-of-the-art call management system. Powered by cutting-edge AI, it transcribes, categorizes calls by subject, and delivers actionable insights to streamline your operations."
    },

    {
        icon: <AiOutlineCloudUpload size={25} className="text-blue-600" />,
        title: "Seamless Patient Communication",
        description:
            "Empower your healthcare practice with the ability to engage patients directly from your browser or mobile device. Our intuitive software ensures timely, efficient communication, eliminating the need for costly call centers and reducing patient wait times."
    },
    {
        icon: <BsArrowRight size={25} className="text-blue-600" />,
        title: "Automated AI Assistance",
        description:
            "Transform your customer service with AI-powered agents designed to handle routine inquiries. This innovative solution not only enhances patient experience but also allows your team to concentrate on critical care aspects, optimizing your workflow."
    }
]

const features3 = [
    {
        image: "/call-center.jpeg",
        title: "Manage All your patient messaging in a central dashboard",
        description:
            "Our platform consolidates all patient communications into a single, centralized dashboard, enabling healthcare providers to track, categorize, and respond to patient messages with ease through text right from the app. Whether it's a medication inquiry or a routine check-up request, you can quickly manage conversations efficiently and effectively."
    },
    {
        image: "/cloudPhone.jpg",
        title: "Mobile App Integration",
        description:
            "Break free from office constraints with our system that forwards calls directly to your mobile app. Provide timely responses and maintain patient communication flexibility, all from the palm of your hand."
    },
    {
        image: "/AI-virtual-call-assisstant.jpg",
        title: "24/7 AI Virtual Assistant",
        description:
            "Implement an AI Virtual Assistant to handle after-hours inquiries, cancel appointments, and answer common questions. It's your clinic's front desk, upgraded for 24/7 responsiveness without the need for constant human oversight."
    },
    {
        image: "/Intelligent-Call-Routing-Distribution.png",
        title: "Enhanced Patient Interaction with Automated Call Forwarding",
        description:
            "Revolutionize how your clinic handles calls with advanced call forwarding that intelligently directs patient inquiries. Ensure that every call is attended to promptly, whether it's for urgent care or routine questions, enhancing overall patient satisfaction."
    }
]

const IntelliCall = () => {
    return (
        <div className="py-10 fr">
            <Head>
                <title>
                    Call Center | Digital Healthcare Solutions | Cloud based
                    medical phone system
                </title>
                <meta
                    name="description"
                    content="Our Call Center is a secure cloud based phone system for medical professionals that allows you to communicate with patients in a way that is more efficient and convenient for both your staff and your patients."
                />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Call Center Digital Healthcare, Call Center Digital Health, Call Center Digital Health Solutions, Call Center Digital Health Company, Call Center Digital Health, Medical phone system, phone, phone system, phone system for doctors, phone system for medical practices, phone system for medical offices, phone system for medical clinics, phone system for medical professionals, phone system for healthcare, phone system for healthcare professionals, phone system for healthcare practices, phone system for healthcare offices, phone system for healthcare clinics, phone system for healthcare companies, phone system for healthcare companies, cloud phone system for medical professionals, cloud phone system for healthcare professionals, cloud phone system for doctors, cloud phone system for medical practices, cloud phone system for medical offices, cloud phone system for medical clinics, cloud phone system for medical companies"
                />
                <meta name="author" content="Call Center" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    property="og:title"
                    content="Call Center | Digital Healthcare Solutions"
                />
                <meta
                    property="og:description"
                    content="Call Center is a secure cloud based phone system for medical professionals that allows you to communicate with patients in a way that is more efficient and convenient for both your staff and your patients."
                />
                <meta property="og:type" content="website" />
            </Head>
            <Container size="xl">
                <FeatureHeaderSparkle title="Call Center" />
                <ThreeCardProductCopy
                    subtitle="Call Center"
                    title="Intelligent Call Management Solution"
                    tagline="Streamline Patient Communication and Boost Efficiency with Our Intelligent Call Management Solution"
                    features={features2}
                />{" "}
            </Container>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    A better Way <br /> to Communicate
                </motion.h1>
            </LampContainer>
            <section className="h-fit min-h-[50rem] bg-blue-500 dark:bg-blue-500 flex flex-col items-start lg:flex-row lg:items-center justify-start lg:justify-between p-4 ">
                <VerticalAccordionsWithImage
                    accordionItems={features3}
                    direction="right"
                />
            </section>
            <ReactFlowSection />
            <div className="py-10 mt-20 ">
                <Container size="lg">
                    <Grid gutter={80}>
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
                        <Col span={12} md={5}>
                            <Title order={2} className="text-3xl">
                                Our Call Center makes communication flow.
                            </Title>
                            <Text className="py-6">
                                Streamline Patient Communication and Boost
                                Efficiency with Our Intelligent Call Management
                                Solution
                            </Text>

                            <Link href="/?dialog=getStarted">
                                <ButtonPrimary
                                    onClick={() => console.log(``)}
                                    className=" bg-gradient-to-tr from-blue-500 to-cyan-400 hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                                >
                                    Get Started
                                </ButtonPrimary>
                            </Link>
                        </Col>
                    </Grid>
                </Container>
            </div>{" "}
            <Container size="lg">
                <RequestDemo />{" "}
            </Container>
        </div>
    )
}

export default IntelliCall
