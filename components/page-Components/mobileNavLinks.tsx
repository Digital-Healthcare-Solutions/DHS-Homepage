import { Paper, Menu, Button, Divider } from "@mantine/core"
import NavLinks from "./navLinks"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiExternalLink } from "react-icons/fi"
import DarkMode from "./darkMode"
import ButtonPrimary from "../UI-Components/button-primary"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { BsCashStack, BsChevronDown, BsMic } from "react-icons/bs"
import NavMenuItem from "../UI-Components/navMenuItem"
import { AiOutlineMessage } from "react-icons/ai"
import { MdOutlineAutoAwesome, MdOutlinePhoneEnabled } from "react-icons/md"
import { RiComputerLine } from "react-icons/ri"

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
                    {/* <Link
                        href="/about-us"
                        className={
                            pathname === "/about-us"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2  mx-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
                        }
                    >
                        About Us
                    </Link> */}
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
                                    pathname === "/product/demos" ||
                                    pathname === "/product/smart-voice" ||
                                    pathname === "/product/easy-auth" ||
                                    pathname === "/product/smart-form" ||
                                    pathname === "/product/intellicall" ||
                                    pathname === "/product/smart-plan" ||
                                    pathname === "/product/clinic-connect"
                                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 mx-1 flex items-center"
                                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1 flex items-center"
                                }
                            >
                                Features
                                <BsChevronDown
                                    className="ml-2 text-black dark:text-white"
                                    size={12}
                                />
                            </div>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <section className="w-full">
                                <div className="flex justify-between items-center px-4 pt-2">
                                    <h1>Features</h1>
                                    <Link href="/product/demos">
                                        <Button
                                            size="xs"
                                            variant="subtle"
                                            className="text-blue-400"
                                        >
                                            View Demos
                                        </Button>
                                    </Link>
                                </div>
                                <Divider className="my-2" />
                                <div className="grid grid-cols-1 gap-2">
                                    <NavMenuItem
                                        title="Clinic-Connect"
                                        description="Secure messaging & E-fax for healthcare providers"
                                        icon={
                                            <AiOutlineMessage
                                                className={
                                                    pathname ==
                                                    "/product/clinic-connect"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/clinic-connect"
                                    />{" "}
                                    <NavMenuItem
                                        title="IntelliCall"
                                        description="Automated patient communication "
                                        icon={
                                            <MdOutlinePhoneEnabled
                                                className={
                                                    pathname ==
                                                    "/product/intellicall"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/intellicall"
                                    />{" "}
                                    <NavMenuItem
                                        title="Echo"
                                        description="AI generated clinical notes"
                                        icon={
                                            <MdOutlineAutoAwesome
                                                className={
                                                    pathname == "/product/echo"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/echo"
                                    />{" "}
                                    <NavMenuItem
                                        title="SmartPlan"
                                        description="Chronic care management platform"
                                        icon={
                                            <BsCashStack
                                                className={
                                                    pathname ==
                                                    "/product/smart-plan"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/smart-plan"
                                    />{" "}
                                    <NavMenuItem
                                        title="SmartVoice"
                                        description="Dictation software for healthcare providers"
                                        icon={
                                            <BsMic
                                                className={
                                                    pathname ==
                                                    "/product/smart-voice"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/smart-voice"
                                    />{" "}
                                    <NavMenuItem
                                        title="SmartForm"
                                        description="Customizable patient intake forms"
                                        icon={
                                            <RiComputerLine
                                                className={
                                                    pathname ==
                                                    "/product/smart-form"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/smart-form"
                                    />{" "}
                                </div>
                                {/* <div className="bg-neutral-900">
                            <Divider className="my-2" />
                            <div className="flex justify-between items-center px-4 pb-2">
                                <h1>New Signups get 1 month free! </h1>
                                <Button
                                    size="xs"
                                    variant="subtle"
                                    className="text-blue-400"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div> */}
                            </section>
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
                        href="https://app.digitalhealthcaresolutions.io/login"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ButtonPrimary
                            onClick={() => {}}
                            className="text-sm mb-3 ml-2"
                        >
                            {/* Launch
                            <span className="ml-1"> App</span>{" "} */}
                            Login
                            {/* <FiExternalLink size={15} className="ml-1" /> */}
                        </ButtonPrimary>
                    </a>
                </motion.section>
            </Paper>{" "}
        </motion.div>
    )
}

export default MobileNav
