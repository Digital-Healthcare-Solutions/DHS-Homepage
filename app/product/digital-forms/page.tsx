import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  MousePointerClick,
  Brain,
  Lock,
  MessageSquare,
  Smartphone,
  FileText,
  ChevronRight,
  Sparkles,
  Share2,
  Check,
  LayoutGrid,
  Eye,
  Shield,
  Settings
} from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Axon AI | Digital Forms",
  description:
    "Create secure, AI-powered forms with our drag-and-drop builder. Automatically identify patient concerns and streamline your intake process.",
  keywords:
    "medical forms, digital forms, form builder, AI forms, patient intake, healthcare forms, healthcare form solution, digital health online forms, healthcare forms solution, healthcare paperless solutions"
}

const SmartFormPage = () => {
  return (
    <div className="min-h-screen bg-amber-50/50 dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pb-32 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-8">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-medium text-amber-900 dark:text-amber-300">
                AI-Powered Form Builder
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-amber-800 to-amber-600 dark:from-amber-200 dark:to-amber-400">
              Build Intelligent Medical Forms in Minutes
            </h1>
            <p className="text-xl text-amber-900/80 dark:text-amber-100/80 mb-12 max-w-3xl">
              Create secure, AI-powered forms with our drag-and-drop builder.
              Automatically identify patient concerns and streamline your intake
              process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
              <a href="https://app.getaxon.ai/signup">
                <Button
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600"
                >
                  Start Building Free
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-amber-200 text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900"
              >
                View Templates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white dark:from-neutral-950 dark:to-neutral-900"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-amber-900 dark:text-amber-100">
              Everything You Need in a Form Builder
            </h2>
            <p className="text-lg text-amber-800/70 dark:text-amber-200/70">
              Powerful features wrapped in a simple interface
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MousePointerClick,
                title: "Drag & Drop Builder",
                description:
                  "Create professional forms with our intuitive builder - no coding required"
              },
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                description:
                  "Automatically identify potential health concerns from patient responses"
              },
              {
                icon: Lock,
                title: "Secure Forms",
                description:
                  "Password protection and HIPAA-compliant security for sensitive information"
              }
            ].map((feature) => (
              <Card
                key={feature.title}
                className="relative group overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-neutral-900/70 border-0 shadow-lg rounded-3xl p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-transparent dark:from-amber-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="inline-flex p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/50 mb-6">
                    <feature.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-900 dark:text-amber-100">
                    {feature.title}
                  </h3>
                  <p className="text-amber-800/70 dark:text-amber-200/70">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Builder Features */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50/50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-amber-900 dark:text-amber-100">
            Powerful Form Building Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: LayoutGrid,
                title: "Advanced Form Elements",
                features: [
                  "Custom input fields",
                  "Conditional logic",
                  "Multi-step forms",
                  "File upload support"
                ]
              },
              {
                icon: Brain,
                title: "AI Capabilities",
                features: [
                  "Symptom analysis",
                  "Risk assessment",
                  "Treatment suggestions",
                  "Follow-up recommendations"
                ]
              },
              {
                icon: Shield,
                title: "Security Features",
                features: [
                  "Password protection",
                  "Encryption at rest",
                  "Access controls",
                  "Audit trails"
                ]
              },
              {
                icon: Settings,
                title: "Integration & Automation",
                features: [
                  "Automated notifications",
                  "SMS delivery through Call Center",
                  "Webhooks & APIs",
                  "EMR integration"
                ]
              }
            ].map((section) => (
              <Card
                key={section.title}
                className="group overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-neutral-900/70 border border-amber-100/50 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-amber-800 rounded-3xl p-8 transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="inline-flex p-3 h-fit rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-900/50 dark:to-amber-900/30">
                    <section.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-amber-900 dark:text-amber-100">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="p-1 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                            <Check className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          </div>
                          <span className="text-amber-800/70 dark:text-amber-200/70">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-amber-900 dark:text-amber-100">
            Multiple Ways to Share Forms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "SMS Link",
                description: "Send form links directly via text message"
              },
              {
                icon: Share2,
                title: "Direct Link",
                description: "Share via email or messaging apps"
              },
              {
                icon: Smartphone,
                title: "QR Code",
                description: "Scan with smartphone to access forms"
              },
              {
                icon: Eye,
                title: "Embedded Forms",
                description: "Add forms directly to your website"
              }
            ].map((method) => (
              <Card
                key={method.title}
                className="group relative overflow-hidden backdrop-blur-sm bg-white/70 dark:bg-neutral-900/70 border-0 rounded-3xl p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-transparent dark:from-amber-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-900/50 mb-4">
                    <method.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">
                    {method.title}
                  </h3>
                  <p className="text-amber-800/70 dark:text-amber-200/70 text-sm">
                    {method.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-700 dark:to-amber-600"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/5 to-amber-600/30 dark:from-transparent dark:via-amber-900/10 dark:to-amber-900/50"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Building Smart Forms Today
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join thousands of healthcare providers using SmartForm to streamline
            their patient intake process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.getaxon.ai/signup">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-amber-50 dark:bg-amber-100 dark:hover:bg-amber-200 dark:text-amber-700"
              >
                Create Your First Form
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-amber-500 dark:hover:bg-amber-600"
            >
              Watch Tutorial
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SmartFormPage
