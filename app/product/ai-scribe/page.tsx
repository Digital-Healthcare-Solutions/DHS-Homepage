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
  ScrollText,
  Users,
  Download,
  PlayCircle
} from "lucide-react"
import EchoSettingsVideo from "@/components/client/homepage/EchoSettingsVideo"
import InteractiveDragandDropDemo from "@/components/client/interactive/settings-example"
import InviteUsers from "@/components/client/homepage/InviteUsers"
import Devices from "@/components/client/homepage/Devices"
import Link from "next/link"
import { Metadata } from "next"
import UserReviews from "@/components/client/homepage/UserReviews"
import EMRIntegrations from "@/components/product/call-center/emr-integrations"

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
    number: "1",
    title: "Start Recording",
    description:
      "Begin your patient encounter with one-click recording. Your conversation is securely captured for AI processing.",
    image: "/images/start-recording.png" // Replace with actual image path
  },
  {
    number: "2",
    title: "Real-time Transcription",
    description:
      "AI-powered transcription converts speech to text in real-time with medical terminology accuracy above 98%.",
    image: "/images/transcription.png" // Replace with actual image path
  },
  {
    number: "3",
    title: "Generate Clinical Notes",
    description:
      "Automatically generate structured clinical notes formatted exactly the way you want them.",
    image: "/images/clinical-notes.png" // Replace with actual image path
  },
  {
    number: "4",
    title: "Review & Export",
    description:
      "Quickly review AI-generated notes, make any edits, and export directly to your EMR system.",
    image: "/images/export.png" // Replace with actual image path
  }
]

const AIScribePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-emerald-50 to-transparent dark:from-emerald-950/30 dark:to-transparent"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 dark:bg-emerald-900 dark:opacity-20"></div>
        <div className="absolute left-0 bottom-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 dark:bg-teal-900 dark:opacity-20"></div>
        <div className="pt-12 pb-16 px-6 md:px-10 max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-900 dark:text-emerald-300">
              AI-Powered Medical Scribe
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Create perfect clinical notes in minutes.
          </h1>

          {/* Cost savings text */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            (and save 2-4 hours per day in documentation time)
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <a href="https://app.getaxon.ai/signup">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 px-8 py-6 text-lg text-white"
              >
                <span className="mr-2">Get started</span>{" "}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 px-8 py-6 text-lg"
            >
              <Users className="mr-2 h-5 w-5" /> Refer a friend, Get $100
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-1 text-gray-600 dark:text-gray-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 mr-6">Early Access Feedback</span>
            <span className="flex items-center">
              <svg
                className="h-5 w-5 mr-2 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Loved by healthcare providers nationwide
            </span>
          </div>
        </div>
      </section>
      <div className="pb-20">
        <UserReviews rows={1} copy="See what they're saying" color="green" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Special offer banner */}
            <div className="mb-8 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-900 dark:text-emerald-300">
                  Become a Founding User to Axon & save 50% (3 spots left)
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-teal-600 dark:from-emerald-200 dark:to-teal-300 bg-clip-text text-transparent">
              Your Intelligent Medical Scribe Assistant
            </h1>
            <p className="text-xl text-emerald-900/80 dark:text-emerald-100/80 mb-8">
              Transform patient encounters with AI-powered documentation.
              Automatically generate accurate clinical notes while you focus on
              patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.getaxon.ai/signup">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white"
                  endIcon={<ArrowRight className="h-5 w-5" />}
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

      {/* Workflow Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 md:pt-32 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-green-800 dark:text-green-200 underline underline-offset-8">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow px-3 pt-3"
            >
              {/* Image area with pale background */}
              <div className="bg-emerald-50 dark:bg-emerald-900/30 aspect-video flex items-center justify-center p-3 rounded">
                <img
                  src={step.image}
                  alt={step.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Content area */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/#demo-video">
            <Button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-8 py-3 text-lg">
              See it in action <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <section className="pt-12 md:pt-24 relative">
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
      <section className="pt-20 md:pt-40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">
              Invite your whole team to collaborate.
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
