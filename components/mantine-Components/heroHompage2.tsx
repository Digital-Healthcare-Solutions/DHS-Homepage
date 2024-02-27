import { createStyles, Container, Text, Button, Group } from "@mantine/core"
import Link from "next/link"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { SparklesCore } from "../ui/sparkles"
import { useTheme } from "next-themes"
import { BackgroundBeams } from "../ui/background-beams"

const useStyles = createStyles((theme) => ({
    inner: {
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

export function HeroHomePage2({ setIsModalOpen }) {
    const { classes } = useStyles()
    const [firstFinished, setFirstFinished] = useState(false)
    const [secondFinished, setSecondFinished] = useState(false)

    const { theme } = useTheme()

    return (
        <div>
            {" "}
            <div className="h-[40rem] w-full dark:bg-neutral-900 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-900 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,#111111_100%)] lg:[mask-image:radial-gradient(ellipse_at_center,transparent_40%,#111111_80%)]"></div>

                <Container size={900} className={classes.inner}>
                    <h1 className={classes.title}>
                        An{" "}
                        <Text
                            component="span"
                            variant="gradient"
                            gradient={{ from: "blue", to: "cyan" }}
                            inherit
                        >
                            {/* Modern */}
                            AI powered
                        </Text>{" "}
                        <TypeAnimation
                            sequence={[
                                "copilot ",
                                firstFinished ? 2000 : 6000,
                                () => setFirstFinished(true),
                                "assistant ",
                                6000,
                                "operating system ",
                                6000,
                                "automation app ",
                                6000
                            ]}
                            className={classes.title}
                            speed={75}
                            repeat={Infinity}
                            cursor={false}
                        />
                        <TypeAnimation
                            sequence={[
                                // "automation & communication app for Healthcare Businesses",
                                "for Healthcare Businesses",
                                1000,
                                () => setFirstFinished(true)
                            ]}
                            className={classes.title}
                            speed={75}
                            repeat={0}
                            cursor={false}
                        />
                    </h1>

                    <Text className={classes.description} color="dimmed">
                        {firstFinished && (
                            <TypeAnimation
                                sequence={[
                                    "Automate routine tasks using AI, Streamline communication with patients & providers, and increase revenue with our suite of HIPAA compliant solutions.",
                                    () => setSecondFinished(true)
                                ]}
                                // className={classes.description}
                                speed={95}
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
                                <button
                                    className="text-lg shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-neutral-500 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-[11px] px-6 rounded font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Get Started Today
                                </button>

                                <Link href="/#request-demo">
                                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-400 bg-[linear-gradient(110deg,#ffffff,45%,#e2e8f0,55%,#ffffff)] dark:border-slate-700 dark:bg-[linear-gradient(110deg,#00000000,45%,#1e2631,55%,#00000000)] bg-[length:200%_100%] px-6 font-medium text-slate-800 dark:text-slate-200 transition-colors">
                                        Request Demo
                                    </button>

                                    {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#0f172a 45%,#111827 55%,#0f172a)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    Shimmer
                                </button> */}
                                    {/* <Button
                                    size="lg"
                                    variant="default"
                                    className={classes.control}
                                    // leftIcon={<GithubIcon size={20} />}
                                >
                                    Request Demo
                                </Button> */}
                                </Link>
                            </Group>
                        </motion.div>
                    )}
                </Container>
                {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    Backgrounds
                </p> */}
            </div>
        </div>
    )
}
