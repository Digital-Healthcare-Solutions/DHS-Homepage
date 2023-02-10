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
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const raleway = Raleway({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [colorScheme, setColorScheme] = useState<ColorScheme | null>(
        theme === "dark" ? "dark" : "light"
    )

    useEffect(() => {
        setMounted(true)
        setColorScheme(theme === "dark" ? "dark" : "light")
    }, [])

    if (!mounted) return null

    const toggleColorScheme = (value: ColorScheme) =>
        setColorScheme(value || (colorScheme === "light" ? "light" : "dark"))

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <ThemeProvider attribute="class" defaultTheme="light">
                <MantineProvider theme={{ colorScheme }}>
                    <div className={raleway.className}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </div>
                </MantineProvider>
            </ThemeProvider>
        </ColorSchemeProvider>
    )
}
