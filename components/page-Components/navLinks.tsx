import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@mantine/core";
import { FiExternalLink } from "react-icons/fi";
import DarkMode from "./darkMode";
import ButtonPrimary from "../UI-Components/button-primary";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:items-center mr-5 gap-3">
      {" "}
      <Link
        href="/"
        className={
          pathname === "/"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   "
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100  "
        }
      >
        Home
      </Link>
      <Link
        href="/about-us"
        className={
          pathname === "/about-us"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   "
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100  "
        }
      >
        About Us
      </Link>
      <Link
        href="/product"
        className={
          pathname === "/product"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   "
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100  "
        }
      >
        Product
      </Link>
      <Link
        href="pricing"
        className={
          pathname === "/pricing"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   "
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100  "
        }
      >
        Pricing
      </Link>
      <Link
        href="/blog"
        className={
          pathname === "/blog"
            ? "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 text-blue-500 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700   "
            : "font-bold text-base lg:text-lg  active:text-blue-500 hover:bg-neutral-100 p-2  rounded-md hover:ring-1 ring-neutral-200 dark:hover:bg-neutral-800 dark:hover:ring-neutral-700 dark:hover:text-neutral-100 dark:text-neutral-100  "
        }
      >
        Blog
      </Link>
      {/* <DarkMode /> */}
      <DarkMode />
      <ButtonPrimary
        onClick={() => {
          window.location.href = "https://smart-plan.io";
        }}
        className=""
      >
        Launch App <FiExternalLink size={20} className="ml-1" />
      </ButtonPrimary>
    </div>
  );
};

export default NavLinks;
