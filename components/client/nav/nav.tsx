"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Burger from "./burger"
import NavLinks from "./navLinks"
import MobileNav from "./mobileNavLinks"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

const Nav = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      setOpen(false)
    }
  }, [pathname])

  return (
    <nav className="top-0 sticky w-full h-14 md:h-16 lg:h-20  flex justify-between items-center bg-white dark:bg-neutral-950 z-50 border-b">
      <div className="flex items-center">
        <Link
          href="/"
          className="font-semibold text-base md:text-lg lg:text-2xl ml-3 lg:ml-4 hover:text-blue-500 tracking-wide dark:font-normal"
        >
          <div className="w-32 md:w-40 lg:w-48">
            <Image
              src={"/2.svg"}
              alt="Axon Logo"
              width={150}
              height={150}
              className="w-full h-auto stroke-blue-500 fill-blue-500 dark:invert -translate-y-1"
            />
          </div>
        </Link>
      </div>
      <Burger open={open} setOpen={setOpen} />
      <AnimatePresence>
        {open && <MobileNav open={open} setOpen={() => setOpen(!open)} />}
      </AnimatePresence>

      <NavLinks />
    </nav>
  )
}

export default Nav
