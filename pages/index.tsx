import Head from "next/head"
import Image from "next/image"
import { FaqSimple } from "../components/mantine-Components/faq"
import { HeroHomePage } from "../components/mantine-Components/heroHomePage"

export default function Home() {
    return (
        <main>
            <HeroHomePage />
            <FaqSimple />
        </main>
    )
}
