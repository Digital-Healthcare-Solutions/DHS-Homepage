import {
    createStyles,
    Card,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
    Divider
} from "@mantine/core"
import { Post } from "../../typings"
import { urlFor } from "../../sanity"
import Link from "next/link"
import Image from "next/image"
// import { IconHeart, IconBookmark, IconShare } from '@tabler/icons';
import { TfiBook } from "react-icons/tfi"

// make a type of badge

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`
    },

    footer: {
        padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
        // marginTop: theme.spacing.sm,
        borderTop: `0px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }
        
        `
    }
}))

function BlogCard({
    title,
    // footer,
    author,
    description,
    mainImage,
    slug,
    body,
    _createdAt,
    categories,
    readTime
}: Post) {
    const { classes, theme } = useStyles()

    return (
        <Card
            withBorder
            p="lg"
            radius="md"
            className="bg-gray-100 ring-1 ring-gray-300 dark:ring-neutral-700 dark:bg-[#1A1B1E]  group hover:dark:shadow-neutral-200 hover:shadow-gray-500 hover:shadow-lg transition-shadow duration-200 ease-in-out active:dark:shadow-neutral-200 active:shadow-gray-500 active:shadow-lg w-72 sm:w-96 md:w-[21.5rem] lg:w-80 xl:w-96 h-fit"
        >
            <Card.Section mb="sm">
                <Image
                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out p-3"
                    src={urlFor(mainImage).url()!}
                    alt={title}
                    width={400}
                    height={300}
                ></Image>
            </Card.Section>
            {categories.map((category) => {
                return (
                    <Badge
                        className={
                            category.title === "Product"
                                ? "bg-blue-500 text-black dark:text-white mr-1"
                                : category.title === "CPT codes"
                                ? "bg-green-500 text-black dark:text-white mr-1"
                                : category.title === "Coding"
                                ? "bg-yellow-500 text-black dark:text-white mr-1"
                                : category.title === "Announcements"
                                ? "bg-red-500 text-black dark:text-white mr-1"
                                : category.title === "Updates"
                                ? "bg-purple-500 text-black dark:text-white mr-1"
                                : "bg-pink-500 text-black dark:text-white mr-1"
                        }
                        key={category.title}
                    >
                        {category.title}
                    </Badge>
                )
            })}

            <Text weight={700} className={classes.title} mt="xs">
                {title}
            </Text>

            <Group mt="lg">
                <Avatar src={urlFor(author.image).url()!} radius="md" />
                <div>
                    <Text weight={500}>{author.name}</Text>
                    <Text size="xs" color="dimmed">
                        Published: {new Date(_createdAt).toLocaleDateString()}
                    </Text>
                </div>
            </Group>

            <Card.Section className={classes.footer}>
                {" "}
                <Divider />
                <Group position="apart" mt="sm">
                    {" "}
                    <Text size="xs" color="dimmed">
                        {description}
                    </Text>
                    {/* <ActionIcon>
              <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark size={18} color={theme.colors.yellow[6]} stroke={1.5} />
            </ActionIcon>*/}
                    <Group spacing={0}>
                        <ActionIcon>
                            <TfiBook size={16} color={theme.colors.blue[6]} />
                        </ActionIcon>
                        <Text size="sm" color="dimmed">
                            Read Time: {readTime} minutes
                        </Text>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    )
}

export default BlogCard
