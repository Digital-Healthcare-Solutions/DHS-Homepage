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
import { BsCashStack } from "react-icons/bs"
import { MdAccessTime, MdOpenInNewOff } from "react-icons/md"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { RxCircleBackslash } from "react-icons/rx"
import { BiDonateHeart } from "react-icons/bi"

export const MOCKDATA = [
    {
        icon: BiDonateHeart,
        title: "Provide evidence based and personalized care plans",
        description:
            "Smartplan allows anyone to create detailed care plans that cover all aspects of patient care, including disease specific symptom analysis, medication management, lifestyle modifications, education, and follow-up appointments."
    },
    {
        icon: MdAccessTime,
        title: "Save time",
        description:
            "Your staff members can create comprehensive and patient specific care plans without the need for the ordering provider to be present. This allows your staff to spend more time with your patients, and less time on paperwork."
    },
    {
        icon: BsCashStack,
        title: "Earn reccuring revenue",
        description:
            "Smartplan allows you to bill for your care plans, and then automatically schedule follow-up appointments for your patients. This allows you to spend more time with your patients, and less time on paperwork."
    },
    {
        icon: AiOutlineCloudUpload,
        title: "Access anywhere",
        description:
            "SmartPlan is cloud based and can be accessed from anywhere. No need to download any annoying installer, just log in and you're ready to go."
    },

    {
        icon: MdOpenInNewOff,
        title: "Handle CCM in your own practice, with ease",
        description:
            "Don't outsource your patient's care to a third party, keep  control of your patient's care and your practice's revenue by using CCM in your own practice"
    },
    {
        icon: RxCircleBackslash,
        title: "No test limits",
        description:
            "We don't limit the number of patients you can bill CCMS for, or try to charge you extra for each patient you test. Pay one monthly fee and bill as many patients as you want"
    },

    {
        icon: RiComputerLine,
        title: "24/7 Support",
        description:
            "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"
    },
    {
        icon: RiComputerLine,
        title: "Secure by default",
        description:
            "We utilize the latest in encryption technology to ensure that your patient's data is always safe and secure. We also have a HIPAA compliant hosting provider and utilize 2FA everytime for all of our users."
    }
]

export function Feature({ icon: Icon, title, description }) {
    const theme = useMantineTheme()
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <Icon size={20} stroke={1.5} />
            </ThemeIcon>
            <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>
                {title}
            </Text>
            <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
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

    // title: {
    //     fontFamily: "Raleway, sans-serif",
    //     fontWeight: 700,
    //     marginBottom: theme.spacing.md,
    //     textAlign: "center",

    //     [theme.fn.smallerThan("sm")]: {
    //         fontSize: 28,
    //         textAlign: "left"
    //     }
    // },

    description: {
        textAlign: "center",

        [theme.fn.smallerThan("sm")]: {
            textAlign: "left"
        }
    }
}))

export function FeaturesGrid({ title, description, data = MOCKDATA }) {
    const { classes, theme } = useStyles()
    const features = data.map((feature, index) => (
        <Feature {...feature} key={index} />
    ))

    return (
        <div className="bg-gradient-to-b from-white to-blue-50 dark:from-neutral-900 dark:to-neutral-800">
            <Container className={classes.wrapper}>
                <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>

                <Container size={560} p={0}>
                    <Text size="md" className={classes.description}>
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
