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
import Link from "next/link"

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
        justifyContent: "center",
        alignItems: "center",
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
                object-cover object-center w-full h-[500px] md:h-[700px]  absolute top-0 left-0 z-0 dark:brightness-50
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
                {/* <Overlay
                    gradient={
                        theme == "light"
                            ? "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .15) 0%)"
                            : "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 50%)"
                    }
                    opacity={1.3}
                    zIndex={0}
                /> */}
                <Container className={classes.container}>
                    <section className=" bg-neutral-300 bg-opacity-80 rounded-xl flex flex-col items-center max-w-md dark:bg-neutral-800 dark:bg-opacity-70 ">
                        {/* <h2 className="text-black font-normal text-2xl pt-2 dark:text-white">
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
                        )} */}
                        {/* <p className="text-black absolute translate-y-36 translate-x-16">
                            by Digital HealthCare Solutions
                        </p> */}
                        {/* <div className="text-3xl p-3">Get Started Today!</div> */}
                        <svg
                            className="w-full h-16 fill-black dark:fill-white  my-2        
                        "
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="739.000000pt"
                            height="135.000000pt"
                            viewBox="0 0 739.000000 135.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,135.000000) scale(0.100000,-0.100000)"
                                stroke="1"
                            >
                                <path
                                    d="M400 956 l0 -26 143 0 c178 0 178 0 185 -124 5 -99 -8 -148 -44 -165
-15 -6 -78 -11 -154 -11 -123 0 -130 -1 -130 -20 0 -19 7 -20 140 -20 215 0
234 17 228 206 -3 113 -3 114 -36 146 l-32 33 -150 3 -150 3 0 -25z"
                                />
                                <path
                                    d="M820 785 c0 -188 1 -195 20 -195 19 0 20 7 20 195 0 188 -1 195 -20
195 -19 0 -20 -7 -20 -195z"
                                />
                                <path
                                    d="M972 960 c-51 -31 -65 -76 -60 -195 6 -162 23 -175 228 -175 l140 0
0 75 c0 71 -2 77 -33 112 -33 35 -37 36 -115 41 l-82 5 0 -27 c0 -26 1 -26 69
-26 91 0 114 -17 115 -86 l1 -49 -116 0 c-158 0 -159 1 -159 147 0 150 -3 148
180 148 l140 0 0 25 0 25 -137 0 c-121 0 -142 -3 -171 -20z"
                                />
                                <path
                                    d="M1330 785 c0 -188 1 -195 20 -195 19 0 20 7 20 195 0 188 -1 195 -20
195 -19 0 -20 -7 -20 -195z"
                                />
                                <path
                                    d="M1424 965 c-11 -27 7 -35 87 -35 l79 0 0 -170 c0 -163 1 -170 20
-170 19 0 20 7 20 170 l0 170 80 0 c79 0 80 0 80 25 l0 25 -180 0 c-149 0
-182 -3 -186 -15z"
                                />
                                <path
                                    d="M1915 971 c-11 -5 -31 -21 -45 -36 -24 -26 -25 -32 -28 -186 l-3
-159 25 0 c26 0 26 0 26 90 l0 90 135 0 135 0 0 -90 c0 -90 0 -90 26 -90 l25
0 -3 160 -3 160 -33 32 c-32 33 -34 33 -135 35 -56 2 -111 -1 -122 -6z m223
-57 c16 -11 22 -25 22 -55 l0 -39 -135 0 -135 0 0 37 c0 62 19 73 129 73 71 0
102 -4 119 -16z"
                                />
                                <path
                                    d="M2260 785 l0 -195 185 0 c178 0 185 1 185 20 0 19 -7 20 -165 20
l-165 0 0 175 c0 168 -1 175 -20 175 -19 0 -20 -7 -20 -195z"
                                />
                                <path
                                    d="M2830 785 c0 -188 1 -195 20 -195 19 0 20 7 20 90 l0 90 140 0 140 0
0 -90 c0 -83 1 -90 20 -90 19 0 20 7 20 195 0 188 -1 195 -20 195 -18 0 -20
-7 -20 -80 l0 -80 -140 0 -140 0 0 80 c0 73 -2 80 -20 80 -19 0 -20 -7 -20
-195z"
                                />
                                <path
                                    d="M3314 966 c-59 -26 -64 -44 -64 -218 l0 -158 180 0 c173 0 180 1 180
