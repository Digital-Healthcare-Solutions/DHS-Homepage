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

const howItWorks = [
    {
        number: 1,
        description:
            "Sign up for our platform and go to the settings page. Under the Our Call Center tab, you can register a new phone number and configure your call settings."
    },
    {
        number: 2,
        description:
            "You have several options to choose from. You can select whether you want your call to forward to your clinic's phone number, or go stright to voicemail transcription. You can also input your greeting message and select options to identify which provider the caller is calling about. Lastly choose whether you want to enable AI or disable AI for message analysis."
    },
    {
        number: 3,
        description:
            "Once you have configured your initial settings you can click 'Register' and your phone number will be registered. Go ahead and test your call forwarding by calling your new phone number and leaving a voicemail."
    },
    {
        number: 4,
        description:
            "Now when you visit the Call Center tab, you can see your call history. You can see the date and time of the call, the caller's phone number, the duration of the call, and the transcription of the voicemail. You can also listen to the voicemail by clicking the play button."
    },
    {
        number: 5,
        description:
            "You can respond to the voicemail either by text or call. If you choose to respond by text, simply type your message and send it, The Call Center works like a normal text messaging app. If you choose to respond by call, click the phone Icon and you can call the patient back."
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
            <Container size="lg">
                <FeatureHeaderSparkle title="Call Center" />
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                            The Problem :
                        </h2>
                        <h3>
                            Constant phone calls and voicemails can be
                            overwhelming and time-consuming for medical
                            practices. The volume of incoming calls often can be
                            difficult to manage, leading to long hold times and
                            frustrated patients. The need to listen to and
                            respond to voicemails can consume a significant
                            portion of staff time, making it difficult to keep
                            up with other important tasks. These communication
                            challenges can lead to decreased patient
                            satisfaction, reduced staff efficiency, and even
                            lost revenue. Many practices even resort to spending
                            thousands of dollars on call centers to help manage
                            their call volume.
                        </h3>
                    </div>{" "}
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700"
                        src="/phoneRinging.jpg"
                        width={300}
                        height={300}
                        alt="Phone ringing"
                        priority={true}
                    />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 py-20 items-center">
                    {" "}
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700"
                        src="/cloudPhone.jpg"
                        width={300}
                        height={300}
                        alt="Cloud Phone system"
                        priority={true}
                    />
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                            Our Solution :
                        </h2>
                        <h3>
                            IntelliCall makes it easy to manage your
                            communication with patients. Our intelligent call
                            management software uses advanced AI technology to
                            transcribe calls, sort them by topic, and provide
                            actionable insights. With our solution, you can
                            quickly identify the purpose of each call and
                            prioritize them accordingly, without the need to
                            listen to long voicemail messages. Our software
                            allows you to text and call back patients directly
                            from your browser, giving you the ability to respond
                            to patients quickly and efficiently without long
                            wait times or needing to spend thousands on a call
                            center. By using IntelliCall, medical practices can
                            streamline communication management, save time,
                            money and provide a better patient experience.
                        </h3>
                    </div>{" "}
                </div>
                <h2 className="text-black dark:text-white text-3xl font-semibold text-center py-6 ">
                    How it works :
                </h2>
                {howItWorks.map((item) => (
                    <div className="py-6">
                        <div className="flex items-center">
                            <ThemeIcon
                                size={44}
                                radius="md"
                                variant="gradient"
                                gradient={{
                                    deg: 50,
                                    from: "rgb(59 130 246)",
                                    to: "rgb(59 130 246)"
                                }}
                            >
                                {item.number}
                            </ThemeIcon>
                            <p className="ml-3">{item.description}</p>
                        </div>
                    </div>
                ))}{" "}
                <div className="flex justify-center mt-8">
                    <Link href="/product/demos">
                        <ButtonSecondary
                            onClick={() => console.log(``)}
                            className=" bg-neutral-100 dark:bg-blue-500 ring-1 dark:ring-blue-500 ring-blue-500  text-blue-500 dark:text-white hover:shadow-lg hover:bg-neutral-200 dark:hover:bg-blue-600 "
                        >
                            Read more
                        </ButtonSecondary>
                    </Link>
                </div>
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
                                    IntelliCall makes communication flow.
                                </Title>
                                <Text className="py-6">
                                    Streamline Patient Communication and Boost
                                    Efficiency with Our Intelligent Call
                                    Management Solution
                                </Text>

                                <Link href="/?dialog=getStarted">
                                    <ButtonPrimary
                                        onClick={() => console.log(``)}
                                        className=" bg-gradient-to-tr from-blue-500 to-cyan-400 hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                                    >
                                        Get Started
                                    </ButtonPrimary>
                                </Link>
                                <div className="hidden lg:block pt-20">
                                    {/* <Image
                                        className="rounded-xl dark:brightness-150 "
                                        src="/IntelliCallLogo.png"
                                        alt="IntelliCall"
                                        width={300}
                                        height={300}
                                    /> */}
                                </div>
                            </Col>
                        </Grid>
                    </Container>
                </div>
                <RequestDemo />
                <h2 className="py-6">
                    <div className="text-center text-xl">
                        You can always read more about IntelliCall on one of our{" "}
                        <Link
                            href="/blog"
                            className="text-blue-500 hover:underline"
                        >
                            {" "}
                            blog
                        </Link>{" "}
                        posts.
                    </div>
                </h2>
            </Container>
        </div>
    )
}

export default IntelliCall
