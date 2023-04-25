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
import {
    BsArrowRight,
    BsArrowDown,
    BsCashStack,
    BsShuffle
} from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import { FaHandHoldingHeart } from "react-icons/fa"
import { AiOutlineArrowUp } from "react-icons/ai"

const carePlans = [
    "Annual Wellness Visit",
    "Dementia / Alzheimer's",
    "Depression and Anxiety",
    "Migraines",
    "Parkinson's disease",
    "General Care Plan (CHF, Diabetes, HTN, etc.)"
]

const features = [
    {
        icon: BsShuffle,
        title: "Streamline Workflow",
        description:
            "Our software simplifies the chronic care management process, automating essential functions, and freeing up staff time. By streamlining the workflow, you can provide better care to patients without sacrificing productivity"
    },
    {
        icon: BsCashStack,
        title: "Increase Revenue",
        description:
            "Our solution makes it easy to qualify for CMS reimbursements for chronic care management, leading to increased revenue for your practice."
    },
    {
        icon: AiOutlineArrowUp,
        title: "Improve Patient Outcomes",
        description:
            "By using our platform to monitor patient progress and manage care plans, you can provide more personalized care that leads to improved patient outcomes."
    },
    {
        icon: FaHandHoldingHeart,
        title: "Delegate Care Delivery",
        description:
            "SmartPlan enables physicians to delegate chronic care management tasks to other staff members, such as nurses or medical assistants, without sacrificing the quality of care. "
    }
]

const howItWorks = [
    {
        number: 1,
        description: "Sign into our web app."
    },
    {
        number: 2,
        description:
            "Head over to the SmartPlan tab to get started. You can create a new patient or retest an existing one."
    },
    {
        number: 3,
        description:
            "The Care Plans prompt the clinician through various sections including disease specific quetionaires and tests, mental health evaluations, medication review with contraindications, safety assessments, and lifestyle modifications with the patient"
    },
    {
        number: 4,
        description:
            "Once finished, the care plans prepare a clinical copy for physicians and a customized SmartPlan for the patients and care givers to take home with them. You can print or email the care plans to the patient."
    },
    {
        number: 5,
        description:
            "You're done! The software will automatically alert you when the patient is due for a retest."
    }
]

const SmartPlan = () => {
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
                        src="/smartplanLogo.png"
                        alt="Smart Plan"
                        width={350}
                        height={350}
                    />
                </h1>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    <Image
                        className="rounded-xl brightness-150 shadow-lg dark:shadow-gray-700"
                        src="/carePlan.jpg"
                        width={400}
                        height={400}
                        alt="Care Plan"
                        priority={true}
                    />
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-2xl pb-2">
                            The Problem :
                        </h2>
                        <h3>
                            Managing chronic care in your practice can be
                            challenging due to several reasons. Firstly, it can
                            be time-consuming to monitor and track patients'
                            progress continuously. Secondly, there is a lack of
                            standardized protocols across healthcare systems,
                            making it challenging to manage chronic care
                            effectively. Additionally, there are reimbursement
                            challenges from payers, which can be confusing for
                            healthcare providers. Implementing chronic care
                            management in your practice can be a daunting task,
                            but the benefits of providing better patient care
                            and increased revenue make it worth considering.
                        </h3>
                        {/* <h3>
                            Chronic care management in elderly patients is a
                            daunting task for any clinic. Most elderly patients
                            have more than one chronic disease that are managed
                            by different specialists. These patients have to
                            keep up with appointments, medications, self care
                            and now they also have to ensure that their
                            neurologist knows what the cardiologist changed
                            about their regimens. In many of these patients, the
                            diseases can overwhelm them, leading to a disruption
                            in communication. This can cause extra fees for
                            double testing, overmedication, adverse side effects
                            of drugs, and several other negative events, all
                            because each of the doctors are unaware of what the
                            other is doing to best help the patient.
                        </h3> */}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 py-20 items-center">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-2xl pb-2">
                            Our Solution :
                        </h2>
                        {/* <h3>
                            We have made an application to take the
                            responsibility off of these patients called
                            SmartPlan. We keep a standardized timely record of
                            multiple chronic care plans that can assist
                            immensely in care management across any and all
                            healthcare facilities. These care plans are as
                            relaxed as annual visits or as acute as monthly
                            visits. They cover chronic diseases such as
                            Alzheimer's, Parkinson's, Migraines and general
                            wellness. Every time the patient comes to a visit,
                            the past visit information is available to compare
                            for changes in medications, ability to maintain
                            independence, mental and emotional wellness, and
                            many more important categories of care. The patients
                            no longer have to shoulder the weight of managing
                            their care between facilities since the care plans
                            prompt the clinic or hospital staff to ask the most
                            up to date evidence-based questions at all visits.
                            If a patient's health begins to decline it is often
                            caught earlier than the patient can become
                            symptomatic
                        </h3> */}
                        <h3>
                            At our company, we understand the challenges that
                            come with implementing chronic care management into
                            your practice. That's why we have developed an
                            automated software solution that simplifies the
                            process, making it easy to incorporate into your
                            workflow seamlessly. Our software automates several
                            essential functions, including tracking patient
                            progress, keeping up with retest dates, and
                            generating reports and patient handouts, freeing up
                            your staff's time to focus on providing high-quality
                            care to your patients. With our solution, you can
                            take advantage of CMS reimbursements for chronic
                            care management while providing your patients with
                            the best possible care.
                        </h3>
                    </div>{" "}
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700"
                        src="/ourCarePlan.jpg"
                        width={400}
                        height={400}
                        alt="Improved Care Plan"
                        priority={true}
                    />
                </div>

                <div className="py-10 ">
                    <Container size="lg">
                        <Grid gutter={80}>
                            <Col span={12} md={5}>
                                <Title order={2} className="text-3xl">
                                    Smartplan makes chronic care management easy
                                </Title>
                                <Text className="py-6">
                                    Revolutionize Your Practice with Our
                                    Solution for Chronic Care Management
                                </Text>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://app.digitalhealthcaresolutions.io/login"
                                >
                                    <ButtonPrimary
                                        type="button"
                                        className={""}
                                        onClick={console.log("")}
                                    >
                                        Get Started
                                    </ButtonPrimary>
                                </a>
                                <div className="hidden lg:block pt-20">
                                    {/* <Image
                                        className="rounded-xl dark:brightness-150 "
                                        src="/smartplanLogo.png"
                                        alt="Smart Plan"
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

                <div className="py-10 flex justify-center gap-8 ">
                    <Container size="lg">
                        <Grid className="flex flex-col items-center">
                            <Title order={2} className="text-3xl">
                                Care Plans
                            </Title>
                            <Text className="pt-6 pb-10 text-xl">
                                We currently offer the following care plans:
                            </Text>
                        </Grid>
                        <ul className="lg:grid lg:grid-cols-2 ">
                            {carePlans.map((item, index: number) => (
                                <li className="py-3 mr-4">
                                    <div className="flex items-center">
                                        <ThemeIcon
                                            size={44}
                                            radius="md"
                                            className="bg-gray-300 text-black dark:bg-neutral-600 dark:text-white"
                                        >
                                            {index + 1}
                                        </ThemeIcon>
                                        <p className="ml-3 text-xl">{item}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div>

                <h2 className="text-black dark:text-white text-3xl font-semibold text-center py-6 lg:mt-12">
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
                ))}
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
                <form
                    id="launch-list"
                    className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 my-24 bg-blue-500  rounded-xl px-0 py-8"
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
                        You can always read more about Smartplan on one of our{" "}
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

export default SmartPlan
