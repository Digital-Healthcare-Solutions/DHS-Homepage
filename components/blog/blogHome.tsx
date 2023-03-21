import {
    createStyles,
    Card,
    Overlay,
    CardProps,
    Button,
    Text
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
    card: {
        backgroundImage: `url(/blogHome.jpg)`
    },

    title: {
        marginBottom: theme.spacing.xs / 2
    },

    description: {
        maxWidth: 220
    }
}))

interface ImageActionBannerProps {
    title: React.ReactNode
    description: React.ReactNode
    image: string
}

export function ImageActionBanner({
    title,
    description,
    image,
    style,
    className,
    ...others
}: ImageActionBannerProps &
    Omit<CardProps, keyof ImageActionBannerProps | "children">) {
    const { classes, cx, theme } = useStyles()

    return (
        <Card
            radius="md"
            className={cx(
                classes.card,
                ` mb-8 h-52 md:h-96 rounded-none bg-cover bg-center bg-no-repeat hover:scale-[1.01] transition-all duration-300 ease-in-out relative overflow-hidden`
            )}
        >
            {" "}
            <Overlay
                gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
                opacity={0.65}
                zIndex={0}
                blur={4}
            />
            <div
                className={
                    "absolute -translate-x-4 text-white dark:text-black  flex flex-col items-center md:justify-center w-full h-full z-10 "
                }
            >
                <div className="max-w-[550px] md:max-w-[700px] p-5 md:p-12 rounded-lg bg-neutral-700 bg-opacity-40 dark:bg-neutral-400 dark:bg-opacity-30 shadow-sm shadow-black ">
                    <Text
                        className={
                            "mb-2 text-xl md:text-2xl lg:text-3xl font-light dark:font-normal"
                        }
                    >
                        {title}
                    </Text>

                    <div
                        className={
                            " text-xl md:text-2xl lg:text-3xl font-semibold"
                        }
                    >
                        {description}
                    </div>
                </div>
            </div>{" "}
        </Card>
    )
}
