import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button, Menu } from "@mantine/core"
import { FiExternalLink } from "react-icons/fi"
import DarkMode from "./darkMode"
import ButtonPrimary from "../UI-Components/button-primary"
import { BsChevronDown } from "react-icons/bs"

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
            <Link
                href="/about-us"
                className={
                    pathname === "/about-us"
                        ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2  "
                        : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 "
                }
            >
                About<span className="maxMd:hidden ml-1">Us</span>
            </Link>
            <Menu
                transition="scale-y"
                transitionDuration={250}
                trigger="hover"
                position="bottom"
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
                                ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   dark:font-normal active:ring-2 cursor-pointer flex items-center"
                                : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 cursor-pointer flex items-center"
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
                        href="/product/demo"
                        className={
                            pathname === "/product/demo"
                                ? "text-base text-blue-500"
                                : "text-base"
                        }
                    >
                        Smart<strong>Plan</strong>
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
                        Intelli<strong>Call</strong>
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
                        Smart<strong>Form</strong>
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
                        Easy<strong>Auth</strong>
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
                        Smart<strong>Voice</strong>
                    </Menu.Item>
                    {/* <Menu.Item
                        component={Link}
                        href="/product/demo"
                        className={
                            pathname === "/product/demo"
                                ? "text-base text-blue-500"
                                : "text-base"
                        }
                    >
                        Demo
                    </Menu.Item> */}
                    <Menu.Item
                        component={Link}
                        href="/product"
                        className={
                            pathname === "/product"
                                ? "text-base text-blue-500"
                                : "text-base"
                        }
                    >
                        Demos
                    </Menu.Item>
                    {/* <Menu.Item
                        component={Link}
                        href="/product/roadmap"
                        className={
                            pathname === "/product/roadmap"
                                ? "text-base text-blue-500"
                                : "text-base"
                        }
                    >
                        Roadmap
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
                href="https://smart-plan.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <ButtonPrimary onClick={() => {}} className="text-sm">
                    {/* Launch<span className="hidden lg:block  md:ml-1"> App</span>{" "} */}
                    Login
                    {/* <FiExternalLink size={17} className="ml-1" /> */}
                </ButtonPrimary>
            </a>
        </div>
    )
}

export default NavLinks
