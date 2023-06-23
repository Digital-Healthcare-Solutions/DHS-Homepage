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
    "General Care Plan (CHF, Diabetes, HTN, +12 more)"
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
        description:
            "Create a new patient or an existing patient in our web app."
    },
    {
        number: 2,
        description:
            "Select the care plan that best fits the patient's needs. You can choose from a variety of care plans, including Annual Wellness Visit, Dementia / Alzheimer's, Depression and Anxiety, Migraines, Parkinson's disease, and General Care Plan (CHF, Diabetes, HTN, +12 more)."
    },
    {
        number: 3,
        description:
            "Follow the prompts to enter the patient's medical history, medications, and other relevant information."
    },
    {
        number: 4,
        description:
            "Our software will walk your staff through the questions to ask the patient during the care management session. It will dynamically generate the questions based on the patient's responses to previously asked questions."
    },
    {
        number: 5,
        description:
            "All questions asked during the care management session are based on the latest clinical guidelines and evidence based practices for each condition."
    },
    {
        number: 6,
        description:
            "When the care plan session is complete, the software will generate a professional report to go into the patients record and a care plan summary that can be shared with the patient."
    },
    {
        number: 7,
        description:
            "The report includes a list of recommended actions for each condition, along with the patient's responses to the questions asked during the care management session."
    },
    {
        number: 8,
        description:
            "The care plan summary includes a list of recommended actions for the patient to take, such as, lifestyle changes, medications, custom diets, and more."
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
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-8 py-20 items-center">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold text-2xl pb-2">
                            Our Solution :
                        </h2>

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
                                        className=" bg-gradient-to-tr from-blue-500 to-cyan-400 hover:shadow-lg hover:from-blue-600 hover:to-cyan-500 hover:text-white"
                                        onClick={() =>
                                            window.open(
                                                "https://app.digitalhealthcaresolutions.io/login"
                                            )
                                        }
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
                    id="request-demo"
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
