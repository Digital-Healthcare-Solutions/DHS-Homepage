import Link from "next/link"
import { usePathname } from "next/navigation"
import { DarkMode } from "./darkMode"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const NavLinks = () => {
  const pathname = usePathname()

  const baseStyles =
    "font-semibold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100 dark:font-normal active:ring-2"
  const activeStyles =
    "font-semibold text-base lg:text-lg active:text-blue-500 hover:bg-neutral-100 p-2 rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:font-normal active:ring-2"

  const products = [
    {
      title: "AI-Scribe",
      description: "Intelligent document processing and automation",
      href: "/product/ai-scribe"
    },
    {
      title: "Call-Center",
      description: "Advanced call center management solutions",
      href: "/product/call-center"
    },
    {
      title: "Efax",
      description: "Digital faxing for modern businesses",
      href: "/product/efax"
    },
    {
      title: "Smart Forms",
      description: "Intelligent form processing and management",
      href: "/product/digital-forms"
    }
  ]

  return (
    <div className="hidden md:flex md:items-center mr-5 gap-0 md:gap-3">
      <NavigationMenu>
        <NavigationMenuList>
          {" "}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={pathname === "/" ? activeStyles : baseStyles}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={baseStyles}>
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900/90 dark:hover:text-neutral-100">
                      <div className="text-sm font-medium leading-none">
                        {product.title}
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-neutral-500 dark:text-neutral-400">
                        {product.description}
                      </p>
                    </NavigationMenuLink>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink
                className={pathname === "/pricing" ? activeStyles : baseStyles}
              >
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  pathname.includes("/blog") ? activeStyles : baseStyles
                }
              >
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

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
