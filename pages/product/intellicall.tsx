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
import { MdOutlinePersonPin } from "react-icons/md"
import { GiBattery100 } from "react-icons/gi"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"

const features = [
    {
        icon: BiPhoneCall,
        title: "Efficient Communication",
        description:
            "IntelliCall's AI technology transcribes calls, sorts them by topic, and provides actionable insights, making it easier to manage communication flow in your medical practice. This feature allows you to save time, streamline workflow, and prioritize patient needs."
    },
    {
        icon: AiOutlineArrowUp,
        title: "Increase reimbursement",
        description:
            "With IntelliCall, when you text and call patients back through our system, the content is auto documented to allow for easy billing. This feature allows you to increase your reimbursement by ensuring that all virtual patient communication is documented."
    },
    {
        icon: GiBattery100,
        title: "Improved Staff Efficiency",
        description:
            "By automating communication management and transcribing calls into text, IntelliCall allows your staff to focus on other important tasks, saving time and boosting efficiency."
    },
    {
        icon: MdOutlinePersonPin,
        title: "Personalized Patient Experience:",
        description:
            "Our solution allows you to communicate with patients in a way that feels more personal and engaging. By using IntelliCall, you can enhance your patient's experience and show them that you care about their needs."
    }
]

const howItWorks = [
    {
        number: 1,
        description:
            "Sign into our software and go to the settings page. Under the IntelliCall tab, you can register a new phone number and configure your call settings."
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
            "Now when you visit the IntelliCall tab, you can see your call history. You can see the date and time of the call, the caller's phone number, the duration of the call, and the transcription of the voicemail. You can also listen to the voicemail by clicking the play button."
    },
    {
        number: 5,
        description:
            "That's it! You're all set up. Now you can sit back and relax while your calls are being handled by IntelliCall."
    }
]

const IntelliCall = () => {
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
                message: "You have been added to our launch list",
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
            <Container size="lg">
                <h1 className="flex justify-center pb-8 w-full text-2xl md:text-3xl mb-6">
                    <Image
                        className="rounded-xl dark:brightness-150 "
                        src="/IntelliCallLogo.png"
                        width={350}
                        height={350}
                        alt="IntelliCall Logo"
                    />
                </h1>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-xl pb-2">
                            The Problem :
                        </h2>
                        <h3>
                            Constant phone calls and the need to listen to
                            voicemails can be overwhelming and time-consuming
                            for medical practices. The volume of incoming calls
                            can be difficult to manage, leading to long hold
                            times and frustrated patients. Moreover, the need to
                            listen to and respond to voicemails can consume a
                            significant portion of staff time, making it
                            difficult to keep up with other important tasks.
                            These communication challenges can lead to decreased
                            patient satisfaction, reduced staff efficiency, and
                            even lost revenue.
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
                            Managing communication flow in a medical practice
                            can be overwhelming, but IntelliCall makes it easy.
                            Our intelligent call management software uses
                            advanced AI technology to transcribe calls, sort
                            them by topic, and provide actionable insights. With
                            our solution, you can quickly identify the purpose
                            of each call and prioritize them accordingly,
                            without the need to listen to long voicemail
                            messages. Plus, our software allows you to text and
                            call back patients directly from your browser using
                            AI-generated tips, enhancing patient engagement and
                            satisfaction. By using IntelliCall, medical
                            practices can streamline communication management,
                            save time, and provide a better patient experience.
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
                            className=" bg-neutral-100 dark:bg-neutral-700 ring-1 dark:ring-gray-500 ring-blue-500  text-blue-500 dark:text-white hover:shadow-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 "
                        >
                            See Demo
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

                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://app.digitalhealthcaresolutions.io/login"
                                >
                                    <ButtonPrimary
                                        className=""
                                        onClick={console.log("")}
                                    >
                                        Get Started
                                    </ButtonPrimary>
                                </a>
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
                            Get notified when we launch{" "}
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
                                Notify Me
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
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
