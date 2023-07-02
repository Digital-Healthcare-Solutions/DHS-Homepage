import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import { Raleway } from "@next/font/google"
import { ThemeProvider } from "next-themes"
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme
} from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const raleway = Raleway({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
    const { theme, setTheme, systemTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    const [colorScheme, setColorScheme] = useState<ColorScheme | null>()
    // theme === "dark" ? "dark" : "light"
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const toggleColorScheme = (value: ColorScheme) =>
        setColorScheme(value || (colorScheme === "light" ? "light" : "dark"))
    // console.log(colorScheme
    const Defaulttheme = localStorage.getItem("theme") || "dark"
    console.log(systemTheme)
    console.log(Defaulttheme)
    console.log(theme)
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <ThemeProvider attribute="class" defaultTheme="dark">
                <MantineProvider
                    theme={{
                        colorScheme:
                            Defaulttheme === "system"
                                ? systemTheme
                                : Defaulttheme === "dark"
                                ? "dark"
                                : "light"
                    }}
                >
                    <NotificationsProvider
                        limit={3}
                        autoClose={3000}
                        position="bottom-right"
                    >
                        <div className={raleway.className}>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </div>
                    </NotificationsProvider>
                </MantineProvider>
            </ThemeProvider>
        </ColorSchemeProvider>
    )
}
