import { Container, Title, Accordion, createStyles } from "@mantine/core"
import Link from "next/link"
import { BackgroundBeams } from "../ui/background-beams"

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl * 2,
        // paddingBottom: theme.spacing.xl * 2,
        minHeight: 650,
        // minWidth: 700,
        zIndex: 10
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
        <div className=" bg-white  dark:bg-neutral-900 pb-10 relative antialiased flex flex-col w-[99vw]">
            <Container
                size="sm"
                className={"pt-10 min-h-96 z-10 lg:min-w-[720px]"}
            >
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
                            What is Clinic Connect?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Clinic Connect is a multichannel, secure
                                communication platform. Clinic-Connect has 3
                                main channels: 1. Instant Messaging 2.
                                Electronic Faxes and 3. A Secure referral web
                                portal.
                                {/* portal. The instant messaging platform is a peer
                                to peer platform that allows you to connect with
                                other healthcare professionals in a secure way.
                                You can use our platform to refer patients, send
                                messages, and share files with your team and
                                other healthcare professionals on our platform.  */}
                            </p>
                            <br />
                            <p>
                                {/* We offer a free trial for 60 days. After that
                                you can choose to continue using our service for
                                39.99 per month or cancel at any time. */}
                                For more information, visit the{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href="/product/clinic-connect"
                                >
                                    Clinic Connect
                                </Link>{" "}
                                page.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="benefits">
                        <Accordion.Control>
                            What are the benefits of using the Call Center?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Our Call center helps you manage your incoming
                                calls and texts from patients. We provide a
                                dedicated phone number that you can use to
                                forward voicemails and calls to. Our service
                                transcribes voicemails into text and allows you
                                to respond to them via text message from the web
                                app or mobile app. You can also set up calls to
                                attempt to forward to your office employees
                                phones via the mobile app and if they don't
                                answer, it will forward to us. For a more
                                detailed view of benefits and possible call
                                flows, visit the{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href="/prouct/call-center/call-flow"
                                >
                                    Call Flow
                                </Link>{" "}
                                page.
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
                        <Accordion.Control>What is CCM?</Accordion.Control>
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
                                your patients and bill for CCM services. We
                                automatically track the time you spend managing
                                your patients and provide you with a report that
                                you can use to bill medicare for your services
                                with the appropriate CPT codes.
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
                                transit and at rest. We also have a variety of
                                access controls in place to ensure that only
                                authorized personnel can access your patients
                                information.
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
                </Accordion>
            </Container>{" "}
            {/* <BackgroundBeams /> */}
        </div>
    )
}
