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
            description:
                "Automate phone based workflows with conversational AI",
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
            <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-200 mb-8">
                Powerful Add-On Features available to all plans
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 p-2">
                {addOns.map((addon) => {
                    const Icon = addon.icon
                    return (
                        <Card
                            key={addon.title}
                            className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950 dark:to-gray-950 border-blue-200 dark:border-blue-800"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12">
                                <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-full"></div>
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                    <div className="w-full">
                                        <CardTitle className="text-2xl text-blue-900 dark:text-blue-200">
                                            {addon.title}
                                        </CardTitle>
                                        <CardDescription className="text-blue-700 dark:text-blue-300 mt-1 flex flex-col md:flex-row items-start md:items-center md:justify-between w-full">
                                            {addon.description}
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-blue-500 text-blue-500 hover:text-blue-600 dark:border-blue-400 dark:text-blue-400 mt-2 md:mt-0 hover:bg-blue-100 dark:hover:bg-blue-900"
                                                endIcon={
                                                    <ChevronRight size={13} />
                                                }
                                            >
                                                Learn more{" "}
                                            </Button>
                                        </CardDescription>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <span className="text-blue-700 dark:text-blue-300">
                                        starting @{" "}
                                    </span>
                                    <span className="text-3xl font-bold text-blue-900 dark:text-blue-200">
                                        ${addon.price}
                                    </span>
                                    <span className="text-blue-700 dark:text-blue-300">
                                        /month
                                    </span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {addon.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2"
                                        >
                                            <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                            <span className="text-blue-800 dark:text-blue-200">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default AddOnPricing
