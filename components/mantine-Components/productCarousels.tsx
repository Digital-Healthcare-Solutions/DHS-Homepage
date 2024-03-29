import { Carousel } from "@mantine/carousel"
import { useMediaQuery } from "@mantine/hooks"
import {
    createStyles,
    Paper,
    Text,
    Title,
    Button,
    useMantineTheme
} from "@mantine/core"
import ButtonSecondary from "../UI-Components/button-secondary"
import Link from "next/link"

// interface CardProps {
//     image: string
//     title: string
//     category: string
//     id: number
// }

// function Card({ image, title, category, id }: CardProps) {
//     const { classes } = useStyles()

//     return (
//         <Paper
//             shadow="md"
//             p="xl"
//             radius="md"
//             sx={{ backgroundImage: `url(${image})` }}
//             className={`
//             bg-cover bg-center bg-no-repeat flex flex-col h-[440px] justify-between items-start bg-opacity-80`}
//         >
//             <div>
//                 <Text className={classes.category} size="xs">
//                     {category}
//                 </Text>
//                 <Title order={3} className={classes.title}>
//                     {title}
//                 </Title>
//             </div>
//             <Link href={`/product#${id}`}>
//                 <ButtonSecondary
//                     className="bg-white text-black

//             "
//                     onClick={() => {
//                         console.log("clicked")
//                     }}
//                 >
//                     Read More
//                 </ButtonSecondary>
//             </Link>
//         </Paper>
//     )
// }

const data = [
    {
        image: "/chatImage.png",
        title: "Chat and send referrals in realtime to other providers",
        category: "Clinic-Connect",
        id: 1
    },
    {
        image: "/AI.png",
        title: "Use AI to automate your phone system ",
        category: "Call Center",
        id: 2
    },
    {
        image: "/carePlan.jpg",
        title: "Create detailed Care plans for your patients",
        category: "SmartPlan",
        id: 3
    },

    {
        image: "/report.jpg",
        title: "Finish your notes faster than ever with intelligent dictation",
        category: "SmartVoice",
        id: 4
    },

    {
        image: "/paperless1.jpg",
        title: "Seamlessly add paperless registration to your website",
        category: "SmartForm",
        id: 5
    },
    {
        image: "/cyber.jpg",
        title: "Security and compliance built in",
        category: "HIPPA Compliant",
        id: 6
    }
    // {
    //     image: "/staff.jpg",
    //     title: "Whether a small or large practice, we have a plan for you",
    //     category: "feature",
    //     id: 7
    // }
]

const ProductCarousel = () => {
    const useStyles = createStyles((theme) => ({
        card: {
            height: 440,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            backgroundSize: "cover",
            backgroundPosition: "center"
        },

        title: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            color: theme.white,
            lineHeight: 1.2,
            fontSize: 32,
            marginTop: theme.spacing.xs
        },
        titleDark: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            color: theme.black,
            lineHeight: 1.2,
            fontSize: 32,
            marginTop: theme.spacing.xs
        },

        category: {
            color: theme.white,
            opacity: 0.7,
            fontWeight: 700,
            textTransform: "uppercase"
        },
        categoryDark: {
            color: theme.black,
            opacity: 0.7,
            fontWeight: 700,
            textTransform: "uppercase"
        },

        carousel: {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[7]
                    : theme.white
        }
    }))

    const { classes } = useStyles()

    const theme = useMantineTheme()
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
    const slides = data.map((item, index) => (
        <Carousel.Slide key={item.title}>
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                sx={{ backgroundImage: `url(${item.image})` }}
                className={`
            bg-cover bg-center bg-no-repeat flex flex-col h-[440px] justify-between items-start bg-opacity-80`}
            >
                <div>
                    <Text
                        className={
                            index == 0 || index == 3 || index == 4
                                ? classes.categoryDark
                                : classes.category
                        }
                        size="xs"
                    >
                        {item.category}
                    </Text>
                    <Title
                        order={3}
                        className={
                            index == 0 || index == 3 || index == 4
                                ? classes.titleDark
                                : classes.title
                        }
                    >
                        {item.title}
                    </Title>
                </div>
                <Link
                    href={`/product/demos#${item.id}`}
                    className="text-black absolute bottom-5 left-5"
                >
                    <ButtonSecondary
                        className="bg-white text-black hover:bg-neutral-200"
                        onClick={() => {
                            console.log("")
                        }}
                    >
                        Read More
                    </ButtonSecondary>
                </Link>
            </Paper>
        </Carousel.Slide>
    ))

    return (
        <Carousel
            loop
            withIndicators
            slideSize="50%"
            breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    )
}

export default ProductCarousel
