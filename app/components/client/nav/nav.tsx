"use client"

import Link from "next/link"
import { useState } from "react"
import Burger from "./burger"
import NavLinks from "./navLinks"
import { Popover, Text, Button, Paper } from "@mantine/core"
import MobileNav from "./mobileNavLinks"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"

const Nav = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="top-0 sticky w-full h-14 md:h-16 lg:h-20  flex justify-between items-center bg-white dark:bg-neutral-900 z-50">
            <div className="flex items-center">
                <Link
                    href="/"
                    className=" font-semibold text-base md:text-lg lg:text-2xl ml-3 lg:ml-4 hover:text-blue-500 tracking-wide dark:font-normal "
                >
                    {/* <Image
                        src="/dhs.svg"
                        alt="DHS Logo"
                        width={500}
                        height={500}
                        className="stroke-blue-500 fill-blue-500"
                    /> */}
                </Link>
            </div>

            <Burger open={open} setOpen={setOpen} />
            <AnimatePresence>
                {open && (
                    <MobileNav open={open} setOpen={() => setOpen(!open)} />
                )}
            </AnimatePresence>

            <section className="hidden md:flex">
                <NavLinks />
            </section>
        </nav>
    )
}

export default Nav
