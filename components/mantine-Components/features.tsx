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

export function FeaturesGrid({ title, description }) {
    const MOCKDATA = [
        // {
        //     icon: BiDonateHeart,
        //     title: "Provide evidence based and personalized care plans",
        //     description:
        //         "Smartplan allows anyone to create detailed care plans that cover all aspects of patient care, including disease specific symptom analysis, medication management, lifestyle modifications, education, and follow-up appointments."
        // },
        {
            icon: AiOutlineMessage,
            title: "Realtime messaging and referrals",
            description:
                "Ditch the fax machine, sign up on our Clinic-Connect network today for free! Clinic-Connect is a realtime messaging and referral system that allows you to communicate with other providers in a HIPAA compliant way. Think about Slack, but for healthcare. Anyone who is part of the network can send referrals and communicate with each other in realtime."
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
            title: "Seamlessly add online pre-registration",
            description:
                "We make it easy to add seamless online pre-registration to your practice. Simply embed the custom link we provide on your website  and instantly have a secure online registration flow for your patients."
        },
        {
            icon: BsMic,
            title: "Dictation and transcription",
            description:
                "Use our dictation and transcription service to save time writing your notes. We utilize the latest in speech recognition technology that is extemely accurate with medical terminology and can even remove background noise, 'umms' from speech and translate  any langauge to English. "
        },
        //AI powered automation. The AI can reach out to patients on your behalf and handle their appointment scheduling, prescription refills, testing reminders and more. It can handle inbound calls and answer the patient's questions or route them to the appropriate person if necesary. It can also handle outbound calls and send reminders to patients about their upcoming appointments, or follow up with them after their appointment to see how they are doing. Received a new referral? The AI can reach out to the patient and schedule their appointment for you.
        {
            icon: MdOutlineAutoAwesome,
            title: "AI powered automation (coming soon)",
            description:
                "Supercharge your practice with Ava, our AI assistant! Ava effortlessly integrates with our other products and can be custom trained on data you provide. Ava can respond to patient calls and texts, cancel appointments, and route conversations to the appropriate person when needed. Received a new referral through Clinic-Connect? Ava can summarize PDF files and extract essential information for you. Ava can then reach out to the patient, schedule their appointment, and respond to the referring provider with the appointment details."
        }

        // {
        //     icon: MdOutlinePersonOff,
        //     title: "Redact PHI in text, images and audio",
        //     description: (
        //         <span>
        //             Anonymize your patients PHI in text, images, and audio to
        //             ensure HIPAA compliance. We host our own NLP (Natural
        //             Language Processing){" "}
        //             {/* <a
        //                 className="text-blue-500 hover:underline"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 href="https://www.turing.com/kb/a-comprehensive-guide-to-named-entity-recognition"
        //             >
        //                 {" "}
        //                 named enity recogntion
        //             </a>{" "} */}
        //             model built by
        //             <a
        //                 className="text-blue-500 hover:underline mx-1"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 href="https://www.private-ai.com/"
        //             >
        //                 Private AI
        //             </a>
        //             that allows you to redact PHI in text, images, and videos.
        //             Simply upload your desired document and it will return fully
        //             anonymized.
        //         </span>
        //     )
        // }

        // {
        //     icon: AiOutlineCloudUpload,
        //     title: "Access anywhere",
        //     description:
        //         "Our web app is cloud based and can be accessed from anywhere. No need to download any annoying installers, just log in and you're ready to go."
        // },
        // {
        //     icon: RxCircleBackslash,
        //     title: "No limits",
        //     description:
        //         "We don't limit the number of patients you can bill CCMs for, the number of calls you can make, or the amount of data that flows through our system. Pay one monthly fee and you're good to go."
        // },

        // {
        //     icon: ,
        //     title: "24/7 Support",
        //     description:
        //         "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"
        // },
        // {
        //     icon: BiCheckShield,
        //     title: "Secure by default",
        //     description:
        //         "We utilize the latest in encryption technology to ensure that your patient's data is always safe and secure. We utilize a HIPAA compliant database, server, and hosting provider and require 2FA everytime for all of our users."
        // }
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
