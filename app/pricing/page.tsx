import AddOnPricing from "@/components/client/pricing/AddOnPricing"
import EnterpriseAlert from "@/components/client/pricing/EnterpriseAlert"
import PricingCard from "@/components/client/pricing/PricingCard"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Building2 } from "lucide-react"
import { Metadata } from "next"
import { features, title } from "process"
// import PricingSection from "../components/client/pricing/PricingSection"

export const metadata: Metadata = {
  title: "Axon AI | Pricing",
  description:
    "Flexible pricing options to suit healthcare providers of all sizes. All plans include custom onboarding, training, and access to new features.",
  keywords:
    "pricing, healthcare, providers, plans, custom, onboarding, training, features, Axon AI Pricing, Axon AI Plans"
}

const plans: {
  title: string
  price: string
  description: string
  features: string[]
  highlight: boolean
  btnType: "link" | "quote"
  buttonText: string
}[] = [
  // {
  //   title: "Starter",
  //   price: "Free Forever",
  //   description: "For individual practitioners with basic needs.",
  //   features: [
  //     "1 User",
  //     "Live transcription",
  //     "Unlimited notes",
  //     "SOAP, Sections, and Nurse note templates",
  //     "Dictation Mode"
  //   ],
  //   highlight: false,
  //   buttonType: "start",
  //   buttonText: "Get Started"
  // },
  {
    title: "Individual",
    price: "100",
    description: "For solo practitioners with advanced needs.",
    features: [
      "1 User",
      "Everything in Free",
      "More advanced 'reasoning' AI models",
      "Unlimited Customizable templates",
      "First 100 pages Efax free",
      "Free Digital Forms included"
    ],
    highlight: false,
    btnType: "link",
    buttonText: "Start 14 Day Free Trial"
  },
  {
    title: "Team",
    price: "200",
    description: "For small practices and clinics with multiple users.",
    features: [
      "Up to 10 Users",
      "Everything in Individual",
      "Team collaboration",
      "Shared templates & questionnaires",
      "EMR integration included (select EMRs)"
    ],
    highlight: true,
    btnType: "link",
    buttonText: "Start 14 Day Free Trial"
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large practices and hospitals with custom needs.",
    features: [
      "Unlimited Users",
      "Everything in Team",
      "Custom AI models",
      "Custom integrations",
      "Custom SLAs",
      "Custom pricing"
    ],
    highlight: false,
    btnType: "quote",
    buttonText: "Contact Sales"
  }
]
const Pricing = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-neutral-900"></div> */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Simple pricing options to suit healthcare providers of all sizes. No
            contracts or hidden fees. All plans include a 14 day free trial.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mb-32">
          <AddOnPricing />
        </div>

        <EnterpriseAlert />
      </div>
    </section>
  )
}

export default Pricing
