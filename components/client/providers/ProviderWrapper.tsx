"use client"

import Script from "next/script"
import React, { useEffect } from "react"
import { ThemeProvider } from "./theme-provider"
import { QueryClient, QueryClientProvider } from "react-query"
import { Intercom, shutdown } from "@intercom/messenger-js-sdk"

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
    //Intercom
    useEffect(() => {
        Intercom({
            app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID!,
            hide_default_launcher: false
        })

        return () => {
            shutdown()
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
