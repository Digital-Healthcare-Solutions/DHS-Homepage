import { Metadata } from "next"
import { Raleway, Rubik } from "next/font/google"
import "../styles/globals.css"
import ProviderWrapper from "../components/client/providers/ProviderWrapper"
import NavLayout from "../components/client/nav/NavLayout"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Axon AI",
  description: "All in one AI platform for medical businesses",
  keywords:
    "Axon AI, healthcare AI, medical AI, healthcare scribes, medical AI platform, AI for healthcare, AI for medical businesses"
}

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
      <body className={`${rubik.variable}`}>
        <Toaster />
        <ProviderWrapper>
          <NavLayout>{children}</NavLayout>
        </ProviderWrapper>
      </body>
    </html>
  )
}
