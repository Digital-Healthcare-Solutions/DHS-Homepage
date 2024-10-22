import PricingCard from "@/components/client/pricing/PricingCard"
import { Metadata } from "next"
import { features } from "process"
// import PricingSection from "../components/client/pricing/PricingSection"

export const metadata: Metadata = {
    title: "Pricing",
    description:
        "Flexible pricing options to suit healthcare providers of all sizes. All plans include custom onboarding, training, and access to new features.",
    keywords:
        "pricing, healthcare, providers, plans, custom, onboarding, training, features, Axon AI Pricing, Axon AI Plans"
}

const plans = [
    {
        title: "Individual",
        price: "99",
        description: "Ideal for single practitioners.",
        features: [
            "Live transcription",
            "Unlimited notes",
            "Customizable templates",
            "Dictation Mode"
        ],
        highlight: false,
        buttonType: "start",
        buttonText: "Start 14 Day Free Trial"
        // addOns: [
        //     {
        //         name: "Echo",
        //         price: "Starting at $200/month",
        //         description: "200 notes included, $1 per additional note"
        //     },
        //     {
        //         name: "Clinic-Connect",
        //         price: "Starting at $200/month",
        //         description:
        //             "3000 fax pages included, $0.06 per additional page"
        //     }
        // ]
        // addOns: [
        //     {
        //         name: "EMR Integration",
        //         price: "$200/month",
        //         description: "200 notes included, $1 per additional note"
        //     }
        // ]
    },
    {
        title: "Team",
        price: "199",
        description: "For small practices and clinics with up to 10 users.",
        features: [
            "Everything in Individual",
            "Team collaboration",
            "Shared templates & questionnaires"
        ],
        highlight: true,
        buttonType: "start",
        buttonText: "Start 14 Day Free Trial"
        // addOns: [
        //     {
        //         name: "Echo",
        //         price: "Starting at $500/month",
        //         description: "500 notes included, $1 per additional note"
        //     },
        //     {
        //         name: "Clinic-Connect",
        //         price: "Starting at $500/month",
        //         description:
        //             "7500 fax pages included, $0.06 per additional page"
        //     }
        // ]
        // addOns: [
        //     {
        //         name: "EMR Integration",
        //         price: "$250/month",
        //         description: "Upload notes to your EMR with a single click"
        //     }
        // ]
    },
    {
        title: "Enterprise",
        price: "Custom",
        description:
            "Tailored solutions for large organizations with complex requirements.",
        // features: [
        //     "Everything in Premium",
        //     "Custom texts & call minutes",
        //     "Custom / proprietary solutions",
        //     "Dedicated servers and database",
        //     "Enhanced SLA and security",
        //     "SSO/SAML",
        //     "Enterprise add-ons available"
        // ],
        features: [
            "Everything in Team",
            "Dedicated servers and database",
            "Enhanced SLA and security",
            "SSO/SAML",
            "API access"
        ],
        highlight: false,
        buttonType: "quote",
        buttonText: "Get Custom Quote"
    }
]
const Pricing = () => {
    return (
        <section className="flex justify-center items-center pb-20 pt-8">
            <div className="flex flex-col items-center py-4 overflow-x-scroll md:overflow-x-hidden w-full">
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900 dark:to-gray-900 py-16 px-4 transition-colors duration-300 rounded-lg w-fit">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 dark:text-blue-200 mb-4">
                            Choose Your Plan
                        </h1>
                        <p className="text-center text-lg text-blue-700 dark:text-blue-300 mb-12 max-w-3xl mx-auto">
                            Simple pricing options to suit healthcare providers
                            of all sizes. No contracts or hidden fees. All plans
                            include a 14 day free trial.
                        </p>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {plans.map((plan, index) => (
                                <PricingCard
                                    key={index}
                                    {...plan}
                                    btnType={index === 2 ? "quote" : "link"}
                                    // addOns={plan.addOns}
                                />
                            ))}

                            {/* <GetCustomQuote
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
