import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout"
import { Raleway, Rubik } from "@next/font/google"
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
import Head from "next/head"
import Script from "next/script"

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
            // name: me.user.first_name + " " + me.user.last_name, // Full name
            // email: me.user.email, // Email address
            // //fomrat timestamp to unix
            // created_at: Math.floor(new Date(me.user.created_at).getTime() / 1000),
            // user_id: me.user.id, // User ID
            // user_hash: me.user.hash,
            // custom_launcher_selector: "#intercom",
            // company: {
            //   id: me.user.my_entity.id,
            //   name: me.user.my_entity.name,
            //   created_at: Math.floor(
            //     new Date(me.user.my_entity.created_at).getTime() / 1000
            //   )
            // }
        })

        return () => {
            if ((window as any)?.Intercom) {
                ;(window as any)?.Intercom("shutdown")
            }
        }
    }, [])

    //Intercom update
    useEffect(() => {
        const handleRouteChange = () => {
            ;(window as any)?.Intercom("update")
        }

        router.events.on("routeChangeComplete", handleRouteChange)

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])

    if (!mounted) return null

    const toggleColorScheme = (value: ColorScheme) =>
        setColorScheme(value || (colorScheme === "light" ? "light" : "dark"))
    // console.log(colorScheme
    const Defaulttheme = localStorage.getItem("theme") || "dark"
    console.log(systemTheme)
    console.log(Defaulttheme)
    console.log(theme)
    return (
        // @ts-ignore
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            {/* @ts-ignore */}
            <Head>
                <script id="mcjs">
                    {
                        // @ts-ignore
                        !(function (c, h, i, m, p) {
                            ;(m = c.createElement(h)),
                                (p = c.getElementsByTagName(h)[0]),
                                (m.async = 1),
                                (m.src = i),
                                p.parentNode.insertBefore(m, p)
                        })(
                            document,
                            "script",
                            "https://chimpstatic.com/mcjs-connected/js/users/1199c26ea58e1d8664b09730f/c963c98cd688240fb76253445.js"
                        )
                    }
                    ;
                </script>
            </Head>{" "}
            {/* @ts-ignore */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                strategy="afterInteractive"
            />
            {/* @ts-ignore */}
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
        `}
            </Script>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID2}`}
            ></Script>
            <Script>
                {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID2}');`}
            </Script>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID2}`}
            ></Script>
            <Script>
                {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID2}');`}
            </Script>
            {/* @ts-ignore */}
            <ThemeProvider attribute="class" defaultTheme="dark">
                {/* @ts-ignore */}
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
                    {/* @ts-ignore */}
                    <NotificationsProvider
                        limit={3}
                        autoClose={3000}
                        position="bottom-left"
                    >
                        <div
                            className={`${raleway.className} ${rubik.variable}`}
                        >
                            {/* @ts-ignore */}
                            <Layout>
                                {/* @ts-ignore */}
                                <Component {...pageProps} />
                            </Layout>
                        </div>
                    </NotificationsProvider>
                </MantineProvider>
            </ThemeProvider>
        </ColorSchemeProvider>
    )
}
