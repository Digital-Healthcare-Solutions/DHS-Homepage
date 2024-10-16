"use client"

import { Squash as Hamburger } from "hamburger-react"

const Burger = ({ open, setOpen }) => {
    const theme = localStorage.getItem("theme")
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
