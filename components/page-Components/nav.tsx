import Link from "next/link"
import React from "react"
import Burger from "./burger"
import NavLinks from "./navLinks"

const Nav = () => {
    return (
        <nav className="top-0 sticky w-full h-12 md:h-16 lg:h-20  flex justify-between items-center bg-white dark:bg-neutral-900 z-50">
            <div className="flex items-center">
                <Link
                    href="/"
                    className=" font-semibold text-base md:text-lg lg:text-2xl ml-2 lg:ml-4 hover:text-blue-500 tracking-wide dark:font-normal"
                >
                    Digital Healthcare Solutions
                </Link>
            </div>
            <Burger />
            <section className="hidden md:flex">
                <NavLinks />
            </section>
        </nav>
    )
}

export default Nav
