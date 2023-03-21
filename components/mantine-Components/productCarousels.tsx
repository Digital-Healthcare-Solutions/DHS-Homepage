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
        image: "/carePlan.jpg",
        title: "Create detailed Care plans for your patients",
        category: "Main Feature",
        id: 1
    },
    {
        image: "/AI.png",
        title: "Use AI to automate your call center",
        category: "Feature",
        id: 2
    },
    {
        image: "/report.jpg",
        title: "Instantly generate reports and educational handouts for your patients",
        category: "feature",
        id: 3
    },

    {
        image: "paperless.jpg",
        title: "Seamlessly add paperless registration to your website",
        category: "feature",
        id: 4
    },
    {
        image: "/cyber.jpg",
        title: "Security and compliance built in",
        category: "feature",
        id: 5
    },
    {
        image: "/staff.jpg",
        title: "Whether a small or large practice, we have a plan for you",
        category: "feature",
        id: 6
    }
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
                    <Text className={classes.category} size="xs">
                        {item.category}
                    </Text>
                    <Title
                        order={3}
                        className={
                            index == 2 || index == 3
                                ? classes.titleDark
                                : classes.title
                        }
                    >
                        {item.title}
                    </Title>
                </div>
                <Link href={`/product#${item.id}`}>
                    <ButtonSecondary
                        className="bg-white text-black
               
            "
                        onClick={() => {
                            console.log("clicked")
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
