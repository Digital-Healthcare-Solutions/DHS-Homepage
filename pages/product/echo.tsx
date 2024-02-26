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
import ButtonPrimary from "../../components/UI-Components/button-primary"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { BsArrowRight, BsArrowDown, BsMic } from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import { MdOutlinePersonPin, MdSpeed } from "react-icons/md"
import { GiBattery100, GiBullseye } from "react-icons/gi"
import { BiPhoneCall } from "react-icons/bi"
import { RxCircleBackslash } from "react-icons/rx"
import Head from "next/head"
import { FaHospitalUser, FaUserMd } from "react-icons/fa"
import FeatureHeaderSparkle from "../../components/page-Components/featureHeaderSparkle"
import RequestDemo from "../../components/page-Components/requestDemo"

const features = [
    {
        icon: BsMic,
        title: "Easy to use",
        description:
            "Echo can be used by anyone. All you need to do is click the microphone icon and start talking. Echo will do the rest."
    },
    {
        icon: MdSpeed,
        title: "Fast",
        description:
            "Echo is fast. It can generate a note in seconds, allowing you to spend more time with your patients."
    },
    {
        icon: GiBullseye,
        title: "Accurate",
        description:
            "Echo is accurate. It uses advanced speech recognition technology to ensure that your transcripts and notes are accurate."
    },
    {
        icon: FaUserMd,
        title: "Professional",
        description:
            "Echo was trained by medical professionals to ensure that it generates professional notes that are ready to be signed."
    }
]

const howItWorks = [
    {
        number: 1,
        description:
            "Once signed in to the platform, you can navigate to the tools section and select Echo."
    },
    {
        number: 2,
        description:
            "You have several options to customize your Echo settings. You can choose the type of note generated (SOAP or Nurse's Note), the specialty of the note, and the format of the note. "
    },
    {
        number: 3,
        description:
            "Once you have configured your initial settings you can click click the microphone icon to start recording."
    },
    {
        number: 4,
        description:
            "Once you're done talking with the patient, click the mic button again to stop the recording. You'll see the transcript appear on the left side of the screen."
    },
    {
        number: 5,
        description:
            "Once the transcript is done, the note will automatically be generated and appear on the right side of the screen. The note will automatically be saved to your history and you can view it at any time."
    }
]
const Echo = () => {
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
                <Container size="lg">
                    <FeatureHeaderSparkle title="Echo" />
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
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
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between gap-8 py-20 items-center">
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
                                        breakpoints={[
                                            { maxWidth: "md", cols: 1 }
                                        ]}
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
                                        Double your productivity by using Echo
                                        to automate your clinical note taking
                                        process.
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
                    <RequestDemo />
                    <h2 className="py-6">
                        <div className="text-center text-xl">
                            You can always read more about Echo on one of our{" "}
                            <Link
                                href="/blog"
                                className="text-blue-500 hover:underline"
                            >
                                blog
                            </Link>
                            posts.
                        </div>
                    </h2>
                </Container>
            </div>
        </>
    )
}

export default Echo
