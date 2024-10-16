import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsLinkedin } from "react-icons/bs"

interface FooterLinksProps {
    data: {
        title: string
        links: { label: string; link: string; func?: () => void }[]
    }[]
    setIsModalOpen: (arg: boolean) => void
}

export function Footer({ data, setIsModalOpen }: FooterLinksProps) {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) =>
            link.label === "NewsLetter" ? (
                <div
                    key={index}
                    className="text-sm text-neutral-600 dark:text-neutral-400 py-1 hover:underline cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                >
                    {link.label}
                </div>
            ) : (
                <Link
                    key={index}
                    className="text-sm text-neutral-600 dark:text-neutral-400 py-1 hover:underline"
                    href={link.link}
                    onClick={link.func}
                >
                    {link.label}
                </Link>
            )
        )

        return (
            <div
                className={`${
                    group.title === "Product" ? "w-[200px]" : "w-[130px]"
                } flex flex-col items-center md:items-start`}
                key={group.title}
            >
                <h3 className="text-lg font-bold font-rubik mb-1 text-black dark:text-white">
                    {group.title}
                </h3>
                {links}
            </div>
        )
    })

    return (
        <footer className="bg-neutral-100 dark:bg-[#252525] border-t border-neutral-200 dark:border-neutral-700">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                    <div className="flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                        <Image
                            src="/dhs.svg"
                            alt="DHS Logo"
                            width={225}
                            height={225}
                            className="dark:invert"
                        />
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 text-center sm:text-left">
                            Modern solutions for modern healthcare.
                        </p>
                        <div className="flex items-center mt-3">
                            <div className="rounded-full bg-green-500 w-1 h-1"></div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 ml-2">
                                All systems operational
                            </p>
                        </div>
                        <a
                            href="https://compliancy-group.com/hipaa-compliance-verification/"
                            className="mt-5"
                        >
                            <Image
                                src="https://compliancy-group.com/wp-content/uploads/2022/10/HIPAA-Seal-of-Compliance-Hi-res.png"
                                alt="HIPAA Seal of Compliance"
                                width={100}
                                height={100}
                                priority
                            />
                        </a>
                    </div>
                    <div className="flex flex-wrap justify-center sm:justify-end gap-8 sm:gap-12">
                        {groups}
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-0">
                        © {new Date().getFullYear()} Digital Healthcare
                        Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/BuckyMcYolo/DHS-Homepage">
                            <span className="sr-only">GitHub</span>
                            <BsGithub className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/digital-healthcare-sol/">
                            <span className="sr-only">LinkedIn</span>
                            <BsLinkedin className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