20 0 19 -7 20 -160 20 l-160 0 0 70 0 70 160 0 160 0 0 25 0 25 -160 0 -160 0
0 33 c0 20 8 42 20 55 19 21 30 22 160 22 l140 0 0 25 0 25 -132 0 c-89 -1
-143 -5 -164 -14z"
                                />
                                <path
                                    d="M3735 970 c-11 -4 -31 -20 -45 -35 -24 -26 -25 -32 -28 -186 l-3
-159 25 0 c26 0 26 0 26 90 l0 90 140 0 140 0 0 -90 c0 -83 1 -90 20 -90 19 0
20 7 20 151 0 169 -8 196 -66 224 -35 16 -193 20 -229 5z m228 -57 c8 -10 18
-35 22 -55 l7 -38 -141 0 -141 0 0 37 c0 63 18 73 135 73 84 0 105 -3 118 -17z"
                                />
                                <path
                                    d="M4080 785 l0 -195 185 0 c178 0 185 1 185 20 0 18 -8 20 -162 22
l-163 3 -3 173 c-2 164 -3 172 -22 172 -19 0 -20 -7 -20 -195z"
                                />
                                <path
                                    d="M4500 955 c0 -25 1 -25 80 -25 l80 0 0 -170 c0 -163 1 -170 20 -170
19 0 20 7 20 170 l0 170 80 0 c79 0 80 0 80 25 l0 25 -180 0 -180 0 0 -25z"
                                />
                                <path
                                    d="M4917 974 c-4 -4 -7 -92 -7 -196 l0 -188 25 0 c25 0 25 1 25 90 l0
90 140 0 140 0 0 -90 c0 -83 1 -90 20 -90 19 0 20 7 20 195 0 188 -1 195 -20
195 -18 0 -20 -7 -20 -80 l0 -80 -140 0 -139 0 -3 77 c-2 61 -6 78 -18 81 -9
1 -19 0 -23 -4z"
                                />
                                <path
                                    d="M5394 965 c-52 -27 -64 -60 -64 -180 0 -113 11 -150 52 -179 18 -13
52 -16 170 -16 141 0 148 1 148 20 0 19 -7 20 -130 20 -77 0 -139 5 -155 12
-34 16 -48 67 -44 165 6 122 8 123 186 123 144 0 144 0 141 23 -3 21 -6 22
-138 24 -105 2 -142 -1 -166 -12z"
                                />
                                <path
                                    d="M5815 966 c-58 -25 -65 -48 -65 -221 0 -148 1 -155 20 -155 19 0 20
7 20 90 l0 90 140 0 140 0 0 -90 c0 -83 1 -90 20 -90 19 0 20 7 20 158 0 176
-5 193 -66 218 -43 18 -189 18 -229 0z m232 -58 c15 -14 23 -33 23 -55 l0 -33
-140 0 -140 0 0 29 c0 15 9 40 21 55 20 25 25 26 117 26 85 0 98 -3 119 -22z"
                                />
                                <path
                                    d="M6233 965 c-59 -25 -68 -52 -71 -222 l-4 -153 26 0 26 0 0 90 0 90
118 0 c147 0 154 -5 160 -111 4 -60 7 -69 23 -69 17 0 19 8 19 73 0 53 -5 80
-19 103 -18 29 -18 31 0 53 15 18 19 40 19 92 l0 69 -132 0 c-90 -1 -143 -5
-165 -15z m254 -75 c-9 -68 -14 -70 -153 -70 l-124 0 0 35 c0 22 8 43 20 55
18 18 33 20 141 20 l122 0 -6 -40z"
                                />
                                <path
                                    d="M6643 964 c-53 -26 -63 -63 -63 -228 l0 -146 185 0 c178 0 185 1 185
20 0 18 -8 20 -162 22 l-163 3 -3 68 -3 67 166 0 166 0 -3 23 c-3 22 -6 22
-167 25 l-163 3 7 37 c12 68 21 71 179 74 133 3 141 4 141 23 0 19 -7 20 -135
22 -107 2 -142 0 -167 -13z"
                                />
                                <path
                                    d="M2867 392 c-10 -10 -17 -28 -17 -40 0 -22 43 -62 66 -62 8 0 23 -9
