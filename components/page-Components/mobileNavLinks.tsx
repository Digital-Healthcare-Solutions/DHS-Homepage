import { Paper, Menu } from "@mantine/core"
import NavLinks from "./navLinks"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiExternalLink } from "react-icons/fi"
import DarkMode from "./darkMode"
import ButtonPrimary from "../UI-Components/button-primary"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { BsChevronDown } from "react-icons/bs"

const MobileNav = ({ open, setOpen }) => {
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            setOpen()
        })
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute  top-14 md:hidden w-full h-fit"
        >
            <Paper
                withBorder
                className=" bg-white dark:bg-neutral-900  rounded-none "
            >
                <motion.section key={"section"} className="flex flex-col">
                    <Link
                        href="/"
                        className={
                            pathname === "/"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700                        dark:font-normal active:ring-2 ml-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 ml-1"
                        }
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-us"
                        className={
                            pathname === "/about-us"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2  mx-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
                        }
                    >
                        About Us
                    </Link>
                    <Menu
                        transition="scale-y"
                        transitionDuration={250}
                        position="bottom-start"
                        offset={0}
                        closeDelay={400}
                    >
                        <Menu.Target>
                            <div
                                // href="/product"
                                className={
                                    pathname === "/product" ||
                                    pathname === "/product/demo" ||
                                    pathname === "/product/roadmap"
                                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 mx-1 flex items-center"
                                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1 flex items-center"
                                }
                            >
                                Product{" "}
                                <BsChevronDown
                                    className="ml-2 text-black dark:text-white"
                                    size={12}
                                />
                            </div>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item
                                component={Link}
                                href="/product"
                                className={
                                    pathname === "/product"
                                        ? "text-base text-blue-500"
                                        : "text-base"
                                }
                            >
                                Features
                            </Menu.Item>

                            <Menu.Item
                                component={Link}
                                href="/product/demo"
                                className={
                                    pathname === "/product/demo"
                                        ? "text-base text-blue-500"
                                        : "text-base"
                                }
                            >
                                Demo
                            </Menu.Item>
                            <Menu.Item
                                component={Link}
                                href="/product/roadmap"
                                className={
                                    pathname === "/product/roadmap"
                                        ? "text-base text-blue-500"
                                        : "text-base"
                                }
                            >
                                Roadmap
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    {/* <Link
                        href="/product"
                        className={
                            pathname === "/product"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 mx-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
                        }
                    >
                        Product
                    </Link> */}
                    <Link
                        href="/pricing"
                        className={
                            pathname === "/pricing"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700  dark:font-normal active:ring-2 mx-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
                        }
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/blog"
                        className={
                            pathname === "/blog"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 mx-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
                        }
                    >
                        Blog
                    </Link>
                    {/* <DarkMode /> */}
                    <div className="w-fit mb-3 mt-1">
                        <DarkMode />
                    </div>
                    <a
                        href="https://smart-plan.io"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ButtonPrimary
                            onClick={() => {}}
                            className="text-sm mb-3 ml-2"
                        >
                            Launch
                            <span className="ml-1"> App</span>{" "}
                            <FiExternalLink size={20} className="ml-1" />
                        </ButtonPrimary>
                    </a>
                </motion.section>
            </Paper>{" "}
        </motion.div>
    )
}

export default MobileNav
