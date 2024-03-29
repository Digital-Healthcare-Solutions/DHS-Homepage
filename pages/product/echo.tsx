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
    Container,
    Divider,
    Loader
} from "@mantine/core"
import { useFormik } from "formik"
import * as Yup from "yup"
import Image from "next/image"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { BsArrowRight, BsArrowDown, BsMic } from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import { MdOutlinePersonPin, MdSettings, MdSpeed } from "react-icons/md"
import { GiBattery100, GiBullseye } from "react-icons/gi"
import { BiPhoneCall, BiSolidCategoryAlt } from "react-icons/bi"
import { RxCircleBackslash } from "react-icons/rx"
import Head from "next/head"
import { FaHospitalUser, FaLock, FaUserMd } from "react-icons/fa"
import FeatureHeaderSparkle from "../../components/page-Components/featureHeaderSparkle"
import RequestDemo from "../../components/page-Components/requestDemo"
import { useEffect, useState } from "react"
import styles from "../../styles/circle.module.css"
import { TypeAnimation } from "react-type-animation"
import VerticalAccordionsWithImage from "../../components/UI-Components/verticalAccordionsWithImage"
import FeaturesGrid from "../../components/UI-Components/threeIconComponet"
import ThreeIconComponent from "../../components/UI-Components/threeIconComponet"
import { FiUserCheck } from "react-icons/fi"
import HorizontalTabs from "../../components/UI-Components/horizontalTabs"

const features = [
    {
        icon: BiSolidCategoryAlt,
        title: "Specialty Agnostic",
        description:
            "Echo is designed to work across all medical specialties. Whether you're a primary care physician or a specialist, Echo can help you with your clinical documentation."
    },
    {
        icon: FaLock,
        title: "Privacy focused",
        description:
            "We understand the importance of patient privacy. Echo is designed to ensure that all patient data is kept secure and confidential. No data is stored by default."
    },
    {
        icon: MdSettings,
        title: "Customizable",
        description:
            "We understand that every clinic is different. Echo is designed to be customizable to fit the unique needs of your clinic. Need a note format that's different from the default? No problem."
    },

    {
        icon: GiBullseye,
        title: "Accurate",
        description:
            "Echo is accurate. It uses advanced speech recognition technology to ensure that your transcripts and notes are accurate."
    }
]

const features2 = [
    {
        icon: <BsMic size={22} />,
        title: "Easy to use",
        description:
            "Echo can be used by anyone. All you need to do is click the microphone icon and start talking. Echo will do the rest."
    },
    {
        icon: <MdSpeed size={22} />,
        title: "Fast",
        description:
            "Echo is fast. It can generate a note in seconds, allowing you to spend more time with your patients and less time on documentation."
    },
    {
        icon: <FaUserMd size={22} />,
        title: "Professional",
        description:
            "Echo was trained by medical professionals to ensure that it generates professional notes that are ready to be signed."
    }
]

const features3 = [
    {
        title: "Intuitive user interface",
        description:
            "Echo is designed to be easy to use. Whether you're a medical assisstant, nurse, or a provider, you can start using Echo with minimal training.",
        image: "/echoSC.png"
    },

    {
        title: "Custom formatting options",
        description:
            "Echo is designed to be customizable to fit the unique needs of your clinic. Use our drag and drop interface to create your own custom note format. Our AI will automatically analyze notes to see if the condition matches a custom format. If it does, it will automatically create a second draft in the format you specified.",
        image: "/customFormat.png"
    },
    {
        title: "Works for Nurses or Providers",
        description:
            "Echo can be used by both nurses and providers to generate clinical notes. It's designed to be easy to use and can be used by anyone.",
        image: "/staff.jpg"
    },
    // {
    //     title: "Patient Record Linking",
    //     description:
    //         "Easily link a patient record to give our model access to the patient's medications, conditions, and other health data. This will provide better context for the note and help the model generate a more accurate note.",
    //     image: "/patientRecord2.jpg"
    // },
    {
        title: "Record from your phone, tablet, or desktop",
        description:
            "Echo can be used on any device. Whether you're on the go or in the office, Echo can be used to generate clinical notes.",
        image: "/devices.jpg"
    }
]

