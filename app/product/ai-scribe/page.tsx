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
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Axon AI | AI Scribe",
  description:
    "Transform patient encounters with AI-powered documentation. Automatically generate accurate clinical notes while you focus on patient care.",
  keywords:
    "AI Scribe, Medical Scribe, AI-powered Medical Scribe, Clinical Documentation, Clinical Notes, Medical Notes, Medical Transcription, Medical Dictation, Healthcare AI, Healthcare Technology, Medical AI Technology, Medical AI, Axon AI, Axon AI Scribe"
}

const features = [
  {
    icon: Mic,
    title: "Real-time Transcription",
    description: "Converts speech to clinical notes instantly",
    bgClass: "bg-emerald-50 dark:bg-emerald-900/30",
    textClass: "text-emerald-900 dark:text-emerald-100",
    descClass: "text-emerald-700 dark:text-emerald-300",
    iconClass: "text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: Brain,
    title: "Smart Analysis",
    description: "Identifies key clinical symptoms and information",
    bgClass: "bg-teal-50 dark:bg-teal-900/30",
    textClass: "text-teal-900 dark:text-teal-100",
    descClass: "text-teal-700 dark:text-teal-300",
    iconClass: "text-teal-600 dark:text-teal-400"
  },
  {
    icon: ScrollText,
    title: "Custom Note Builder",
    description: "Build Custom Note Templates for different visit types",
    bgClass: "bg-emerald-50 dark:bg-emerald-900/30",
    textClass: "text-emerald-900 dark:text-emerald-100",
    descClass: "text-emerald-700 dark:text-emerald-300",
    iconClass: "text-emerald-600 dark:text-emerald-400"
  }
]

const steps = [
  {
    step: "1",
    title: "Start Recording",
    description: "Begin your patient encounter with one click recording"
  },
  {
    step: "2",
    title: "Live Transcription",
    description: "AI-powered transcription converts speech to text in real-time"
  },
  {
    step: "3",
    title: "Generate Notes",
    description: "Automatically generate structured clinical notes for review"
  }
]

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
                <a href="https://app.getaxon.ai/signup">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700"
                  >
                    Start Free Trial
                  </Button>
                </a>
                <Link href={`/#demo-video`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300 dark:hover:bg-emerald-900"
                  >
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Feature Preview Card */}
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl transform rotate-1 opacity-10 dark:opacity-20 transition-all duration-300 ease-in-out group-hover:rotate-2 group-hover:scale-105 group-hover:opacity-30 dark:group-hover:opacity-40"></div>

              {/* Main card */}
              <Card className="relative backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-xl rounded-3xl p-8 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:bg-white/90 dark:group-hover:bg-neutral-900/90">
                <div className="space-y-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div
                        key={feature.title}
                        className={`flex items-center gap-4 p-4 rounded-2xl ${feature.bgClass} transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg transform group-hover:translate-x-1`}
                      >
                        <Icon
                          className={`w-8 h-8 ${feature.iconClass} transition-transform duration-300 group-hover:scale-110`}
                        />
                        <div className="transition-transform duration-300">
                          <h3 className={`font-semibold ${feature.textClass}`}>
                            {feature.title}
                          </h3>
                          <p className={`text-sm ${feature.descClass}`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-emerald-900 dark:text-emerald-100">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pt-12 md:pt-0">
                {/* Number Circle */}
                <div className="absolute left-4 md:-left-6 top-0 md:top-10 w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shadow-sm">
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {step.step}
                  </span>
                </div>

                {/* Connecting Lines (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-12 w-full border-t-2 border-dashed border-emerald-200 dark:border-emerald-800" />
                )}

                {/* Card */}
                <Card className="ml-20 md:ml-8 backdrop-blur-sm bg-white/60 dark:bg-neutral-900/60 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-6 transition-transform duration-300 dark:hover:border-emerald-800 hover:border-emerald-400">
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
          <Link className="flex justify-center mt-10" href={`/#demo-video`}>
            <Button
              className="mx-auto mt-8 bg-emerald-300 hover:bg-emerald-400 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-black dark:text-white"
              endIcon={<ArrowRight size={14} />}
            >
              See it in action
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="pt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
              Customize your notes to to perfectly suit your style.
            </h2>
            <p className="text-lg md:text-xl text-emerald-700 dark:text-emerald-300">
              Drag and drop Different element into your note to create the
              perfect note format for a specific visit type.
            </p>
          </div>
        </div>
      </section>

      <EchoSettingsVideo />
      <InteractiveDragandDropDemo />
      {/* Key Features */}
      <section className="pt-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
              Invite your team to collaborate.
            </h2>
            <p className="text-lg md:text-xl text-emerald-700 dark:text-emerald-300">
              Seamlessly share and collaborate on patient notes between nurses
              and doctors, enhancing communication and care coordination
            </p>
          </div>
        </div>
      </section>
      <InviteUsers />

      {/* CTA Section */}
      <section className="relative py-24 mt-16 overflow-hidden">
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
            <a href="https://app.getaxon.ai/signup">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 dark:bg-emerald-100 dark:hover:bg-emerald-200 dark:text-emerald-700"
              >
                Start Free Trial
              </Button>
            </a>
            <Link href={`/#request-demo`}>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-emerald-500/50 hover:text-white dark:hover:bg-emerald-900/70"
              >
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIScribePage
