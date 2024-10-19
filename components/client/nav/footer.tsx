import Image from "next/image"
import Link from "next/link"
import { BsLinkedin, BsTwitterX, BsMeta } from "react-icons/bs"

interface FooterLinksProps {
    data: {
        title: string
        links: { label: string; link: string; func?: () => void }[]
    }[]
}

interface StatusResponse {
    page: {
        id: string
        name: string
        url: string
        time_zone: string
        updated_at: string
    }
    status: {
        indicator: "none" | "minor" | "major" | "critical"
        description: string
    }
}
async function getSystemStatus(): Promise<StatusResponse | null> {
    try {
        const res = await fetch(
            "https://pb7sfst9fldb.statuspage.io/api/v2/status.json",
            { next: { revalidate: 60 } }
        )
        if (!res.ok) {
            throw new Error("Failed to fetch system status")
        }
        return res.json()
    } catch (error) {
        console.error("Error fetching system status:", error)
        return null
    }
}

function StatusIndicator({ status }: { status: StatusResponse | null }) {
    if (!status) {
        return (
            <div className="inline-flex items-center rounded-md overflow-hidden text-sm font-medium">
                <div className="bg-neutral-700 text-neutral-100 px-2 py-1">
                    System Status
                </div>
                <div className="bg-neutral-500 text-neutral-100 px-2 py-1">
                    Status unavailable
                </div>
            </div>
        )
    }

    const colors = {
        none: "bg-blue-500 text-white",
        minor: "bg-yellow-500 text-black",
        major: "bg-orange-500 text-white",
        critical: "bg-red-500 text-white"
    }

    return (
        <div className="inline-flex items-center rounded-md overflow-hidden text-sm font-medium">
            <div className="bg-neutral-700 text-neutral-100 px-2 py-1">
                System Status
            </div>
            <div className={`${colors[status.status.indicator]} px-2 py-1`}>
                {status.status.description}
            </div>
        </div>
    )
}

export async function Footer({ data }: FooterLinksProps) {
    const systemStatus = await getSystemStatus()

    const groups = data.map((group) => {
        const links = group.links.map((link, index) =>
            link.label === "NewsLetter" ? (
                <div
                    key={index}
                    className="text-sm text-neutral-600 dark:text-neutral-400 py-1 hover:underline cursor-pointer"
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
        <footer className="bg-neutral-100 dark:bg-[#25262b] border-t border-neutral-200 dark:border-neutral-700">
            <div className="container mx-auto lg:max-w-4xl px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <Image
                            src={"/logo.svg"}
                            alt="Axon Logo"
                            width={150}
                            height={150}
                            className="stroke-blue-500 fill-blue-500 dark:invert -translate-y-1"
                        />
                        {/* <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 text-center md:text-left">
                            Modern solutions for modern healthcare.
                        </p> */}
                        <Link
                            className="mt-3"
                            href={"https://getaxon.statuspage.io/"}
                            target="_blank"
                        >
                            <StatusIndicator status={systemStatus} />
                        </Link>

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
                    <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-8">
                        {groups}
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:max-w-4xl px-4 pt-8 pb-20 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Digital Healthcare
                        Solutions. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://github.com/BuckyMcYolo/DHS-Homepage">
                            <span className="sr-only">GitHub</span>
                            <BsTwitterX className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/digital-healthcare-sol/">
                            <span className="sr-only">LinkedIn</span>
                            <BsLinkedin className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/digital-healthcare-sol/">
                            <span className="sr-only">LinkedIn</span>
                            <BsMeta className="w-6 h-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
