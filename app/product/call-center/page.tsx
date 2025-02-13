import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Phone,
  Calendar,
  Brain,
  Clock,
  Users,
  Headphones,
  MessageSquare,
  BarChart,
  CheckCircle,
  Clock8,
  Building,
  PhoneCall,
  Check,
  ArrowRight,
  Heart,
  Wand2,
  Sparkles,
  FileText,
  CreditCard,
  BrainCircuit,
  Shield
} from "lucide-react"
import { MdAutoAwesome } from "react-icons/md"
import CallMeForm from "@/components/client/forms/callMeForm"
import { Metadata } from "next"
import EMRIntegrations from "@/components/product/call-center/emr-integrations"

export const metadata: Metadata = {
  title: "Axon AI | Call Center",
  description:
    "Automate phone-based workflows with conversational AI. Free your healthcare team from phone duties with an AI assistant that handles routine calls, allowing your staff to focus on providing exceptional in-person patient care.",
  keywords:
    "AI, phone agent, healthcare call center, healthcare phone system, healthcare automation, medical AI phone, medical phone system, 24/7 support, appointment reminders, AI healthcare, AI medical, AI phone assistant, AI phone system, AI scheduling, automated phone system, automated scheduling, call center AI, call center automation, call center software, call center system, conversational AI, healthcare AI, medical AI, medical call center, scheduling AI"
}

const features = [
  {
    icon: Calendar,
    title: "Intelligent Scheduling",
    description:
      "AI-powered scheduling that understands complex availability patterns and patient preferences for optimal appointment booking."
  },
  {
    icon: Shield,
    title: "Insurance Verification",
    description:
      "Automated insurance eligibility checks and benefit verification to streamline the administrative process."
  },
  {
    icon: FileText,
    title: "Prescription Management",
    description:
      "Secure handling of refill requests with automated verification and routing to appropriate staff members."
  },
  {
    icon: Phone,
    title: "24/7 Availability",
    description:
      "Round-the-clock response to patient inquiries, ensuring no call goes unanswered, even after hours."
  },
  {
    icon: Clock,
    title: "Smart Reminders",
    description:
      "Proactive appointment reminders and follow-ups to reduce no-shows and improve patient engagement."
  },
  {
    icon: BrainCircuit,
    title: "Initial Screening",
    description:
      "AI-driven preliminary patient screening to gather essential information before staff involvement."
  },
  {
    icon: Heart,
    title: "Care Coordination",
    description:
      "Seamless coordination between patients, providers, and staff for improved care delivery."
  },
  {
    icon: CreditCard,
    title: "Payment Support",
    description:
      "Handle billing inquiries and payment-related questions with automated assistance available 24/7."
  },
  {
    icon: FileText,
    title: "Form Processing",
    description:
      "Intelligent processing of medical forms and documentation with automated data extraction."
  }
]

const FlipCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="relative h-24 w-full group [perspective:1000px]">
      <div className="absolute inset-0 w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <Card className="w-full h-full p-6 bg-white dark:bg-neutral-900 border border-blue-100/50 dark:border-blue-900/50 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="font-medium text-gray-900 dark:text-white">
                {title}
              </p>
            </div>
          </Card>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="w-full h-full p-6 bg-gradient-to-br from-blue-500 to-sky-500 dark:from-blue-600 dark:to-sky-600 text-white border-0 rounded-2xl">
            <div className="flex flex-col justify-center h-full">
              <p className="text-sm leading-relaxed text-white">
                {description}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

