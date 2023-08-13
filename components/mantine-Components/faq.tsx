import { Container, Title, Accordion, createStyles } from "@mantine/core"
import Link from "next/link"

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 2,
        // paddingBottom: theme.spacing.xl * 2,
        minHeight: 650
    },

    title: {
        marginBottom: theme.spacing.xl * 1.5
    },

    item: {
        borderRadius: theme.radius.md,
        marginBottom: theme.spacing.lg,

        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`
    }
}))

export function FaqSimple() {
    const { classes } = useStyles()
    return (
        <div className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-900 pb-10 ">
            <Container size="sm" className={classes.wrapper}>
                <Title align="center" className={classes.title}>
                    Frequently Asked Questions
                </Title>

                <Accordion variant="separated">
                    {" "}
                    <Accordion.Item
                        className={classes.item}
                        value="clinic-connect"
                    >
                        <Accordion.Control>
                            How does Clinic-Connect work?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Clinic Connect is a peer to peer platform that
                                allows you to connect with other healthcare
                                professionals in a secure way. You can use our
                                platform to refer patients, send messages, and
                                share files with other healthcare professionals
                                on our platform.
                            </p>
                            <p>
                                We offer a free trial for 60 days. After that
                                you can choose to continue using our service for
                                39.99 per month or cancel at any time.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="benefits">
                        <Accordion.Control>
                            What are the benefits of using Intellicall?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Intellicall is a call center that helps you
                                manage your incoming calls. We provide a
                                dedicated phone number that you can use to
                                forward voicemails and calls to. Our service
                                transcribes voicemails into text and allows you
                                to respond to them via text message. We also
                                provide a way for you to manage your
                                appointments and send appointment reminders to
                                your patients.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item
                        className={classes.item}
                        value="integration"
                    >
                        <Accordion.Control>
                            How can I integrate your call center with my
                            practice?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                There are several ways to integrate our call
                                center with your practice. You can simply just
                                copy and paste the new number we provide you
                                into your google buisness account and it will
                                automatically forward calls to us. You could
                                also forward calls to us via your existing phone
                                system if it is SIP enabled. We can also assist
                                you in setting up a BYOC (Bring Your Own
                                Carrier) account with us. This is a great option
                                for practices that want to keep their existing
                                phone number and have the ability to forward
                                calls to us without having to change their
                                existing system.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="ccm">
                        <Accordion.Control>
                            What is CCM and how does it work?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                CCM (Chronic Care Management) is a medicare
                                benefit that allows you to bill for the time you
                                spend managing the care of your chronic patients
                                (more than 1 condition lasting longer than 12
                                months).
                            </p>
                            <p>
                                We provide a platform that allows you to manage
                                your patients, their care plans, and their
                                appointments. We also provide a way for you to
                                bill for your time spent managing their care
                                whether it be via phone, text, or in person.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="secure">
                        <Accordion.Control>
                            How do you keep my patients information secure?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                We take the security of your patients
                                information very seriously. We utilize a variety
                                of technologies to ensure that your patients
                                information is secure. All data is encrypted in
                                transit and at rest. We also host our own NLP
                                (Natural Language Processing) model from{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href="https://www.private-ai.com/"
                                >
                                    Private AI
                                </Link>{" "}
                                to remove any PHI (Protected Health Information)
                                from the data we receive from patients before
                                running it through any machine learning models.
                                This ensures that your patient's data is never
                                sent to any third party vendors.
                            </p>
                            <p>
                                Read more about our{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href="/privacy-policy"
                                >
                                    Privacy Policy
                                </Link>
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item
                        className={classes.item}
                        value="non-physician"
                    >
                        <Accordion.Control>
                            Can I use your service if I am not a physician?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Yes! Any healthcare provider can use our
                                service. We have many nurse practitioners, PA's,
                                pharmacists, and other healthcare providers that
                                use our service to manage their patients.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="academic">
                        <Accordion.Control>
                            Do you offer discounts for academic institutions?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Yes! If you are a researcher or academic
                                institution, please{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href=""
                                >
                                    contact us{" "}
                                </Link>
                                and we can discuss a discounted plan.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>{" "}
        </div>
    )
}
