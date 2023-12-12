import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button, Divider, Menu } from "@mantine/core"
import { FiExternalLink } from "react-icons/fi"
import DarkMode from "./darkMode"
import ButtonPrimary from "../UI-Components/button-primary"
import { BsCashStack, BsChevronDown, BsMic } from "react-icons/bs"
import NavMenuItem from "../UI-Components/navMenuItem"
import { AiOutlineMessage } from "react-icons/ai"
import { MdOutlineAutoAwesome, MdOutlinePhoneEnabled } from "react-icons/md"
import { RiComputerLine } from "react-icons/ri"

const NavLinks = () => {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex md:items-center mr-5 gap-0 lg:gap-3">
            {" "}
            <Link
                href="/"
                className={
                    pathname === "/"
                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700                        dark:font-normal active:ring-2 "
                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                Home
            </Link>
            {/* <Link
                href="/about-us"
                className={
                    pathname === "/about-us"
                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2  "
                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                About<span className="maxMd:hidden ml-1">Us</span>
            </Link> */}
            <Menu
                transition="scale-y"
                transitionDuration={250}
                trigger="hover"
                position="bottom"
                offset={0}
                closeDelay={200}
                classNames={{
                    dropdown: "p-0"
                }}
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
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 cursor-pointer flex items-center"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 cursor-pointer flex items-center"
                        }
                    >
                        Features{" "}
                        <BsChevronDown
                            className="ml-2 text-black dark:text-white"
                            size={12}
                        />
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <section className="w-[600px]">
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
                        <div className="grid grid-cols-2 gap-2">
                            <NavMenuItem
                                title="Clinic-Connect"
                                description="Secure messaging & E-fax"
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
                                            pathname == "/product/intellicall"
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
                                            pathname == "/product/smart-plan"
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
                                            pathname == "/product/smart-voice"
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
                                            pathname == "/product/smart-form"
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
                    {/* <Menu.Item
                        sx={
                            pathname == "/product/demos"
                                ? {
                                      color: "rgb(59 130 246)",
                                      fontSize: "1rem"
                                  }
                                : {
                                      color: "inherit",
                                      fontSize: "1rem"
                                  }
                        }
                        component={Link}
                        href="/product/demos"
                    >
                        Demos
                    </Menu.Item> */}
                </Menu.Dropdown>
            </Menu>
            <Link
                href="/pricing"
                className={
                    pathname === "/pricing"
                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700  dark:font-normal active:ring-2 "
                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                Pricing
            </Link>
            <Link
                href="/blog"
                className={
                    pathname === "/blog"
                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 "
                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                Blog
            </Link>
            {/* <DarkMode /> */}
            <DarkMode />
            <a
                href="https://app.digitalhealthcaresolutions.io/login"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="text-sm shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-neutral-500 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-bold py-2 px-4 rounded-lg font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
                    {/* Launch<span className="hidden lg:block  md:ml-1"> App</span>{" "} */}
                    Login
                    {/* <FiExternalLink size={17} className="ml-1" /> */}
                </button>
            </a>
        </div>
    )
}

export default NavLinks
