import { Metadata } from "next"
import { Raleway, Rubik } from "next/font/google"
import "../styles/globals.css"
import ProviderWrapper from "../components/providers/ProviderWrapper"
import NavLayout from "./components/client/NavLayout"

export const metadata: Metadata = {
    title: "Axon AI",
    description: "Welcome to Axon AI"
}

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

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${raleway.className} ${rubik.variable}`}>
                <ProviderWrapper>
                    <NavLayout>{children}</NavLayout>
                </ProviderWrapper>
            </body>
        </html>
    )
}
