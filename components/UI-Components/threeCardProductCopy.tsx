import {
    Badge,
    Card,
    Container,
    Group,
    SimpleGrid,
    Text,
    Title,
    createStyles
} from "@mantine/core"
import React from "react"
import { ReactNode } from "react"

type Feature = { title: string; description: string; icon: ReactNode }

type ThreeCardProductCopyProps = {
    features: Feature[]
    title: string
    subtitle: string
    tagline: string
}

const ThreeCardProductCopy = ({
    features = [],
    title = "",
    subtitle = "",
    tagline = ""
}: ThreeCardProductCopyProps) => {
    const useStyles = createStyles((theme) => ({
        title: {
            fontSize: 34,
            fontWeight: 900,

            [theme.fn.smallerThan("sm")]: {
                fontSize: 24
            }
        },

        description: {
            maxWidth: 600,
            margin: "auto",

            "&::after": {
                content: '""',
                display: "block",
                backgroundColor: theme.fn.primaryColor(),
                width: 45,
                height: 2,
                marginTop: theme.spacing.sm,
                marginLeft: "auto",
                marginRight: "auto"
            }
        },

        card: {
            border: `${1} solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1]
            }`
        },

        cardTitle: {
            "&::after": {
                content: '""',
                display: "block",
                backgroundColor: theme.fn.primaryColor(),
                width: 45,
                height: 2,
                marginTop: theme.spacing.sm
            }
        }
    }))

    const { classes, theme } = useStyles()

    return (
        <Container size="xl" py="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    {subtitle}
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                {title}
            </Title>

            <Text
                c="dimmed"
                className={classes.description}
                ta="center"
                mt="md"
            >
                {tagline}
            </Text>

            <SimpleGrid
                cols={3}
                spacing="xl"
                mt={50}
                breakpoints={[{ maxWidth: "md", cols: 1 }]}
            >
                {features.map((feature) => (
                    <Card
                        key={feature.title}
                        shadow="md"
                        radius="md"
                        className={classes.card}
                    >
                        {feature.icon}
                        <Text
                            fz="lg"
                            fw={500}
                            className={classes.cardTitle}
                            mt="md"
                        >
                            {feature.title}
                        </Text>
                        <Text fz="sm" c="dimmed" mt="sm">
                            {feature.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    )
}

export default ThreeCardProductCopy
