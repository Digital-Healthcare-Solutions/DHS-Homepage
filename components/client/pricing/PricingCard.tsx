import React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star } from "lucide-react"
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
  <Card
    className={`group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl h-full ${
      highlight ? "ring-2 ring-blue-500 dark:ring-blue-400" : ""
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

    {highlight && (
      <div className="absolute top-0 right-0">
        <div className="bg-blue-500 text-white text-sm px-4 py-1 rounded-bl-2xl rounded-tr-3xl font-medium">
          Most Popular
        </div>
      </div>
    )}

    <div className="flex flex-col h-full p-8 relative">
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          {title}
          {highlight && (
            <Star className="w-5 h-5 text-blue-500 dark:text-blue-400" />
          )}
        </h3>

        <div className="mb-4">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            {price !== "Custom" && price !== "Free Forever"
              ? `$${price}`
              : price}
            {price !== "Custom" && price !== "Free Forever" && (
              <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                /month
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-8">{description}</p>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-1 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        {btnType === "link" ? (
          <Link href="https://app.getaxon.ai/signup" className="block">
            <Button
              className={`w-full text-white ${
                highlight
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-gray-100"
              }`}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        ) : (
          <GetCustomQuote
            btnText="Get a Custom Quote"
            btnClassName={`w-full py-3 rounded-xl transition-all duration-300 ${
              highlight
                ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-gray-100"
            }`}
          />
        )}
      </div>
    </div>
  </Card>
)

export default PricingCard
