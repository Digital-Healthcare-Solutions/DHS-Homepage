"use client"

import { Squash as Hamburger } from "hamburger-react"
import { useTheme } from "next-themes"

const Burger = ({ open, setOpen }) => {
    const { theme } = useTheme()
    return (
        <div className="md:hidden mr-4">
            <Hamburger
                color={theme == "light" ? "#000" : "#fff"}
                toggled={open}
                toggle={setOpen}
                size={20}
                easing="ease-in-out"
                rounded
                label="Show menu"
            />
        </div>
    )
}

export default Burger
