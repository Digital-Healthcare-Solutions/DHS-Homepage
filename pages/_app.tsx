import "../styles/globals.css"
import type { AppProps } from "next/app"
import NavLayout from "../app/components/client/NavLayout"
import { Raleway, Rubik } from "next/font/google"
import { ThemeProvider } from "next-themes"
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme
} from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-Raleway"
})
const rubik = Rubik({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-Rubik"
})

export default function App({ Component, pageProps }: AppProps) {
    const { theme, setTheme, systemTheme } = useTheme()

    const [mounted, setMounted] = useState(false)
    const [colorScheme, setColorScheme] = useState<ColorScheme | null>()
    // theme === "dark" ? "dark" : "light"
    useEffect(() => {
        setMounted(true)
    }, [])

    const router = useRouter()

    //Intercom

    useEffect(() => {
        ;(function () {
            var w = window as any
            var ic = w.Intercom
            if (typeof ic === "function") {
                ic("reattach_activator")
                ic("update", w.intercomSettings)
            } else {
                var d = document
                var i = function () {
                    // @ts-ignore
                    i.c(arguments)
                }
                // @ts-ignore
                i.q = []
                // @ts-ignore
                i.c = function (args: any) {
                    // @ts-ignore
                    i.q.push(args)
                }
                w.Intercom = i
                var l = function () {
                    var s = d.createElement("script")
                    s.type = "text/javascript"
                    s.async = true
                    s.src = "https://widget.intercom.io/widget/g7yuh49e"
                    var x = d.getElementsByTagName("script")[0]
                    x.parentNode.insertBefore(s, x)
                }
                if (document.readyState === "complete") {
                    l()
                } else if (w.attachEvent) {
                    w.attachEvent("onload", l)
                } else {
                    w.addEventListener("load", l, false)
                }
            }
        })()

        //Intercom boot
        ;(window as any).Intercom("boot", {
            api_base: "https://api-iam.intercom.io",
            app_id: "g7yuh49e"
        })

        return () => {
            if ((window as any)?.Intercom) {
                ;(window as any)?.Intercom("shutdown")
            }
        }
    }, [])

    if (!mounted) return null

    const toggleColorScheme = (value: ColorScheme) =>
        setColorScheme(value || (colorScheme === "light" ? "light" : "dark"))
    const Defaulttheme = localStorage.getItem("theme") || "dark"
    return (
        // @ts-ignore
        <ColorSchemeProvider
            colorScheme={colorScheme || "dark"}
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
                        position="bottom-left"
                    >
                        <div
                            className={`${raleway.className} ${rubik.variable}`}
                        >
                            <NavLayout>
                                <Component {...pageProps} />
                            </NavLayout>
                        </div>
                    </NotificationsProvider>
                </MantineProvider>
            </ThemeProvider>
        </ColorSchemeProvider>
    )
}
