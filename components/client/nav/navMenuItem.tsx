"use client"

import { Button } from "@/components/ui/button"
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
                    <Button variant={"ghost"} size={"icon"}>
                        {icon}
                    </Button>
                </div>
                <div>
                    <div className="ml-3">
                        <div>{title}</div>
                        <div className="text-muted-foreground">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NavMenuItem
