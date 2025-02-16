import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"
import { add } from "date-fns"
import { Check, ChevronRight, Phone, Printer } from "lucide-react"
import GetCustomQuote from "../modals/GetCustomQuote"
import { show } from "@intercom/messenger-js-sdk"
import Link from "next/link"

const AddOnPricing = () => {
  const addOns = [
    {
      title: "AI Call-Center",
      icon: Phone,
      price: "300",
      description: "Automate phone based workflows with conversational AI",
      features: [
        "24/7 automated call handling",
        "Appointment scheduling handled by AI",
        "Automated appointment reminders",
        "HIPAA-compliant 2-way SMS messaging",
        "Call transcription and summarization",
        "Call analytics dashboard",
        "Customizable flows",
        "Integrates with your EMR and external systems"
      ],
      link: "/product/call-center"
    },
    {
      title: "Efax",
      icon: Printer,
      price: "150",
      description: "Automate fax-based workflows with AI",
      features: [
        "3000 pages included per month",
        "Automatic patient identification",
        "Key information extraction",
        "Long document summarization",
        "OCR for handwritten notes",
        "Automatic labeling & organization",
        "$0.05 per additional outbound page",
        "$0.075 per additional inbound page"
      ],
      link: "/product/efax"
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto py-24">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
          Powerful Add-On Features
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Available to all plans, these additional features help automate more
          of your practice
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 px-4">
        {addOns.map((addon) => {
          const Icon = addon.icon
          return (
            <Card
              key={addon.title}
              className="group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl transform transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <CardHeader className="relative p-10">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/50 dark:to-sky-900/50">
                    <Icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {addon.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                      {addon.description}
                    </CardDescription>
                  </div>
                </div>

                <div className="pt-4 flex items-center">
                  {addon.title === "AI Call-Center" ? (
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                      <span className="hover:underline cursor-pointer">
                        Contact us
                      </span>{" "}
                      for a quote
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        starting at
                      </span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                        ${addon.price}
                      </span>
                      <span className="text-lg text-gray-600 dark:text-gray-400">
                        /month
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-10 pt-0 relative">
                <div className="space-y-4 mb-8">
                  {addon.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-4">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/50 dark:to-sky-900/50">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300 text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link href={addon.link}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
                  >
                    Learn more
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default AddOnPricing
