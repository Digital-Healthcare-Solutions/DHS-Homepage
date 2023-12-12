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
import ButtonPrimary from "../../components/UI-Components/button-primary"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { BsArrowRight, BsArrowDown, BsMic } from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import { MdOutlinePersonPin, MdSpeed } from "react-icons/md"
import { GiBattery100, GiBullseye } from "react-icons/gi"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { RxCircleBackslash } from "react-icons/rx"
import Head from "next/head"
import { FaHospitalUser, FaUserMd } from "react-icons/fa"

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
            subscribeToLaunch(
                formik.values.name,
                formik.values.email,
                formik.values.businessName
            )
        }
    })

    const subscribeToLaunch = async (
        name: string,
        email: string,
        business: string
    ) => {
        const res = await fetch(
            "https://xmks-s250-ypw0.n7.xano.io/api:5iYyLrKQ/subscribeToLaunchList",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    business
                })
            }
        )
        const data = await res.json()
        if (res.ok) {
            showNotification({
                title: "Success",
                message:
                    "Thanks for your interest! A representative will be in touch soon.",
                color: "green",
                autoClose: 5000
            })
            formik.resetForm()
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

    return (
        <div className="py-10 bg-gradient-to-br to-blue-100 from-white dark:from-neutral-900 dark:to-neutral-800">
            <Head>
                <title>Echo | Digital Healthcare Solutions</title>
                <meta
                    name="description"
                    content="IntelliCall is a secure cloud based phone system for medical professionals that allows you to communicate with patients in a way that is more efficient and convenient for both your staff and your patients."
                />
                <meta
                    name="keywords"
                    content="IntelliCall, IntelliCall Digital Healthcare Solutions, IntelliCall Digital Healthcare, IntelliCall Digital Health, IntelliCall Digital Health Solutions, IntelliCall Digital Health Company, IntelliCall Digital Health, Medical phone system, phone, phone system, phone system for doctors, phone system for medical practices, phone system for medical offices, phone system for medical clinics, phone system for medical professionals, phone system for healthcare, phone system for healthcare professionals, phone system for healthcare practices, phone system for healthcare offices, phone system for healthcare clinics, phone system for healthcare companies, phone system for healthcare companies, cloud phone system for medical professionals, cloud phone system for healthcare professionals, cloud phone system for doctors, cloud phone system for medical practices, cloud phone system for medical offices, cloud phone system for medical clinics, cloud phone system for medical companies"
                />
                <meta name="author" content="Echo" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    property="og:title"
                    content="Echo | Digital Healthcare Solutions"
                />
                <meta
                    property="og:description"
                    content="IntelliCall is a secure cloud based phone system for medical professionals that allows you to communicate with patients in a way that is more efficient and convenient for both your staff and your patients."
                />
                <meta property="og:type" content="website" />
            </Head>
            <Container size="lg">
                {/* <h1 className="flex justify-center pb-8 w-full text-2xl md:text-3xl mb-6">
                    <Image
                        className="rounded-xl dark:brightness-150 "
                        src="/IntelliCallLogo.png"
                        width={350}
                        height={350}
                        alt="IntelliCall Logo"
                    />
                </h1> */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                            The Problem :
                        </h2>
                        <h3>
                            Healthcare professionals often find themselves mired
                            in the time-consuming task of creating clinical
                            notes after patient interactions. This critical yet
                            cumbersome process can lead to extended work hours,
                            decreased patient face-time, and even the risk of
                            inaccuracies in patient records. The burden of
                            manual note-taking not only impacts the efficiency
                            of healthcare providers but also strains the
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
                            clinical note generator designed to alleviate the
                            burden of documentation for healthcare providers.
                            Designed to effortlessly integrate into daily
                            medical routines, Echo listens to conversations
                            between healthcare providers and their patients, and
                            automatically converts these interactions into
                            accurate, detailed clinical notes. This not only
                            streamlines the documentation process but also
                            ensures higher accuracy and consistency in patient
                            records. With Echo, healthcare professionals can
                            redirect their focus to providing quality patient
                            care, secure in the knowledge that their
                            documentation needs are being managed efficiently.
                            This innovative approach leads to improved patient
                            outcomes, reduced administrative stress for medical
                            staff, and a more efficient operational workflow in
                            healthcare settings.
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
                <form
                    className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 my-24 bg-blue-500  rounded-xl  py-8"
                    onSubmit={formik.handleSubmit}
                >
                    <Title
                        order={2}
                        sx={(theme) => ({
                            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                            marginTop: "64px"
                        })}
                        className=" text-white font-black items-center justify-center flex flex-col h-full"
                    >
                        <span className="text-white text-4xl">
                            Interested ?
                        </span>{" "}
                        <div className="flex text-xl justify-center items-center pt-3 text-white">
                            Request a Demo
                            <BsArrowDown className="ml-2 block lg:hidden" />
                            <BsArrowRight className="ml-2 hidden lg:block" />
                        </div>
                        <p className="text-lg py-4 text-white">or</p>
                        <div className="flex justify-center">
                            <Link href="/#contact">
                                <ButtonSecondary
                                    onClick={() => console.log("clicked")}
                                    className="text-lg bg-white text-blue-500 hover:bg-neutral-200"
                                >
                                    Contact Us
                                </ButtonSecondary>
                            </Link>
                        </div>
                    </Title>
                    <div className="flex flex-col justify-center bg-white dark:bg-neutral-800 pb-8 py-6 px-16 rounded-2xl">
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
                        />{" "}
                        <div className="flex justify-center pt-5">
                            <ButtonPrimary
                                type="submit"
                                onClick={() => console.log("clicked")}
                                className=""
                            >
                                Submit
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
                <h2 className="py-6">
                    <div className="text-center text-xl">
                        You can always read more about Echo on one of our{" "}
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

export default Echo
