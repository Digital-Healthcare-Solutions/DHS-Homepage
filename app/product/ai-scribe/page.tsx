// import RequestDemo from "@/components/client/forms/requestDemo"
// import Devices from "@/components/client/homepage/Devices"
// import EchoSettingsVideo from "@/components/client/homepage/EchoSettingsVideo"
// import { Hero } from "@/components/client/homepage/Hero"
// import InviteUsers from "@/components/client/homepage/InviteUsers"
// import InteractiveDragandDropDemo from "@/components/client/interactive/settings-example"
// import React from "react"

// const Page = () => {
//   return (
//     <div>
//       <Hero />
//
//       <RequestDemo />
//     </div>
//   )
// }

// export default Page

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Mic,
  FileText,
  Brain,
  Clock,
  Sparkles,
  Check,
  ClipboardCheck,
  Settings,
  MessageSquare,
  BarChart,
  Shield,
  User,
  ArrowRight,
  BadgeCheck,
  PencilLine,
  ScrollText
} from "lucide-react"
import EchoSettingsVideo from "@/components/client/homepage/EchoSettingsVideo"
import InteractiveDragandDropDemo from "@/components/client/interactive/settings-example"
import InviteUsers from "@/components/client/homepage/InviteUsers"
import Devices from "@/components/client/homepage/Devices"

const AIScribePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-950/30 dark:to-transparent"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 dark:bg-emerald-900 dark:opacity-20"></div>
        <div className="absolute left-0 bottom-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 dark:bg-teal-900 dark:opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-8">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-300">
                  AI-Powered Medical Scribe
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-teal-600 dark:from-emerald-200 dark:to-teal-300 bg-clip-text text-transparent">
                Your Intelligent Medical Scribe Assistant
              </h1>
              <p className="text-xl text-emerald-900/80 dark:text-emerald-100/80 mb-8">
                Transform patient encounters with AI-powered documentation.
                Automatically generate accurate clinical notes while you focus
                on patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Feature Preview Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl transform rotate-1 opacity-10 dark:opacity-20"></div>
              <Card className="relative backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-xl rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30">
                    <Mic className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
                        Real-time Transcription
                      </h3>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        Converts speech to clinical notes instantly
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-teal-50 dark:bg-teal-900/30">
                    <Brain className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                    <div>
                      <h3 className="font-semibold text-teal-900 dark:text-teal-100">
                        Smart Analysis
                      </h3>
                      <p className="text-sm text-teal-700 dark:text-teal-300">
                        Identifies key clinical information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30">
                    <ClipboardCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
                        Structured Notes
                      </h3>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        Automatic formatting and organization
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      {/* <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
              Streamline Your Documentation
            </h2>
            <p className="text-lg text-emerald-700 dark:text-emerald-300">
              Save time and improve accuracy with AI-powered features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Voice Recognition",
                description:
                  "Advanced speech recognition trained on medical terminology"
              },
              {
                icon: Brain,
                title: "Clinical Intelligence",
                description:
                  "Auto-detects diagnoses, medications, and key findings"
              },
              {
                icon: ScrollText,
                title: "Template Management",
                description: "Customizable templates for different visit types"
              }
            ].map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-neutral-900/60 border-0 shadow-lg rounded-3xl p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-transparent dark:from-emerald-900/30 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-emerald-900/50 dark:to-emerald-900/30 mb-6">
                    <feature.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-emerald-900 dark:text-emerald-100">
                    {feature.title}
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-300">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Workflow Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-emerald-900 dark:text-emerald-100">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Start Recording",
                description:
                  "Begin your patient encounter with one click recording"
              },
              {
                step: "2",
                title: "Live Transcription",
                description:
                  "AI-powered transcription converts speech to text in real-time"
              },
              {
                step: "3",
                title: "Generate Notes",
                description:
                  "Automatically generate structured clinical notes for review"
              }
            ].map((step) => (
              <div key={step.title} className="relative">
                <div className="absolute -left-6 top-10 w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center gap-2">
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {step.step}
                  </span>
                </div>
                <Card className="ml-8 backdrop-blur-sm bg-white/60 dark:bg-neutral-900/60 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-emerald-900 dark:text-emerald-100">
                    {step.title}
                  </h3>
                  <p className="text-emerald-700 dark:text-emerald-300">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EchoSettingsVideo />
      <InteractiveDragandDropDemo />
      <InviteUsers />
      <Devices />

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-emerald-900 dark:text-emerald-100">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                metric: "75%",
                title: "Time Saved",
                description: "Reduce documentation time significantly"
              },
              {
                metric: "99%",
                title: "Accuracy",
                description: "High precision clinical documentation"
              },
              {
                metric: "50%",
                title: "Cost Reduction",
                description: "Lower transcription and documentation costs"
              },
              {
                metric: "2x",
                title: "Patient Time",
                description: "Double your patient face time"
              }
            ].map((benefit) => (
              <Card
                key={benefit.title}
                className="backdrop-blur-sm bg-white/60 dark:bg-neutral-900/75 rounded-3xl p-7 transition-all duration-300 border border-emerald-200 dark:border-emerald-900/50 shadow-lg hover:border-emerald-500 dark:hover:border-emerald-700"
              >
                <div className="flex items-center gap-6">
                  <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                    {benefit.metric}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-emerald-900 dark:text-emerald-100">
                      {benefit.title}
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-800"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-600/5 to-emerald-600/20 dark:from-transparent dark:via-emerald-900/10 dark:to-emerald-900/40"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Transform Your Clinical Documentation Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of healthcare providers who are saving time and
            improving documentation quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-100 dark:hover:bg-emerald-200 dark:text-emerald-700"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-emerald-500/20 dark:hover:bg-emerald-800/30"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIScribePage
