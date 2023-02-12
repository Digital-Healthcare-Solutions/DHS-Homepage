import {
    createStyles,
    Overlay,
    Container,
    Title,
    Button,
    Text
} from "@mantine/core"
import Image from "next/image"
import ButtonPrimary from "../UI-Components/button-primary"
import { Quicksand } from "@next/font/google"

const quicksand = Quicksand({
    subsets: ["latin"]
})

const useStyles = createStyles((theme) => ({
    hero: {
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },

    container: {
        height: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: "relative",
        paddingLeft: 2,
        paddingRight: 2,

        [theme.fn.smallerThan("sm")]: {
            height: 500,
            paddingBottom: theme.spacing.xl * 3
        }
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan("sm")]: {
            width: "100%"
        }
    }
}))

export function HeroHomePage() {
    const { classes } = useStyles()

    const theme = localStorage.getItem("theme")

    return (
        <div className="">
            <div className={classes.hero}>
                <video
                    src="/dr.mp4"
                    autoPlay
                    loop
                    muted
                    className="
                object-cover object-center w-full h-[500px] md:h-[700px]  absolute top-0 left-0 z-0
            "
                />
                {/* <Image
                className={classes.hero}
                src="/dr.gif"
                alt="Doctor looking over patient records"
                priority
                quality={100}
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "center"
                }}
            /> */}
                <Overlay
                    gradient={
                        theme == "light"
                            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .15) 0%)"
                            : "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 90%)"
                    }
                    opacity={1}
                    zIndex={0}
                />
                <Container className={classes.container}>
                    <section className=" bg-neutral-300 bg-opacity-80 rounded-xl flex flex-col items-center max-w-md dark:bg-neutral-800 dark:bg-opacity-70 ">
                        <h2 className="text-black font-normal text-2xl pt-2 dark:text-white">
                            Introducing
                        </h2>
                        {theme == "light" ? (
                            <Image
                                src="/logo.png"
                                alt="Smart Plan Logo"
                                className="px-3"
                                width={400}
                                height={200}
                            />
                        ) : (
                            <Image
                                src="/SmartPlanLogoWhite.png"
                                alt="Smart Plan Logo"
                                className="px-3 py-8"
                                width={400}
                                height={200}
                            />
                        )}
                        {/* <p className="text-black absolute translate-y-36 translate-x-16">
                            by Digital HealthCare Solutions
                        </p> */}

                        <div className="font-normal text-center text-black dark:text-white text-xl">
                            Empowering doctors to create personalized, patient
                            centered, care plans with ease
                        </div>

                        <ButtonPrimary
                            type="button"
                            className="my-3"
                            onClick={console.log("hello")}
                        >
                            Get started
                        </ButtonPrimary>
                    </section>
                </Container>
            </div>{" "}
        </div>
    )
}
