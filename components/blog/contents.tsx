import { useState } from "react"
import { createStyles, Box, Text, Group } from "@mantine/core"
// import { IconListSearch } from '@tabler/icons';
import slugify from "slugify"
import Link from "next/link"

const LINK_HEIGHT = 38
const INDICATOR_SIZE = 10
const INDICATOR_OFFSET = (LINK_HEIGHT - INDICATOR_SIZE) / 2

const useStyles = createStyles((theme) => ({
    link: {
        ...theme.fn.focusStyles(),
        display: "block",
        textDecoration: "none",
        color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        lineHeight: `${LINK_HEIGHT}px`,
        fontSize: theme.fontSizes.sm,
        height: LINK_HEIGHT,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `2px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[1]
        }
    },

    linkActive: {
        fontWeight: 500,
        color: theme.colors[theme.primaryColor][
            theme.colorScheme === "dark" ? 3 : 7
        ]
    },

    links: {
        position: "relative"
    },

    indicator: {
        transition: "transform 150ms ease",
        border: `2px solid ${
            theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 3 : 7
            ]
        }`,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        height: INDICATOR_SIZE,
        width: INDICATOR_SIZE,
        borderRadius: INDICATOR_SIZE,
        position: "absolute",
        left: -INDICATOR_SIZE / 2 + 1
    }
}))

interface ContentTypes {
    _key: string
    _type: string
    style: string
    children: [
        {
            _key: string
            _type: string
            marks: []
            text: string
        }
    ]
    markDefs: []
}

type Content = {
    contents: ContentTypes[]
}

interface TableOfContentsFloatingProps {
    contents: ContentTypes[]
}

export function TableOfContentsFloating({
    contents
}: TableOfContentsFloatingProps) {
    const tableElems = contents.filter(
        (item) =>
            item.style == "h1" ||
            item.style == "h2" ||
            item.style == "h3" ||
            item.style == "h4" ||
            item.style == "h5" ||
            item.style == "h6"
    )
    console.log(
        tableElems.map((item) => {
            return item.children.map((child) => {
                return child.text
            })
        })
    )

    console.log(tableElems)

    const { classes, cx } = useStyles()
    const [active, setActive] = useState(0)

    const items = tableElems.map((item, index) => (
        <Box
            className={cx(classes.link, {
                [classes.linkActive]: active === index
            })}
            sx={(theme) => ({
                paddingLeft: theme.spacing.lg
                // paddingRight: theme.spacing.lg
            })}
        >
            {item.children.map((child) => {
                return (
                    <Link
                        onClick={() => setActive(index)}
                        key={item._key}
                        href={`#${slugify(child.text, {
                            lower: true
                        })}`}
                        scroll={false}
                        onScroll={() => setActive(index)}
                    >
                        {child.text}
                    </Link>
                )
            })}
        </Box>
    ))

    return (
        <div>
            <Group mb="md">
                {/* <IconListSearch size={18} stroke={1.5} /> */}
                <Text size={"lg"}>Table of contents</Text>
            </Group>
            <div className={classes.links}>
                <div
                    className={classes.indicator}
                    style={{
                        transform: `translateY(${
                            active * LINK_HEIGHT + INDICATOR_OFFSET
                        }px)`
                    }}
                />
                {items}
            </div>
        </div>
    )
}
