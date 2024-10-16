import { useState } from "react"
import { Text, createStyles, Container } from "@mantine/core"
import Head from "next/head"
import GetCustomQuote from "../../app/components/client/modals/GetCustomQuote"
import PricingCard from "../../app/components/client/pricing/PricingCard"

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // const useStyles = createStyles((theme) => ({
    //     header: {
    //         fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //         textAlign: "center",
    //         fontWeight: 900,
    //         color: theme.colorScheme === "dark" ? "#fff" : "#000"
    //     },
    //     header2: {
    //         fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    //         textAlign: "center",
    //         fontWeight: 700,
    //         color: theme.colorScheme === "dark" ? "#fff" : "#000"
    //     },

    //     controls: {
    //         marginTop: `20px`,

    //         [theme.fn.smallerThan("sm")]: {
    //             marginTop: theme.spacing.xl
    //         }
    //     },

    //     control: {
    //         height: 54,
    //         paddingLeft: 38,
    //         paddingRight: 38,

    //         [theme.fn.smallerThan("sm")]: {
    //             height: 54,
    //             paddingLeft: 18,
    //             paddingRight: 18
    //         }
    //     }
    // }))

    return (
        <section className=" flex justify-center items-center pb-20 pt-8">
            <Head>
                <title>Pricing | Digital Healthcare Solutions</title>
                <meta
                    name="description"
                    content="Digital Healthcare Solutions is a software company that provides innovative solutions for healthcare professionals. We offer a variety of plans to fit your business' needs."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Digital Healthcare Solutions" />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

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
                    </Container>
                </div>
            </div>
            <GetCustomQuote
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </section>
    )
}

export default Pricing
