"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DarkMode } from "./darkMode"
import { motion } from "framer-motion"
import { BsCashStack, BsChevronDown, BsMic } from "react-icons/bs"
import NavMenuItem from "./navMenuItem"
import { AiOutlineMessage } from "react-icons/ai"
import { MdOutlineAutoAwesome, MdOutlinePhoneEnabled } from "react-icons/md"
import { RiComputerLine, RiToolsFill } from "react-icons/ri"
import { CgWebsite } from "react-icons/cg"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MobileNav = ({ open, setOpen }) => {
    const pathname = usePathname()

    // //need to close the mobile nav when the route changes
    // useEffect(() => {
    //     setOpen(false)
    // }, [pathname])

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 md:hidden w-full h-fit"
        >
            <Card className=" bg-white dark:bg-neutral-950 rounded-none ">
                <motion.section key={"section"} className="flex flex-col">
                    <Link
                        href="/"
                        className={
                            pathname === "/"
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700                        dark:font-normal active:ring-2 ml-1"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 ml-1"
                        }
                    >
                        Features
                    </Link>

                    {/* <Menu
                        transition="scale-y"
                        transitionDuration={250}
                        position="bottom-start"
                        offset={0}
                        closeDelay={400}
                    >
                        <Menu.Target>
                            <div
                                className={
                                    pathname === "/product/demos" ||
                                    pathname === "/product/smart-voice" ||
                                    pathname === "/product/easy-auth" ||
                                    pathname === "/product/smart-form" ||
                                    pathname === "/product/call-center" ||
                                    pathname === "/product/smart-plan" ||
                                    pathname === "/product/clinic-connect"
                                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 mx-1 flex items-center"
                                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1 flex items-center"
                                }
                            >
                                Products
                                <BsChevronDown
                                    className="ml-2 text-black dark:text-white"
                                    size={12}
                                />
                            </div>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <section className="w-full">
                              
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
                                        title="Call Center"
                                        description="Automated patient communication "
                                        icon={
                                            <MdOutlinePhoneEnabled
                                                className={
                                                    pathname ==
                                                    "/product/call-center"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/call-center"
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
                                    <NavMenuItem
                                        title="Custom Web Development"
                                        description="Professional site for your businesses"
                                        icon={
                                            <CgWebsite
                                                className={
                                                    pathname ==
                                                    "/product/web-development"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/web-development"
                                    />
                                    <NavMenuItem
                                        title="Other Tools"
                                        description="Miscellaneous tools for your business"
                                        icon={
                                            <RiToolsFill
                                                className={
                                                    pathname == "/product/tools"
                                                        ? "text-blue-500"
                                                        : ""
                                                }
                                            />
                                        }
                                        href="/product/tools"
                                    />
                                </div>
                              
                            </section>
                        </Menu.Dropdown>
                    </Menu> */}

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
                        <Button
                            onClick={() => {}}
                            className="text-sm mb-3 ml-2"
                        >
                            Login
                        </Button>
                    </a>
                </motion.section>
            </Card>{" "}
        </motion.div>
    )
}

export default MobileNav
