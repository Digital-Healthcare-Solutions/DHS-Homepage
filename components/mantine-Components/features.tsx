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
import { RiComputerLine } from "react-icons/ri"
import { BsCashStack, BsMic } from "react-icons/bs"
import { MdOutlineAutoAwesome, MdOutlinePhoneEnabled } from "react-icons/md"
import { MdOutlinePersonOff } from "react-icons/md"
import { BsChatLeftText } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"

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
    const MOCKDATA = [
        {
            icon: AiOutlineMessage,
            title: "Realtime messaging and referrals", //chat appp and efax built into one
            description:
                "We know the struggle handling all of the documents and external communication with other healthcare providers. That's why we built Clinic-Connect, a realtime messaging and referral system that allows you to communicate with other providers in a multichannel, HIPAA compliant way. Whether through fax or instant messaging, we've got you covered."

            // "Ditch the fax machine, sign up on our Clinic-Connect network today for free! Clinic-Connect is a realtime messaging and referral system that allows you to communicate with other providers in a HIPAA compliant way. Think about Slack, but for healthcare. Anyone who is part of the network can send referrals and communicate with each other in realtime."
        },

        {
            icon: MdOutlinePhoneEnabled,
            title: "Handle communications in a modern way",
            description:
                "We built our call center (IntelliCall) with the goal of making it easier to communicate with our patients and other providers. Our product plugs in with your existing phone system and allows you to view call transcriptions, listen to voicemails, respond via text messages, make and receive calls, and more right from your computer."
        },

        {
            icon: BsCashStack,
            title: "Earn reccuring revenue",
            description:
                "Our product (SmartPlan) allows you to bill for Chronic Care Management (CCM) services, which is a reimbursable CPT code under Medicare. These services are perfomed on a recurring basis, and can be billed monthly, quarterly, or annually, depending on the CPT code."
        },
        {
            icon: RiComputerLine,
            title: "Seamlessly add online forms to your website",
            description:
                "We make it easy to add seamless online pre-registration & intake forms to your practice's website. Simply embed the custom link we provide on your website and instantly have a secure online form flow for your patients."
        },
        {
            icon: BsMic,
            title: "Medical Dictation",
            description:
                "Use our dictation service to save time & money writing your notes. We utilize the latest in AI speech recognition technology to provide accurate and fast results. Our service can even remove background noise, 'umms' from speech,  translate any langauge to English, and more."
        },

        {
            icon: MdOutlineAutoAwesome,
            title: "AI powered automation (coming soon)",
            description:
                "Supercharge your practice with Ava, our AI assistant! Ava effortlessly integrates with our other products and can be custom trained on data you provide. Ava can automate routine administrative tasks, such as scheduling appointments, sending reminders, summarizing new referrals, and more."
        }
    ]

    const { classes, theme } = useStyles()
    const features = MOCKDATA.map((feature, index) => (
        <Feature {...feature} key={index} />
    ))

    return (
        <div
            className="bg-gradient-to-b from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800 "
            id="features"
        >
            <Container size={"lg"} className={classes.wrapper}>
                <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>

                <Container size={560} p={0}>
                    <Text size="lg" className={classes.description}>
                        {description}
                    </Text>
                </Container>
                {/* <Divider mt={20} size={2} /> */}

                <SimpleGrid
                    mt={60}
                    cols={3}
                    spacing={theme.spacing.xl * 2}
                    breakpoints={[
                        { maxWidth: 980, cols: 2, spacing: "xl" },
                        { maxWidth: 755, cols: 1, spacing: "xl" }
                    ]}
                >
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    )
}
