import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
    Divider
} from "@mantine/core"
import { RiComputerLine, RiToolsFill } from "react-icons/ri"
import { BsCashStack, BsMic } from "react-icons/bs"
import { MdOutlineAutoAwesome, MdOutlinePhoneEnabled } from "react-icons/md"
import { MdOutlinePersonOff } from "react-icons/md"
import { BsChatLeftText } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import Link from "next/link"
import { BackgroundGradient } from "../ui/background-gradient"
import { CgWebsite } from "react-icons/cg"

export function Feature({ icon: Icon, title, description }) {
    const theme = useMantineTheme()
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size={20} stroke={1.5} />
            </ThemeIcon>
            <Text
                size={"lg"}
                style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}
            >
                {title}
            </Text>
            <Text size="md" color="dimmed" style={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </div>
    )
}

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4
    },

    description: {
        textAlign: "center",

        [theme.fn.smallerThan("sm")]: {
            textAlign: "left"
        }
    }
}))

export function FeaturesGrid({ title, description }) {
    const FeatureArray = [
        {
            icon: AiOutlineMessage,
            title: "Realtime messaging and efax", //chat appp and efax built into one
            description: (
                <div>
                    We know the struggle handling all of the documents and
                    external communication with other healthcare providers.
                    That's why we built{" "}
                    <Link
                        href={"/product/clinic-connect"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Clinic-Connect
                    </Link>
                    , a realtime messaging and referral system that allows you
                    to communicate with other providers in a multichannel, HIPAA
                    compliant way. Whether through{" "}
                    <Link
                        href={"/product/clinic-connect"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        e-fax
                    </Link>
                    ,{" "}
                    <Link
                        href={"/product/clinic-connect"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        instant messaging
                    </Link>
                    , or the{" "}
                    <Link
                        href={"/product/clinic-connect"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        web portal
                    </Link>
                    , we've got you covered.
                </div>
            )

            // "Ditch the fax machine, sign up on our Clinic-Connect network today for free! Clinic-Connect is a realtime messaging and referral system that allows you to communicate with other providers in a HIPAA compliant way. Think about Slack, but for healthcare. Anyone who is part of the network can send referrals and communicate with each other in realtime."
        },

        {
            icon: MdOutlinePhoneEnabled,
            title: "Streamlined Patient Communication",
            description: (
                <div>
                    We built our{" "}
                    <Link
                        href={"/product/call-center"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Call Center
                    </Link>{" "}
                    with the goal of making it easier to communicate with
                    patients. Our product plugs in with your existing phone
                    system and allows you to view call transcriptions, listen to
                    voicemails, respond via text messages, make and receive
                    calls, and more right from your computer or mobile device.
                </div>
            )
        },
        {
            icon: MdOutlineAutoAwesome,
            title: "Generate Clinical Notes With AI",
            description: (
                <div>
                    <Link
                        href="product/echo"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Echo
                    </Link>{" "}
                    streamlines clinical documentation by converting
                    provider-patient conversations into detailed clinical notes
                    using our fine tuned AI. Choose between SOAP or nurse's note
                    formats, customized to your specialty. Our service includes
                    custom model training to tailor note formatting to your
                    practice's specific requirements.
                </div>
            )
        },

        {
            icon: RiComputerLine,
            title: "Online intake forms",
            description: (
                <div>
                    <Link
                        href={"/product/smart-form"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        SmartForm
                    </Link>{" "}
                    streamlines adding online pre-registration and intake forms
                    to your practice's website. Use our intuitive Drag and drop
                    form builder to create custom forms for your practice. You
                    can embed our provided custom link to offer secure and
                    streamlined form submissions for patients. Plus, our system
                    allows for SMS sending of form links and a convienent
                    dashboard for viewing form submissions.
                </div>
            )
        },
        {
            icon: BsMic,
            title: "Dictation software",
            description: (
                <div>
                    Use{" "}
                    <Link
                        href="product/smart-voice"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        SmartVoice{" "}
                    </Link>
                    to save time writing your notes. We utilize the latest in AI
                    speech recognition technology to provide accurate and fast
                    results. Our service can even remove background noise,
                    'umms' from speech, translate any langauge to English, and
                    more.
                </div>
            )
        },
        {
            icon: BsCashStack,
            title: "Chronic Care Management (CCM)",
            description: (
                <div>
                    <Link
                        href={"/product/smart-plan"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        SmartPlan
                    </Link>{" "}
                    allows you to bill for CCM services, which is a reimbursable
                    CPT code under Medicare. These services are perfomed on a
                    recurring basis, and can be billed monthly, quarterly, or
                    annually, depending on the CPT code.
                </div>
            )
        },
        {
            icon: CgWebsite,
            title: "Custom Website Development",
            description: (
                <div>
                    We offer{" "}
                    <Link
                        href={"/product/web-development"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        custom website development
                    </Link>{" "}
                    for your practice. We will work with you to design and
                    develop a website that reflects your practice's brand and
                    values. When we build your website, we also include a
                    drop-in form for web referral submissions, and an AI chat
                    widget for patient and provider Q&A on your website.
                </div>
            )
        },
        {
            icon: RiToolsFill,
            title: "Other Tools and Services",
            description: (
                <div>
                    We also offer a variety of other tools and services to help
                    you manage your practice. You can view a full list of our
                    services{" "}
                    <Link
                        href={"/product/tools"}
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        here
                    </Link>
                    .
                </div>
            )
        }
    ]

    const { classes, theme } = useStyles()
    const features = FeatureArray.map((feature, index) => (
        <div key={index}>
            <Feature {...feature} />
            <Divider mt={20} size={1} className="block md:hidden" />
        </div>
    ))

    return (
        <div className=" bg-white dark:bg-neutral-900 " id="features">
            {" "}
            <Container size={1700} className={classes.wrapper}>
                <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>

                <Container size={560} p={0} pb={30}>
                    <Text size="lg" className={classes.description}>
                        {description}
                    </Text>
                </Container>
                {/* <Divider mt={20} size={2} /> */}
                <BackgroundGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-neutral-900">
                    <SimpleGrid
                        mt={20}
                        cols={4}
                        spacing={theme.spacing.xl * 2}
                        breakpoints={[
                            { maxWidth: 1200, cols: 3, spacing: "xl" },
                            { maxWidth: 980, cols: 2, spacing: "xl" },
                            { maxWidth: 755, cols: 1, spacing: "xl" }
                        ]}
                    >
                        {features}
                    </SimpleGrid>
                </BackgroundGradient>
            </Container>
        </div>
    )
}
