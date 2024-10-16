"use client"

import React from "react"
import PricingCard from "./PricingCard"
import GetCustomQuote from "../modals/GetCustomQuote"

const plans = [
    {
        title: "Base",
        price: "300",
        description: "Ideal for small practices with 1-3 providers.",
        features: [
            "3000 texts and 3000 call minutes included",
            "$0.05 for each additional text/minute",
            "Smart Form custom form builder",
            "50 AI *assists per month"
        ],
        highlight: false,
        buttonType: "start",
        buttonText: "Start 30 Day Free Trial",
        addOns: [
            {
                name: "Echo",
                price: "Starting at $200/month",
                description: "200 notes included, $1 per additional note"
            },
            {
                name: "Clinic-Connect",
                price: "Starting at $200/month",
                description:
                    "3000 fax pages included, $0.06 per additional page"
            }
        ]
    },
    {
        title: "Premium",
        price: "1000",
        description:
            "For larger practices or practices needing enhanced automation.",
        features: [
            "5000 texts and 5000 call minutes included",
            "$0.05 for each additional text/minute",
            "Enhanced AI automation features",
            "500 AI *assists per month",
            "Smart Form auto analysis"
        ],
        highlight: true,
        buttonType: "start",
        buttonText: "Start 30 Day Free Trial",
        addOns: [
            {
                name: "Echo",
                price: "Starting at $500/month",
                description: "500 notes included, $1 per additional note"
            },
            {
                name: "Clinic-Connect",
                price: "Starting at $500/month",
                description:
                    "7500 fax pages included, $0.06 per additional page"
            }
        ]
    },
    {
        title: "Enterprise",
        price: "Custom",
        description:
            "Tailored solutions for large organizations with complex requirements.",
        features: [
            "Everything in Premium",
            "Custom texts & call minutes",
            "Custom / proprietary solutions",
            "Dedicated servers and database",
            "Enhanced SLA and security",
            "SSO/SAML",
            "Enterprise add-ons available"
        ],
        highlight: false,
        buttonType: "quote",
        buttonText: "Get Custom Quote"
    }
]

const PricingSection = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
                <PricingCard
                    key={index}
                    {...plan}
                    onGetStarted={() => setIsModalOpen(true)}
                    addOns={plan.addOns}
                />
            ))}

            <GetCustomQuote
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    )
}

export default PricingSection
