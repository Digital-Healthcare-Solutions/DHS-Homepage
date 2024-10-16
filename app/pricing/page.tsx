import { Text, Container } from "@mantine/core"
import { Metadata } from "next"
import PricingSection from "../components/client/pricing/PricingSection"

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Flexible pricing options to suit healthcare providers of all sizes. All plans include custom onboarding, training, and access to new features.",
    keywords:
        "pricing, healthcare, providers, plans, custom, onboarding, training, features"
}

const Pricing = () => {
    return (
        <section className=" flex justify-center items-center pb-20 pt-8">
            <div className="flex flex-col items-center drop-shadow-lg pt-4  overflow-x-scroll md:overflow-x-hidden">
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900 dark:to-gray-900  py-16 px-4 transition-colors duration-300 rounded-lg">
                    <Container size="xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 dark:text-blue-200 mb-4">
                            Choose Your Plan
                        </h1>
                        <Text className="text-center text-lg text-blue-700 dark:text-blue-300 mb-12 max-w-3xl mx-auto">
                            Flexible pricing options to suit healthcare
                            providers of all sizes. All plans include custom
                            onboarding, training, and access to new features.
                        </Text>
                        <PricingSection />
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Pricing
