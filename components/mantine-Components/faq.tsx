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

const placeholder =
    "It can't help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren't many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can't multiply, and it dies.It has no eyeballs, so it can't see. It checks its surroundings via the ultrasonic waves it emits from its mouth."

export function FaqSimple() {
    const { classes } = useStyles()
    return (
        <div className="bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-900 pb-10">
            <Container size="sm" className={classes.wrapper}>
                <Title align="center" className={classes.title}>
                    Frequently Asked Questions
                </Title>

                <Accordion variant="separated">
                    <Accordion.Item
                        className={classes.item}
                        value="reset-password"
                    >
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

                    <Accordion.Item
                        className={classes.item}
                        value="another-account"
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

                    <Accordion.Item className={classes.item} value="newsletter">
                        <Accordion.Control>
                            Do you offer discounts?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Yes! Currently we are offering a 100% free trial
                                for 6 months while we are in beta. After the 6
                                months are up, we will be offering a 50%
                                discount to our first customers for trying us
                                out.
                            </p>
                            <p>
                                Check out the{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href="/pricing"
                                >
                                    pricing page
                                </Link>{" "}
                                for more information.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item
                        className={classes.item}
                        value="credit-card"
                    >
                        <Accordion.Control>
                            How do you keep my patients information secure?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                We take the security of your patients
                                information very seriously. We utilize a variety
                                of technologies to ensure that your patients
                                information is secure. All data is encrypted in
                                transit and at rest. Any data transferred to us
                                is encrypted using 256-bit SSL encryption. We
                                also host our own NLP (Natural Language
                                Processing) model from{" "}
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

                    <Accordion.Item className={classes.item} value="payment">
                        <Accordion.Control>
                            Can I use your service if I am not a physician?
                        </Accordion.Control>
                        <Accordion.Panel>
                            <p>
                                Yes! If you would like to use our service,
                                please{" "}
                                <Link
                                    className="text-blue-500 hover:underline"
                                    href=""
                                >
                                    contact us{" "}
                                </Link>
                                and we can discuss a custom plan for you.
                            </p>
                        </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="academic">
                        <Accordion.Control>
                            Do you offer discounts for research or academic
                            purposes?
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
