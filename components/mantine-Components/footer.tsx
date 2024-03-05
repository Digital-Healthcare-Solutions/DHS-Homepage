import {
    createStyles,
    Text,
    Container,
    ActionIcon,
    Group,
    Tooltip
} from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
// import { MantineLogo } from '@mantine/ds';
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"

const useStyles = createStyles((theme) => ({
    footer: {
        // marginTop: 40,
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`
    },

    logo: {
        maxWidth: 225,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        // [theme.fn.smallerThan("sm")]: {
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "start"
        // }
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
            textAlign: "center"
        }
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
            alignItems: "center"
        }
    },

    groups: {
        display: "flex",
        flexWrap: "wrap",

        [theme.fn.smallerThan("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: theme.spacing.xl,
            marginTop: theme.spacing.xl
        }
    },

    wrapper: {
        width: 190
    },

    link: {
        display: "block",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline"
        }
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === "dark" ? theme.white : theme.black
    },
    afterFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,
        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column"
        }
    },
    social: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs
        }
    },
    status: {
        display: "flex",
        alignItems: "center",
        marginTop: "0.75rem"
    },
    statusText: {
        marginLeft: "0.5rem",
        marginTop: "0.1rem"
    }
}))

interface FooterLinksProps {
    data: {
        title: string
        links: { label: string; link: string; func: () => void }[]
    }[]
    setIsModalOpen: (arg: boolean) => void
}

export function Footer({ data, setIsModalOpen }: FooterLinksProps) {
    const { classes } = useStyles()

    const groups = data.map((group) => {
        const links = group.links.map((link, index) =>
            link.label === "NewsLetter" ? (
                <div
                    key={index}
                    className={classes.link}
                    onClick={() => {
                        setIsModalOpen(true)
                    }}
                >
                    {link.label}
                </div>
            ) : (
                <Link
                    key={index}
                    className={classes.link}
                    href={link.link}
                    onClick={link.func}
                >
                    {link.label}
                </Link>
            )
        )

        return (
            <div
                className={` ${
                    group.title === "Product" ? "w-[200px]" : "w-[130px]"
                } flex flex-col items-center md:items-start`}
                key={group.title}
            >
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        )
    })

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image
                        src="/dhs.svg"
                        alt="DHS Logo"
                        width={500}
                        height={500}
                        className="dark:invert"
                    />
                    <Text
                        size="xs"
                        color="dimmed"
                        className={classes.description}
                    >
                        Modern solutions for modern healthcare.
                    </Text>
                    <div className={classes.status}>
                        <div className="rounded-full bg-green-500 w-1 h-1"></div>
                        <Text
                            size="sm"
                            color="dimmed"
                            className={classes.statusText}
                        >
                            All systems operational
                        </Text>
                    </div>
                    <a
                        href="https://compliancy-group.com/hipaa-compliance-verification/"
                        className="mt-5"
                    >
                        <Image
                            src="https://compliancy-group.com/wp-content/uploads/2022/10/HIPAA-Seal-of-Compliance-Hi-res.png"
                            alt="HIPAA Seal of Compliance"
                            width={100}
                            height={100}
                            priority
                        />
                    </a>{" "}
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © {new Date().getFullYear()} Digital Healthcare Solutions.
                    All rights reserved.
                </Text>

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <Tooltip
                        label="Check out the Github for this site"
                        openDelay={500}
                        transition="slide-down"
                        position="bottom"
                    >
                        <Link
                            href={"https://github.com/BuckyMcYolo/DHS-Homepage"}
                        >
                            <ActionIcon size="lg">
                                <BsGithub size={20} stroke={"1.5"} />
                            </ActionIcon>
                        </Link>
                    </Tooltip>
                    <Link href="https://www.linkedin.com/company/digital-healthcare-sol/">
                        <ActionIcon size="lg">
                            <BsLinkedin size={20} stroke={"1.5"} />
                        </ActionIcon>
                    </Link>
                    {/* <ActionIcon size="lg">
                        <BsTwitter size={20} stroke={"1.5"} />
                    </ActionIcon> */}
                </Group>
            </Container>
        </footer>
    )
}
