import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Pen,
  MessageSquare,
  Printer,
  FileSpreadsheet,
  Check,
  Phone
} from "lucide-react"
import Link from "next/link"

// Define TypeScript types for the component props
const ProductCard = ({
  title,
  description,
  icon: Icon,
  color = "blue",
  badge,
  features,
  benefits,
  benefitsTitle = "Benefits",
  featuresTitle = "Core Features",
  buttonText = "Learn More",
  link
}: {
  title: string
  description: string
  icon: React.ElementType
  color?: string
  badge?: string
  features: string[]
  benefits: string[]
  benefitsTitle?: string
  featuresTitle?: string
  buttonText?: string
  link: string
}) => {
  return (
    <Card
      className={`bg-white dark:bg-neutral-900 border-${color}-500/20 hover:border-${color}-500/40 transition-all duration-300`}
    >
      <div className="p-8">
        <div className="flex items-start gap-6">
          <div className={`bg-${color}-500/10 p-4 rounded-lg`}>
            <Icon className={`w-8 h-8 text-${color}-400`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold">{title}</h3>
              {badge && (
                <Badge
                  className={`bg-${color}-500/20 text-${color}-700 dark:text-${color}-300 hover:bg-${color}-500/30`}
                >
                  {badge}
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-lg mb-6">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {featuresTitle}
                </h4>
                <ul className="space-y-2">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 text-${color}-400`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {benefitsTitle}
                </h4>
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <Check className={`w-4 h-4 text-${color}-400`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href={link}>
              <Button
                className={`bg-${color}-600 hover:bg-${color}-700 text-white`}
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

const PlatformOverview = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Complete Practice Automation Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Transform your practice with our comprehensive suite of AI-powered
            tools */}
            Use our AI scribe with our other products to enhance and automate
            all administrative tasks in your practice
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8">
          <ProductCard
            title="AI Scribe"
            description="Revolutionary AI-powered medical documentation that captures every detail of patient visits in real-time, allowing you to focus entirely on patient care."
            icon={Pen}
            color="blue"
            badge="Free"
            features={[
              "Real-time note generation",
              "Custom templates",
              "Voice commands",
              "EHR integration"
            ]}
            benefits={[
              "Save 2+ hours daily",
              "Reduce burnout",
              "Improve note quality",
              "Instant documentation"
            ]}
            buttonText="Learn More About AI Scribe"
            link="/product/ai-scribe"
          />

          <ProductCard
            title="Call Center"
            description="Streamline patient engagement with AI-powered communication tools that automate appointment reminders, appointment scheduling, follow-ups, and two-way messaging."
            icon={Phone}
            color="purple"
            features={[
              "let AI handle scheduling",
              "Automated reminders",
              "Two-way texting",
              "Voice & SMS support",
              "Integrates with your EMR"
            ]}
            benefits={[
              "Reduce no-shows",
              "Improve satisfaction",
              "Save staff time",
              "Better engagement"
            ]}
            featuresTitle="Features"
            benefitsTitle="Impact"
            buttonText="Learn More About Communication"
            link="/product/call-center"
          />
          <ProductCard
            title="eFax Automation"
            description="Eliminate paper faxes with our intelligent eFax system that automatically routes, processes, and stores documents in a HIPAA-compliant environment."
            icon={Printer}
            color="emerald"
            features={[
              "Auto extraction of key details",
              "AI Summarization",
              "OCR processing",
              "Secure, unlimited storage"
            ]}
            benefits={[
              "Paperless office",
              "Faster processing",
              "Error reduction",
              "Time and cost savings"
            ]}
            featuresTitle="Capabilities"
            benefitsTitle="Outcomes"
            buttonText="Learn More About eFax"
            link="/product/efax"
          />
          <ProductCard
            title="Digital Forms"
            description="Transform patient intake with smart digital forms that automatically update records and integrate directly with your EHR system."
            icon={FileSpreadsheet}
            color="amber"
            features={[
              "Mobile-friendly",
              "Auto-population",
              "Digital signatures",
              "Custom branding"
            ]}
            benefits={[
              "Better accuracy",
              "Faster check-in",
              "Staff efficiency",
              "Patient satisfaction"
            ]}
            featuresTitle="Key Features"
            benefitsTitle="Results"
            buttonText="Learn More About Forms"
            link="/product/digital-forms"
          />
        </div>
      </div>
    </div>
  )
}

export default PlatformOverview
