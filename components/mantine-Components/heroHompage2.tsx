import { createStyles, Container, Text, Button, Group } from "@mantine/core"
import Link from "next/link"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        boxSizing: "border-box"
    },

    inner: {
        position: "relative",
        paddingTop: 75,
        paddingBottom: 60,

        [theme.fn.smallerThan("sm")]: {
            paddingBottom: 50,
            paddingTop: 80
        }
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 50,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === "dark" ? "#fff" : "#000",

        [theme.fn.smallerThan("sm")]: {
            fontSize: 32,
            lineHeight: 1.2
        }
    },

    description: {
        marginTop: theme.spacing.xl,
        fontSize: 24,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 18
        }
    },

    controls: {
        marginTop: `20px`,

        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xl
        }
    },

    control: {
        height: 54,
        paddingLeft: 38,
        paddingRight: 38,

        [theme.fn.smallerThan("sm")]: {
            height: 54,
            paddingLeft: 18,
            paddingRight: 18
        }
    }
}))

export function HeroHomePage2() {
    const { classes } = useStyles()
    const [firstFinished, setFirstFinished] = useState(false)
    const [secondFinished, setSecondFinished] = useState(false)

    return (
        <div className={classes.wrapper}>
            <Container size={900} className={classes.inner}>
                <h1 className={classes.title}>
                    A{" "}
                    <Text
                        component="span"
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan" }}
                        inherit
                    >
                        {/* Modern */}
                        Next-Gen
                    </Text>{" "}
                    <TypeAnimation
                        sequence={[
                            // "automation & communication app for Healthcare Businesses",
                            "automation and communication platform for Healthcare Businesses",
                            1000,
                            () => setFirstFinished(true)
                        ]}
                        className={classes.title}
                        speed={73}
                        repeat={0}
                        cursor={false}
                    />
                </h1>

                <Text className={classes.description} color="dimmed">
                    {firstFinished && (
                        <TypeAnimation
                            sequence={[
                                // "Communicate in realtime with patients and providers through our chat and phone solutions. Utilize automation features that streamline your workflow while ensuring HIPAA compliance.",
                                "Streamline communication with patients & providers, Automate routine administrative tasks, and increase revenue with our suite of HIPAA compliant solutions.",
                                () => setSecondFinished(true)
                            ]}
                            // className={classes.description}
                            speed={88}
                            repeat={0}
                            cursor={false}
                        />
                    )}
                    {/* <Text
                        component="span"
                        variant="gradient"
                        gradient={{ from: "blue", to: "cyan" }}
                        inherit
                    >
                        {" "}
                       
                    </Text>{" "}
                    solutions. */}
                </Text>

                {secondFinished && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Group className={classes.controls}>
                            <Link href="https://app.digitalhealthcaresolutions.io/login">
                                <button className="text-lg shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-neutral-500 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-[11px] px-6 rounded font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
                                    Start Free Trial
                                </button>
                            </Link>
                            <Link href="/product/smart-plan#request-demo">
                                <Button
                                    // component="a"
                                    // href="https://github.com/mantinedev/mantine"
                                    size="lg"
                                    variant="default"
                                    className={classes.control}
                                    // leftIcon={<GithubIcon size={20} />}
                                >
                                    Request Demo
                                </Button>
                            </Link>
                        </Group>
                    </motion.div>
                )}
            </Container>
        </div>
    )
}
