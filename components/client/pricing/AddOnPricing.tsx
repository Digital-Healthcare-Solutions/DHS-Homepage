import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"
import { Check, ChevronRight, Phone, Printer } from "lucide-react"

const AddOnPricing = () => {
  const addOns = [
    {
      title: "Call-Center",
      icon: Phone,
      price: "300",
      description: "Automate phone based workflows with conversational AI",
      features: [
        "24/7 automated call handling",
        "Appointment scheduling handled by AI",
        "Automated appointment reminders",
        "HIPAA-compliant SMS messaging",
        "Call transcription and summarization",
        "Integrates with your EMR",
        "1500 minutes and 1500 SMS messages included per month",
        "$0.05 per additional minute of call time or SMS message"
      ]
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
      ]
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
        Powerful Add-On Features
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
        Available to all plans, these additional features help automate more of
        your practice
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {addOns.map((addon) => {
          const Icon = addon.icon
          return (
            <Card
              key={addon.title}
              className="group relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <CardHeader className="relative p-8 pb-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-900/50">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {addon.title}
                    </CardTitle>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <CardDescription className="text-gray-600 dark:text-gray-300">
                        {addon.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>{" "}
                <div className="mt-4">
                  <span className="text-gray-600 dark:text-gray-400">
                    starting @{" "}
                  </span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                    ${addon.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /month
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-8 pt-0 relative">
                <div className="space-y-3 pb-5">
                  {addon.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="p-1 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
                >
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default AddOnPricing
