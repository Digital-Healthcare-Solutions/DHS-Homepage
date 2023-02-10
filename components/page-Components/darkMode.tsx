import { IoSunny } from "react-icons/io5"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useMantineColorScheme } from "@mantine/core"

const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const { toggleColorScheme } = useMantineColorScheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const handleDarkMode = () => {
        toggleColorScheme("dark")
        setTheme("dark")
    }

    const handleLightMode = () => {
        toggleColorScheme("light")
        setTheme("light")
    }

    if (theme === "dark") {
        return (
            <button
                onClick={handleLightMode}
                className={`bg-gray-200 hover:bg-gray-300 p-2 hover:ring-1 ring-gray-200 text-gray-600 font-bold rounded-lg mx-3  
        `}
            >
                <IoSunny />
            </button>
        )
    } else {
        return (
            <button
                onClick={handleDarkMode}
                className={`bg-gray-200 hover:bg-gray-300 p-2 hover:ring-1 ring-gray-200 text-gray-600 font-bold rounded-lg mr-3  
        `}
            >
                <BsFillMoonStarsFill />
            </button>
        )
    }
}

export default DarkMode
