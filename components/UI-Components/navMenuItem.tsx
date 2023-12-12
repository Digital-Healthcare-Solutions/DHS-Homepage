import { Text, ThemeIcon } from "@mantine/core"
import Link from "next/link"
import React from "react"

const NavMenuItem = ({ title, description, icon, href }) => {
    return (
        <Link
            href={href}
            className="w-full hover:bg-neutral-100 dark:hover:bg-neutral-900  p-2 rounded-md"
        >
            <div className="flex items-start ">
                <div className="mt-1">
                    <ThemeIcon variant="default" size={"lg"}>
                        {icon}
                    </ThemeIcon>
                </div>
                <div>
                    <div className="ml-3">
                        <Text size={"md"}>{title}</Text>
                        <Text size="sm" color="dimmed">
                            {description}
                        </Text>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NavMenuItem
