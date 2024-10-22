"use client"

import Script from "next/script"
import React, { useEffect } from "react"
import { ThemeProvider } from "./theme-provider"
import { QueryClient, QueryClientProvider } from "react-query"
declare global {
    interface Window {
        Intercom: any
        intercomSettings: any
    }
}

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    //Intercom
    useEffect(() => {
        if (window) {
            ;(function () {
                console.log("Intercom booting")
                var w = window
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
                        if (x.parentNode) {
                            x.parentNode.insertBefore(s, x)
                        }
                    }
                    if (document.readyState === "complete") {
                        l()
                        //@ts-ignore
                    } else if (w.attachEvent) {
                        //@ts-ignore
                        w.attachEvent("onload", l)
                    } else {
                        w.addEventListener("load", l, false)
                    }
                }
            })()

            //Intercom boot
            window.Intercom("boot", {
                api_base: "https://api-iam.intercom.io",
                app_id: "g7yuh49e"
            })
        }

        return () => {
            if (window.Intercom) {
                window.Intercom("shutdown")
            }
        }
    }, [])

    const queryClient = new QueryClient()

    return (
        <div>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
                strategy="afterInteractive"
            />
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
            <QueryClientProvider client={queryClient}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </QueryClientProvider>
        </div>
    )
}

export default ProviderWrapper
