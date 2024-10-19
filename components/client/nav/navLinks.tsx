import Link from "next/link"
import { usePathname } from "next/navigation"
import { DarkMode } from "./darkMode"
import { Button } from "@/components/ui/button"

const NavLinks = () => {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex md:items-center mr-5 gap-0 md:gap-3">
            <Link
                href="/"
                className={
                    pathname === "/"
                        ? "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700                        dark:font-normal active:ring-2 "
                        : "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                Home
            </Link>
            {/* <Menu
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
                            pathname === "/product/call-center" ||
                            pathname === "/product/smart-plan" ||
                            pathname === "/product/clinic-connect"
                                ? "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 cursor-pointer flex items-center"
                                : "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 cursor-pointer flex items-center"
                        }
                    >
                        Products{" "}
                        <BsChevronDown
                            className="ml-2 text-black dark:text-white"
                            size={12}
                        />
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <section className="w-[600px]">
                        <div className="flex justify-between items-center px-4 pt-2">
                            <h1 className="font-semibold text-lg">Products</h1>
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
                                title="Call Center"
                                description="Streamlined patient communication "
                                icon={
                                    <MdPhone
                                        className={
                                            pathname == "/product/call-center"
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
                            />
                            <NavMenuItem
                                title="SmartVoice"
                                description="Dictation & translation software"
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
                                title="SmartPlan"
                                description="Chronic care management platform"
                                icon={
                                    <LuUser
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
                        <Divider />
                        <div className="dark:bg-neutral-900 py-3">
                            <div className="flex justify-between items-center px-4 pb-2">
                                <h1 className="text-sm font-sans">
                                    Get started today and get 1 month free!
                                </h1>
                                <Link href="/?dialog=getStarted">
                                    <Button
                                        size="xs"
                                        variant="subtle"
                                        className="text-blue-400"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </Menu.Dropdown>
            </Menu> */}
            <Link
                href="/pricing"
                className={
                    pathname === "/pricing"
                        ? "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700  dark:font-normal active:ring-2 "
                        : "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                Pricing
            </Link>
            <Link
                href="/blog"
                className={
                    pathname.includes("/blog")
                        ? "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 "
                        : "font-semibold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                Blog
            </Link>
            <DarkMode />
            <Link
                href="https://app.getaxon.ai/login"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button>Login</Button>
            </Link>
            <a
                href="https://app.getaxon.ai/signup"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="text-sm shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-blue-900 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-semibold py-2.5 px-4 rounded font-sans flex items-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
                    Try for Free
                </button>
            </a>
        </div>
    )
}

export default NavLinks