const patientConversation = {
    conversation: [
        {
            role: "Nurse",
            text: "Good morning, I understand you've been experiencing migraines. Can you tell me how long this has been going on?"
        },
        { role: "Patient", text: "It's been about six months now." },
        {
            role: "Nurse",
            text: "Can you describe what the headache feels like?"
        },
        {
            role: "Patient",
            text: "It's a throbbing pain, mostly on one side of my head. Sometimes it feels like a tight band around my forehead."
        },
        {
            role: "Nurse",
            text: "On a scale from 1 to 10, how would you rate the pain severity?"
        },
        { role: "Patient", text: "It usually ranges around 7 or 8." },
        {
            role: "Nurse",
            text: "How long do these headaches last, and how often do you experience them?"
        },
        {
            role: "Patient",
            text: "They can last for hours, sometimes even a day or two. It happens about twice a week."
        },
        {
            role: "Nurse",
            text: "Are there any factors that relieve the pain or make it worse?"
        },
        {
            role: "Patient",
            text: "Resting in a dark, quiet room helps a bit. Stress and bright lights definitely make it worse."
        },
        {
            role: "Nurse",
            text: "Have you had any imaging done, like an MRI or CT scan?"
        },
        {
            role: "Patient",
            text: "No, I haven't had any imaging tests done yet."
        },
        {
            role: "Nurse",
            text: "What medications are you currently taking for your migraines?"
        },
        {
            role: "Patient",
            text: "I've been taking ibuprofen and sometimes sumatriptan when it gets really bad."
        },
        {
            role: "Nurse",
            text: "Have you tried any other medications or treatments for your migraines?"
        },
        {
            role: "Patient",
            text: "I tried a different prescription a few months back, but it didn't help much. I can't remember its name, though."
        },
        {
            role: "Nurse",
            text: "Thank you for sharing this information. We'll discuss the next steps in managing your migraines effectively."
        }
    ]
}