const CallCenterPage = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900">
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-32">
        {/* Background gradients with smoother transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-900"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-100/80 to-transparent dark:from-blue-950/50 dark:to-transparent"></div>

        {/* Decorative Elements with extended reach */}
        <div className="absolute right-0 top-20 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/40 to-sky-300/40 dark:from-blue-800/30 dark:to-sky-900/30 rounded-full blur-3xl opacity-60  transform translate-x-1/4"></div>
        <div className="absolute left-0 bottom-10 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/40 to-blue-300/60 dark:from-sky-800/30 dark:to-blue-900/30 rounded-full blur-3xl opacity-50  transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Additional subtle gradient for transition */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-neutral-950 dark:via-neutral-950/75 dark:to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative">
          {/* Rest of the hero content remains the same */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
                AI-Powered Phone Agent
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Automate phone based workflows with conversational AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Free your healthcare team from phone duties with an AI assistant
              that handles routine calls, allowing your staff to focus on
              providing exceptional in-person patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="https://app.getaxon.ai/signup">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white"
                >
                  Get Started
                </Button>
              </a>
              <a href="https://demo-app.getaxon.ai">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 hover:text-blue-600 dark:hover:bg-blue-950 dark:text-blue-400"
                  endIcon={<MdAutoAwesome size={14} />}
                >
                  Try Interactive Demo
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6">
              {/* Card contents remain the same */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                  <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Enhanced Care
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    More time with patients
                  </p>
                </div>
              </div>
            </Card>
            {/* Other cards remain the same */}
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Always available
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Staff Relief
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Reduce workload
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CallMeForm />
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-">
        <div className="absolute inset-0"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Empower Your Team with AI Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Transform your practice with intelligent automation that enhances
              both staff efficiency and patient care
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/30 to-sky-100/30 dark:from-blue-900/20 dark:to-sky-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  icon: Calendar,
                  title: "AI-Powered Scheduling",
                  description:
                    "Intelligent automation handles appointment booking, reducing staff workload by 70%",
                  gradient:
                    "from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900"
                },
                {
                  icon: Heart,
                  title: "Enhanced Patient Care",
                  description:
                    "More time for meaningful patient interactions, leading to better health outcomes",
                  gradient:
                    "from-blue-100 to-sky-100 dark:from-blue-900 dark:to-sky-900"
                },
                {
                  icon: CheckCircle,
                  title: "Streamlined Operations",
                  description:
                    "Automated workflows reduce costs while maintaining exceptional service quality",
                  gradient:
                    "from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900"
                }
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className="relative group backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-sky-100/50 dark:from-blue-900/30 dark:to-sky-900/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6`}
                    >
                      <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Benefits - Diagonal Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Supporting Your Healthcare Team
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive solutions that enhance every aspect of your practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: PhoneCall,
                title: "Intelligent Call Management",
                features: [
                  "Natural language understanding for patient inquiries",
                  "Smart call routing based on context",
                  "Real-time transcription and summarization",
                  "Seamless escalation to staff when needed"
                ]
              },
              {
                icon: Users,
                title: "Staff Empowerment",
                features: [
                  "Reduced administrative burden",
                  "Focus on high-value patient interactions",
                  "Improved work satisfaction",
                  "Better work-life balance"
                ]
              }
            ].map((section, index) => (
              <div
                key={section.title}
                className={`relative p-1 rounded-3xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900 group hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 1 ? "md:translate-y-16" : ""
                }`}
              >
                <Card className="p-8 rounded-[22px] bg-white dark:bg-neutral-900 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <section.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {section.title}
                      </h3>
                    </div>
                    <ul className="space-y-4 flex-grow">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1">
                            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasks Grid - Flowing Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Comprehensive Support
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI handles a wide range of daily tasks with precision and care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FlipCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics - Floating Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Transformative Results
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Real impact on your practice's efficiency and patient care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "60%",
                description: "Reduction in administrative phone time",
                delay: "0"
              },
              {
                metric: "75%",
                description: "Faster patient response times",
                delay: "100"
              },
              {
                metric: "40%",
                description: "Decrease in operational costs",
                delay: "200"
              }
            ].map((stat) => (
              <div
                key={stat.description}
                className="group relative transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-200/50 dark:from-sky-800/30 dark:to-blue-800/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Card className="relative p-8 text-center backdrop-blur-sm bg-white/90 dark:bg-neutral-900/90 border-0 rounded-3xl">
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
                    {stat.metric}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EMRIntegrations />
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-700 dark:to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empower Your Healthcare Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Give your staff the support they need to focus on what matters most
            - providing exceptional patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.getaxon.ai/signup">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-sky-50 dark:bg-gray-200 dark:hover:bg-gray-300"
              >
                Start Free Trial
              </Button>
            </a>

            <a href="https://demo-app.getaxon.ai">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-sky-500 dark:hover:bg-sky-600"
                endIcon={<MdAutoAwesome size={16} />}
              >
                Try Interactive Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallCenterPage
