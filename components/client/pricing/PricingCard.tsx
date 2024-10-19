"use client"

import Link from "next/link"
import React from "react"
import { FaCheck, FaPlus, FaStar } from "react-icons/fa"
import GetCustomQuote from "../modals/GetCustomQuote"

const PricingCard = ({
    title,
    price,
    description,
    features,
    highlight,
    btnType = "link",
    buttonType,
    buttonText,
    addOns
}: {
    title: string
    price: string
    description: string
    features: string[]
    highlight: boolean
    btnType: "link" | "quote"
    buttonType: string
    buttonText: string
    addOns?: { name: string; price: string; description: string }[]
}) => (
    <div
        className={`flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.025] ${
            highlight ? "border-4 border-blue-500" : ""
        }`}
    >
        <div className="px-8 pt-8 pb-2 flex-grow">
            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-300 mb-4 flex items-center">
                {title}
                {highlight && <FaStar className="text-yellow-400 ml-2" />}
            </h3>
            <div className="mb-4">
                <span className="text-4xl font-bold text-blue-700 dark:text-blue-400">
                    {price !== "Custom" ? `$${price}` : price}
                </span>
                {price !== "Custom" && (
                    <span className="text-blue-600 dark:text-blue-300">
                        /month
                    </span>
                )}
            </div>
            <p className="text-blue-600 dark:text-blue-300 mb-6">
                {description}
            </p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-blue-700 dark:text-gray-300">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>{" "}
        {addOns && addOns.length > 0 && (
            <div className="mt-auto p-8">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
                    {title} Add-ons:
                </h4>
                <ul className="space-y-2">
                    {addOns.map((addOn, index) => (
                        <li key={index} className="flex items-start">
                            <FaPlus className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                                <span className="text-blue-700 dark:text-gray-300 font-medium">
                                    {addOn.name}:
                                </span>
                                <span className="text-blue-600 dark:text-blue-200 ml-1">
                                    {addOn.price}
                                </span>
                                <p className="text-sm text-blue-500 dark:text-blue-300">
                                    {addOn.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        <div className="p-6 mt-auto">
            {btnType === "link" ? (
                <Link href="https://app.getaxon.ai/signup">
                    <button
                        className={`w-full py-3 rounded-md transition-colors duration-300 ${
                            highlight
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-300"
                        }`}
                    >
                        {buttonText}
                    </button>
                </Link>
            ) : (
                // <button
                //     onClick={onGetStarted}
                //     className={`w-full py-3 rounded-md transition-colors duration-300 ${
                //         highlight
                //             ? "bg-blue-600 hover:bg-blue-700 text-white"
                //             : "bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-300"
                //     }`}
                // >
                //     {buttonText}
                // </button>
                <GetCustomQuote
                    btnText="Get a Custom Quote"
                    btnClassName={`w-full py-3 rounded-md transition-colors duration-300 ${
                        highlight
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-300"
                    }`}
                />
            )}
        </div>
    </div>
)

export default PricingCard