const Echo = () => {
    const [recording, setRecording] = useState(false)
    const [loading, setLoading] = useState(false)
    const [step, setStep] = useState(
        "Click the Microphone button to start the demo"
    )
    const [showDemo, setShowDemo] = useState(false)
    const [conversation, setConversation] = useState([])
    const [transcriptionFinished, setTranscriptionFinished] = useState(false)
    const [beginStreamingNote, setBeginStreamingNote] = useState(false)
    const [noteFinished, setNoteFinished] = useState(false)
    const [selectedTab, setSelectedTab] = useState("nurse")

    useEffect(() => {
        if (showDemo) {
            setShowDemo(false)
            setRecording(true)
            setStep("Listening to patient-provider conversation")
        }
    }, [showDemo])

    useEffect(() => {
        if (recording) {
            setTimeout(() => {
                setStep("Transcribing conversation")
                setLoading(true)
                setRecording(false)
            }, 5000)
        }
    }, [recording])

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setStep("Establishing connection to server")
                setConversation(
                    patientConversation.conversation.map((item) => {
                        return (
                            <div className="">
                                <h3>
                                    {item.role === "Nurse"
                                        ? "Nurse- "
                                        : "Patient- "}
                                    {item.text}
                                </h3>
                            </div>
                        )
                    })
                )

                setLoading(false)
                setTranscriptionFinished(true)
            }, 5000)
        }
    }, [loading])

    useEffect(() => {
        if (transcriptionFinished) {
            setTimeout(() => {
                setStep("Generating clinical note")
                setBeginStreamingNote(true)
            }, 1500)
        }
    }, [transcriptionFinished])

    useEffect(() => {
        if (noteFinished) {
            setStep("Clinical note generated successfully")
        }
    }, [noteFinished])

    const text =
        "The patient reports experiencing migraines for about six months, describing the pain as throbbing, mostly on one side of the head, and sometimes feeling like a tight band around the forehead. The pain severity is usually around 7 or 8 on a scale of 1 to 10. These headaches can last for hours or even a day or two, occurring about twice a week. Resting in a dark, quiet room provides some relief, while stress and bright lights exacerbate the pain. The patient has not undergone any imaging tests like MRI or CT scans. Currently, the patient is taking ibuprofen and sometimes sumatriptan for the migraines. A different prescription was tried a few months ago without significant improvement, but the patient does not recall its name."

    //basically turn this into a review of systems
    const textSOAPversoin =
        "Subjective:\nThe patient reports experiencing migraines for approximately six months.\nDescribes the pain as throbbing, predominantly on one side of the head, occasionally feeling like a tight band around the forehead.\nPain severity is rated as 7 or 8 out of 10.\nHeadaches last for hours or sometimes a day or two, with an occurrence of about twice a week.\nIdentifies that resting in a dark, quiet room provides some relief.\nNotes that stress and bright lights exacerbate the pain.\nNo history of imaging tests (MRI or CT scans) performed.\nCurrently taking ibuprofen and sometimes sumatriptan; a different prescription was tried a few months ago without significant improvement, but the name is not recalled.\n\n   Objective:\nNo objective data provided (e.g., vital signs, physical examination findings).\n\n   Assessment:\n\nChronic migraines, characterized by unilateral throbbing pain with a high severity level, exacerbated by stress and bright lights, and partially alleviated by rest in a dark, quiet room.\nThe patient's response to current medication (ibuprofen and sumatriptan) is noted.\n\n Plan:\n\nConsider referral for neurology consultation to explore further diagnostic evaluation, including MRI or CT scans, to rule out other causes of headaches.\nReview and possibly adjust current medication for migraine management, considering the patient's report of limited relief from current treatments.\nExplore the addition of a preventive migraine medication or adjustments in current treatment to reduce frequency and severity of migraines.\nRecommend lifestyle modifications and stress management techniques to help mitigate triggers.\nSchedule a follow-up appointment to assess response to any changes in treatment and to monitor for any new or worsening symptoms."

    return (
        <>
            <div className="py-10 ">
                <Head>
                    <title>Echo | Digital Healthcare Solutions</title>
                    <meta name="description" />
                    <meta name="keywords" />
                    <meta name="author" content="Echo" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        property="og:title"
                        content="Echo | Digital Healthcare Solutions"
                    />

                    <meta property="og:type" content="website" />
                </Head>
                <FeatureHeaderSparkle title="Echo" />
                <Container size="lg" className="mb-20">
                    <ThreeIconComponent
                        title="Echo makes clinical documentation easy."
                        tagline="Stop spending your free time finishing up clinical notes. Let Echo do the work for you in seconds."
                        features={features2}
                    />
                </Container>

                <section className="h-fit min-h-[50rem] border-y border-neutral-300 dark:border-neutral-700 py-20 flex flex-col items-start lg:flex-row lg:items-center justify-start lg:justify-between p-4 mb-20">
                    <VerticalAccordionsWithImage
                        accordionItems={features3}
                        direction="left"
                    />
                </section>
                <Container size="xl">
                    <Text className="text-center text-3xl font-semibold pb-2">
                        Check out our demo below
                    </Text>
                    <div className="flex flex-row justify-center items-center py-4">
                        <HorizontalTabs
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                            tabsList={[
                                {
                                    title: "Nurse Note Example",
                                    value: "nurse",
                                    icon: ""
                                },
                                {
                                    title: "SOAP Note Example",
                                    value: "soap",
                                    icon: ""
                                }
                            ]}
                        />
                    </div>

                    <section className="border border-neutral-500 dark:border-neutral-700 h-full md:h-[45rem] min-h-[45rem] rounded-md flex flex-col md:flex-row ">
                        <main className="flex flex-col md:w-1/2 py-2 min-h-[25rem] md:h-full">
                            <header className="w-full text-center">
                                Transcription
                            </header>
                            <Divider orientation="horizontal" />
                            <div className="p-2">
                                {loading ? (
                                    <Loader
                                        type="ThreeDots"
                                        color="#00BFFF"
                                        height={20}
                                        width={20}
                                        className="right-0 relative top-0"
                                    />
                                ) : (
                                    conversation
                                )}
                            </div>
                            <section className="mt-auto pb-16">
                                <Divider orientation="horizontal" />
                                <div>
                                    {recording ? (
                                        <section className="flex flex-row justify-center pt-6">
                                            <div className={styles.item}></div>
                                            <button
                                                id="stop"
                                                className={styles.circle3}
                                            >
                                                <BsMic
                                                    size={25}
                                                    className=" text-blue-500 z-50"
                                                />
                                            </button>
                                            <div
                                                className={styles.circle}
                                                style={{ animationDelay: "0s" }}
                                            ></div>
                                            <div
                                                className={styles.circle}
                                                style={{ animationDelay: "1s" }}
                                            ></div>
                                            <div
                                                className={styles.circle}
                                            ></div>
                                        </section>
                                    ) : (
                                        <section
                                            className={
                                                "flex flex-row justify-center text-white z-50 hover:text-blue-500 pt-6"
                                            }
                                        >
                                            <button
                                                onClick={() => {
                                                    setShowDemo(true)
                                                    setRecording(false)
                                                    setConversation([])
                                                    //reset
                                                    setStep(
                                                        "Click the Microphone button to show the demo"
                                                    )
                                                    setTranscriptionFinished(
                                                        false
                                                    )
                                                    setBeginStreamingNote(false)
                                                    setNoteFinished(false)
                                                }}
                                                className={styles.circle2}
                                            >
                                                <BsMic size={25} />
                                            </button>
                                        </section>
                                    )}
                                </div>
                            </section>
                        </main>
                        <div className="hidden md:flex">
                            <Divider orientation="vertical" />
                        </div>
                        <div className=" md:hidden">
                            <Divider orientation="horizontal" />
                        </div>
                        <main className="md:w-1/2 py-2 h-1/2 md:h-full">
                            <header className="w-full text-center">
                                <span
                                    className={
                                        selectedTab === "soap"
                                            ? "uppercase"
                                            : `capitalize`
                                    }
                                >
                                    {selectedTab}{" "}
                                </span>{" "}
                                Note{" "}
                            </header>

                            <Divider orientation="horizontal" />
                            <div className="p-2">
                                {beginStreamingNote &&
                                    (selectedTab === "soap" ? (
                                        <TypeAnimation
                                            sequence={[
                                                textSOAPversoin,
                                                () => setNoteFinished(true)
                                            ]}
                                            speed={90}
                                            repeat={0}
                                            cursor={false}
                                        />
                                    ) : (
                                        <TypeAnimation
                                            sequence={[
                                                text,
                                                () => setNoteFinished(true)
                                            ]}
                                            speed={90}
                                            repeat={0}
                                            cursor={false}
                                        />
                                    ))}
                            </div>
                        </main>
                    </section>
                    <div
                        className={`text-center pt-2 text-neutral-600 dark:text-neutral-400`}
                    >
                        <span className="loadingText">{step}</span>
                    </div>
                </Container>

                {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="text-lg">
                            <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                                The Problem :
                            </h2>
                            <h3>
                                Healthcare professionals often find themselves
                                mired in the time-consuming task of creating
                                clinical notes after patient interactions. This
                                critical yet cumbersome process can lead to
                                extended work hours, decreased patient
                                face-time, and even the risk of inaccuracies in
                                patient records. The burden of manual
                                note-taking not only impacts the efficiency of
                                healthcare providers but also strains the
                                resources of medical facilities, affecting the
                                overall quality of care offered to patients.
                            </h3>
                        </div>{" "}
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/documentation.webp"
                            width={400}
                            height={400}
                            alt="Doctor writing notes"
                            priority={true}
                        />
                    </div> */}
                {/* <div className="flex flex-col lg:flex-row justify-between gap-8 py-20 items-center">
                        <div className="text-lg">
                            <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                                Our Solution :
                            </h2>
                            <h3>
                                Introducing Echo, a revolutionary AI-assisted
                                clinical note generator designed to alleviate
                                the burden of documentation for healthcare
                                providers. Designed to effortlessly integrate
                                into daily medical routines, Echo listens to
                                conversations between healthcare providers and
                                their patients, and automatically converts these
                                interactions into accurate, detailed clinical
                                notes. This not only streamlines the
                                documentation process but also ensures higher
                                accuracy and consistency in patient records.
                                With Echo, healthcare professionals can redirect
                                their focus to providing quality patient care,
                                secure in the knowledge that their documentation
                                needs are being managed efficiently. This
                                innovative approach leads to improved patient
                                outcomes, reduced administrative stress for
                                medical staff, and a more efficient operational
                                workflow in healthcare settings.
                            </h3>
                        </div>{" "}
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/doctorTalkingWithPatient.jpg"
                            width={400}
                            height={400}
                            alt="Doctor talking with patient"
                            priority={true}
                        />
                    </div> */}

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
                                    Echo makes clinical documentation easy.
                                </Title>
                                <Text className="py-6">
                                    Double your productivity by using Echo to
                                    automate your clinical note taking process.
                                </Text>

                                <Link href="/?dialog=getStarted">
                                    <ButtonPrimary
                                        onClick={() => console.log("")}
                                        className=" bg-gradient-to-tr from-blue-500 to-cyan-400 hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                                    >
                                        Get Started
                                    </ButtonPrimary>
                                </Link>
                                <div className="hidden lg:block pt-20"></div>
                            </Col>
                        </Grid>
                    </Container>
                </div>
                <Container size="lg">
                    <RequestDemo />
                </Container>
            </div>
        </>
    )
}

export default Echo
