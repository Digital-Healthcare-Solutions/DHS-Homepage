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
    Badge,
    Card,
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
import { MdAccessTime } from "react-icons/md"
import { GiOnTarget, GiHeartPlus } from "react-icons/gi"
import { TfiTarget } from "react-icons/tfi"
import Head from "next/head"
import FeatureHeaderSparkle from "../../../components/page-Components/featureHeaderSparkle"
import RequestDemo from "../../../components/page-Components/requestDemo"
import ThreeCardProductCopy from "../../../components/UI-Components/threeCardProductCopy"
import { BackgroundGradient } from "../../../components/ui/background-gradient"

const features = [
    {
        icon: <MdAccessTime size={25} className="text-blue-600" />,
        title: "Save time for patients and staff",
        description:
            "By using our paperless pre-registration system, you can reduce wait times and eliminate the need for manual data entry. Patients can complete forms in advance, allowing staff to review and process information ahead of time, reducing delays and saving time for both patients and staff."
    },
    {
        icon: <TfiTarget size={25} className="text-blue-600" />,
        title: "Improve data accuracy",
        description:
            "Our system automatically checks for errors and ensures that all required fields are completed, reducing the likelihood of errors in patient data. This feature can help improve the accuracy of patient information and reduce the risk of errors in medical records."
    },
    {
        icon: <GiHeartPlus size={25} className="text-blue-600" />,
        title: "Enhanced Patient Satisfaction",
        description:
            "By offering paperless pre-registration, you can provide patients with a more convenient and streamlined experience, allowing them to avoid long wait times and complete forms at their convenience. This feature can improve patient satisfaction and show patients that you value their time and comfort."
    }
]

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: 34,
        fontWeight: 900,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 24
        }
    },

    description: {
        maxWidth: 600,
        margin: "auto",

        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },

    card: {
        border: `${1} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`
    },

    cardTitle: {
        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm
        }
    }
}))

const SmartForm = () => {
    const { classes, theme } = useStyles()

    return (
        <div className="py-10">
            <Head>
                <title>
                    SmartForm | Digital Healthcare Solutions | Paperless
                    Registration
                </title>
                <meta
                    name="description"
                    content="SmartForm allows your clinic to easily adopt a e-form where patients to fill out their registration online before their appointment. "
                />
                <meta
                    name="keywords"
                    content="paperless registration, digital healthcare solutions, e form, digital healthcare, smart form, smart paperwork, online medical paperwork, online medical forms, online medical registration"
                />
                <meta
                    name="og:title"
                    content="SmartForm | Digital Healthcare Solutions | Paperless Registration"
                />
                <meta
                    name="og:description"
                    content="SmartForm allows your clinic to easily adopt a e-form where patients to fill out their registration online before their appointment. "
                />
            </Head>
            <Container size="lg">
                <FeatureHeaderSparkle title="SmartForm" />
                <ThreeCardProductCopy
                    features={features}
                    title="SmartForm makes paperwork suck less"
                    subtitle="Efficient Registration"
                    tagline="Improve your practice's new patient flow and save time and money for your business."
                />

                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-32 mt-36">
                    <BackgroundGradient className="rounded-xl bg-white dark:bg-neutral-900">
                        <Image
                            className="bg-transparent rounded-xl "
                            src="/registration.jpg"
                            width={300}
                            height={300}
                            alt="Analog registration on paper"
                            priority={true}
                        />
                    </BackgroundGradient>

                    <div className="text-lg w-fit lg:w-[30rem]">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2 flex justify-center">
                            The Problem :
                        </h2>
                        <h3>
                            Analog paper registration in medical offices can be
                            slow, inefficient, and prone to errors. Patients
                            often have to spend a considerable amount of time
                            filling out lengthy paper forms, which can lead to
                            delays and frustration. Paper forms can also be
                            lost, damaged, or hard to read, which can lead to
                            errors in patient information and medical records.
                            Additionally, paper registration can be
                            time-consuming for staff, who have to manually enter
                            patient data into electronic systems.
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-32 my-20">
                    <div className="text-lg w-fit lg:w-[30rem]">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                            Our Solution :
                        </h2>
                        <h3>
                            With SmartForm, we're making it easy to incorporate
                            paperless pre-registration into your medical
                            practice. Our online registration system allows
                            patients to complete pre-registration forms at their
                            convenience, from the comfort of their own home.
                            Patients can access the paperwork via a link you put
                            on your website or send them, and can securely
                            submit their information using any device. Our
                            product has autocomplete for health conditions and
                            medications and ensures that all required fields are
                            completed, reducing the likelihood of errors in
                            patient data.
                        </h3>
                    </div>{" "}
                    <BackgroundGradient className="rounded-xl bg-white dark:bg-neutral-900">
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/online.jpg"
                            width={400}
                            height={400}
                            alt="Online Registration graphic"
                            priority={true}
                        />
                    </BackgroundGradient>
                </div>

                <RequestDemo />
            </Container>
        </div>
    )
}

export default SmartForm
