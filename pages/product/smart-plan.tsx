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
import Head from "next/head"
import FeatureHeaderSparkle from "../../components/page-Components/featureHeaderSparkle"
import RequestDemo from "../../components/page-Components/requestDemo"

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
    return (
        <div className="py-10">
            <Head>
                <title>Smart Plan | Digital Healthcare Solutions</title>
                <meta
                    name="description"
                    content="Smart Plan is chronic care management software that helps physicians provide better care and earn recurring revenue to patients with chronic conditions."
                />
                <meta
                    name="keywords"
                    content="smart plan, smartplan, smartplan care, smart plan care, smart plan care management, smart plan care management software, smart plan software, smart plan chronic care management,chronic care management, 
                    chronic care management software, chronic care management services, chronic care management program, chronic care management companies, chronic care management solutions, chronic care management companies, chronic care management services, chronic care management program, chronic care management solutions, chronic care management companies, chronic care management services, chronic care management program, chronic care management solutions, chronic care management companies, chronic care management services, chronic care management program, chronic care management solutions, chronic care management companies, chronic care management services, chronic care management program, chronic care management solutions, chronic care management companies, chronic care management services, chronic care management program, chronic care management solutions, chronic care management companies, chronic care management services, chronic care management program, chronic care management solutions, CCM, dementia care plans, dementia, alzheimers care pla, alzheimers, CPT, CPT-99483, 99483, 
                    CPT99483
                    "
                />
                <meta name="author" content="Smart Plan" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Container size="lg">
                <FeatureHeaderSparkle title="SmartPlan" />

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
                            className=" bg-neutral-100 dark:bg-blue-500 ring-1 dark:ring-blue-500 ring-blue-500  text-blue-500 dark:text-white hover:shadow-lg hover:bg-neutral-200 dark:hover:bg-blue-600 "
                        >
                            Read more
                        </ButtonSecondary>
                    </Link>
                </div>
                <RequestDemo />
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
