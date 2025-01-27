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
  color?: "blue" | "purple" | "emerald" | "amber"
  badge?: string
  features: string[]
  benefits: string[]
  benefitsTitle?: string
  featuresTitle?: string
  buttonText?: string
  link: string
}) => {
  const borderGradientMap = {
    blue: "group-hover:border-blue-500",
    purple: "group-hover:border-purple-500",
    emerald: "group-hover:border-emerald-500",
    amber: "group-hover:border-amber-500"
  }

  const iconBgMap = {
    blue: "bg-blue-100 hover:bg-blue-200/75 dark:bg-blue-900/50",
    purple: "bg-purple-100 hover:bg-purple-200/75 dark:bg-purple-900/50",
    emerald: "bg-emerald-100 hover:bg-emerald-200/75 dark:bg-emerald-900/50",
    amber: "bg-amber-100 hover:bg-amber-200/75 dark:bg-amber-900/50"
  }

  const iconColorMap = {
    blue: "text-blue-600 dark:text-blue-300",
    purple: "text-purple-600 dark:text-purple-300",
    emerald: "text-emerald-600 dark:text-emerald-400",
    amber: "text-amber-600 dark:text-amber-400"
  }

  return (
    <div className="group">
      <Card
        className={`
        relative rounded-3xl bg-white dark:bg-neutral-900 
        border-2 border-opacity-100 transition-colors duration-300
        ${borderGradientMap[color]}
        shadow-lg overflow-hidden
      `}
      >
        <div className="p-8">
          <div className="flex items-start gap-6">
            <div className={`${iconBgMap[color]} p-4 rounded-2xl`}>
              <Icon className={`w-8 h-8 ${iconColorMap[color]}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
                {badge && (
                  <Badge
                    className={`${iconBgMap[color]} ${iconColorMap[color]}`}
                  >
                    {badge}
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                {description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {featuresTitle}
                  </h4>
                  <ul className="space-y-3">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={`p-1 rounded-lg ${iconBgMap[color]}`}>
                          <Check className={`w-4 h-4 ${iconColorMap[color]}`} />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {benefitsTitle}
                  </h4>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <span className={`p-1 rounded-lg ${iconBgMap[color]}`}>
                          <Check className={`w-4 h-4 ${iconColorMap[color]}`} />
                        </span>
                        <span className="text-gray-600 dark:text-gray-300">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link href={link}>
                <Button
                  className={`${iconBgMap[color]} ${iconColorMap[color]} hover:opacity-90`}
                >
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
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
            color="emerald"
            badge="Free"
            features={[
              "Real-time transcription",
              "Customizable drag and drop templates",
              "Dictation Mode",
              "Team collaboration"
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
            color="blue"
            features={[
              "Let AI handle calls and scheduling",
              "Automated reminders",
              "Two-way texting",
              "Voicemail & SMS support",
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
            buttonText="Learn More About our Call Center"
            link="/product/call-center"
          />
          <ProductCard
            title="eFax Automation"
            description="Eliminate paper faxes with our intelligent eFax system that automatically routes, processes, and stores documents in a HIPAA-compliant environment."
            icon={Printer}
            color="purple"
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
              "Drag-and-drop builder",
              "Mobile-friendly",
              "Auto-completing fields",
              "Collect Digital signatures",
              "Add Custom branding"
            ]}
            benefits={[
              "Better accuracy",
              "Faster check-in",
              "Staff efficiency",
              "Patient satisfaction",
              "Secure and HIPAA-compliant"
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
