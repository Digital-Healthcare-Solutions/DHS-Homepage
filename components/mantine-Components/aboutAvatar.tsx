import { createStyles, Avatar, Text, Group } from "@mantine/core"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import ButtonPrimary from "../UI-Components/button-primary"
// import { IconPhoneCall, IconAt } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    icon: {
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[3]
                : theme.colors.gray[5]
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`
    }
}))

interface UserInfoIconsProps {
    avatar: string
    nameFirst: string
    nameLast: string
    title: string
    email: string
}

function AboutAvatar({
    avatar,
    nameFirst,
    nameLast,
    title,
    email
}: UserInfoIconsProps) {
    const { classes } = useStyles()
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = useCallback(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])

    return (
        <div>
            <Group noWrap>
                <Avatar
                    src={avatar}
                    size={width > 1024 ? 250 : 150}
                    radius="md"
                />
                <div>
                    <Text
                        size={width > 1024 ? "lg" : "md"}
                        sx={{ textTransform: "uppercase" }}
                        weight={700}
                        color="dimmed"
                    >
                        {title}
                    </Text>

                    <Text
                        size={width > 1024 ? 28 : "md"}
                        weight={500}
                        className={classes.name}
                    >
                        {nameFirst} {nameLast}
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                        {/* <IconAt stroke={1.5} size={16} className={classes.icon} /> */}
                        <Text size={width > 1024 ? "lg" : "md"} color="dimmed">
                            {email}
                        </Text>
                    </Group>
                    <Link href={`/about-us#${nameFirst}`}>
                        <ButtonPrimary
                            onClick={() => {
                                console.log("clicked")
                            }}
                            className="mt-4"
                        >
                            About {nameFirst}
                        </ButtonPrimary>
                    </Link>

                    {/* <Group noWrap spacing={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size={16} className={classes.icon} />
                        <Text size="xs" color="dimmed">
                            {phone}
                        </Text>
                    </Group> */}
                </div>
            </Group>
        </div>
    )
}

export default AboutAvatar
