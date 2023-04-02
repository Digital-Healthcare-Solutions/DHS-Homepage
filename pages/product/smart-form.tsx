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
import ButtonPrimary from "../../components/UI-Components/button-primary"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { BsArrowRight, BsArrowDown } from "react-icons/bs"
import Link from "next/link"
import { showNotification } from "@mantine/notifications"
import { MdAccessTime } from "react-icons/md"
import { GiOnTarget, GiHeartPlus } from "react-icons/gi"
import { TfiTarget } from "react-icons/tfi"

const howItWorks = [
    {
        number: 1,
        description:
            "You configure some settings on the SmartForm settings dashboard. You can add your logo, add your own custom fields, and more."
    },

    {
        number: 2,
        description:
            "We generate a unique link for you to share with your patients. And you add that link to your website, social media, or anywhere else you want."
    },
    {
        number: 3,
        description:
            "The patient fills out the form and submits it. You can then view the form in the SmartForm dashboard."
    },
    {
        number: 4,
        description:
            "That's it! You now have paperless pre registration integrated in your practice. "
    }
]

const features = [
    {
        icon: MdAccessTime,
        title: "Save time and money",
        description:
            "By using our paperless pre-registration system, you can reduce wait times and eliminate the need for manual data entry. Patients can complete forms in advance, allowing staff to review and process information ahead of time, reducing delays and saving time for both patients and staff."
    },
    {
        icon: TfiTarget,
        title: "Improve data accuracy:",
        description:
            "ur system automatically checks for errors and ensures that all required fields are completed, reducing the likelihood of errors in patient data. This feature can help improve the accuracy of patient information and reduce the risk of errors in medical records."
    },
    {
        icon: GiHeartPlus,
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
                        src="/SmartFormLogo.png"
                        alt="Smart Plan"
                        width={315}
                        height={300}
                    />
                </h1>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-32 ">
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700 "
                        src="/registration.jpg"
                        width={300}
                        height={300}
                        alt="Analog registration on paper"
                        priority={true}
                    />

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
                    <Image
                        className="rounded-xl shadow-lg dark:shadow-gray-700"
                        src="/online.jpg"
                        width={400}
                        height={400}
                        alt="Online Registration graphic"
                        priority={true}
                    />
                </div>

                <Container size="lg" py="xl">
                    <Group position="center">
                        <Badge variant="filled" size="lg">
                            Efficient Registration
                        </Badge>
                    </Group>

                    <Title
                        order={2}
                        className={classes.title}
                        ta="center"
                        mt="sm"
                    >
                        SmartForm makes paperwork suck less
                    </Title>

                    <Text
                        c="dimmed"
                        className={classes.description}
                        ta="center"
                        mt="md"
                    >
                        Improve your practice's new patient flow and save time
                        and money for your business.
                    </Text>

                    <SimpleGrid
                        cols={3}
                        spacing="xl"
                        mt={50}
                        breakpoints={[{ maxWidth: "md", cols: 1 }]}
                    >
                        {features.map((feature) => (
                            <Card
                                key={feature.title}
                                shadow="md"
                                radius="md"
                                className={classes.card}
                            >
                                <feature.icon
                                    size={30}
                                    color={theme.fn.primaryColor()}
                                />
                                <Text
                                    fz="lg"
                                    fw={500}
                                    className={classes.cardTitle}
                                    mt="md"
                                >
                                    {feature.title}
                                </Text>
                                <Text fz="sm" c="dimmed" mt="sm">
                                    {feature.description}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Container>

                {/* 
                <div className="py-10 ">
                    <Container size="lg">
                        <Grid gutter={80}>
                            <Col span={12} md={5}>
                                <Title order={2} className="text-3xl">
                                    Smartplan makes testing your chronic care
                                    management patients easy
                                </Title>
                                <Text className="py-6">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quo sint Lorem ipsum dolor
                                    sit amet consectetur adipisicing elit. Ut,
                                    illum?
                                </Text>

                                <ButtonPrimary onClick={""} className="">
                                    Get started
                                </ButtonPrimary>
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
                </div> */}
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
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 my-24 bg-blue-500  rounded-xl px-0 py-8">
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
                    <form
                        className="flex flex-col justify-center bg-white dark:bg-neutral-800 pb-8 py-6 px-16 rounded-2xl"
                        onSubmit={formik.handleSubmit}
                    >
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
                    </form>
                </div>
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

export default SmartForm
