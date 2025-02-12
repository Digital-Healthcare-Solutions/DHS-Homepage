"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DarkMode } from "./darkMode"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const MobileNav = ({ open, setOpen }) => {
  const pathname = usePathname()
  const [productsOpen, setProductsOpen] = useState(false)

  const baseStyles =
    "font-bold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2 mx-1"
  const activeStyles =
    "font-bold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2 mx-1"

  const products = [
    {
      title: "AI-Scribe",
      description:
        "Effortlessly turn patient interactions into clear, accurate notes.",
      href: "/product/ai-scribe"
    },
    {
      title: "Call-Center",
      description:
        "Let our AI answer calls and book appointments, keeping your clinic connected.",
      href: "/product/call-center"
    },
    {
      title: "Efax",
      description: "Digital faxing for modern businesses",
      href: "/product/efax"
    },
    {
      title: "Smart Forms",
      description: "Intelligent form processing and automation",
      href: "/product/digital-forms"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-14 md:hidden w-full h-fit z-50"
    >
      <Card className="bg-white dark:bg-neutral-950 rounded-none">
        <motion.section key="section" className="flex flex-col">
          <Link
            href="/"
            className={pathname === "/" ? activeStyles : baseStyles}
          >
            Home
          </Link>
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className={`${baseStyles} flex items-center justify-between`}
          >
            <span>Products</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                productsOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {productsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="block p-3 mx-3 my-1 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <div className="font-medium">{product.title}</div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {product.description}
                    </p>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            href="/pricing"
            className={pathname === "/pricing" ? activeStyles : baseStyles}
          >
            Pricing
          </Link>

          <Link
            href="/blog"
            className={pathname.includes("/blog") ? activeStyles : baseStyles}
          >
            Blog
          </Link>

          <div className="w-fit mb-3 ml-2 mt-1">
            <DarkMode />
          </div>

          <Link
            href="https://app.getaxon.ai/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 mb-3"
          >
            <Button className="text-sm">Login</Button>
          </Link>

          <Link
            href="https://app.getaxon.ai/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 mb-3"
          >
            <button className=" text-sm shadow-[0_0px_11px_3px_rgb(0,0,0,0.1)] dark:shadow-blue-900 shadow-blue-400 bg-blue-500 hover:bg-white hover:ring-1 ring-blue-500 text-white hover:text-blue-500 font-semibold py-2.5 px-4 rounded font-sans flex items-center justify-center active:bg-white active:text-blue-500 active:ring-1 active:ring-blue-500">
              Try for Free
            </button>
          </Link>
        </motion.section>
      </Card>
    </motion.div>
  )
}

export default MobileNav