34 -20 16 -16 18 -25 10 -40 -12 -23 -68 -28 -88 -8 -9 9 -15 9 -23 1 -9 -9
-3 -16 23 -29 62 -29 122 2 116 60 -3 26 -11 35 -53 56 -60 30 -73 65 -29 76
15 4 35 2 45 -5 24 -14 29 -14 29 3 0 31 -87 37 -113 8z"
                                />
                                <path
                                    d="M3072 403 c-38 -15 -55 -119 -28 -172 15 -28 53 -51 85 -51 29 0 68
37 81 76 26 78 -17 155 -87 153 -21 0 -44 -3 -51 -6z m97 -39 c46 -59 11 -158
-53 -152 -25 2 -35 11 -49 40 -44 91 44 186 102 112z"
                                />
                                <path
                                    d="M3270 300 l0 -110 60 0 c33 0 60 4 60 10 0 6 -22 10 -50 10 l-50 0 0
100 c0 60 -4 100 -10 100 -6 0 -10 -43 -10 -110z"
                                />
                                <path
                                    d="M3422 319 c4 -85 6 -94 32 -115 33 -29 65 -30 100 -3 25 19 26 25 26
115 0 52 -4 94 -9 94 -5 0 -11 -41 -13 -90 -3 -98 -10 -110 -61 -110 -36 0
-47 29 -47 126 0 62 -3 74 -16 74 -14 0 -16 -12 -12 -91z"
                                />
                                <path
                                    d="M3630 400 c0 -5 14 -10 30 -10 l30 0 0 -100 c0 -82 3 -100 15 -100
12 0 15 18 15 100 l0 100 35 0 c19 0 35 5 35 10 0 6 -33 10 -80 10 -47 0 -80
-4 -80 -10z"
                                />
                                <path
                                    d="M3830 300 c0 -91 3 -110 15 -110 12 0 15 19 15 110 0 91 -3 110 -15
110 -12 0 -15 -19 -15 -110z"
                                />
                                <path
                                    d="M3941 386 c-63 -67 -19 -206 64 -206 57 0 100 64 92 137 -7 61 -38
93 -92 93 -31 0 -47 -6 -64 -24z m109 -23 c18 -22 21 -37 17 -75 -5 -59 -20
-78 -63 -78 -43 0 -64 30 -64 90 0 83 65 119 110 63z"
                                />
                                <path
                                    d="M4150 300 c0 -95 2 -110 16 -110 15 0 16 11 12 90 -3 50 -3 89 0 86
2 -3 25 -43 51 -88 26 -46 54 -84 64 -86 15 -3 17 7 17 107 0 96 -2 111 -16
111 -15 0 -16 -11 -12 -90 3 -49 4 -90 3 -90 -1 0 -26 41 -54 90 -71 122 -81
119 -81 -20z"
                                />
                                <path
                                    d="M4386 394 c-19 -19 -21 -59 -3 -74 6 -6 30 -21 52 -34 30 -16 40 -28
40 -46 0 -21 -5 -26 -32 -28 -18 -2 -42 2 -53 8 -26 14 -37 6 -21 -14 32 -39
126 -25 137 20 9 36 -4 61 -44 79 -20 10 -45 24 -54 33 -36 31 19 69 62 43 20
-13 34 -2 19 15 -16 19 -84 18 -103 -2z"
                                />
                                <path
                                    d="M550 295 c0 -13 126 -15 1097 -13 866 2 1097 6 1101 16 3 9 -221 12
-1097 12 -973 0 -1101 -2 -1101 -15z"
                                />
                                <path
                                    d="M4600 295 c0 -13 129 -15 1100 -15 971 0 1100 2 1100 15 0 13 -129
15 -1100 15 -971 0 -1100 -2 -1100 -15z"
                                />
                            </g>
                        </svg>
                        <div className="font-normal text-center text-black dark:text-white text-xl">
                            Level up your practice with our next-generation
                            communication platform for healthcare providers.
                        </div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://app.digitalhealthcaresolutions.io/login"
                        >
                            <ButtonPrimary
                                type="button"
                                className="my-3"
                                onClick={console.log("")}
                            >
                                Get Started
                            </ButtonPrimary>
                        </a>
                    </section>
                </Container>
            </div>{" "}
        </div>
    )
}
