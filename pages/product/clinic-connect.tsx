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
import { BsArrowRight, BsArrowDown } from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import {
    MdLockOutline,
    MdOutlinePersonPin,
    MdOutlineTrendingUp
} from "react-icons/md"
import { GiBattery100 } from "react-icons/gi"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { RxCircleBackslash } from "react-icons/rx"
import { FaRegClock, FaRegComments } from "react-icons/fa"
import { FiTrendingUp } from "react-icons/fi"
import { IoTrendingUpOutline, IoTrendingUp } from "react-icons/io5"
import Head from "next/head"

const features = [
    {
        icon: MdOutlineTrendingUp,
        title: "Enhanced Efficiency",
        description:
            "Clinic-Connect eliminates the reliance on traditional fax machines, enabling healthcare providers to streamline their referral process. Say goodbye to the hassle of paper-based systems, lost faxes, and manual data entry. With Clinic-Connect's digital messaging system, referrals can be sent and received instantly."
    },
    {
        icon: FaRegComments,
        title: "Improved Communication",
        description:
            "Clinic-Connect fosters seamless communication and collaboration among healthcare providers. By providing a secure, peer-to-peer messaging platform, it enables real-time discussions, exchange of patient information, and the ability to seek clarifications or provide updates."
    },
    {
        icon: MdLockOutline,
        title: "Secure messaging",
        description:
            "Clinic-Connect prioritizes security and compliance by utilizing  encryption protocols and adhering to industry standards. Unlike fax machines, which can be prone to privacy breaches and unauthorized access, Clinic-Connect ensures secure transmission of sensitive patient information, maintaining confidentiality and security."
    },
    {
        icon: FaRegClock,
        title: "Time and Cost Savings",
        description:
            "Clinic-Connect offers significant time and cost savings compared to traditional fax-based referral systems. Eliminating the need for manual faxing, printing, and filing saves valuable staff hours. Additionally, Clinic-Connect eliminates paper and ink expenses associated with faxing, reducing operational costs and contributing to a more sustainable healthcare environment."
    }
]

const howItWorks = [
    {
        number: 1,
        description: "Sign up for our platform and create an account."
    },
    {
        number: 2,
        description:
            "Visit the Clinic-connect page. You will be redirected to the settings page to configure your initial settings and register your clinic for Clinic-Connect."
    },
    {
        number: 3,
        description:
            "Once you have configured your settings, an internal chatroom will automatically be created for your clinic. You can use this as a way to communicate with your staff."
    },
    {
        number: 4,
        description:
            "Head back to the Clinic-Connect page. You can now start sending connection requests with other clinics. Once they accept your request, you will be able to communicate with them instantly"
    },
    {
        number: 5,
        description:
            "To send a referral, you can attach a PDF file to the chatroom or you can fill out a referral form with the patient's information to send to the other clinic."
    },
    {
        number: 6,
        description:
            "The clinic will receive your message in realtime and will be able to respond to you through the chatroom."
    },
    {
        number: 7,
        description:
            "That's it! Your conversation history will always be available to you in the chatroom if you need to refer back to it."
    }
]

const ClinicConnect = () => {
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
                <h1 className="flex justify-center pb-8 w-full text-2xl md:text-3xl mb-6">
                    <Image
                        className="rounded-xl dark:brightness-150 "
                        src="/clinic-connect.png"
                        width={350}
                        height={350}
                        alt="Clinic Connect logo"
                    />
                </h1>
                <section className="flex flex-col lg:flex-row items-start gap-20">
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
                </section>
                {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                            The Problem :
                        </h2>
                        <div className="grid-cols-1 md:grid-cols-2 grid gap-4">
                            <ul className="list-disc list-inside">
                                <li className="pb-2">
                                    Fax machines are slow, unreliable, and error
                                    prone
                                </li>
                                <li className="pb-2">
                                    High paper and ink usage are costly to the
                                    clinic and the environment
                                </li>

                                 Old fashioned ways of communicating between
                            healthcare providers get in the way of providing the
                            best care for patients. Fax machines can be slow,
                            unreliable, and error prone. Medical practices spend
                            hundreds of dollars per month in paper and ink
                            costs, waste hours of staff time on sorting and
                            filing faxes, and risk losing important patient
                            information. Many times, faxes are sent to the wrong
                            number or the fax machine is out of paper and the
                            fax is never received. This can lead to serious
                            consequences for patients and providers. 
                            </ul>
                            <ul className="list-disc list-inside">
                                <li className="pb-2">
                                    Hours of staff time are wasted on sorting
                                    and filing faxes
                                </li>

                                <li className="pb-2">
                                    Faxes are often sent to the wrong number
                                </li>
                            </ul>
                        </div>
                    </div>
               
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700"
                        src="/faxing-sucks.jpeg"
                        width={300}
                        height={300}
                        alt="Fax machine"
                        priority={true}
                    />
                </div>  */}
                {/* <div className="flex flex-col lg:flex-row justify-between gap-8 pt-20 items-center">
                    {" "}
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700"
                        src="/cloud-computing.jpg"
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
                            Clinic-Connect is a commmunication platform that
                            allows healthcare providers to refer patients to
                            each other in real time over the internet. Our
                            solution enables healthcare providers to communicate
                            with each other in a modern, efficient, and secure
                            way, eliminating the headache of using archaic fax
                            machines. Simply connect with another clinic, send
                            your patient's record as a PDF or other file type,
                            and the other clinic will receive it instantly. You
                            can even discuss the patient's case with the other
                            clinic in real time in the chatroom, eliminating the
                            need for phone tag. Clinic-Connect is HIPAA
                            compliant and secure, so you can rest assured that
                            your patient's information is safe. Sign up today
                            for free and start communicating with other
                            healthcare providers in your area.
                        </h3>
                    </div>{" "}
                </div> */}
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
                                    <ButtonPrimary className=" bg-gradient-to-tr from-blue-500 to-cyan-400 hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:text-white">
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
                {/* <h2 className="py-6">
                    <div className="text-center text-xl">
                        You can always read more about Clinic-Connect on one of
                        our{" "}
                        <Link
                            href="/blog"
                            className="text-blue-500 hover:underline underline-offset-4"
                        >
                            {" "}
                            blog
                        </Link>{" "}
                        posts.
                    </div>
                </h2> */}
            </Container>
        </div>
    )
}

export default ClinicConnect
